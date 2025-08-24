import React, { useState } from "react";
import { Phone } from "lucide-react";

const FreeConsult = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("იგზავნება...");

    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ წარმატებით გაიგზავნა!");
        setFormData({ email: "", phone: "" });
      } else {
        setStatus("❌ " + data.message);
      }
    } catch {
      setStatus("❌ გაგზავნა ვერ მოხერხდა");
    }

    setSending(false);
  };

  return (
    <section id="consult" className="relative scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="relative rounded-2xl bg-gradient-to-r from-cyan-600 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-[1.5rem] font-medium tracking-tight">
                უფასო სატელეფონო კონსულტაცია
              </h3>
              <p className="mt-1 text-[0.875rem]/6 text-cyan-100 ">
                დასვით კითხვები და გაიგეთ, არის თუ არა მანუალური თერაპია
                თქვენთვის შესაფერისი — ვალდებულების გარეშე.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col md:items-center sm:flex-row gap-3 w-full md:w-auto"
            >
              <input
                type="tel"
                name="phone"
                placeholder="+995 5XX XX XX XX"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-white w-full sm:w-56 rounded-lg border-0 text-[0.875rem] text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-white px-3 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white w-full sm:w-64 rounded-lg border-0 text-[0.875rem] text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-white px-3 py-2"
              />
              <button
                type="submit"
                disabled={sending}
                className={`w-max inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-[0.875rem] font-semibold shadow-sm transition cursor-pointer
                  ${
                    sending
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-white text-slate-900 hover:bg-slate-100"
                  }
                `}
              >
                <Phone className="w-4 h-4" />
                ზარის მოთხოვნა
              </button>
              {status && (
                <p className="mt-3 sm:absolute left-0 top-10 text-[0.75rem]">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsult;
