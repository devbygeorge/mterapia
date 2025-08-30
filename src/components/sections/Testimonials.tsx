import { Star, StarHalf } from "lucide-react";
import db from "@/db.json";
import Image from "next/image";

const Testimonials = () => {
  const { testimonials } = db;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center gap-1 text-purple-500">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
        {hasHalfStar && <StarHalf className="w-4 h-4 fill-current" />}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative scroll-mt-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] tracking-wider text-slate-500 ">
            კეთილი სიტყვები
          </p>
          <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem] tracking-tight font-medium text-slate-900">
            პაციენტების შეფასებები
          </h2>
          <p className="mt-2 text-slate-600">
            რეალური ისტორიები იმ ადამიანებისგან, რომლებიც დაუბრუნდნენ საყვარელ
            საქმიანობას.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm p-5 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <figcaption className="font-medium text-[0.875rem] text-slate-900">
                    {testimonial.name}
                  </figcaption>
                  <span className="text-[0.75rem] text-slate-500 ">
                    {testimonial.condition}
                  </span>
                </div>
              </div>

              <blockquote className="mt-3 text-[0.875rem] text-slate-700 ">
                {testimonial.quote}
              </blockquote>

              <div className="mt-3">{renderStars(testimonial.rating)}</div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
