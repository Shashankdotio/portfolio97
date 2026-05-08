import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function CertificateImageModal({ certImage, onClose }) {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: isClosing
          ? "fadeOut 0.3s ease-out forwards"
          : "fadeIn 0.3s ease-out",
      }}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "clamp(300px, 70vw, 800px)",
          height: "clamp(400px, 70vh, 900px)",
          animation: isClosing
            ? "certMinimize 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
            : "certExpand 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "-2.5rem",
            right: "0",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem 0.8rem",
            borderRadius: "8px",
            zIndex: 1001,
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.2)";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.1)";
            e.target.style.transform = "scale(1)";
          }}
          aria-label="Close certificate"
        >
          ✕
        </button>

        <img
          src={certImage}
          alt="Certificate"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "16px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      </div>
    </div>,
    document.body
  );
}
