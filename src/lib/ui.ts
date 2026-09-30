/** Utilitas kecil yang dipakai beberapa komponen di sisi klien. */

export function cleanText(value: FormDataEntryValue | null): string {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

export function cleanMultiline(value: FormDataEntryValue | null): string {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' });

export function timeAgo(iso: string): string {
  const diff = (new Date(iso).getTime() - Date.now()) / 1000;
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];
  for (const [unit, seconds] of units) {
    if (Math.abs(diff) >= seconds) return rtf.format(Math.round(diff / seconds), unit);
  }
  return 'baru saja';
}

let toastTimer: number | undefined;

export function showToast(message: string) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove('is-visible'), 2600);
}

export function setStatus(
  el: HTMLElement | null,
  message: string,
  tone: 'error' | 'success' | 'info' = 'info',
) {
  if (!el) return;
  el.textContent = message;
  el.dataset.tone = tone;
  el.hidden = !message;
}
