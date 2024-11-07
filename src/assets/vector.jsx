import React from 'react';

function SvgComponent() {
  return (
    <svg width="1225.79" height="245.17" viewBox="0 0 1225.79 245.17" xmlns="http://www.w3.org/2000/svg">
      {/* تعريف الفلتر لمحاكاة shadow و blur */}
      <defs>
        {/* تأثير الظل الداخلي */}
        <filter id="insetShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feOffset dx="0" dy="2.27" result="offsetBlur" />
          <feFlood floodColor="white" floodOpacity="0.25" result="color" />
          <feComposite in2="offsetBlur" operator="in" result="shadow" />
          <feComposite in2="SourceAlpha" operator="in" result="alpha" />
          <feComposite in="shadow" in2="alpha" operator="in" result="shadow" />
          <feComposite in2="SourceAlpha" operator="in" result="alpha" />
        </filter>

        {/* تأثير flter backdrop blur */}
        <filter id="blurFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.19" />
        </filter>

        {/* تأثير border مع gradient */}
        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.16)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(153, 153, 153, 0.16)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* مستطيل لتطبيق جميع التأثيرات */}
      <g filter="url(#blurFilter)">
        <rect
          x="139.56"
          y="676.05"
          width="1225.79"
          height="245.17"
          rx="28.94"
          fill="none"
          stroke="url(#borderGradient)"
          strokeWidth="28.94"
          opacity="0.2"
          transform="rotate(-3.46 139.56 676.05)"
        />
      </g>

      {/* شكل لتطبيق الـ box-shadow الداخلي */}
      <rect
        x="139.56"
        y="676.05"
        width="1225.79"
        height="245.17"
        rx="28.94"
        fill="none"
        stroke="none"
        filter="url(#insetShadow)"
      />
    </svg>
  );
}

export default SvgComponent;
