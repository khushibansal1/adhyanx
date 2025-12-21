import { useState } from 'react';

export default function FloatingInfo() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,

        background: 'linear-gradient(135deg, rgb(109 76 51), rgb(255, 61, 0))',
        color: '#fff',

        padding: '16px 20px',
        paddingRight: '40px', // space for close button
        borderRadius: '16px',
        maxWidth: '320px',

        fontSize: '15px',
        lineHeight: 1.4,

        boxShadow: '0 15px 35px rgba(255, 61, 0, 0.45)',

        animation:
          'floaty 3s ease-in-out infinite, glow 2.5s ease-in-out infinite',
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '8px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      🎉 <strong>Refer a friend</strong> and get{' '}
      <strong>extra 20% off</strong> for the next 2 weeks
    </div>
  );
}
