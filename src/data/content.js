/* -------------------------------------------------------------------------
   Site content — every string in the landing page lives here so the page is
   trivially editable. Loaded as a classic script, so the values are globals.
   ------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Help", href: "#help" },
];

const STATS = [
  { value: "90+", label: "Users", icon: "users" },
  { value: "30+", label: "Locations", icon: "location" },
  { value: "50+", label: "Servers", icon: "servers" },
];

const FEATURES = [
  "Powerful online protection.",
  "Internet without borders.",
  "Supercharged VPN.",
  "No specific time limits.",
];

/* `art` points at the original artwork of the project's assets folder. */
const PLANS = [
  {
    id: "basic",
    name: "Free Plan",
    art: "Free.png",
    price: "Free",
    period: "",
    featured: false,
    perks: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",
    art: "Standard.png",
    price: "$9",
    period: "/ mo",
    featured: false,
    perks: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    art: "Premium.png",
    price: "$12",
    period: "/ mo",
    featured: true,
    perks: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  },
];

const BRANDS = ["netflix", "reddit", "amazon", "discord", "spotify"];

const REVIEWS = [
  {
    id: "r1",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    avatar: "a1",
    photo: "Viezh Robert.png",
    text:
      "\u201CWow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best\u201D.",
    active: true,
  },
  {
    id: "r2",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    avatar: "a2",
    photo: "Yessica Christy.png",
    text:
      "\u201CI like it because I like to travel far and still can connect with high speed.\u201D.",
    active: false,
  },
  {
    id: "r3",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    avatar: "a3",
    photo: "Kim Young Jou.png",
    text:
      "\u201CThis is very unusual for my business that currently requires a virtual private network that has high security.\u201D.",
    active: false,
  },
  {
    id: "r4",
    name: "Alexandra Moon",
    location: "Berlin, Germany",
    rating: "4.5",
    avatar: "a4",
    text:
      "\u201CThe speed is stable even during peak hours and the app is genuinely simple to set up.\u201D.",
    active: false,
  },
  {
    id: "r5",
    name: "Diego Alvarez",
    location: "Madrid, Spain",
    rating: "4.5",
    avatar: "a5",
    text:
      "\u201CSupport answered in minutes and every server I tried was fast and reliable.\u201D.",
    active: false,
  },
  {
    id: "r6",
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    rating: "4.5",
    avatar: "a6",
    text:
      "\u201CSwitching between countries takes one tap and my connection never dropped once.\u201D.",
    active: false,
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    title: "Engage",
    links: ["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Earn Money",
    links: ["Affiliate", "Become Partner"],
  },
];
