import Image from "next/image";
import { Clock, MapPin, Star, StarHalf, BadgeCheck } from "lucide-react";
import { CallButton } from "@/components/ui";

const Hero = () => {
  return (
    <section className="relative hero-gradient">
      <div className="max-w-7xl sm:px-6 lg:px-8 px-4 mr-auto ml-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 sm:py-16 py-14">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex gap-2 text-xs text-slate-600 bg-white border-slate-200 border rounded-full mb-4 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
              მტკიცებულებებზე დაფუძნებული თერაპია
              <BadgeCheck className="w-4 h-4 min-w-4 min-h-4 text-cyan-600" />
            </div>

            <h1 className="sm:text-[2rem] lg:text-[3rem] text-[1.5rem] font-medium tracking-tight text-slate-900">
              ტკივილის მოხსნა და მოძრაობის აღდგენა
            </h1>

            <p className="mt-4 text-[1rem] sm:text-[1.125rem] max-w-xl text-slate-600">
              ინდივიდუალური 5-10 სეანსი, როგორც მოითხოვს პაციენტის მდგომარეობა.
              არ ვმკურნალობ იმ პაციენტებს, რომელთა მდგომარეობაც ჩემს
              შესაძლებლობებსა და მოვალეობას სცდება.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div id="calendar-btn" className="hidden"></div>

              <CallButton />

              <a
                href="#consult"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition border-slate-300 bg-white text-slate-800 hover:bg-slate-50"
              >
                <Clock className="w-4 h-4" />
                ზარის მოთხოვნა
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 ">
                <MapPin className="w-4 h-4 text-slate-500" />
                20 პავლე ასლანიდი, თბილისი
              </span>
              <span className="inline-flex items-center gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-current"
                  />
                ))}
                <StarHalf className="w-4 h-4 text-amber-500 fill-current" />
                <span className="ml-1 ">4.9/5 — 320+ შეფასება</span>
              </span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <figure className="overflow-hidden rounded-2xl shadow-lg ring-1 bg-white ring-slate-200">
              <div className="relative w-full h-[420px] sm:h-[520px]">
                <Image
                  src="/images/hero/3.jpg"
                  alt="Hands-on manual therapy session"
                  className="object-cover"
                  fill
                  priority
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
