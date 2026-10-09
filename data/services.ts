import type { Service } from "@/types/content";

export const serviceWorkingProcess = [
  {
    number: "01",
    title: "Ceritakan Bisnis",
    description: "Jelaskan kondisi, kebutuhan, dan kendala bisnis saat ini.",
  },
  {
    number: "02",
    title: "Identifikasi Prioritas",
    description: "Tentukan bagian paling penting untuk dibenahi terlebih dahulu.",
  },
  {
    number: "03",
    title: "Tentukan Approach",
    description: "Susun rekomendasi berdasarkan kondisi, kebutuhan, dan budget.",
  },
  {
    number: "04",
    title: "Eksekusi",
    description: "Sepakati scope dan bentuk kerja sama sebelum pekerjaan dimulai.",
  },
] as const;

export const services = [
  {
    slug: "bedah-brand-marketing-bisnis",
    number: "01",
    title: "Bedah Brand & Marketing Bisnis",
    description:
      "Untuk bisnis yang sudah berjalan tetapi masih bingung menentukan masalah dan prioritas marketing.",
    audience:
      "Pemilik bisnis yang membutuhkan pandangan menyeluruh sebelum menentukan aktivitas marketing berikutnya.",
    problems: [
      "Belum tahu masalah marketing yang perlu dibenahi lebih dahulu.",
      "Aktivitas promosi berjalan tanpa prioritas yang jelas.",
      "Membutuhkan rekomendasi yang realistis untuk kondisi bisnis saat ini.",
    ],
    scope: [
      "Review kondisi",
      "Identifikasi masalah",
      "Rekomendasi",
      "Action plan",
    ],
    outputs: [
      "Ringkasan kondisi yang dibahas",
      "Daftar masalah dan prioritas awal",
      "Rekomendasi serta action plan awal",
    ],
  },
  {
    slug: "rapikan-brand",
    number: "02",
    title: "Rapikan Brand",
    description:
      "Membantu tampilan dan komunikasi bisnis terasa lebih konsisten, jelas, dan mudah dipercaya.",
    audience:
      "Bisnis yang sudah memiliki produk atau layanan tetapi tampilan dan komunikasinya belum terasa konsisten.",
    problems: [
      "Arah visual sering berubah.",
      "Komunikasi brand belum jelas dan konsisten.",
      "Positioning bisnis belum mudah dipahami calon pelanggan.",
    ],
    scope: [
      "Arah visual",
      "Komunikasi",
      "Positioning",
      "Moodboard",
      "Promotional assets",
    ],
    outputs: [
      "Arah visual dan moodboard",
      "Arah komunikasi dan positioning",
      "Promotional assets sesuai scope yang disepakati",
    ],
  },
  {
    slug: "content-strategy",
    number: "03",
    title: "Content Strategy",
    description:
      "Menyusun arah konten agar bisnis tidak lagi sekadar posting tanpa tujuan yang jelas.",
    audience:
      "Bisnis yang sudah aktif membuat konten tetapi membutuhkan arah, prioritas, dan ritme komunikasi yang lebih jelas.",
    problems: [
      "Konten dibuat tanpa arah yang konsisten.",
      "Kesulitan menentukan ide dan content pillar.",
      "Aktivitas konten belum terhubung dengan campaign bisnis.",
    ],
    scope: [
      "Content direction",
      "Ide konten",
      "Content pillar",
      "Kalender konten",
      "Campaign",
    ],
    outputs: [
      "Arah dan content pillar",
      "Ide serta kalender konten",
      "Arah campaign sesuai kebutuhan bisnis",
    ],
  },
  {
    slug: "website-landing-page",
    number: "04",
    title: "Website / Landing Page",
    description:
      "Membangun digital presence yang membantu calon pelanggan memahami bisnis dan mengambil tindakan.",
    audience:
      "Bisnis yang membutuhkan website atau landing page untuk menjelaskan penawaran dan mengarahkan pengunjung ke tindakan yang jelas.",
    problems: [
      "Belum memiliki digital presence yang profesional.",
      "Informasi bisnis sulit dipahami calon pelanggan.",
      "Belum memiliki alur dan CTA yang jelas di website.",
    ],
    scope: [
      "Information architecture",
      "UI/UX",
      "Copywriting",
      "CTA",
      "Basic SEO",
    ],
    outputs: [
      "Struktur informasi halaman",
      "Desain UI/UX dan copy halaman",
      "CTA serta basic SEO sesuai scope",
    ],
  },
  {
    slug: "digital-advertising",
    number: "05",
    title: "Digital Advertising",
    description:
      "Menyiapkan aktivitas iklan digital dengan target, materi, dan evaluasi yang lebih terarah.",
    audience:
      "Bisnis yang ingin menjalankan iklan digital dengan target, creative, dan evaluasi yang lebih terstruktur.",
    problems: [
      "Target audience iklan belum jelas.",
      "Campaign dan materi iklan belum terarah.",
      "Aktivitas iklan belum dimonitor dan dievaluasi secara konsisten.",
    ],
    scope: [
      "Target audience",
      "Campaign",
      "Creative",
      "Monitoring",
      "Evaluation",
    ],
    outputs: [
      "Arah target audience dan campaign",
      "Arah creative sesuai campaign",
      "Monitoring dan evaluasi sesuai scope",
    ],
  },
  {
    slug: "marketing-partnership",
    number: "06",
    title: "Marketing Partnership",
    description:
      "Pendampingan rutin bagi bisnis yang membutuhkan partner diskusi dan eksekusi marketing.",
    audience:
      "Bisnis yang membutuhkan partner rutin untuk berdiskusi, menyusun prioritas, dan menjalankan aktivitas marketing.",
    problems: [
      "Tidak memiliki partner diskusi marketing secara rutin.",
      "Campaign dan aktivitas marketing membutuhkan review berkala.",
      "Membutuhkan rekomendasi yang mengikuti kondisi bisnis.",
    ],
    scope: [
      "Strategy",
      "Campaign",
      "Review",
      "Brainstorming",
      "Reporting",
      "Recommendation",
    ],
    outputs: [
      "Arah strategy dan campaign",
      "Sesi review dan brainstorming",
      "Reporting serta recommendation sesuai scope kerja sama",
    ],
  },
] as const satisfies readonly Service[];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
