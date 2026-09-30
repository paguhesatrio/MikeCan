/**
 * Semua konten undangan ada di sini.
 * Ganti nama, tanggal, alamat, rekening, dan foto sesuai data sebenarnya.
 * Tidak perlu menyentuh komponen untuk mengubah isi undangan.
 */

export interface Person {
  role: 'Mempelai Pria' | 'Mempelai Wanita';
  nickname: string;
  fullName: string;
  childOrder: string;
  father: string;
  mother: string;
  description: string;
  photo: string;
  instagram?: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  dateLabel: string;
  time: string;
  venue: string;
  address: string;
  mapsQuery: string;
}

const eventDateISO = '2026-11-21T10:00:00+07:00';

export const wedding = {
  couple: 'Mika & Candra',
  dateISO: eventDateISO,
  dateLabel: 'Sabtu, 21 November 2026',
  dateShort: '21.11.2026',

  site: {
    title: 'Mika & Candra',
    description:
      'Dengan sukacita kami mengundang Anda untuk hadir dan mendoakan pernikahan Mika & Candra pada Sabtu, 21 November 2026.',
  },

  /**
   * Foto prewedding sebagai LATAR setiap bagian.
   * Gunakan foto potret (disarankan 1080 × 1920 px, JPG/WebP < 400 KB).
   * Satu foto boleh dipakai di beberapa bagian.
   */
  photos: {
    side: '/images/prewed-side.svg',       // foto statis di samping kolom (desktop)
    cover: '/images/prewed-cover.svg',     // sampul + pratinjau link + tengah piringan musik
    opening: '/images/prewed-opening.svg', // hitung mundur
    verse: '/images/prewed-closing.svg',   // ayat
    couple: '/images/prewed-side.svg',     // mempelai
    story: '/images/prewed-opening.svg',   // cerita
    events: '/images/prewed-cover.svg',    // rangkaian acara
    location: '/images/prewed-closing.svg',// lokasi
    rsvp: '/images/prewed-side.svg',       // konfirmasi kehadiran
    gift: '/images/prewed-opening.svg',    // tanda kasih
    wishes: '/images/prewed-cover.svg',    // ucapan & doa
    closing: '/images/prewed-closing.svg', // penutup
    alt: 'Foto prewedding Mika dan Candra',
  },

  /** Letak kolom undangan di desktop: 'right' (foto di kiri) atau 'left' (foto di kanan). */
  desktopPanel: 'left' as 'right' | 'left',

  /**
   * Musik latar. Taruh file lagu di public/music/ lalu sesuaikan src.
   * Lagu mulai diputar saat tamu menekan "Buka Undangan".
   * Bila file tidak ditemukan, tombol piringan hitam otomatis disembunyikan.
   */
  music: {
    src: '/music/lagu.mp3',
    cover: '/images/prewed-cover.svg', // foto kecil di tengah piringan hitam
    volume: 0.6,
  },

  /** Untuk tombol "Simpan Tanggal" (Google Calendar), waktu WIB */
  calendar: {
    title: 'Pernikahan Mika & Candra',
    start: '20261212T100000',
    end: '20261212T210000',
    location: 'Gereja Kasih Karunia, Jl. Melati Raya No. 12, Kebayoran Baru, Jakarta Selatan',
  },

  hero: {
    defaultGuest: 'Tamu Undangan',
    message:
      'Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.',
    reference: 'Matius 19:6',
  },

  //Tidak Di Pakai ===========
  verse: {
    text: 'Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.',
    reference: 'Matius 19:6',
  },
  //===========================

  intro:
    'Atas kasih karunia Tuhan yang telah mempertemukan kami, dengan rendah hati kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam kebaktian pemberkatan dan resepsi pernikahan kami.',


  // Tukar isi objek bila penempatan nama perlu disesuaikan.
  bride: {
    role: 'Mempelai Pria',
    nickname: 'Candra',
    fullName: 'Candra Kiswantoro',
    childOrder: 'Putra kedua dari',
    father: 'Bapak ANJAR',
    mother: 'Ibu ANJAR',
    description:
      'Seorang PNS Sukses Di Kabupaten Landak',
    photo: '/images/bride.svg',
    instagram: 'cancandrak',
  } satisfies Person,

  groom: {
    role: 'Mempelai Wanita',
    nickname: 'Mika',
    fullName: 'Mika CU BONAVENTURA',
    childOrder: 'Putri pertama dari',
    father: 'Bapak Stefanus Santoso',
    mother: 'Ibu Ruth Handayani',
    description:
      'Menejer Keuangan CU BONAVENTURA di PALOH, dan kini bersiap Mengantur keuangan Rumah bersama Candra.',
    photo: '/images/groom.svg',
    instagram: 'mikamayalestari',
  } satisfies Person,

  story: {
    photo: '/images/story.svg',
    photoAlt: 'Mika dan Candra berjalan bergandengan tangan',
    lead:
      'Kami bertemu di tempat yang sederhana, lalu belajar bahwa kasih bertumbuh lewat hal-hal kecil yang dilakukan dengan setia.',
    leads:
      'Candra Galau Suka Minum Amer',
    milestones: [
      {
        date: 'Agustus 2019',
        title: 'Pertemuan pertama',
        text: 'Berkenalan di CU BONAVENTURA CIEEEEEEEEEEEE',
      },
      {
        date: 'Februari 2021',
        title: 'Memulai hubungan',
        text: 'Setelah Memutuskan untuk Pacaran Kemudian Candra PNS DAN LDR dengan Mika #huffffffttttt',
      },
      {
        date: 'Juni 2025',
        title: 'Lamaran',
        text: 'Di hadapan kedua keluarga, Mika meminta Candra menjadi teman hidupnya. Candra menjawab ya.',
      },
      {
        date: 'November 2026',
        title: 'Hari pernikahan',
        text: 'Kami mengikat janji di hadapan Tuhan, keluarga, dan sahabat yang kami kasihi.',
      },
    ],
  },

  events: [
    {
      id: 'pemberkatan',
      title: 'Pemberkatan Pernikahan',
      dateLabel: 'Sabtu, 21 November 2026',
      time: '09.00 – 11.00 WIB',
      venue: 'Gereja katolik St fransiskus asisi Singkawang',
      address: 'Jl. P. Diponegoro No.1, Pasiran, Singkawang',
      mapsQuery: 'Gereja Katolik Paroki Santo Fransiskus Assisi, Singkawang',
    },
    {
      id: 'resepsi',
      title: 'Resepsi',
      dateLabel: 'Sabtu, 21 November 2026',
      time: '12.00 – 17.00 WIB',
      venue: 'Taman Rekreasi Teratai Indah',
      address: 'Jl. Burhani No.5, Pasiran, Kota Singkawang',
      mapsQuery: 'Taman Rekreasi Teratai Indah',
    },
  ] satisfies WeddingEvent[],

  gift: {
    intro:
      'Doa dan kehadiran Anda adalah hadiah terindah bagi kami. Bila Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui rekening berikut.',
    accounts: [
      { bank: 'BCA', number: '1234567890', holder: 'Mika Maya Lestari' },
      { bank: 'Mandiri', number: '1370012345678', holder: 'Candra Kiswantoro' },
    ],
    // Nomor WhatsApp dalam format internasional tanpa tanda + atau spasi.
    whatsapp: '6282154392616',
    whatsappMessage:
      'Halo Mika & Candra, saya [nama] ingin mengonfirmasi bahwa saya telah mengirimkan tanda kasih untuk pernikahan kalian. Tuhan Yesus memberkati.',
  },

  closing: {
    message:
      'Merupakan suatu kehormatan dan sukacita bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
    signature: 'Kami yang berbahagia,',
    families: 'Keluarga Santoso & Keluarga Kristanto',
  },
};

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const mapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const calendarUrl = () => {
  const c = wedding.calendar;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: c.title,
    dates: `${c.start}/${c.end}`,
    ctz: 'Asia/Jakarta',
    location: c.location,
    details: `Undangan pernikahan ${wedding.couple}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
