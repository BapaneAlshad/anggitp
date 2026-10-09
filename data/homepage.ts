type SectionCopy = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export const homepageSections = {
  results: {
    number: "01",
    eyebrow: "Selected Results / Credibility",
    title: "Beberapa konteks kerja yang pernah saya jalani.",
    description:
      "Angka berikut menunjukkan skala konteks organisasi dan proyek yang dikerjakan bersama, bukan klaim hasil individual tanpa konteks.",
  },
  problems: {
    number: "02",
    eyebrow: "Problems",
    title: "Bisnis sudah jalan. Tapi marketingnya masih terasa tanpa arah?",
    description:
      "Masalah marketing sering kali bukan karena bisnis tidak bergerak, tetapi karena prioritas dan sistemnya belum terlihat jelas.",
  },
  solutions: {
    number: "03",
    eyebrow: "Solutions",
    title: "Brand, marketing, dan digital yang lebih terarah.",
    description:
      "Tiga area yang membantu bisnis terlihat lebih jelas, berkomunikasi lebih konsisten, dan membangun aset digital yang berguna.",
  },
  framework: {
    number: "04",
    eyebrow: "Strategic Framework",
    title: "Saya tidak mulai dari konten. Saya mulai dari bisnisnya.",
    description:
      "Sebelum membuat campaign, konten, website, maupun iklan, pahami terlebih dahulu bisnis, pelanggan, positioning, dan offer.",
  },
  about: {
    number: "05",
    eyebrow: "About Anggit",
    title:
      "Melihat bisnis sebagai satu sistem, bukan kumpulan aktivitas terpisah.",
  },
  portfolio: {
    number: "06",
    eyebrow: "Featured Case Studies",
    title: "Pilihan konteks kerja, proses, dan kontribusi.",
    description:
      "Case study lengkap akan terus dilengkapi saat detail dan dokumentasi proyek yang terverifikasi siap dipublikasikan.",
  },
  services: {
    number: "07",
    eyebrow: "Services",
    title:
      "Bantuan yang disesuaikan dengan bagian bisnis yang paling perlu dibenahi.",
    description:
      "Mulai dari mencari arah, merapikan brand, sampai membangun aset dan aktivitas marketing yang dapat dijalankan.",
  },
  process: {
    number: "08",
    eyebrow: "Working Process",
    title:
      "Proses sederhana untuk menentukan apa yang benar-benar dibutuhkan.",
  },
  packages: {
    number: "09",
    eyebrow: "Packages",
    title: "Titik awal untuk memperkirakan bentuk kerja sama.",
    description:
      "Pricing bukan tujuan akhirnya. Scope tetap disusun berdasarkan kondisi dan prioritas bisnis.",
  },
  testimonials: {
    number: "10",
    eyebrow: "Testimonials",
    title: "Cerita kerja sama harus datang dari pengalaman yang nyata.",
    description:
      "Area ini sengaja belum diisi dengan identitas, perusahaan, atau pernyataan client yang dibuat-buat.",
  },
  insight: {
    number: "11",
    eyebrow: "Insight",
    title:
      "Catatan praktis tentang marketing, brand, dan pertumbuhan bisnis.",
    description:
      "Artikel dikelola melalui data lokal terstruktur dan dapat dikembangkan ke MDX saat kebutuhan editorial bertambah.",
  },
  faq: {
    number: "12",
    eyebrow: "FAQ",
    title: "Pertanyaan yang sering muncul sebelum memulai.",
  },
} as const satisfies Record<string, SectionCopy>;

export const finalCtaContent = {
  number: "13",
  eyebrow: "Start a conversation",
  title:
    "Punya bisnis yang sudah berjalan tapi marketingnya masih terasa belum punya arah?",
  description:
    "Ceritakan kondisi bisnis Anda. Kita lihat bagian mana yang paling penting untuk dibenahi terlebih dahulu.",
  primaryCta: "Ceritakan Bisnis Anda",
  secondaryCta: "Email Saya",
} as const;
