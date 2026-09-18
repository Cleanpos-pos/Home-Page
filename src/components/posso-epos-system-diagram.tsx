/**
 * Inline system diagram for /pos.
 *
 * Inlined rather than <img src="/images/posso-epos-system-diagram.svg"> on
 * purpose: the labels inside are real text in the server-rendered HTML, so the
 * entity terms (till, kiosk, waiter pad, QR, kitchen display, card terminal)
 * are crawlable. The same artwork is kept at
 * /images/posso-epos-system-diagram.svg for schema.org contentUrl, and as a
 * 1200x630 .png for OG/Twitter previews, which do not render SVG.
 *
 * <title>/<desc> are the accessibility layer and are indexable — keep them.
 * Every id is prefixed so it cannot collide with other inline SVGs on the page.
 */
export function PossoEposSystemDiagram() {
  const orderChannels = [
    { y: 150, name: 'POS till', sub: 'Eat in, takeaway, collection, delivery' },
    { y: 224, name: 'Self-order kiosk', sub: 'Floor-standing or wall-mounted' },
    { y: 298, name: 'Handheld waiter pad', sub: 'Order taken at the table' },
    { y: 372, name: 'QR table ordering', sub: 'Scan, order and pay at the table' },
    { y: 446, name: 'Website & app', sub: 'Your own domain, collection & delivery' },
    { y: 520, name: 'AI phone ordering', sub: 'Answers when the line is busy' },
    { y: 594, name: 'Delivery platforms', sub: 'Just Eat · Uber Eats · Deliveroo' },
  ];

  const outputs = [
    { y: 187, name: 'Kitchen display system', sub: 'Tickets routed by course or station' },
    { y: 261, name: 'Kitchen & receipt printers', sub: 'Multi-kitchen printed copies' },
    { y: 335, name: 'Posso Pay card terminals', sub: 'Amount pushed across from the till' },
    { y: 409, name: 'Driver app & dispatch', sub: 'Zones, fees and live driver tracking' },
    { y: 483, name: 'Reporting & analytics', sub: 'X and Z reads, sales by item and hour' },
    { y: 557, name: 'Customer marketing CMS', sub: 'Built in, with 2,000 emails a month' },
  ];

  return (
    <svg
      viewBox="0 0 1200 720"
      className="w-full h-auto"
      role="img"
      aria-labelledby="posso-epos-diagram-title posso-epos-diagram-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="posso-epos-diagram-title">How a Posso EPOS system works</title>
      <desc id="posso-epos-diagram-desc">
        Orders from the POS till, self-order kiosk, handheld waiter pad, QR table ordering, website
        and app, AI phone ordering and delivery platforms all feed one offline-first EPOS core,
        which drives the kitchen display system, kitchen and receipt printers, Posso Pay card
        terminals, the driver app, reporting and the customer marketing CMS.
      </desc>

      <defs>
        <linearGradient id="posso-epos-diagram-core" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2C76F6" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#915DF8" stopOpacity="0.22" />
        </linearGradient>
        <marker
          id="posso-epos-diagram-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2C76F6" />
        </marker>
        <marker
          id="posso-epos-diagram-arrow-accent"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#915DF8" />
        </marker>
      </defs>

      <rect width="1200" height="720" fill="#02091D" />

      <g fontFamily="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif">
        <text x="600" y="46" textAnchor="middle" fontSize="29" fontWeight="700" fill="#FFFFFF">
          How a Posso EPOS system works
        </text>
        <text x="600" y="74" textAnchor="middle" fontSize="15" fill="#94A3B8">
          Every order channel writes into one offline-first core
        </text>

        <text x="190" y="120" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="1.6" fill="#2C76F6">
          WHERE ORDERS COME FROM
        </text>
        <text x="600" y="120" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="1.6" fill="#915DF8">
          ONE POSSO EPOS CORE
        </text>
        <text x="1010" y="120" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="1.6" fill="#2C76F6">
          WHAT THE CORE DRIVES
        </text>

        {/* Order channels collect onto one rail, then a single arrow into the core */}
        <g fill="none" stroke="#334155" strokeWidth="1.5">
          {orderChannels.map((c) => (
            <path key={`rail-${c.y}`} d={`M 340 ${c.y + 31} H 376`} />
          ))}
          <path d="M 376 181 V 625" stroke="#2C76F6" strokeOpacity="0.55" />
          <path d="M 824 218 V 588" stroke="#915DF8" strokeOpacity="0.55" />
        </g>
        <path
          d="M 376 403 H 414"
          fill="none"
          stroke="#2C76F6"
          strokeWidth="2.5"
          markerEnd="url(#posso-epos-diagram-arrow)"
        />
        <path d="M 786 403 H 824" fill="none" stroke="#915DF8" strokeWidth="2.5" />
        <g fill="none" stroke="#915DF8" strokeWidth="1.5" markerEnd="url(#posso-epos-diagram-arrow-accent)">
          {outputs.map((o) => (
            <path key={`out-${o.y}`} d={`M 824 ${o.y + 31} H 854`} />
          ))}
        </g>

        {orderChannels.map((c) => (
          <g key={c.name}>
            <rect x="40" y={c.y} width="300" height="62" rx="12" fill="#1E293B" fillOpacity="0.55" stroke="#334155" />
            <text x="60" y={c.y + 26} fontSize="16" fontWeight="600" fill="#FFFFFF">
              {c.name}
            </text>
            <text x="60" y={c.y + 46} fontSize="12.5" fill="#94A3B8">
              {c.sub}
            </text>
          </g>
        ))}

        <g>
          <rect
            x="414"
            y="230"
            width="372"
            height="346"
            rx="18"
            fill="url(#posso-epos-diagram-core)"
            stroke="#915DF8"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <text x="600" y="274" textAnchor="middle" fontSize="23" fontWeight="700" fill="#FFFFFF">
            Posso EPOS core
          </text>
          <text x="600" y="300" textAnchor="middle" fontSize="13.5" fill="#94A3B8">
            One menu {'·'} one price list {'·'} one set of numbers
          </text>
          <path d="M 460 322 H 740" stroke="#334155" strokeWidth="1" />
          <rect x="500" y="342" width="200" height="30" rx="15" fill="#915DF8" fillOpacity="0.16" stroke="#915DF8" strokeOpacity="0.45" />
          <text x="600" y="362" textAnchor="middle" fontSize="12.5" fontWeight="700" letterSpacing="1.5" fill="#B99CFB">
            OFFLINE-FIRST
          </text>
          <text x="600" y="404" textAnchor="middle" fontSize="14" fill="#CBD5E1">
            Runs on a local database on the
          </text>
          <text x="600" y="426" textAnchor="middle" fontSize="14" fill="#CBD5E1">
            terminal itself.
          </text>
          <text x="600" y="460" textAnchor="middle" fontSize="14" fill="#CBD5E1">
            Broadband drops? The till keeps serving,
          </text>
          <text x="600" y="482" textAnchor="middle" fontSize="14" fill="#CBD5E1">
            kitchen screens keep receiving and
          </text>
          <text x="600" y="504" textAnchor="middle" fontSize="14" fill="#CBD5E1">
            printers keep printing.
          </text>
          <text x="600" y="540" textAnchor="middle" fontSize="13" fill="#94A3B8">
            Everything syncs when the connection returns.
          </text>
        </g>

        {outputs.map((o) => (
          <g key={o.name}>
            <rect x="860" y={o.y} width="300" height="62" rx="12" fill="#1E293B" fillOpacity="0.55" stroke="#334155" />
            <text x="880" y={o.y + 26} fontSize="16" fontWeight="600" fill="#FFFFFF">
              {o.name}
            </text>
            <text x="880" y={o.y + 46} fontSize="12.5" fill="#94A3B8">
              {o.sub}
            </text>
          </g>
        ))}

        <text x="600" y="694" textAnchor="middle" fontSize="13" fill="#64748B">
          posso.co.uk {'·'} EPOS systems built and supported in the UK
        </text>
      </g>
    </svg>
  );
}
