export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/905000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp destek hattı"
      className="fixed z-[70] bottom-5 right-5 md:bottom-8 md:right-8 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] shadow-accent hover:scale-105 active:scale-95 transition-transform safe-bottom"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.79-.12-.41-.14-.94-.31-1.62-.6-2.86-1.24-4.72-4.12-4.86-4.31-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .41-.03.64.5.24.53.8 1.87.87 2 .07.13.11.28.02.46-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.19 1.53 1.93 1.05.95 1.94 1.24 2.21 1.38.27.14.43.11.59-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.73 1.79.86.26.14.44.2.5.32.06.12.06.66-.18 1.33Z" />
      </svg>
    </a>
  );
}
