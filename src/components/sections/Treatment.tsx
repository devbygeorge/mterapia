import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import db from "@/db.json";

const Treatment = () => {
  const { treatment } = db;

  return (
    <section id="treatment" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] tracking-wider text-slate-500 ">
            ხარისხიანი მოვლა
          </p>
          <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem] tracking-tight font-medium text-slate-900">
            მკურნალობის მეთოდები
          </h2>
          <p className="mt-2 text-slate-600">
            ტკივილის შემცირება, მოძრაობის აღდგენა და საუკეთესო შედეგი
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatment.map((service, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl ring-1 shadow-sm overflow-hidden bg-slate-50 ring-slate-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative">
                <div className="relative h-48 w-full">
                  <Image
                    className=" object-cover"
                    src={service.image}
                    alt={service.title}
                    fill
                  />
                </div>
              </div>

              <div className="flex-1 p-5">
                <h3 className="text-[1.25rem] font-semibold tracking-tight text-slate-900">
                  {service.title}
                </h3>

                <ul className="mt-4 space-y-2 text-[0.875rem] text-slate-600">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 ">
                      <CheckCircle2
                        className={`w-4 h-4 min-w-4 min-h-4 mt-0.5 ${service.checkColor}`}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatment;
