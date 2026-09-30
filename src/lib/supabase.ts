/**
 * Klien Supabase super ringan berbasis fetch ke REST API (PostgREST).
 * Tanpa dependensi tambahan, sehingga bundle tetap kecil.
 *
 * Hanya memakai kredensial PUBLIK (anon / publishable key). Keamanan data
 * dijaga oleh Row Level Security di database (lihat supabase/schema.sql).
 * JANGAN pernah memakai service_role / secret key di kode frontend.
 */

// .trim() membuang spasi / baris baru yang tidak sengaja ikut tersalin ke .env
const SUPABASE_URL = (import.meta.env.PUBLIC_SUPABASE_URL as string | undefined)?.trim();
const SUPABASE_KEY = (import.meta.env.PUBLIC_SUPABASE_ANON_KEY as string | undefined)?.trim();

/**
 * Header autentikasi:
 * - Kunci "anon" lama berupa JWT (diawali "eyJ") → wajib dikirim di `apikey` DAN `Authorization`.
 * - Kunci "publishable" baru (diawali "sb_publishable_") → cukup di `apikey`.
 */
function authHeaders(): Record<string, string> {
  const key = SUPABASE_KEY!;
  return key.startsWith('eyJ') ? { apikey: key, Authorization: `Bearer ${key}` } : { apikey: key };
}

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

export class SupabaseError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'SupabaseError';
    this.status = status;
  }
}

async function send<T>(path: string, init: RequestInit = {}): Promise<{ data: T; headers: Headers }> {
  if (!isSupabaseConfigured) {
    throw new SupabaseError('Layanan belum dikonfigurasi.');
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const res = await fetch(`${SUPABASE_URL!.replace(/\/$/, '')}/rest/v1/${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        ...authHeaders(),
        'Content-Type': 'application/json',
        ...((init.headers as Record<string, string>) ?? {}),
      },
    });

    if (!res.ok) {
      // Tampilkan alasan dari Supabase di console browser untuk memudahkan pengecekan
      const detail = await res.text().catch(() => '');
      console.warn(`[Supabase] ${res.status} pada ${path}:`, detail);
      throw new SupabaseError(`Permintaan gagal (${res.status}).`, res.status);
    }

    const text = await res.text();
    return { data: (text ? JSON.parse(text) : undefined) as T, headers: res.headers };
  } catch (err) {
    if (err instanceof SupabaseError) throw err;
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new SupabaseError('Koneksi terlalu lama. Periksa internet Anda lalu coba lagi.');
    }
    throw new SupabaseError('Tidak dapat terhubung. Periksa internet Anda lalu coba lagi.');
  } finally {
    clearTimeout(timeout);
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  return (await send<T>(path, init)).data;
}

/* ---------- RSVP ---------- */

export type Attendance = 'hadir' | 'tidak_hadir';

export interface RsvpInput {
  name: string;
  attendance: Attendance;
  guest_count: number;
}

export function submitRsvp(data: RsvpInput) {
  return request<void>('rsvp', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify(data),
  });
}

/* ---------- Ucapan & Doa ---------- */

export interface GuestMessage {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export interface MessagePage {
  rows: GuestMessage[];
  /** jumlah seluruh ucapan (hanya diisi bila withCount = true) */
  total?: number;
}

/**
 * Ambil ucapan per halaman, terbaru lebih dulu.
 * Memakai "keyset pagination" (id < id terakhir), jauh lebih hemat daripada offset:
 * database tidak perlu melewati baris-baris yang sudah dimuat.
 */
export async function fetchMessagesPage(opts: { limit: number; beforeId?: number; withCount?: boolean }) {
  const params = new URLSearchParams({
    select: 'id,name,message,created_at',
    order: 'id.desc',
    limit: String(opts.limit),
  });
  if (opts.beforeId) params.set('id', `lt.${opts.beforeId}`);

  const { data, headers } = await send<GuestMessage[]>(`guest_messages?${params.toString()}`, {
    // count=exact hanya diminta sekali (halaman pertama) untuk menampilkan jumlah ucapan
    headers: opts.withCount ? { Prefer: 'count=exact' } : {},
  });

  // Content-Range: "0-2/57" → total 57
  const range = headers.get('content-range');
  const total = range && range.includes('/') ? Number(range.split('/')[1]) : undefined;
  return { rows: data ?? [], total: Number.isFinite(total) ? total : undefined } as MessagePage;
}

export function submitMessage(data: { name: string; message: string }) {
  return request<void>('guest_messages', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify(data),
  });
}