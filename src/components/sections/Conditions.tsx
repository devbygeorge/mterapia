import db from "@/db.json";

const Conditions = () => {
  const { conditions } = db;

  return (
    <section id="conditions" className="relative scroll-mt-16 bg-white">
      <div className="max-w-7xl sm:px-6 lg:px-8 px-4 mr-auto ml-auto py-14 sm:py-16">
        <div className="max-w-2xl">
          <p className="text-[0.75rem] tracking-wider text-slate-500 ">
            რას ვმკურნალობ
          </p>
          <h2 className="mt-2 text-[1.875rem] sm:text-[2.25rem] tracking-tight font-medium text-slate-900">
            ხშირი მდგომარებები
          </h2>
          <p className="mt-2 text-slate-600">
            ყოველდღიური ტკივილი და სპორტული ტრავმები
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((condition, index) => {
            return (
              <div
                key={index}
                className="rounded-xl p-4 shadow-sm ring-1 bg-white ring-slate-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-2 text-[0.875rem] font-semibold  text-slate-900">
                  {condition.title}
                </div>
                <p className="mt-2 text-[0.875rem] text-slate-600 ">
                  {condition.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
