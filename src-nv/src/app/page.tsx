import Image from "next/image";
import Link from "next/link";

const CTA_HREF = "/free-estimate";
const CTA_LABEL = "Free Estimate";
const PHONE = "775-686-9109";

const services = [
  { title: "Custom Home Builder", icon: "🏠" },
  { title: "New Construction Design", icon: "📐" },
  { title: "Remodeling & Renovation", icon: "🔨" },
  { title: "Home Additions", icon: "➕" },
  { title: "Kitchen Remodeling", icon: "🍳" },
  { title: "Bathroom Remodeling", icon: "🛁" },
];

const beforeAfterProjects = [
  {
    before: "/gallery-1.png",
    after: "/gallery-2.png",
    title: "Kitchen Transformation",
  },
  {
    before: "/gallery-3.png",
    after: "/gallery-4.png",
    title: "Bathroom Renovation",
  },
  {
    before: "/project-1.webp",
    after: "/project-3.webp",
    title: "Living Space Remodel",
  },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer a wide range of construction and remodeling services including residential and commercial construction, renovations, kitchen and bathroom remodeling, and custom home builds. We also provide project management and consultation services.",
  },
  {
    q: "How do you handle project estimates and billing?",
    a: "We begin with a detailed consultation to understand your project requirements. Based on this, we provide an itemized estimate that outlines all expected costs. Our billing is transparent, with no hidden fees.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, we are fully licensed and insured to provide construction services. Our licensure ensures we adhere to all local, state, and federal regulations, while our insurance protects you and your property throughout the construction process.",
  },
  {
    q: "How long will my project take to complete?",
    a: "The duration depends on your project's scope and complexity. After our initial consultation and site assessment, we provide a detailed timeline. We keep you informed about progress and any factors that might affect the completion date.",
  },
  {
    q: "What makes your company different from other contractors?",
    a: "Our commitment to client satisfaction sets us apart. We take a personalized approach to each project, ensuring open communication and transparency from start to finish. We pride ourselves on innovative solutions and timely completion of projects.",
  },
  {
    q: "Do you handle permits and inspections?",
    a: "Yes, we manage all aspects of permits and inspections. We have extensive experience dealing with local permitting offices and ensure all necessary permits are obtained before starting any work.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <GallerySection />
        <ProcessSection />
        <CredentialsBanner />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/60">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Sierra Ridge Construction"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-zinc-700">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="#services" className="hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#gallery" className="hover:text-accent transition-colors">
            Our Work
          </Link>
          <Link href="#faq" className="hover:text-accent transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="hidden sm:block text-[15px] font-semibold text-zinc-800 hover:text-accent transition-colors"
          >
            {PHONE}
          </a>
          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors shadow-sm"
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-28 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900">
        <Image
          src="/hero-image.webp"
          alt="Custom home interior"
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 via-zinc-900/50 to-zinc-900/80" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-2xl">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Sparks, Nevada
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Building the Future
            <br />
            and Restoring the Past
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10 max-w-xl">
            Your innovative homebuilder serving Northern Nevada, dedicated to
            delivering distinctive living and exceptional construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CTA_HREF}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-lg"
            >
              Get Your {CTA_LABEL}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Comprehensive Home Improvement Services
          </h2>
          <p className="text-slate-light text-lg max-w-2xl mx-auto leading-relaxed">
            From custom home builds to kitchen remodels, our team ensures every
            detail aligns with your vision.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-zinc-200/60 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <span
                className="text-3xl mb-4"
                role="img"
                aria-hidden="true"
              >
                {service.icon}
              </span>
              <h3 className="font-display font-semibold text-foreground text-base">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-sm"
          >
            Get Your {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-24 px-6 bg-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Gallery of Construction Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We are proud of our home improvement projects. See the
            transformations our team delivers.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {beforeAfterProjects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-zinc-800"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={project.before}
                    alt={`${project.title} - Before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-zinc-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={project.after}
                    alt={`${project.title} - After`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-white text-base">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-sm"
          >
            Get Your {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We begin with a detailed consultation to understand your vision, needs, and project scope.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Our team creates tailored designs and plans that bring your vision to life while respecting your budget.",
    },
    {
      step: "03",
      title: "Permit & Prep",
      description:
        "We handle all permits and inspections, ensuring full compliance before breaking ground.",
    },
    {
      step: "04",
      title: "Construction",
      description:
        "Skilled craftsmen bring the plan to life with quality materials and meticulous attention to detail.",
    },
    {
      step: "05",
      title: "Finishing Touches",
      description:
        "We complete every detail and conduct a final walkthrough to ensure your complete satisfaction.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Our Building Process
          </h2>
          <p className="text-slate-light text-lg max-w-2xl mx-auto leading-relaxed">
            A seamless journey from conception to realization. We translate your
            vision into every aspect of your custom home.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-zinc-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-display font-bold text-lg mb-5 relative z-10">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-light text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CredentialsBanner() {
  return (
    <section className="py-16 px-6 bg-warm">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-zinc-200/60 mb-6">
          <svg
            className="w-5 h-5 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <span className="text-sm font-semibold text-foreground">
            Licensed &amp; Fully Insured
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
          Built on Trust, Backed by Credentials
        </h2>
        <p className="text-slate-light text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          We are fully licensed and insured to provide construction services
          throughout Northern Nevada. Our licensing ensures we adhere to all
          local, state, and federal regulations, while our insurance protects
          you and your property at every stage of the project.
        </p>
        <a
          href={CTA_HREF}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-sm"
        >
          Get Your {CTA_LABEL}
        </a>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-zinc-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-foreground font-semibold text-[15px] leading-snug hover:text-accent transition-colors list-none">
                {faq.q}
                <svg
                  className="w-5 h-5 flex-shrink-0 ml-3 text-zinc-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-slate-light text-[15px] leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors shadow-sm"
          >
            Get Your {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0">
        <Image
          src="/project-4.jpeg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
          Start Your Project Today
        </h2>
        <p className="text-zinc-300 text-lg leading-relaxed mb-10">
          Ready to build your dream home? Fill out the contact form and we will be
          in touch as soon as possible.
        </p>
        <a
          href={CTA_HREF}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-5 text-lg font-semibold text-white hover:bg-accent-hover transition-colors shadow-xl"
        >
          Get Your Free Estimate
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="Sierra Ridge Construction"
            width={180}
            height={45}
            className="h-12 w-auto mb-8 brightness-0 invert"
          />
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 text-zinc-400">
            <a
              href={`tel:${PHONE}`}
              className="text-sm hover:text-white transition-colors"
            >
              {PHONE}
            </a>
            <span className="hidden sm:block text-zinc-700">|</span>
            <a
              href="tel:775-412-1815"
              className="text-sm hover:text-white transition-colors"
            >
              775-412-1815
            </a>
            <span className="hidden sm:block text-zinc-700">|</span>
            <a
              href="mailto:service@src-nv.co"
              className="text-sm hover:text-white transition-colors"
            >
              service@src-nv.co
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Our Work
            </Link>
            <Link href="#faq" className="text-sm text-zinc-500 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href={CTA_HREF} className="text-sm text-accent hover:text-white transition-colors font-semibold">
              {CTA_LABEL}
            </Link>
          </div>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Sierra Ridge Construction. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
