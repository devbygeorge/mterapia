import { useState } from "react";
import { createPortal } from "react-dom";
import { Phone } from "lucide-react";

type Props = {
  variant?: "dark" | "light";
  text?: string;
};

const CallButton = ({ variant = "dark", text = "სესიაზე ჩაწერა" }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const phoneNumber = "+995557585889";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const baseClass =
    "inline-flex items-center gap-2 rounded-lg transition cursor-pointer";
  const variantClass =
    variant === "dark"
      ? "bg-slate-900 text-white hover:bg-slate-800 text-[0.875rem] px-4 py-2.5 shadow-sm font-semibold"
      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 text-sm px-3.5 py-2 font-medium";

  return (
    <>
      <a
        href={`tel:${phoneNumber}`}
        onClick={handleClick}
        className={`${baseClass} ${variantClass}`}
      >
        <Phone className="w-4 h-4" />
        {text}
      </a>

      {showPopup &&
        createPortal(
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]"
            onClick={() => setShowPopup(false)} // click outside closes
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <p className="mb-4">გთხოვთ დარეკოთ ნომერზე:</p>
              <div className="flex items-center justify-between gap-6">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-blue-600 font-bold"
                >
                  {phoneNumber}
                </a>
                <button
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                  onClick={() => setShowPopup(false)}
                >
                  დახურვა
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CallButton;
