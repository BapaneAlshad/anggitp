import type { Project } from "@/types/content";

export const javaTeaProject = {
  slug: "java-tea",
  number: "02",
  name: "Java Tea",
  category: null,
  role: null,
  scope: [],
  summary:
    "Detail case study Java Tea akan dilengkapi setelah informasi proyek terverifikasi tersedia.",
  result:
    "70+ outlet menggambarkan skala organisasi yang menjadi konteks kontribusi Anggit, bukan klaim hasil individual.",
  image: {
    src: "/images/project-java-tea-placeholder.svg",
    alt: "Placeholder visual case study Java Tea",
  },
  hasCompleteDetails: false,
  caseStudy: {
    overview: {
      status: "todo",
      note: "Overview proyek belum memiliki narasi terverifikasi untuk dipublikasikan.",
    },
    context: {
      status: "verified",
      paragraphs: [
        "70+ outlet menunjukkan skala organisasi yang menjadi konteks kontribusi Anggit. Angka ini bukan klaim hasil individual.",
      ],
    },
    challenge: {
      status: "todo",
      note: "Tantangan bisnis belum memiliki data terverifikasi untuk dipublikasikan.",
    },
    myRole: {
      status: "todo",
      note: "Peran dan tanggung jawab Anggit belum didokumentasikan secara terverifikasi.",
    },
    scope: {
      status: "todo",
      note: "Scope pekerjaan belum tersedia untuk publikasi.",
    },
    approach: {
      status: "todo",
      note: "Pendekatan strategis belum tersedia untuk publikasi.",
    },
    execution: {
      status: "todo",
      note: "Detail implementasi dan timeline belum tersedia untuk publikasi.",
    },
    result: {
      status: "verified",
      paragraphs: [
        "Konteks kerja berada dalam organisasi dengan skala 70+ outlet. Belum tersedia data yang dapat mengatribusikan pertumbuhan tersebut sebagai hasil individual Anggit.",
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
