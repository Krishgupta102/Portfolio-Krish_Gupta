"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Server,
  ShieldCheck,
  Code2,
  Terminal,
  Layers3,
  BarChart3,
  FileText,
  CheckCircle2,
  Menu,
  X,
  Copy,
} from "lucide-react";
import { useEffect, useState } from "react";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Java", "Python", "C"],
  Frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Middleware"],
  Database: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQL"],
  DevOps: [
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "GitHub Actions",
    "Linux",
    "Bash",
    "Render",
  ],
  "Core CS": [
    "DSA",
    "OOP",
    "DBMS",
    "System Design",
    "TCP/IP & Networking",
  ],
};

const projects = [
  {
    name: "Stocker",
    label: "Featured · Main Project",
    description:
      "A Dockerized MERN trading simulation platform with portfolio tracking, secure authentication and live market-data integration.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Docker",
      "Render",
    ],
    icon: BarChart3,
    gradient: "from-blue-500/25 to-cyan-500/10",
    features: [
      "Buy / sell trading simulation",
      "Portfolio tracking and visualizations",
      "Firebase authentication",
      "Yahoo Finance market-data integration",
      "Dockerized deployment on Render",
    ],
    code: `Market API
→ fetch live market data
→ Express API
→ trading + portfolio logic
→ MongoDB
→ React dashboard`,
  },
  {
    name: "InvoiceFlow",
    label: "SaaS · Full Stack",
    description:
      "A production-ready multi-tenant invoice management platform for organizations to manage customers, products, invoices and payments.",
    stack: [
      "Next.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    icon: FileText,
    gradient: "from-violet-500/20 to-blue-500/10",
    features: [
      "Multi-tenant architecture",
      "RBAC + JWT refresh tokens",
      "GST, discounts & automatic invoice numbering",
      "PDF generation + email delivery",
      "Revenue, invoice and payment analytics",
    ],
    code: `POST /api/invoices
→ validate tenant + role
→ calculate GST / discounts
→ persist with Prisma
→ generate PDF
→ email via Nodemailer`,
  },
  {
    name: "Job Application Tracker",
    label: "AI · Cloud Native",
    description:
      "A Next.js job application platform with AI-powered resume analysis, relational data modeling and Kubernetes deployment.",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Kubernetes",
    ],
    icon: Layers3,
    gradient: "from-emerald-500/15 to-cyan-500/10",
    features: [
      "Personalized dashboard",
      "Gemini resume analysis",
      "Skill-gap recommendations",
      "Multi-replica Kubernetes deployment",
      "GitHub Actions CI/CD",
    ],
    code: `GitHub
→ GitHub Actions
→ Docker image
→ Kubernetes
→ Next.js + API + DB`,
  },
];

/*
  IMPORTANT:
  No opacity animation here.

  The previous Reveal component used:
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}

  We're only animating vertical movement now.
  This prevents the entire hero from appearing washed out/dim.
*/
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </h2>

      {text && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
          {text}
        </p>
      )}
    </Reveal>
  );
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();

        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", key);

    return () => window.removeEventListener("keydown", key);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "krishgupta77424@gmail.com"
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* Scroll progress */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{ scaleX }}
      />

      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-1/2 top-4 z-50 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-[#090909]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">

        <a
          href="#home"
          className="flex items-center gap-2 font-display font-bold text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-sm text-black">
            KG
          </span>

          <span className="hidden sm:block">
            Krish Gupta
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          {[
            "About",
            "Skills",
            "Experience",
            "Projects",
            "Contact",
          ].map((x) => (
            <a
              key={x}
              href={`#${x.toLowerCase()}`}
              className="transition hover:text-white"
            >
              {x}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
            className="hidden rounded-lg border border-white/10 px-3 py-2 text-xs text-zinc-200 transition hover:bg-white/10 md:block"
          >
            ⌘ K
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 sm:block"
          >
            Let's talk
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menu && (
          <div className="absolute left-0 right-0 top-16 rounded-2xl border border-white/10 bg-[#090909] p-4 shadow-2xl md:hidden">
            {[
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((x) => (
              <a
                onClick={() => setMenu(false)}
                key={x}
                href={`#${x.toLowerCase()}`}
                className="block rounded-xl px-4 py-3 text-zinc-200 hover:bg-white/5"
              >
                {x}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#050505]"
      >

        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

        {/* Blue ambient glow */}
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="relative mx-auto grid min-h-screen max-w-6xl items-center px-5 pb-20 pt-36 md:grid-cols-[1.15fr_.85fr] md:px-8">

          {/* LEFT */}

          <div className="relative z-10">

            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                Open to Full Stack & DevOps opportunities
              </div>
            </Reveal>

            <Reveal>

              <p className="mb-4 font-mono text-sm font-medium text-blue-400">
                FULL STACK DEVELOPER · DEVOPS ENGINEER
              </p>

              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white md:text-7xl lg:text-8xl">

                Building software that{" "}

                <span className="text-gradient">
                  scales.
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-base font-normal leading-7 text-zinc-200 md:text-lg">
                I build polished web products, secure APIs and
                cloud-native systems using React, Next.js,
                Node.js, PostgreSQL, Docker, Kubernetes and CI/CD.
              </p>

            </Reveal>

            {/* Buttons */}

            <Reveal className="mt-9 flex flex-wrap gap-3">

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
              >
                Explore my work

                <ArrowUpRight size={17} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Download size={17} />

                Resume
              </a>

              <a
                href="https://github.com/Krishgupta102"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-zinc-200 transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/krish-gupta-657b01244"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 bg-white/[0.03] text-zinc-200 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

            </Reveal>

            {/* Stats */}

            <Reveal className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/10 pt-6">

              <div>
                <p className="text-lg font-semibold text-white">
                  8.40
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  CGPA
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  3
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Featured projects
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  2
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Certifications
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  2027
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Graduation
                </p>
              </div>

            </Reveal>

          </div>

          {/* RIGHT CODE CARD */}

          <Reveal className="relative z-10 mt-14 md:mt-0">

            <div className="relative mx-auto aspect-square max-w-[480px]">

              {/* Glow */}

              <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Outer */}

              <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-2xl">

                {/* Inner */}

                <div className="h-full rounded-[1.5rem] border border-white/10 bg-[#090909] p-5">

                  {/* Terminal header */}

                  <div className="flex items-center justify-between">

                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                    </div>

                    <span className="font-mono text-[10px] text-zinc-500">
                      krish@portfolio ~
                    </span>

                  </div>

                  {/* Code */}

                  <pre className="mt-6 overflow-hidden font-mono text-[11px] leading-5 text-zinc-300">
{`const engineer = {
  name: "Krish Gupta",
  focus: ["Full Stack", "DevOps"],
  frontend: ["React", "Next.js"],
  backend: ["Node.js", "Express"],
  data: ["PostgreSQL", "MongoDB"],
  cloud: ["Docker", "Kubernetes"],
  delivery: "GitHub Actions"
};`}
                  </pre>

                  <p className="mt-5 font-mono text-[10px] text-zinc-500">
                    // build → ship → improve
                  </p>

                  {/* Tech cards */}

                  <div className="mt-7 grid grid-cols-2 gap-3">

                    {[
                      ["API", "REST + JWT"],
                      ["DATA", "Postgres + Prisma"],
                      ["OPS", "Docker + K8s"],
                      ["CI/CD", "GitHub Actions"],
                    ].map(([a, b]) => (
                      <div
                        key={a}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
                      >
                        <p className="font-mono text-[9px] text-blue-400">
                          {a}
                        </p>

                        <p className="mt-1 text-xs font-medium text-zinc-200">
                          {b}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="mx-auto max-w-6xl px-5 py-28 md:px-8"
      >

        <SectionTitle
          eyebrow="01 / About"
          title="Engineer first. Product minded."
          text="I enjoy taking ideas from a clean interface to a reliable backend and then making deployment boring through automation."
        />

        <div className="grid gap-5 md:grid-cols-3">

          <Reveal className="md:col-span-2 glass glow rounded-3xl p-7 md:p-9">

            <p className="text-lg leading-8 text-zinc-200">
              I&apos;m an Integrated M.Tech Computer Science
              undergraduate at VIT-AP University with hands-on
              experience across full-stack development, REST APIs
              and DevOps workflows. My work combines
              product-focused UI with secure services, relational
              data modeling and containerized deployments.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              {[
                ["Build", "React · Next.js · Node"],
                ["Scale", "Docker · Kubernetes"],
                ["Ship", "GitHub Actions · Linux"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {a}
                  </p>

                  <p className="mt-1 text-xs text-zinc-400">
                    {b}
                  </p>
                </div>
              ))}

            </div>

          </Reveal>

          <Reveal className="glass rounded-3xl p-7">

            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Currently
            </p>

            <p className="mt-4 text-2xl font-semibold text-white">
              Pre-final year
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Integrated M.Tech · Computer Science
            </p>

            <div className="my-7 h-px bg-white/10" />

            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              University
            </p>

            <p className="mt-4 text-lg font-semibold text-white">
              VIT-AP University
            </p>

            <p className="mt-2 text-sm text-zinc-400">
              Expected June 2027
            </p>

          </Reveal>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="mx-auto max-w-6xl px-5 py-20 md:px-8"
      >

        <SectionTitle
          eyebrow="02 / Stack"
          title="Tools I build with."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {Object.entries(skills).map(
            ([category, items], i) => (
              <Reveal
                key={category}
                className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-blue-400/20"
              >

                <div className="mb-5 flex items-center justify-between">

                  <h3 className="font-display text-xl font-semibold text-white">
                    {category}
                  </h3>

                  <span className="font-mono text-[10px] text-zinc-500">
                    0{i + 1}
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-200"
                    >
                      {s}
                    </span>
                  ))}

                </div>

              </Reveal>
            )
          )}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="mx-auto max-w-6xl px-5 py-28 md:px-8"
      >

        <SectionTitle
          eyebrow="03 / Experience"
          title="Where I&apos;ve learned by building."
        />

        <div className="space-y-4">

          <Reveal className="glass rounded-3xl p-7 md:p-9">

            <div className="grid gap-8 md:grid-cols-[180px_1fr_auto]">

              <div>
                <p className="font-mono text-xs text-zinc-400">
                  DEC 2024 — JAN 2025
                </p>

                <p className="mt-2 text-sm text-blue-400">
                  Internship
                </p>
              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  ML Intern · Infosys Springboard
                </h3>

                <p className="mt-4 leading-7 text-zinc-300">
                  Designed an AI-driven patient follow-up
                  system, performed data preprocessing and
                  feature engineering with Python and Pandas,
                  and evaluated models using cross-validation
                  and performance metrics.
                </p>

              </div>

              <span className="hidden h-10 w-10 place-items-center rounded-xl border border-white/10 md:grid">
                <Code2 size={17} />
              </span>

            </div>

          </Reveal>

          <Reveal className="glass rounded-3xl p-7 md:p-9">

            <div className="grid gap-8 md:grid-cols-[180px_1fr_auto]">

              <div>
                <p className="font-mono text-xs text-zinc-400">
                  DEC 2023 — MAY 2025
                </p>

                <p className="mt-2 text-sm text-cyan-400">
                  Technical Team
                </p>
              </div>

              <div>

                <h3 className="text-2xl font-semibold text-white">
                  Lit-Dac · Data Analytics Club
                </h3>

                <p className="mt-4 leading-7 text-zinc-300">
                  Led technical execution for IPL-Databid and
                  campus hackathons, improving participation by
                  40%, while managing coding assessments,
                  contest operations and evaluation workflows
                  for 200+ participants.
                </p>

              </div>

              <span className="hidden h-10 w-10 place-items-center rounded-xl border border-white/10 md:grid">
                <Terminal size={17} />
              </span>

            </div>

          </Reveal>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="mx-auto max-w-6xl px-5 py-28 md:px-8"
      >

        <SectionTitle
          eyebrow="04 / Selected work"
          title="Projects with engineering depth."
          text="I prefer projects where the UI is only one layer: architecture, authentication, data, deployment and developer experience matter too."
        />

        <div className="space-y-8">

          {projects.map((p, idx) => {

            const Icon = p.icon;

            return (
              <Reveal key={p.name}>

                <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">

                  <div className="grid lg:grid-cols-[1.05fr_.95fr]">

                    {/* Preview */}

                    <div
                      className={`relative min-h-[440px] overflow-hidden bg-gradient-to-br ${p.gradient} p-6 md:p-9`}
                    >

                      <div className="absolute inset-0 grid-bg opacity-30" />

                      <div className="relative h-full rounded-2xl border border-white/10 bg-[#080808]/95 p-5 shadow-2xl">

                        <div className="flex items-center justify-between border-b border-white/10 pb-4">

                          <div className="flex items-center gap-2">

                            <Icon
                              size={16}
                              className="text-blue-400"
                            />

                            <span className="text-sm font-medium text-white">
                              {p.name}
                            </span>

                          </div>

                          <span className="rounded-full border border-white/10 px-2 py-1 font-mono text-[9px] text-zinc-400">
                            PRODUCT PREVIEW
                          </span>

                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-2">

                          {p.name === "Stocker"
                            ? [
                                ["MARKET", "Live data"],
                                ["TRADES", "Buy / Sell"],
                                ["PORTFOLIO", "Tracking"],
                              ].map(([x, y]) => (
                                <div
                                  key={x}
                                  className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
                                >
                                  <p className="text-[9px] text-blue-400">
                                    {x}
                                  </p>

                                  <p className="mt-1 text-xs font-medium text-zinc-200">
                                    {y}
                                  </p>
                                </div>
                              ))
                            : p.name === "InvoiceFlow"
                            ? [
                                ["GST", "Calculated"],
                                ["PDF", "Generated"],
                                ["EMAIL", "Delivered"],
                              ].map(([x, y]) => (
                                <div
                                  key={x}
                                  className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
                                >
                                  <p className="text-[9px] text-blue-400">
                                    {x}
                                  </p>

                                  <p className="mt-1 text-xs font-medium text-zinc-200">
                                    {y}
                                  </p>
                                </div>
                              ))
                            : [
                                ["TRACK", "Applications"],
                                ["AI", "Resume analysis"],
                                ["DEPLOY", "Kubernetes"],
                              ].map(([x, y]) => (
                                <div
                                  key={x}
                                  className="rounded-xl border border-white/10 bg-white/[0.025] p-3"
                                >
                                  <p className="text-[9px] text-blue-400">
                                    {x}
                                  </p>

                                  <p className="mt-1 text-xs font-medium text-zinc-200">
                                    {y}
                                  </p>
                                </div>
                              ))}

                        </div>

                        <div className="mt-4 rounded-xl border border-white/10 p-4">

                          <div className="mb-4 flex items-center justify-between">

                            <p className="text-xs font-medium text-zinc-200">
                              {p.name === "Stocker"
                                ? "Portfolio activity"
                                : p.name === "InvoiceFlow"
                                ? "Invoice workflow"
                                : "Application pipeline"}
                            </p>

                            <span className="rounded-md border border-white/10 px-2 py-1 font-mono text-[8px] text-zinc-400">
                              INTERACTIVE PREVIEW
                            </span>

                          </div>

                          <div className="space-y-2">

                            {(p.name === "Stocker"
                              ? [
                                  "Market data →",
                                  "Buy / Sell →",
                                  "Portfolio tracking",
                                ]
                              : p.name === "InvoiceFlow"
                              ? [
                                  "Create invoice →",
                                  "Calculate GST →",
                                  "Generate PDF →",
                                  "Send email",
                                ]
                              : [
                                  "Add application →",
                                  "Analyze resume →",
                                  "Track progress →",
                                  "Deploy at scale",
                                ]
                            ).map((step, j) => (
                              <div
                                key={step}
                                className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                              >
                                <span className="font-mono text-[9px] text-blue-400">
                                  0{j + 1}
                                </span>

                                <span className="text-[10px] text-zinc-300">
                                  {step}
                                </span>
                              </div>
                            ))}

                          </div>

                        </div>

                        <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[9px] leading-5 text-zinc-300">

                          {p.code
                            .split("\n")
                            .map((line, j) => (
                              <div key={j}>
                                <span className="mr-3 text-zinc-600">
                                  {String(j + 1).padStart(2, "0")}
                                </span>

                                {line}
                              </div>
                            ))}

                        </div>

                      </div>

                    </div>

                    {/* Description */}

                    <div className="flex flex-col justify-between p-7 md:p-10">

                      <div>

                        <div className="flex items-center gap-3">

                          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                            {p.label}
                          </span>

                          <span className="font-mono text-xs text-zinc-500">
                            0{idx + 1}
                          </span>

                        </div>

                        <h3 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white">
                          {p.name}
                        </h3>

                        <p className="mt-4 leading-7 text-zinc-300">
                          {p.description}
                        </p>

                        <div className="mt-7 space-y-3">

                          {p.features.map((f) => (
                            <div
                              key={f}
                              className="flex gap-3 text-sm text-zinc-200"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-0.5 shrink-0 text-blue-400"
                              />

                              {f}
                            </div>
                          ))}

                        </div>

                      </div>

                      <div className="mt-8">

                        <div className="mb-5 flex flex-wrap gap-2">

                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-white/10 px-2.5 py-1 text-[10px] text-zinc-300"
                            >
                              {s}
                            </span>
                          ))}

                        </div>

                        <div className="flex flex-wrap gap-3">

                          {p.name === "Stocker" && (
                            <a
                              href="https://stocker-frontend-51mf.onrender.com"
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black"
                            >
                              Live Demo

                              <ExternalLink size={15} />
                            </a>
                          )}

                          <a
                            href={
                              p.name === "Stocker"
                                ? "https://github.com/Krishgupta102"
                                : p.name === "InvoiceFlow"
                                ? "https://github.com/Krishgupta102/InvoiceFlow"
                                : "https://github.com/Krishgupta102/JobApplicationTracker"
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-200 hover:bg-white/5"
                          >
                            GitHub

                            <Github size={15} />
                          </a>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              </Reveal>
            );
          })}

        </div>

      </section>

      {/* ================= WORKFLOW ================= */}

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">

        <Reveal className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/[0.10] to-cyan-500/[0.04] p-7 md:p-10">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
                Engineering workflow
              </p>

              <h3 className="mt-3 font-display text-3xl font-semibold text-white">
                Plan → Build → Containerize → Automate → Ship
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
                From product requirements to maintainable APIs and
                repeatable deployments.
              </p>

            </div>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-300">

              {[
                "Git",
                "CI/CD",
                "Docker",
                "Kubernetes",
                "Production",
              ].map((x, i) => (
                <div
                  key={x}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                >
                  <span className="text-blue-400">
                    0{i + 1}
                  </span>

                  {x}
                </div>
              ))}

            </div>

          </div>

        </Reveal>

      </section>

      {/* ================= EDUCATION ================= */}

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">

        <SectionTitle
          eyebrow="05 / Credentials"
          title="Education & certifications."
        />

        <div className="grid gap-4 md:grid-cols-3">

          {[
            [
              "Oracle Cloud Infrastructure 2025",
              "Certified Generative AI Professional",
              "Oracle",
            ],
            [
              "MongoDB Associate Developer",
              "Associate Developer Certification",
              "MongoDB",
            ],
            [
              "VIT-AP University",
              "Integrated M.Tech in Computer Science · CGPA 8.40",
              "Expected June 2027",
            ],
          ].map(([a, b, c], i) => (
            <Reveal
              key={a}
              className="glass rounded-2xl p-6"
            >

              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                <ShieldCheck size={18} />
              </div>

              <p className="text-xs text-zinc-400">
                0{i + 1}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {a}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-300">
                {b}
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-blue-400">
                {c}
              </p>

            </Reveal>
          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="mx-auto max-w-6xl px-5 py-28 md:px-8"
      >

        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-7 md:p-12">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
              06 / Contact
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">
                great.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-zinc-300">
              I&apos;m open to Full Stack, Backend and DevOps
              internship opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black"
              >
                {copied ? (
                  <CheckCircle2 size={17} />
                ) : (
                  <Copy size={17} />
                )}

                {copied ? "Copied" : "Copy email"}
              </button>

              <a
                href="mailto:krishgupta77424@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-zinc-200 hover:bg-white/5"
              >
                <Mail size={17} />

                Email me
              </a>

            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">

              <a
                href="mailto:krishgupta77424@gmail.com"
                className="glass rounded-xl p-4"
              >
                <Mail
                  size={16}
                  className="text-blue-400"
                />

                <p className="mt-3 text-xs text-zinc-400">
                  Email
                </p>

                <p className="mt-1 text-sm text-white">
                  krishgupta77424@gmail.com
                </p>
              </a>

              <a
                href="tel:+917742451096"
                className="glass rounded-xl p-4"
              >
                <Phone
                  size={16}
                  className="text-blue-400"
                />

                <p className="mt-3 text-xs text-zinc-400">
                  Phone
                </p>

                <p className="mt-1 text-sm text-white">
                  +91 7742451096
                </p>
              </a>

              <div className="glass rounded-xl p-4">

                <Server
                  size={16}
                  className="text-blue-400"
                />

                <p className="mt-3 text-xs text-zinc-400">
                  Focus
                </p>

                <p className="mt-1 text-sm text-white">
                  Full Stack · DevOps
                </p>

              </div>

            </div>

          </div>

        </Reveal>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 px-5 py-8 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between md:px-8">

        <p>
          © 2026 Krish Gupta. Designed & engineered with Next.js.
        </p>

        <div className="flex gap-5">

          <a
            href="#home"
            className="hover:text-white"
          >
            Back to top
          </a>

          <a
            href="https://github.com/Krishgupta102"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/krish-gupta-657b01244"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </main>
  );
}