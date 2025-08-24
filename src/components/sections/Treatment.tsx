import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import db from "@/db.json";

const Treatment = () => {
  const { treatment } = db;

  return (
    <section id="treatment" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] uppercase tracking-wider text-slate-500 ">
            ხარისხიანი მოვლა
          </p>
          <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem] tracking-tight font-medium text-slate-900">
            მკურნალობის მეთოდები
          </h2>
          <p className="mt-2 text-slate-600">
            პრაქტიკული მკურნალობა ტკივილის შესამცირებლად, მოძრაობის აღსადგენად
            და საუკეთესო შედეგის მისაღწევად.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatment.map((service, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl ring-1 shadow-sm overflow-hidden bg-slate-50 ring-slate-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative">
                <div className="relative h-72 w-full">
                  <Image
                    className=" object-cover"
                    src={service.image}
                    alt={service.title}
                    fill
                  />
                </div>
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.75rem] shadow-sm ring-1  bg-white/90 text-slate-700 ring-black/5">
                  <span
                    className={`h-2 w-2 rounded-full ${service.tagColor}`}
                  ></span>
                  {service.tag}
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
                        className={`w-4 h-4 mt-0.5 ${service.checkColor}`}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border-t border-slate-200 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {service.pricing.map((price, priceIndex) => (
                      <span
                        key={priceIndex}
                        className="inline-flex items-center rounded-full px-2.5 py-1 text-[0.75rem]  bg-slate-100 text-slate-700"
                      >
                        {price}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatment;
