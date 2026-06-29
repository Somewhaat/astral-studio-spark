import { createFileRoute } from "@tanstack/react-router";
import logoUrl from "@/assets/halfa-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halfa Media - Video Editing Agency" },
      { name: "description", content: "Stop Editing. Start Growing. All your Reels, YouTube & podcast editing in one subscription. Unlimited revisions, any style. Delivered on time, every time." },
      { property: "og:title", content: "Halfa Media — Unlimited Video Editing" },
      { property: "og:description", content: "We handle the editing while you focus on growing." },
    ],
  }),
  component: Index,
});

const CALENDLY = "https://calendly.com/connecthalfamedia/halfa-media-discovery-call";

const CAPABILITIES = [
  "Video Editing", "Short-Form Edits", "Long-Form Edits", "Reels",
  "YouTube", "Podcasts", "Color Grading", "Sound Design", "Motion Graphics",
];

const SERVICES = [
  { title: "Short-Form Edits", body: "Reels, Shorts, TikToks — punchy cuts engineered for the scroll. As fast as 24 hours." },
  { title: "Long-Form Edits", body: "YouTube videos and podcasts polished end-to-end. As fast as 2 days." },
  { title: "Podcasts", body: "Full podcast production — multicam edits, clean audio, and short-form clips ready to post." },
  { title: "Motion & Sound", body: "Captions, motion graphics, color grade and sound design — built into every edit." },
  { title: "QC & Revisions", body: "Dedicated QC team plus Frame.io revisions returned within 24–48 hours." },
];

const REELS = [
  { id: "1br_jHXgjqdsNE6HX7bkT1ZU-WqXrOe5X", title: "Why Dental Clinics Struggle to Grow", tag: "Healthcare" },
  { id: "1_bMDFsaKgD471VCGNG079OFBlxmH_yw7", title: "POV: Building a SaaS While Working a 9–5", tag: "Founder" },
  { id: "1zyMC7lVLnXxmPzdjhcoM45baHX_PsmWE", title: "Views don’t equal sales", tag: "Marketing" },
  { id: "1IUZsd8hVjxVQSndWYXTNUTxlAEGMoBIx", title: "Stop chasing balance so early", tag: "Mindset" },
  { id: "1EKAnMoy3CpJEnD278UHCDc_kSZNIZe46", title: "Lead Gen Systems That Actually Work", tag: "Agency" },
  { id: "1zMg93XaBNjVnSV0Bj-hCAztPy5zB5VYV", title: "Best Sales Lesson I’ve Ever Learned", tag: "Sales" },
  { id: "1zlT8ZKQAEY0BU-19DkTlkhvg47nLEHnJ", title: "Locked in.", tag: "Personal Brand" },
  { id: "1GUM7aM6W4sn7c5wtSF8KtoKrrdnh-Zyj", title: "5 Areas to Start in Real Estate", tag: "Real Estate" },
  { id: "1XKjNzKmLmFmIdcXjzWuTlcp35B097tgH", title: "You Don’t Deserve Success If You Can’t Do This", tag: "Mindset" },
];

const STATS = [
  { num: "40+", label: "Clients" },
  { num: "1000+", label: "Videos Delivered" },
  { num: "5x", label: "Avg. Engagement Growth" },
];

const TESTIMONIALS = [
  { name: "The Code Bender", role: "Founder & Creator", video: "https://res.cloudinary.com/duldt7yoj/video/upload/v1782711486/code-bender_c3b5lq.mp4" },
  { name: "Gary Gill", role: "Entrepreneur", video: "https://res.cloudinary.com/duldt7yoj/video/upload/v1782711458/gary-gill_i9wvvn.mp4" },
  { name: "Riley Romacker", role: "Content Creator", video: "https://res.cloudinary.com/duldt7yoj/video/upload/v1782711440/riley-romacker_atqopm.mp4" },
];

const FAQ = [
  { q: "What happens when I don't like the video?", a: "Just drop a comment on Frame.io telling us exactly what you want changed and we'll have the updated version back to you within 24 to 48 hours." },
  { q: "What if the turnaround is too slow for my schedule?", a: "We have plans for that. Long-form as fast as 2 days, short-form as fast as 24 hours. Whether you post every day or once a week, we've got you covered." },
  { q: "What if I already have an editor?", a: "Keep using him as long as he delivers on time, gets you the style you need and you don't have to micromanage him. If he misses deadlines and you're constantly writing briefs — that's not an editor, that's a second job." },
  { q: "What if I want to cancel?", a: "Simply let us know 7 days prior to your next bill date. No long-term contracts, no lock-in." },
  { q: "Who's actually behind the edits?", a: "A complete team — editors, a Quality Control team, a project manager, and automation handling the pipeline behind the scenes." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoUrl} alt="Halfa Media" className="h-9 w-auto" />
          <span className="font-display text-xl tracking-wide">HALFA MEDIA</span>
        </a>
        <a href={CALENDLY} target="_blank" rel="noreferrer"
          className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition">
          Book a Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          1000+ Videos Edited
        </span>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] uppercase">
          Unlimited Video <br />
          Editing With A <br />
          <span className="text-primary">Single Subscription.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          We handle the editing while you focus on growing.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={CALENDLY} target="_blank" rel="noreferrer"
            className="rounded-full bg-primary text-primary-foreground px-7 py-3 font-semibold hover:opacity-90 transition">
            Book a Free Call
          </a>
          <a href="#work"
            className="rounded-full border border-border px-7 py-3 font-semibold hover:bg-secondary transition">
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <div className="border-y border-border py-6 overflow-hidden bg-secondary/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {items.map((c, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl uppercase text-muted-foreground flex items-center gap-12">
            {c}
            <span className="text-primary">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Capabilities</span>
          <h2 className="font-display text-5xl md:text-7xl uppercase mt-3">What We Do</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <div key={s.title}
            className={`rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition ${i === 0 ? "lg:col-span-2" : ""}`}>
            <div className="text-xs text-primary font-semibold mb-4">0{i + 1}</div>
            <h3 className="font-display text-3xl uppercase mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Work</span>
        <h2 className="font-display text-5xl md:text-7xl uppercase mt-3">Reels That Hit</h2>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Hook-first edits engineered for the scroll. Pulled from live client accounts.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REELS.map((r) => (
          <figure key={r.id} className="group rounded-2xl overflow-hidden border border-border bg-card">
            <div className="aspect-[9/16] w-full bg-black">
              <iframe
                src={`https://drive.google.com/file/d/${r.id}/preview`}
                allow="autoplay"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
                title={r.title}
              />
            </div>
            <figcaption className="p-5">
              <div className="text-xs uppercase tracking-widest text-primary mb-2">{r.tag}</div>
              <div className="font-semibold">{r.title}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Receipts</span>
        <h2 className="font-display text-5xl md:text-7xl uppercase mt-3 mb-14">Results, Not Reports</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-6xl md:text-8xl text-primary">{s.num}</div>
              <div className="mt-2 text-muted-foreground uppercase tracking-wider text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Word of Mouth</span>
      <h2 className="font-display text-5xl md:text-7xl uppercase mt-3 mb-14">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-6 justify-items-center">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="rounded-2xl border border-border bg-card overflow-hidden w-full max-w-sm">
            <div className="aspect-[9/16] w-full bg-black">
              <video
                src={t.video}
                controls
                preload="metadata"
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="p-6">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Questions</span>
      <h2 className="font-display text-5xl md:text-7xl uppercase mt-3 mb-12">Frequently Asked</h2>
      <div className="divide-y divide-border border-y border-border">
        {FAQ.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-lg">
              {item.q}
              <span className="ml-4 text-primary text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.95]">
          Ready to Scale <br />
          <span className="text-primary">Your Content?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Book a free call and let's get your content engine running.
        </p>
        <a href={CALENDLY} target="_blank" rel="noreferrer"
          className="inline-block mt-8 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:opacity-90 transition">
          Book a Free Call
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt="Halfa Media" className="h-7 w-auto" />
          <span className="font-display tracking-wide">HALFA MEDIA</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/salmans_work/" target="_blank" rel="noreferrer" className="hover:text-primary transition">Instagram</a>
          <span>© {new Date().getFullYear()} Halfa Media. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
