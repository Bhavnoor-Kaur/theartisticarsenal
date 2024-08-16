"use client";

interface ScrollButtonProps {
  targetId: string;
}

export default function ScrollButton({ targetId }: ScrollButtonProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        console.log("Scrolling to element:", element);
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("Element not found:", id);
    }
  };

  return (
    <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
      <button
        onClick={() => scrollToSection(targetId)}
        className="scroll-button flex flex-col items-center text-white focus:outline-none"
        aria-label="Scroll down to learn more"
      >
        <span className="mb-2">SCROLL DOWN</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
}
