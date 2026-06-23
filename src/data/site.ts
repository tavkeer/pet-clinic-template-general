import {
  Activity,
  Award,
  Bone,
  Clock,
  Facebook,
  HeartHandshake,
  HeartPulse,
  Instagram,
  Microscope,
  PawPrint,
  Pill,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Twitter,
  Users,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { unsplash } from "@/lib/utils";

/* ----------------------------------------------------------------------- */
/* Clinic identity                                                          */
/* ----------------------------------------------------------------------- */

export const clinic = {
  name: "PawHaven",
  fullName: "PawHaven Veterinary Clinic",
  tagline: "Compassionate care for every paw, claw and whisker.",
  phone: "+1 (555) 824-7297",
  phoneHref: "tel:+15558247297",
  emergencyPhone: "+1 (555) 911-7297",
  email: "hello@pawhaven.vet",
  emailHref: "mailto:hello@pawhaven.vet",
  address: "248 Maple Grove Avenue, Riverside, CA 92501",
  hours: [
    { day: "Mon – Fri", time: "8:00 AM – 8:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
    { day: "Emergency", time: "24 / 7 On-call" },
  ],
};

export const socials = [
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Shop", href: "#shop" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/* ----------------------------------------------------------------------- */
/* Services                                                                 */
/* ----------------------------------------------------------------------- */

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
};

export const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Wellness Exams",
    description:
      "Thorough nose-to-tail check-ups that catch issues early and keep your companion thriving.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description:
      "Tailored vaccine schedules that protect your pet against preventable disease at every life stage.",
  },
  {
    icon: HeartPulse,
    title: "Emergency & Critical Care",
    description:
      "A 24/7 on-call team and fully equipped ICU ready the moment your pet needs us most.",
    badge: "24/7",
  },
  {
    icon: Scissors,
    title: "Surgery",
    description:
      "From routine spays to advanced soft-tissue procedures, performed with precision and care.",
  },
  {
    icon: Bone,
    title: "Dental Care",
    description:
      "Ultrasonic cleaning, digital dental X-rays and extractions for a healthy, pain-free smile.",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Lab",
    description:
      "In-house bloodwork, ultrasound and digital imaging deliver answers in minutes, not days.",
  },
  {
    icon: Sparkles,
    title: "Grooming & Spa",
    description:
      "Gentle bathing, styling and nail care that leave your pet looking and feeling their best.",
  },
  {
    icon: Pill,
    title: "Nutrition & Wellness",
    description:
      "Personalised diet plans and supplements designed around your pet's breed, age and goals.",
  },
];

/* ----------------------------------------------------------------------- */
/* Stats                                                                    */
/* ----------------------------------------------------------------------- */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of care" },
  { value: 12000, suffix: "+", label: "Happy patients" },
  { value: 24, suffix: "/7", label: "Emergency support" },
  { value: 98, suffix: "%", label: "Owner satisfaction" },
];

/* ----------------------------------------------------------------------- */
/* About / Why choose us                                                    */
/* ----------------------------------------------------------------------- */

export const aboutPoints: string[] = [
  "Fear-free, low-stress handling certified team",
  "State-of-the-art in-house diagnostic laboratory",
  "Transparent pricing with flexible wellness plans",
  "Same-day appointments and online booking",
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChoose: Feature[] = [
  {
    icon: HeartHandshake,
    title: "Compassion First",
    description:
      "We treat every animal like our own — patient, gentle and genuinely caring at every visit.",
  },
  {
    icon: Award,
    title: "Board-Certified Experts",
    description:
      "Our specialists bring decades of combined experience across surgery, dentistry and internal medicine.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Equipment",
    description:
      "Digital imaging, laser therapy and a dedicated surgical suite for the safest possible outcomes.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description:
      "Round-the-clock emergency line and weekend hours, because pets don't keep a 9-to-5 schedule.",
  },
];

/* ----------------------------------------------------------------------- */
/* Shop / Products                                                          */
/* ----------------------------------------------------------------------- */

export type Product = {
  name: string;
  category: "Food" | "Toys" | "Grooming" | "Health" | "Accessories";
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

export const productCategories = [
  "All",
  "Food",
  "Toys",
  "Grooming",
  "Health",
  "Accessories",
] as const;

export const products: Product[] = [
  {
    name: "Premium Grain-Free Dog Food",
    category: "Food",
    price: 48,
    oldPrice: 59,
    rating: 4.9,
    reviews: 312,
    image: unsplash("1589924691995-400dc9ecc119", 600, 600),
    badge: "Best Seller",
  },
  {
    name: "Wild-Caught Salmon Cat Kibble",
    category: "Food",
    price: 39,
    rating: 4.8,
    reviews: 188,
    image: unsplash("1599443015574-be5fe8a05783", 600, 600),
  },
  {
    name: "Plush Chew Toy Bundle",
    category: "Toys",
    price: 24,
    oldPrice: 30,
    rating: 4.7,
    reviews: 96,
    image: unsplash("1591768575198-88dac53fbd0a", 600, 600),
    badge: "New",
  },
  {
    name: "Orthopedic Memory-Foam Bed",
    category: "Accessories",
    price: 72,
    rating: 4.9,
    reviews: 241,
    image: unsplash("1601758124510-52d02ddb7cbd", 600, 600),
  },
  {
    name: "Calming Hemp Wellness Treats",
    category: "Health",
    price: 29,
    rating: 4.8,
    reviews: 154,
    image: unsplash("1535294435445-d7249524ef2e", 600, 600),
  },
  {
    name: "Pro Grooming & Deshed Kit",
    category: "Grooming",
    price: 35,
    oldPrice: 42,
    rating: 4.6,
    reviews: 78,
    image: unsplash("1583511666372-62fc211f8377", 600, 600),
  },
  {
    name: "Reflective Leash & Collar Set",
    category: "Accessories",
    price: 27,
    rating: 4.7,
    reviews: 133,
    image: unsplash("1548681528-6a5c45b66b42", 600, 600),
  },
  {
    name: "Daily Dental Care Chews",
    category: "Health",
    price: 22,
    rating: 4.8,
    reviews: 205,
    image: unsplash("1606214174585-fe31582dc6ee", 600, 600),
    badge: "Vet Pick",
  },
];

/* ----------------------------------------------------------------------- */
/* Team                                                                     */
/* ----------------------------------------------------------------------- */

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Olivia Reyes",
    role: "Chief Veterinarian",
    specialty: "Internal Medicine",
    image: unsplash("1582750433449-648ed127bb54", 500, 600),
  },
  {
    name: "Dr. James Carter",
    role: "Lead Surgeon",
    specialty: "Orthopedic Surgery",
    image: unsplash("1612349317150-e413f6a5b16d", 500, 600),
  },
  {
    name: "Dr. Sarah Bennett",
    role: "Veterinary Dentist",
    specialty: "Dental & Oral Care",
    image: unsplash("1494790108377-be9c29b29330", 500, 600),
  },
  {
    name: "Dr. Marcus Lee",
    role: "Emergency Specialist",
    specialty: "Critical Care",
    image: unsplash("1559839734-2b71ea197ec2", 500, 600),
  },
];

/* ----------------------------------------------------------------------- */
/* Testimonials                                                             */
/* ----------------------------------------------------------------------- */

export type Testimonial = {
  name: string;
  pet: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Emily Watson",
    pet: "Bella's mom 🐕",
    rating: 5,
    quote:
      "The team caught Bella's heart murmur early and walked us through every step. I've never felt so cared for at a vet.",
    avatar: unsplash("1450778869180-41d0601e046e", 120, 120),
  },
  {
    name: "Daniel Okafor",
    pet: "Milo's dad 🐈",
    rating: 5,
    quote:
      "Booked online at midnight during an emergency and Milo was seen within the hour. Truly 24/7 and truly compassionate.",
    avatar: unsplash("1607990281513-2c110a25bd8c", 120, 120),
  },
  {
    name: "Priya Sharma",
    pet: "Coco's mom 🐩",
    rating: 5,
    quote:
      "The grooming spa is incredible and the wellness plan saves us so much. Coco actually gets excited to visit now!",
    avatar: unsplash("1438761681033-6461ffad8d80", 120, 120),
  },
  {
    name: "Marcus Bell",
    pet: "Rocky's dad 🦮",
    rating: 5,
    quote:
      "Rocky's surgery was flawless and the follow-up care was beyond thorough. These people genuinely love animals.",
    avatar: unsplash("1622253692010-333f2da6031d", 120, 120),
  },
  {
    name: "Sofia Martinez",
    pet: "Luna's mom 🐱",
    rating: 5,
    quote:
      "Transparent pricing, zero pressure, and a team that explains everything. Luna is healthier than she's ever been.",
    avatar: unsplash("1544005313-94ddf0286df2", 120, 120),
  },
  {
    name: "Aiden Thompson",
    pet: "Max's dad 🐕‍🦺",
    rating: 5,
    quote:
      "From the fear-free handling to the cozy waiting room, every detail is designed around the animals. Five stars.",
    avatar: unsplash("1500648767791-00dcc994a43e", 120, 120),
  },
];

/* ----------------------------------------------------------------------- */
/* Form options                                                            */
/* ----------------------------------------------------------------------- */

export const petTypes = ["Dog", "Cat", "Bird", "Rabbit", "Reptile", "Other"];

export const serviceOptions = services.map((s) => s.title);

export const timeSlots = [
  "08:00 AM",
  "09:30 AM",
  "11:00 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
  "05:30 PM",
  "07:00 PM",
];

export const trustHighlights = [
  { icon: ShieldCheck, label: "Fear-Free Certified" },
  { icon: Activity, label: "Advanced Diagnostics" },
  { icon: Users, label: "20+ Specialists" },
  { icon: PawPrint, label: "All Species Welcome" },
];
