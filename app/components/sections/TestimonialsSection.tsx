import { testimonials } from "~/data/testimonials";
import { TestimonialCard } from "~/components/ui/TestimonialCard";
import {
  SectionHeading,
  SectionWrapper,
} from "~/components/layout/SectionWrapper";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" dark>
      <SectionHeading
        title="Industry Testimonials"
        subtitle="Words from directors, producers, celebrities, and clients"
      />

      <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className="min-w-[300px] md:min-w-0">
            <TestimonialCard testimonial={testimonial} index={index} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
