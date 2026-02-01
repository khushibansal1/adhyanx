import { Phone } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <>
      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(-50%) translateY(0); }
          50% { transform: translateY(-50%) translateY(-8px); }
          100% { transform: translateY(-50%) translateY(0); }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6),
                        0 10px 25px rgba(0,0,0,0.25);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37, 211, 102, 0),
                        0 10px 25px rgba(0,0,0,0.25);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0),
                        0 10px 25px rgba(0,0,0,0.25);
          }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 999999,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          animation: "float 4s ease-in-out infinite",
        }}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/31649144629"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "pulse 2.5s infinite",
            transition: "transform 0.25s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.12)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="34"
            height="34"
            fill="white"
          >
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.114.553 4.182 1.602 6.008L4 29l8.165-1.56A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.818a9.79 9.79 0 0 1-4.996-1.38l-.358-.213-4.846.925.93-4.718-.233-.373A9.79 9.79 0 1 1 16 24.818zm5.346-7.01c-.292-.146-1.727-.852-1.993-.949-.266-.098-.46-.146-.655.146-.195.292-.752.949-.92 1.143-.169.195-.336.22-.628.073-.292-.146-1.233-.454-2.35-1.447-.869-.774-1.456-1.729-1.628-2.021-.169-.292-.018-.45.127-.594.13-.129.292-.336.438-.504.146-.169.195-.292.292-.487.098-.195.049-.365-.024-.511-.073-.146-.655-1.581-.897-2.165-.236-.568-.476-.49-.655-.499h-.56c-.195 0-.511.073-.778.365-.266.292-1.022.998-1.022 2.432s1.046 2.823 1.193 3.018c.146.195 2.06 3.145 4.993 4.408.698.302 1.244.482 1.669.617.7.222 1.337.191 1.84.116.561-.084 1.727-.706 1.969-1.388.243-.682.243-1.267.17-1.388-.073-.122-.266-.195-.56-.341z" />
          </svg>
        </a>

        {/* Call */}
        <a
          href="tel:+31649144629"
          aria-label="Call us"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            transition: "transform 0.25s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <Phone size={22} color="white" />
        </a>
      </div>
    </>
  );
}
