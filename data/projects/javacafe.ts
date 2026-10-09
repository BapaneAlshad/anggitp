import type { Project } from "@/types/content";

export const javacafeProject = {
  slug: "javacafe",
  number: "01",
  name: "Javacafe",
  category: "Coffee & Partnership Business",
  role: "Kontribusi dalam proses kerja tim dan organisasi.",
  scope: [
    "Marketing Strategy",
    "Brand Development",
    "Campaign",
    "Digital",
    "Website",
  ],
  summary:
    "Konteks kerja lintas marketing, brand, campaign, digital, dan website untuk bisnis coffee & partnership.",
  result:
    "125+ outlet menggambarkan skala organisasi yang menjadi konteks kontribusi Anggit, bukan klaim hasil individual.",
  image: {
    src: "/images/project-javacafe-placeholder.svg",
    alt: "Placeholder visual case study Javacafe",
  },
  hasCompleteDetails: false,
  caseStudy: {
    overview: {
      status: "verified",
      paragraphs: [
        "Javacafe merupakan konteks kerja di kategori Coffee & Partnership Business yang melibatkan area marketing, brand development, campaign, digital, dan website.",
      ],
    },
    context: {
      status: "verified",
      paragraphs: [
        "125+ outlet menunjukkan skala organisasi yang menjadi konteks kontribusi Anggit. Angka ini bukan klaim hasil individual.",
      ],
    },
    challenge: {
      status: "todo",
      note: "Tantangan bisnis belum memiliki data terverifikasi untuk dipublikasikan.",
    },
    myRole: {
      status: "verified",
      paragraphs: ["Kontribusi dalam proses kerja tim dan organisasi."],
    },
    scope: {
      status: "verified",
      items: [
        "Marketing Strategy",
        "Brand Development",
        "Campaign",
        "Digital",
        "Website",
      ],
    },
    approach: {
      status: "todo",
      note: "Pendekatan strategis per proyek belum didokumentasikan secara terverifikasi.",
    },
    execution: {
      status: "todo",
      note: "Detail implementasi dan timeline belum tersedia untuk publikasi.",
    },
    result: {
      status: "verified",
      paragraphs: [
        "Konteks kerja berada dalam organisasi dengan skala 125+ outlet. Belum tersedia data yang dapat mengatribusikan pertumbuhan tersebut sebagai hasil individual Anggit.",
      ],
    },
    visualDocumentation: {
      status: "todo",
      note: "Visual yang tampil saat ini adalah placeholder development, bukan dokumentasi proyek final.",
    },
    insight: {
      status: "todo",
      note: "Insight proyek akan ditulis setelah proses dan hasil dapat diverifikasi.",
    },
    relatedWork: {
      status: "todo",
      note: "Relasi dengan project lain belum ditentukan berdasarkan data proyek.",
    },
  },
} as const satisfies Project;
