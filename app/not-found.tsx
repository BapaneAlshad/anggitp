import { Container, EditorialGrid, Footer, Header } from "@/components/layout";
import { ArrowLink, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="konten-utama"
        tabIndex={-1}
        className="focus:outline-none"
      >
        <section className="border-b border-line py-section">
          <Container>
            <EditorialGrid className="gap-y-10 border-t border-ink pt-6 lg:items-end">
              <div className="col-span-4 md:col-span-2 lg:col-span-3">
                <p className="font-display text-h2 font-semibold text-accent">
                  404
                </p>
                <p className="mt-4 text-label font-semibold uppercase text-muted">
                  Page Not Found
                </p>
              </div>

              <div className="col-span-4 md:col-span-6 lg:col-span-8 lg:col-start-5">
                <h1 className="max-w-4xl font-display text-h1 font-semibold text-ink">
                  Halaman yang Anda cari tidak ditemukan.
                </h1>
                <p className="mt-7 max-w-2xl text-body-lg text-muted">
                  Alamatnya mungkin berubah atau halaman tersebut belum
                  tersedia. Kembali ke beranda atau lihat layanan yang dapat
                  membantu bisnis Anda.
                </p>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <ButtonLink href="/" size="large">
                    Kembali ke Beranda
                  </ButtonLink>
                  <ArrowLink href="/layanan">Lihat Layanan</ArrowLink>
                </div>
              </div>
            </EditorialGrid>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
