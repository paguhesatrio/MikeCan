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
  couple: 'Candra & Mika',
  dateISO: eventDateISO,
  dateLabel: 'Sabtu, 21 November 2026',
  dateShort: '21.11.2026',

  site: {
    title: 'Candra & Mika',
    description:
      'Dengan sukacita kami mengundang Anda untuk hadir dan mendoakan pernikahan Candra & Mika pada Sabtu, 21 November 2026.',
  },

  /**
   * Foto prewedding sebagai LATAR setiap bagian.
   * Gunakan foto potret (disarankan 1080 × 1920 px, JPG/WebP < 400 KB).
   * Satu foto boleh dipakai di beberapa bagian.
   */
  photos: {
    side: '/images/bg.jpg',       // foto statis di samping kolom (desktop)
    cover: '/images/main/7.png',     // sampul + pratinjau link + tengah piringan musik
    opening: '/images/main/9.jpg', // hitung mundur
    verse: '/images/prewed-closing.svg',   // ayat
    couple: '/images/main/2.png', // hitung mundur
    story: '/images/main/3.png', // hitung mundur
    events: '/images/main/4.png',    // rangkaian acara
    location: '/images/main/8.png',// lokasi
    rsvp: '/images/prewed-side.svg',       // konfirmasi kehadiran
    gift: '/images/main/6.png',    // tanda kasih
    wishes: '/images/main/7.png',    // ucapan & doa
    closing: '/images/main/5.png', // penutup
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
    cover: '/images/main/7.png', // foto kecil di tengah piringan hitam
    volume: 0.4,
  },

  /** Untuk tombol "Simpan Tanggal" (Google Calendar), waktu WIB */
  calendar: {
    title: 'Pernikahan Candra & Mika',
    start: '20261212T100000',
    end: '20261212T210000',
    location: 'Gereja Kasih Karunia, Jl. Melati Raya No. 12, Kebayoran Baru, Jakarta Selatan',
  },

  hero: {
    defaultGuest: 'Tamu Undangan',
    message:
      'Demikianlah Mereka Bukan Lagi Dua, Melainkan Satu. Karena Itu, Apa Yang Telah Dipersatukan Allah, Tidak Boleh Diceraikan Manusia.',
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
    childOrder: 'Putra Keempat dari',
    father: 'Bapak Anjar Budi Kiswono',
    mother: 'Ibu Ropini',
    description:
      'Seorang PNS Sukses Di Kabupaten Landak',
    photo: '/images/pengantin/2.png',
    instagram: 'cancandrak',
  } satisfies Person,

  groom: {
    role: 'Mempelai Wanita',
    nickname: 'Mika',
    fullName: 'Mika Maya Lestari',
    childOrder: 'Putri Kedua dari',
    father: 'Bapak Pelam S.',
    mother: 'Ibu Amisna',
    description:
      'Menejer Keuangan CU BONAVENTURA di PALOH, dan kini bersiap Mengantur keuangan Rumah bersama Candra.',
    photo: '/images/pengantin/1.png',
    instagram: 'mikamayalestari',
  } satisfies Person,

  story: {
    // photo: '/images/story.svg',
    photoAlt: 'Mika dan Candra berjalan bergandengan tangan',
    lead:
      'Kami bertemu di tempat yang sederhana, lalu belajar bahwa kasih bertumbuh lewat hal-hal kecil yang dilakukan dengan setia.',
    leads: 'Dua hati yang tak sengaja bertemu, lalu perlahan menemukan alasan untuk tetap bersama.',
    milestones: [
      {
        date: 'Maret 2024',
        title: 'Awal Bertemu',
        text: 'Awal kisah kami bermula pada Maret 2024. Pertemuan sederhana tersebut menjadi titik awal saling mengenal dan bertukar cerita satu sama lain.',
      },
      {
        date: 'Desember 2024',
        title: 'Menjalin Kasih',
        text: 'Berawal dari pesan singkat yang  terus menerus kami kirimkan dan rasa nyaman yang makin tumbuh, kami memberanikan diri untuk saling mengungkapkan perasaan. Tepat pada 28 Desember 2024, kami meresmikan komitmen untuk melangkah bersama sebagai pasangan kekasih.',
      },
      {
        date: 'Februari 2026',
        title: 'Menjadi Kita',
        text: 'Berbekal perjalanan indah bersama selama lebih dari satu tahun, kami melangkah ke jenjang yang lebih serius. Pada 15 Februari 2026, ditandai dengan acara pertunangan yang didukung serta disaksikan oleh keluarga, kami memperteguh niat untuk saling mengikat janji setia.',
      },
      {
        date: 'November 2026 - Selamanya',
        title: 'Selamanya',
        text: 'Melalui berbagai proses kedewasaan, saling memahami, serta restu penuh dari kedua orang tua dan keluarga besar, kami memutuskan membangun keluarga kecil sebagai Suami & Istri, melalui tekad dan ketulusan hati, kami siap mengikat janji suci dalam bahtera pernikahan yang penuh kasih',
      },
    ],
  },

  events: [
    {
      id: 'pemberkatan',
      title: 'Pemberkatan Pernikahan',
      dateLabel: 'Sabtu, 21 November 2026',
      time: '08.00 WIB – Selesai',
      venue: 'Gereja St Fransiskus Asisi Singkawang',
      address: 'Jl. P. Diponegoro No.1, Pasiran, Singkawang',
      mapsQuery: 'Gereja Katolik Paroki Santo Fransiskus Assisi, Singkawang',
    },
    {
      id: 'resepsi',
      title: 'Resepsi',
      dateLabel: 'Sabtu, 21 November 2026',
      time: '12.00 – 16.00 WIB',
      venue: 'Taman Rekreasi Teratai Indah',
      address: 'Jl. Burhani No.5, Pasiran, Kota Singkawang',
      mapsQuery: 'Taman Rekreasi Teratai Indah',
    },
  ] satisfies WeddingEvent[],

  gift: {
    intro:
      'Doa dan kehadiran Anda adalah hadiah terindah bagi kami. Bila Anda ingin memberikan tanda kasih, Anda dapat mengirimkannya melalui rekening berikut.',
    accounts: [
      { bank: 'Mandiri', number: '1460022403971', holder: 'Mika Maya Lestari' },
      { bank: 'BCA', number: '8170911173', holder: 'Candra Kiswantoro' },
    ],
    // Nomor WhatsApp dalam format internasional tanpa tanda + atau spasi.
    whatsapp: '6282154392616',
    whatsappMessage:
      'Halo Candra & Mika, saya [nama] ingin mengonfirmasi bahwa saya telah mengirimkan tanda kasih untuk pernikahan kalian. God Bless You.',
  },

  closing: {
    message:
      'Merupakan suatu kehormatan dan sukacita bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.',
    signature: 'Kami yang berbahagia,',
    families: 'Keluarga Anjar Budi Kiswono & Keluarga Pelam S.',
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

export const wedding1 = {
  // ...data lain
  photos: {
    background: '/images/main/8.png',
    gallery: [
      '/images/galeri/1.jpg',
      '/images/galeri/2.jpg',
      '/images/galeri/3.jpg',
      '/images/galeri/4.jpg',
      '/images/galeri/5.jpg',
      '/images/galeri/6.jpg',
      '/images/galeri/7.jpg',
      '/images/galeri/8.jpg',
    ],
  },
};
