import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spa & Wellness Centre Booking & POS System UK | Posso',
  description: 'Premium, relaxing experiences require hassle-free entry and highly secure storage. Posso handles treatment bookings, gift vouchers, memberships, RFID access and retail EPOS in one system.',
  keywords: [
    'spa booking system UK',
    'spa POS software',
    'wellness centre booking software',
    'spa management software UK',
    'treatment booking system',
    'spa appointment scheduling software',
    'spa gift voucher system',
    'wellness centre POS system',
    'spa membership software',
    'day spa booking software',
  ],
  alternates: {
    canonical: '/solutions/spas-wellness-centers',
  },
  openGraph: {
    title: 'Spa & Wellness Centre Booking & POS System UK | Posso',
    description: 'Treatment bookings, gift vouchers, memberships, RFID access control and retail EPOS for UK spas and wellness centres — all in one system.',
    url: 'https://posso.co.uk/solutions/spas-wellness-centers',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso spa and wellness centre booking and POS system for UK spas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spa & Wellness Centre Booking & POS System UK | Posso',
    description: 'Treatment bookings, gift vouchers, memberships, RFID access and retail EPOS for UK spas and wellness centres.',
    images: ['/og-image.png'],
  },
};

const pageData = {
  headline: "Serenity, Secured.",
  subheadline: "Premium, relaxing experiences require effortless treatment booking, hassle-free entry and highly secure storage for phones, jewellery and personal items.",
  benefits: [
    "Hassle-Free Access: RFID wristbands allow guests to move between treatment rooms, pools, and saunas without carrying keys.",
    "Premium Security: Give guests peace of mind with highly secure lockers for their valuables.",
    "Treatment & Class Booking: Integrate your booking system for a seamless journey from arrival to departure."
  ],
  ctaText: "Elevate Your Spa Experience",
  slug: "solutions/spas-wellness-centers",
  breadcrumbLabel: "Spas & Wellness Centres",
  schemaName: "Spa & Wellness Centre Booking & POS System",
  schemaDescription: "All-in-one spa management software for UK spas and wellness centres: treatment and appointment booking, deposits, gift vouchers, memberships, RFID access control, lockers and retail EPOS.",
  intro: {
    title: "Spa & Wellness Centre Booking Software for the UK",
    paragraphs: [
      "A great spa visit should feel effortless from the moment a guest books to the moment they leave. Posso is a complete <strong>spa booking system</strong> and POS that brings treatment and appointment bookings, memberships, secure storage and retail into one calm, connected platform — so your team can focus on the guest experience instead of paperwork.",
      "As <strong>wellness centre booking software</strong> built for UK operators, Posso lets guests book treatments, day passes, classes and packages online, with deposits taken upfront to cut costly no-shows. RFID wristbands give relaxed, key-free access between treatment rooms, pools and saunas, while highly secure lockers keep phones, jewellery and valuables safe throughout the visit.",
      "Sell and redeem gift vouchers, build spa-day packages and run loyalty and memberships that keep guests coming back. From the reception desk to the retail shelf, every booking, voucher and product sale runs through one till with unified reporting — making Posso powerful yet effortless <strong>spa POS software</strong> for thermal spas, day spas and wellness centres alike.",
    ],
  },
  featuresTitle: "Everything Your Spa Needs",
  features: [
    { title: "Treatment & Appointment Booking", description: "Let guests book treatments, therapists and time slots online or at reception, with resource and room scheduling that prevents double-bookings across your wellness centre." },
    { title: "Deposits to Cut No-Shows", description: "Take deposits or full payment when guests book treatments and spa days, dramatically reducing costly no-shows and protecting your therapists' time." },
    { title: "Gift Vouchers & Packages", description: "Sell and redeem branded gift vouchers and build curated spa-day packages — a popular gifting revenue stream you can manage entirely within the system." },
    { title: "Memberships & Loyalty", description: "Offer recurring memberships, class booking and loyalty rewards to turn one-off visitors into regular guests with automatic renewals." },
    { title: "RFID Access & Secure Lockers", description: "RFID wristbands give key-free movement between treatment rooms, pools and saunas, with highly secure lockers for phones, jewellery and valuables." },
    { title: "Retail & Café EPOS", description: "Sell skincare, products and refreshments through the same till. All treatment, voucher and retail revenue sits together in one clear report." },
  ],
  howItWorks: [
    { title: "Book & Pay Online", desc: "Guests book treatments, day passes or packages and pay a deposit to secure the slot." },
    { title: "Arrive & Tap In", desc: "An RFID wristband gives key-free access and links every spend to the visit." },
    { title: "Relax & Spend", desc: "Treatments, café and retail are charged to the wristband for a seamless journey." },
    { title: "Settle & Return", desc: "Guests check out in seconds, then loyalty and memberships bring them back." },
  ],
  faqTitle: "Spas & Wellness Centres — Frequently Asked Questions",
  faqs: [
    { question: "Can Posso handle treatment and appointment bookings?", answer: "Yes. Posso is a full treatment booking system that lets guests book treatments, therapists and time slots online or at reception. Room and resource scheduling prevents double-bookings, so your wellness centre runs smoothly even during busy periods." },
    { question: "Can I take deposits to reduce no-shows?", answer: "Absolutely. You can require a deposit or full payment when guests book treatments, spa days or packages. Taking payment upfront dramatically reduces no-shows and protects your therapists' time and your revenue." },
    { question: "Does the system support gift vouchers and spa packages?", answer: "Yes. Posso lets you sell and redeem branded gift vouchers and build curated spa-day packages. Vouchers are a strong gifting revenue stream, and everything is tracked and redeemed within the same system." },
    { question: "How does RFID access and secure storage work?", answer: "Guests wear an RFID wristband that gives key-free access between treatment rooms, pools and saunas. Highly secure lockers keep phones, jewellery and valuables safe, and the wristband can also link spend during the visit for a seamless check-out." },
    { question: "Can guests book and pay online?", answer: "Yes. As wellness centre booking software, Posso lets guests book treatments, day passes, classes and packages online and pay or leave a deposit in advance. Online and in-house bookings sync to one calendar and one POS." },
    { question: "Does Posso include retail and café sales?", answer: "It does. Posso is a complete spa POS software platform, so skincare, retail products and café refreshments run through the same till as treatments and vouchers. All revenue and stock sit together in one set of reports." },
  ],
};

export default function SpasWellnessCentersPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
      slug={pageData.slug}
      breadcrumbLabel={pageData.breadcrumbLabel}
      schemaName={pageData.schemaName}
      schemaDescription={pageData.schemaDescription}
      intro={pageData.intro}
      featuresTitle={pageData.featuresTitle}
      features={pageData.features}
      howItWorks={pageData.howItWorks}
      faqTitle={pageData.faqTitle}
      faqs={pageData.faqs}
    />
  );
}
