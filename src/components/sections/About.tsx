import { Award, Compass, Check, MessageCircle } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 py-14 sm:py-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-[1.875rem] sm:text-[2.25rem] tracking-tight font-medium text-slate-900">
              დავით ბალხამიშვილი
            </h2>
            <p className="mt-3 text-slate-600">
              13+ წელია, რაც ადამიანებს თავდაჯერებულად მოძრაობაში ვეხმარები.
              სახსრებისა და რბილი ქსოვილების ტექნიკას მარტივ გეგმასთან
              ვაერთიანებ, რომლის დაცვაც სახლშიც შეგიძლიათ, რათა თქვენი პროგრესი
              დიდხანს გაგრძელდეს.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 shadow-sm ring-1 bg-white ring-slate-200">
                <div className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-900">
                  <Award className="w-4 h-4 text-cyan-600" />
                  სერთიფიკატები
                </div>
                <ul className="mt-3 space-y-2 text-[0.875rem] text-slate-600">
                  {[
                    "ფიზიოთერაპიის დოქტორი (DPT)",
                    "ორთოპედიული მანუალური თერაპია (OMT)",
                    "მექანიკური დიაგნოსტიკა და თერაპია (MDT)",
                  ].map((credential, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-cyan-600" />
                      {credential}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-4 shadow-sm ring-1 bg-white ring-slate-200">
                <div className="flex items-center gap-2 text-[0.875rem] font-medium text-slate-900">
                  <Compass className="w-4 h-4 text-green-600" />
                  მიდგომა
                </div>
                <ul className="mt-3 space-y-2 text-[0.875rem] text-slate-600">
                  {[
                    "სახსრებისა და რბილი ქსოვილების მობილიზაცია",
                    "პერსონალიზებული მოძრაობა + გაძლიერება",
                    "სახლის მკაფიო, ქმედითი გეგმა",
                  ].map((approach, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-green-600" />
                      {approach}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[0.75rem] shadow-sm ring-1 bg-white text-slate-600 ring-slate-200">
              <MessageCircle className="w-4 h-4 text-amber-600" />
              მეგობრული, პაციენტზე ორიენტირებული მოვლა
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 bg-white ring-slate-200">
              <div className="relative w-full h-[420px] sm:h-[500px]">
                <Image
                  src="/about.jpg"
                  alt="Portrait of therapist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
