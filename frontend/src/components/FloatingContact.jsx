import React from "react";

export default function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/918879864151"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            >
                <i className="fab fa-whatsapp text-xl"></i>
            </a>

            {/* Call Button */}
            <a
                href="tel:+918879864151"
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            >
                <i className="fas fa-phone text-xl"></i>
            </a>

        </div>
    );
}