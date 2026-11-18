// The map and its labels share a plane; the frame and caption stay on the page.
const route='M89.1 122.0L108.9 119.8L128.8 118.2L148.9 117.4L169.0 117.2L189.1 117.8L209.1 119.0L228.9 121.0L248.6 123.6L267.9 126.9L287.0 130.9L305.7 135.4L324.1 140.4L342.1 146.0L359.7 152.1L376.9 158.6L393.8 165.5L410.3 172.7L426.5 180.3L442.4 188.2L458.0 196.3L473.4 204.6L488.5 213.1L503.5 221.8L518.4 230.5';
export default function StudioAtlas() {
  return <figure className="studio-atlas">
    <div className="atlas-window" data-depth-scene>
      <svg viewBox="0 0 600 316" role="img" aria-label="Richverse studio locations: Austin in Texas and Accra in Ghana, on opposite sides of the Atlantic.">
        <defs><clipPath id="atlas-reveal"><rect data-depth="route" width="600" height="316"/></clipPath><pattern id="atlas-grid" width="66" height="66" patternUnits="userSpaceOnUse" x="57.2" y="57.2"><path d="M0 66V0H66" fill="none" stroke="#cbc9d7" strokeWidth="1"/></pattern></defs>
        <g data-depth="atlas">
          <image href="/editorial/atlantic-land.svg" x="0" y="0" width="600" height="316"/>
          <rect x="-30" y="-30" width="660" height="376" fill="url(#atlas-grid)"/>
          <text x="315" y="205" textAnchor="middle" className="atlas-ocean">Atlantic Ocean</text>
          <path d={route} fill="none" stroke="#77728d" strokeWidth="1.5" strokeDasharray="2 5"/>
          <g clipPath="url(#atlas-reveal)"><path d={route} fill="none" stroke="#4338ca" strokeWidth="2.6" strokeLinecap="round"/></g>
          {[[89.1,122,'Austin'],[518.4,230.5,'Accra']].map(([x,y,label])=><g key={label} transform={`translate(${x} ${y})`}>
            <circle r="10" fill="#fcfbf9" stroke="#4338ca" strokeWidth="1.5"/><circle r="4" fill="#4338ca"/>
            <text className="atlas-city" textAnchor="middle" y="-19">{label}</text>
          </g>)}
        </g>
      </svg>
    </div>
    <figcaption><span>Studio locations</span><span>United States / Ghana</span></figcaption>
  </figure>;
}
