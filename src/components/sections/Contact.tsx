import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  ParkingSquare,
  Bus,
  Accessibility,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("იგზავნება...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ წარმატებით გაიგზავნა!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ " + data.message);
      }
    } catch {
      setStatus("❌ გაგზავნა ვერ მოხერხდა");
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-16 bg-white">
      <div className="max-w-7xl sm:px-6 lg:px-8 px-4 mr-auto ml-auto py-14 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact details */}
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm p-5 sm:p-6">
            <h3 className="text-[1.25rem] font-medium text-slate-900">
              დაგვიკავშირდით
            </h3>
            <p className="mt-2 text-[0.875rem] text-slate-600 ">
              გაქვთ შეკითხვა? სიამოვნებით დაგეხმარებით.
            </p>

            <div className="mt-4 space-y-3 text-[0.875rem]">
              <a
                href="tel:+995557585889"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                +995 557 58 58 89
              </a>
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                balxama35@mail.ru
              </a>
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="mt-0.5 w-4 h-4 text-slate-500" />
                <div>
                  <p className="">103 Tsotne Dadiani St, Tbilisi</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-[0.875rem] font-semibold text-slate-900">
                სამუშაო საათები
              </h4>
              <ul className="mt-2 text-[0.875rem] text-slate-600 space-y-1">
                <li>ორშ–პარ: 08:30–19:00</li>
                <li>შაბ: 09:00–14:00</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="სრული სახელი"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg py-1 px-2 border outline-0 border-slate-200 focus:border-slate-500 text-[0.875rem] bg-white placeholder:text-slate-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="იმეილი"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg py-1 px-2 border outline-0 border-slate-200 focus:border-slate-500 text-[0.875rem] bg-white placeholder:text-slate-400"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="მობილური"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg py-1 px-2 border outline-0 border-slate-200 focus:border-slate-500 text-[0.875rem] bg-white placeholder:text-slate-400"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="როგორ შემიძლია დახმარება?"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg py-1 px-2 border outline-0 resize-none border-slate-200 focus:border-slate-500 text-[0.875rem] bg-white placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[0.875rem] font-semibold tracking-tight shadow-sm transition bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                შეტყობინების გაგზავნა
              </button>
            </form>

            {status && <p className="mt-3">{status}</p>}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 overflow-hidden ring-1 ring-slate-200 bg-white rounded-2xl shadow-sm">
            <div className="aspect-[16/9] w-full">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186.09696935419024!2d44.79831818691142!3d41.73019571604662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472b633b00e25%3A0xec2ff55cb38d4ce3!2s103%20Tsotne%20Dadiani%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1770702564073!5m2!1sen!2sge"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-3 text-[0.75rem] text-slate-600">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
                  <ParkingSquare className="w-4 h-4 text-slate-500" />
                  ეზოს პარკინგი
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
                  <Bus className="w-4 h-4 text-slate-500" />
                  მეტრო: ტექნიკური უნივერსიტეტი
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
                  <Accessibility className="w-4 h-4 text-slate-500" />
                  პირველი სართული
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
