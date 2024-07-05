import React, { useState, useEffect } from "react";

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className={`fixed ${isVisible ? "bottom-5" : "-bottom-10"} transition-all z-[10000000000000000] duration-300 left-5`}>
        <button
          onClick={scrollToTop}
          className={`bg-[#f11d64] text-white font-bold py-2 px-4 rounded`}
        >
          <i className="fas fa-arrow-up-long"></i>
        </button>
      </div>
    </div>
  );
}

export default ScrollTop;
