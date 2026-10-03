/**
 * Posso facts — the single source of truth for every price, rate and company
 * fact quoted on the site.
 *
 * Pages import `posso` and interpolate rather than hardcoding: change a price
 * here and it changes on every page, in every FAQ answer and in the schema.
 * Before this file existed the same £499 was typed out 561 times across 147
 * files, and the copies had drifted (setup time, installation, finance term).
 *
 * Rules:
 * - Prices are GBP. Where a fact is ex-VAT, the copy that uses it says
 *   "+ VAT" itself; the display strings here are the bare figure so they read
 *   naturally in "from £499 + VAT", "£45/month" and table cells alike.
 * - Numbers that feed schema.org (Offer.price, lowPrice) come from
 *   `possoPrices`, never from parsing a display string.
 * - Anything not yet confirmed is `null` with a TODO, and the copy helpers
 *   below omit it rather than printing a placeholder on the live site.
 */

/** Numeric values, for schema and arithmetic. GBP unless the key says otherwise. */
export const possoPrices = {
  /** POS system (single-screen), ex VAT */
  pos: 499,
  /** Self-order kiosk (indoor), from, ex VAT */
  kiosk: 699,
  /** Restaurant Full Service package, ex VAT */
  fullServicePackage: 899,
  /** Fast Food Growth package, ex VAT */
  fastFoodGrowthPackage: 1250,
  /** 21-inch kitchen display screen, ex VAT */
  kds: 399,
  /** Extra kitchen/receipt printer, each */
  printer: 99,
  /** Handheld waiter pad */
  waiterPad: 259,
  /** Twin-screen (customer-facing display) upgrade */
  twinScreen: 150,
  /** Software, from, per month, ex VAT */
  softwareMonthly: 25,
  /** Finance, from, per week */
  financeWeekly: 24.92,
  /** Just Eat / Uber Eats / Deliveroo integration, per month, unlimited orders */
  deliveryIntegrationMonthly: 45,
  /** AI phone ordering, per order taken */
  aiPhonePerOrder: 1,
  /** Driver app, pence per delivery */
  driverAppPerDeliveryPence: 30,
} as const;

/** "£1,250", "£24.92", "£499" — no locale dependency, so SSR and client agree. */
export function gbp(amount: number): string {
  const [whole, pence] = amount.toFixed(2).split('.');
  const withCommas = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return pence === '00' ? `£${withCommas}` : `£${withCommas}.${pence}`;
}

/** Contract terms — see the TODO; copy that claims "no lock-in" must be confirmed. */
export const possoContract = {
  // TODO: PAUL — confirm the actual software contract terms (minimum term,
  // notice period, early-termination fee, auto-renewal) before the site keeps
  // claiming "no lock-in contracts". Every page that makes the claim carries a
  // TODO pointing back here.
  minimumTerm: null as string | null,
  noticePeriod: null as string | null,
};

const SETUP_STATEMENT =
  'Setup (menu build + configuration) is free; on-site installation for larger sites is priced on application.';

// TODO: PAUL — confirm X in "most sites go live within X" (e.g. "a day of the
// hardware arriving"). Until this is set, the go-live sentence stops at
// "plug-and-play" rather than printing a time we have not confirmed.
const GO_LIVE_WITHIN: string | null = null;

export const posso = {
  // Hardware and packages (display strings)
  posPrice: gbp(possoPrices.pos),
  kioskPrice: gbp(possoPrices.kiosk),
  fullServicePrice: gbp(possoPrices.fullServicePackage),
  fastFoodGrowthPrice: gbp(possoPrices.fastFoodGrowthPackage),
  kdsPrice: gbp(possoPrices.kds),
  printerPrice: gbp(possoPrices.printer),
  waiterPadPrice: gbp(possoPrices.waiterPad),
  twinScreenPrice: gbp(possoPrices.twinScreen),

  // Ongoing and usage-based
  softwareMonthly: gbp(possoPrices.softwareMonthly),
  financeWeekly: gbp(possoPrices.financeWeekly),
  deliveryIntegrationMonthly: gbp(possoPrices.deliveryIntegrationMonthly),
  aiPhonePerOrder: gbp(possoPrices.aiPhonePerOrder),
  driverAppPerDelivery: `${possoPrices.driverAppPerDeliveryPence}p`,
  /** Posso Pay guide rate — always say "from", it is quoted on card turnover */
  possoPayRate: '1% + 10p',

  // Company facts
  warrantyYears: 2,
  warrantyYearsWord: 'two',
  supportDays: 'Monday to Friday',
  supportDaysShort: 'Mon–Fri',
  supportTime: '9am–9:30pm',
  supportHours: 'Monday to Friday, 9am–9:30pm',
  businessCount: '500+',

  // Contact
  phone: '0808 175 3956',
  phoneHref: 'tel:+448081753956',
  phoneE164: '+448081753956',
  /** The format the existing schema.org nodes use */
  phoneSchema: '+44-808-175-3956',

  // Standard statements — use these verbatim so the site says one thing
  setupStatement: SETUP_STATEMENT,
  goLiveWithin: GO_LIVE_WITHIN,
  goLiveStatement: GO_LIVE_WITHIN
    ? `Systems are preconfigured and shipped plug-and-play; most sites go live within ${GO_LIVE_WITHIN}.`
    : 'Systems are preconfigured and shipped plug-and-play.',
  /** Appended wherever the site says you "own it outright" */
  ownershipNote: `You own the hardware outright; software is from ${gbp(possoPrices.softwareMonthly)} + VAT a month.`,
} as const;

export type PossoFacts = typeof posso;
