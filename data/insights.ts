import type { Insight, InsightCategory } from "@/types/content";

export const insightCategories = [
  "Marketing",
  "Branding",
  "Business",
  "F&B",
  "Website",
  "Digital Ads",
] as const satisfies readonly InsightCategory[];

export const insights: readonly Insight[] = [
  {
    slug: "kenapa-cafe-ramai-saat-opening-tapi-sepi-setelah-beberapa-bulan",
    title: "Kenapa Cafe Ramai Saat Opening Tapi Sepi Setelah Beberapa Bulan?",
    description:
      "Catatan draft tentang menjaga arah promosi, pengalaman pelanggan, dan alasan untuk kembali setelah momentum pembukaan.",
    category: "F&B",
    publishedAt: null,
    readingTime: null,
    status: "draft",
    content: [
      {
        type: "callout",
        title: "Status konten",
        text: "Artikel ini masih berupa draft editorial. Isinya tidak menggunakan data atau hasil project client sebagai contoh.",
      },
      {
        type: "heading",
        text: "Opening adalah momentum, bukan keseluruhan strategi",
      },
      {
        type: "paragraph",
        text: "Saat mengevaluasi traffic setelah opening, fokus pembahasan perlu bergerak dari keramaian awal menuju alasan pelanggan memahami brand, mencoba produk, dan mempertimbangkan untuk kembali.",
      },
      {
        type: "heading",
        text: "Pertanyaan yang perlu diperiksa",
      },
      {
        type: "list",
        items: [
          "Apakah pelanggan memahami alasan utama memilih bisnis ini?",
          "Apakah promosi setelah opening sudah direncanakan, bukan dilakukan spontan?",
          "Apakah komunikasi brand konsisten di outlet dan channel digital?",
          "Apakah bisnis memiliki cara sederhana untuk mengevaluasi aktivitas marketing?",
        ],
      },
      {
        type: "heading",
        text: "Mulai dari prioritas yang paling dekat dengan bisnis",
      },
      {
        type: "paragraph",
        text: "Tidak semua masalah harus dijawab dengan lebih banyak konten atau iklan. Periksa lebih dahulu kondisi bisnis, pelanggan, positioning, offer, lalu tentukan aktivitas marketing dan promosi yang realistis untuk dijalankan.",
      },
    ],
    relatedSlugs: [
      "cara-menentukan-budget-marketing-umkm",
      "kesalahan-branding-yang-sering-dilakukan-umkm",
    ],
  },
  {
    slug: "cara-menentukan-budget-marketing-umkm",
    title: "Cara Menentukan Budget Marketing UMKM",
    description:
      "Kerangka draft untuk melihat budget marketing berdasarkan kondisi bisnis, prioritas, channel, dan kemampuan eksekusi.",
    category: "Marketing",
    publishedAt: null,
    readingTime: null,
    status: "draft",
    content: [
      {
        type: "callout",
        title: "Status konten",
        text: "Artikel ini masih berupa draft dan tidak memberikan angka persentase baku untuk semua bisnis.",
      },
      {
        type: "heading",
        text: "Mulai dari tujuan, bukan angka yang terlihat ideal",
      },
      {
        type: "paragraph",
        text: "Budget marketing sebaiknya dibahas bersama tujuan yang ingin dicapai, kondisi bisnis saat ini, dan aktivitas yang benar-benar mampu dijalankan oleh tim.",
      },
      {
        type: "heading",
        text: "Lima hal yang perlu dipetakan",
      },
      {
        type: "list",
        items: [
          "Masalah bisnis yang paling penting untuk dibenahi.",
          "Pelanggan yang ingin dijangkau.",
          "Offer yang akan dikomunikasikan.",
          "Channel dan bentuk promosi yang digunakan.",
          "Cara monitoring dan evaluasi yang dapat dilakukan.",
        ],
      },
      {
        type: "heading",
        text: "Budget perlu mengikuti prioritas",
      },
      {
        type: "paragraph",
        text: "Jika fondasi brand dan offer belum jelas, menambah budget promosi belum tentu menjadi pekerjaan pertama. Urutkan kebutuhan agar biaya digunakan untuk bagian yang paling relevan dengan kondisi bisnis.",
      },
    ],
    relatedSlugs: [
      "kesalahan-branding-yang-sering-dilakukan-umkm",
      "kenapa-cafe-ramai-saat-opening-tapi-sepi-setelah-beberapa-bulan",
    ],
  },
  {
    slug: "kesalahan-branding-yang-sering-dilakukan-umkm",
    title: "Kesalahan Branding yang Sering Dilakukan UMKM",
    description:
      "Catatan draft tentang konsistensi visual, komunikasi, positioning, dan hubungan branding dengan kebutuhan bisnis.",
    category: "Branding",
    publishedAt: null,
    readingTime: null,
    status: "draft",
    content: [
      {
        type: "callout",
        title: "Status konten",
        text: "Artikel ini masih berupa draft edukasi dan tidak menggunakan identitas atau data client sebagai contoh.",
      },
      {
        type: "heading",
        text: "Branding bukan hanya mengganti tampilan",
      },
      {
        type: "paragraph",
        text: "Arah visual perlu terhubung dengan positioning, komunikasi, pelanggan, dan offer. Tampilan yang rapi membantu ketika pesan bisnisnya juga jelas dan konsisten.",
      },
      {
        type: "heading",
        text: "Pola masalah yang perlu diperiksa",
      },
      {
        type: "list",
        items: [
          "Desain berubah-ubah tanpa arah visual yang disepakati.",
          "Komunikasi brand berbeda di setiap channel.",
          "Positioning sulit dipahami calon pelanggan.",
          "Promotional assets dibuat terpisah dari kebutuhan campaign.",
        ],
      },
      {
        type: "heading",
        text: "Rapikan dari keputusan paling dasar",
      },
      {
        type: "paragraph",
        text: "Mulai dengan memahami bisnis dan pelanggan, lalu tentukan positioning, arah komunikasi, dan sistem visual yang dapat digunakan secara konsisten oleh tim.",
      },
    ],
    relatedSlugs: [
      "cara-menentukan-budget-marketing-umkm",
      "kenapa-cafe-ramai-saat-opening-tapi-sepi-setelah-beberapa-bulan",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function getRelatedInsights(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    const insight = getInsight(slug);
    return insight ? [insight] : [];
  });
}

export function getInsightsByCategory(category: InsightCategory) {
  return insights.filter((insight) => insight.category === category);
}
