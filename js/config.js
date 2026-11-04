/* My Nail Paradise — single swappable business constant.
   Every business-specific fact lives here; pages render from it. */
const BUSINESS = {
  name: "My Nail Paradise",
  tagline: "Nails, lashes & spa — one quiet paradise in Hougang.",
  address: "Blk 682 Hougang Ave 4, #01-322, Singapore 530682",
  addressShort: "Blk 682 Hougang Ave 4, #01-322",
  postal: "S(530682)",
  phoneDisplay: "6386 4385",
  phoneHref: "tel:+6563864385",
  whatsappDisplay: "9270 1004",
  whatsappHref: "https://wa.me/6592701004",
  hours: [
    ["Weekdays", "11:00am – 8:30pm"],
    ["Weekends & PH", "10:00am – 6:30pm"]
  ],
  // Verified services (source: business listing, beautynailhairsalons.com, 2026)
  services: [
    "Express Manicure & Pedicure",
    "Classic Manicure & Pedicure",
    "Spa Manicure & Pedicure",
    "Gel & Acrylic Nails",
    "3D & Hand-Painted Nail Art",
    "Callus Eliminator Treatment",
    "Hand & Feet Waxing",
    "Facial",
    "Hair Removal",
    "Lash Extensions",
    "Embroidery"
  ],
  // Real advertised price (source: business listing, 2026)
  advertised: { label: "Lash extensions", price: "$59.90", note: "as advertised" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blk+682+Hougang+Ave+4+%2301-322+Singapore+530682"
};
