import { ShieldCheck } from "lucide-react";

const Policies = () => {
  return (
    <section id="policies" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2 text-[0.875rem] font-semibold text-slate-900">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            დაჯავშნის პოლიტიკა
          </div>
          <ul className="mt-3 text-[0.875rem] text-slate-600  list-disc pl-5 space-y-1.5">
            <li>
              გაუქმების ან გადატანის შემთხვევაში საჭიროა 24 საათიანი
              შეტყობინება.
            </li>
            <li>გადახდა მომსახურების დროს. დაზღვევის ანაზღაურების ქვითრები.</li>
            <li>
              გთხოვთ, მობრძანდეთ 5 წუთით ადრე, რათა მაქსიმალურად გაატაროთ დრო
              მაგიდასთან.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Policies;
