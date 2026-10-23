import React from "react";
import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";

// Sticky "Enquire Now" tab on the right edge of the screen.
// It opens the form rendered by <EnquiryPopup /> by sending a window event,
// so the two components stay completely separate.
export default function EnquireButton() {
  const openForm = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return createPortal(
    <button
      type="button"
      onClick={openForm}
      aria-label="Open enquiry form"
      style={{ zIndex: 2147483000, writingMode: "vertical-rl" }}
      className="fixed right-0 top-1/2 flex -translate-y-1/2 rotate-180 items-center gap-2 rounded-r-xl bg-gradient-to-b from-orange-500 to-red-500 px-3 py-2 text-sm font-semibold tracking-wide text-white shadow-lg shadow-orange-500/30 transition hover:pr-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-4 w-4 rotate-180" aria-hidden="true" />
      Enquire Now
    </button>,
    document.body
  );
}
