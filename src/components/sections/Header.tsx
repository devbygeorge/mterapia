import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/#conditions", label: "მდგომარეობები" },
    { href: "/#treatment", label: "მკურნალობა" },
    { href: "/#about", label: "ჩემს შესახებ" },
    { href: "/#videos", label: "ვიდეოები" },
    { href: "/#testimonials", label: "შეფასებები" },
    { href: "/#contact", label: "კონტაქტი" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-all duration-200 ${
        isScrolled
          ? "supports-[backdrop-filter]:bg-white/90 border-b bg-white/80 border-slate-200/80 shadow-sm"
          : "supports-[backdrop-filter]:bg-white/70 border-b bg-white/60 border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="sr-only ">Home</span>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-tight  text-slate-900">
                დავით ბალხამიშვილი
              </span>
              <span className="text-xs text-slate-500 ">მანუალური თერაპია</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="transition  text-slate-700 hover:text-slate-900"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div id="nav-calendar-btn-wrapper">
              <div id="nav-calendar-btn" className="hidden"></div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="text-sm  text-slate-700 hover:text-slate-900 transition px-2 py-1"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+995557585889"
                className="inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition  border-slate-300 bg-white text-slate-800 hover:bg-slate-50 w-fit"
              >
                <Phone className="w-4 h-4" />
                ზარი
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
