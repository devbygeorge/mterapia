import { useEffect } from "react";

export default function useDisableBodyScrollOnModal() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const modal = document.querySelector(".hur54b");

      if (modal) {
        document.body.classList.add("body-no-scroll");
      } else {
        document.body.classList.remove("body-no-scroll");
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);
}
