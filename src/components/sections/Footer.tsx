import { Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/#conditions", label: "მდგომარეობები" },
    { href: "/#treatment", label: "მკურნალობა" },
    { href: "/#about", label: "ჩემს შესახებ" },
    { href: "/#videos", label: "ვიდეოები" },
    { href: "/#testimonials", label: "შეფასებები" },
    { href: "/#contact", label: "კონტაქტი" },
  ];

  const socialLinks = [
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Youtube, label: "YouTube" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-base font-semibold tracking-tight  text-slate-900">
              დავით ბალხამიშვილი
            </div>
            <p className="text-sm text-slate-600 ">
              მანუალური თერაპიის სპეციალისტი
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <p className="">
            © {currentYear} დავით ბალხამიშვილი. ყველა უფლება დაცულია.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="inline-flex items-center justify-center h-7 w-7 rounded-md ring-1 ring-slate-200 hover:bg-slate-50 transition"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
