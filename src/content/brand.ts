import type { Brand } from "./types";

export const brand: Brand = {
  slug: "flourishbykay",
  name: "Flourish by Kay",
  handle: "@flourishbykay.co",
  instagram: "https://www.instagram.com/flourishbykay.co/",
  location: "Durham Region",
  region: "Ontario",
  country: "CA",
  variant: "garden",
  eyebrow: "Durham Region · Greater Toronto Area",
  headline: "Luxury florals, and a flower bar when the room should join in.",
  subhead:
    "Flourish by Kay designs custom bouquets, bridal work, graduation colour, and centerpieces across Durham Region and the GTA. A 50% non-refundable deposit holds the order. Booking happens by Instagram DM.",
  orderNote:
    "Luxury floral design in Durham Region and the GTA. Custom bouquets and a flower bar. A 50% non-refundable deposit is required. DM to book.",
  stats: [
    { value: "623", label: "Instagram followers" },
    { value: "215", label: "posts on the feed" },
    { value: "50%", label: "non-refundable deposit" },
    { value: "GTA", label: "Durham Region and beyond" },
  ],
  styles: [
    { id: "custom", name: "Custom bouquet", blurb: "Roses, lilies, lisianthus, peonies, and baby’s breath in your colours." },
    { id: "bridal", name: "Bridal bouquet", blurb: "The bridal highlight on the profile. Share the wedding date early." },
    { id: "grad", name: "Graduation", blurb: "Sage, blush, and school colours, including the grad bouquets on the feed." },
    { id: "center", name: "Centerpieces", blurb: "Tables, not only handheld bouquets." },
    { id: "bar", name: "Flower bar", blurb: "A build-your-own bar for the event. Ask about staffing and stems." },
    { id: "describe", name: "I will describe it", blurb: "Send a reference and the palette." },
  ],
  wraps: [
    { id: "sage", name: "Sage", blurb: "Green paper for graduation and garden palettes." },
    { id: "blush", name: "Blush", blurb: "Pink paper for soft romantic colour." },
    { id: "cream", name: "Cream", blurb: "White lilies and quiet roses." },
    { id: "black", name: "Black", blurb: "A darker wrap when the flowers are pale." },
  ],
  details: [
    { id: "wedding", name: "Wedding", blurb: "Bridal bouquet and the pieces around it." },
    { id: "grad", name: "Graduation", blurb: "A dated pickup. Say the school colours." },
    { id: "event", name: "Event or flower bar", blurb: "Guest count and the venue area." },
    { id: "just", name: "Just because", blurb: "A bouquet with no holiday attached." },
  ],
  fulfillments: [
    { id: "pickup", name: "Pickup in Durham Region", blurb: "Confirm the window in the DM." },
    { id: "delivery", name: "Delivery in the GTA", blurb: "Share the city. Delivery is arranged in the chat." },
  ],
  gallery: [
    {
      title: "White lilies",
      note: "Lily bouquets from the summer feed. Mood photo, not a client piece.",
      image: "/media/lily.jpg",
      href: "https://www.instagram.com/flourishbykay.co/p/DbJhXLIv38r/",
    },
    {
      title: "Graduation colour",
      note: "Sage and mixed grad bouquets. Open the post for the real wrap.",
      image: "/media/garden.jpg",
      href: "https://www.instagram.com/p/DY7vxm6lKCy/",
    },
    {
      title: "Mixed garden bunches",
      note: "Lisianthus, roses, carnations, and baby’s breath.",
      image: "/media/peony.jpg",
      href: "https://www.instagram.com/flourishbykay.co/p/DawC1Toub-1/",
    },
    {
      title: "Bridal",
      note: "Bridal bouquets live in the highlight. Ask with the date.",
      image: "/media/wedding.jpg",
      href: "https://www.instagram.com/flourishbykay.co/",
    },
  ],
  occasions: [
    { name: "Bridal", note: "Bouquets for the wedding day. Deposit required to hold the date.", image: "/media/white.jpg" },
    { name: "Graduation", note: "School colours, sage, and a pickup that matches the ceremony.", image: "/media/garden.jpg" },
    { name: "Flower bar", note: "Guests build a small bunch. The highlight is on the profile.", image: "/media/sun.jpg" },
  ],
  faqs: [
    {
      q: "How do I book?",
      a: "DM @flourishbykay.co. This site copies a note for you and opens Instagram. It does not take payment.",
    },
    {
      q: "Is there a deposit?",
      a: "Yes. The bio asks for a 50% non-refundable deposit. The amount is confirmed in the DM.",
    },
    {
      q: "Where do you work?",
      a: "Durham Region and the Greater Toronto Area. This is not the Oregon studio that shares a similar name.",
    },
    {
      q: "Do you do events?",
      a: "Yes. Centerpieces and a flower bar are both on the profile highlights.",
    },
    {
      q: "Do you publish prices?",
      a: "No. Colour, size, and the date change the quote, and the quote lives in the chat.",
    },
  ],
  about: [
    "Flourish by Kay is the Durham Region and GTA studio at @flourishbykay.co. The work is luxury floral design: custom bouquets, bridal bouquets, graduation flowers, centerpieces, and a flower bar.",
    "A separate florist in the Pacific Northwest has used the name Flourish by Kay. This site is only the Ontario account: Durham Region and the GTA.",
    "Orders are booked by direct message. The profile states that a 50% non-refundable deposit is required.",
  ],
  policies: [
    "50% non-refundable deposit to hold the order.",
    "Durham Region and GTA only.",
    "No checkout on this website.",
  ],
  quote: {
    text: "Tell her the colour. Kay will build the rest.",
    by: "Durham Region · DM @flourishbykay.co",
  },
  photoCredit: "Mood photographs are stock florals. Finished arrangements are on the public Instagram account.",
};
