import { Container, SectionGrid } from "@/components/layout";
import { Badge, SectionHeader } from "@/components/ui";
import { homepageSections } from "@/data/homepage";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const content = homepageSections.testimonials;

  return (
    <section
      id="testimoni"
      aria-labelledby="testimonials-title"
      className="border-b border-line py-section"
    >
      <Container>
        <SectionHeader
          eyebrow={content.eyebrow}
          number={content.number}
          titleId="testimonials-title"
          title={content.title}
          description={content.description}
        />

        <SectionGrid>
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.label}
              className="col-span-4 border-y border-ink py-8 md:col-span-6 md:col-start-3 md:py-12 lg:col-span-8 lg:col-start-4"
            >
              <Badge variant="accent">{testimonial.label}</Badge>
              <blockquote className="mt-8 max-w-4xl font-display text-h3 font-semibold text-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 text-small text-muted">
                Tidak ada nama, foto, atau perusahaan palsu yang digunakan.
              </figcaption>
            </figure>
          ))}
        </SectionGrid>
      </Container>
    </section>
  );
}
