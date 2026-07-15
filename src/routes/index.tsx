import { createFileRoute } from "@tanstack/react-router";
import kraitWhite from "@/assets/krait-white.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const TG_URL = "https://t.me/kraitrampbot";

const ASSETS = [
  { sym: "USDT", name: "Tether" },
  { sym: "BTC", name: "Bitcoin" },
  { sym: "ETH", name: "Ethereum" },
  { sym: "BNB", name: "BNB" },
  { sym: "SOL", name: "Solana" },
  { sym: "LTC", name: "Litecoin" },
  { sym: "TRX", name: "Tron" },
  { sym: "USDC", name: "USD Coin" },
  { sym: "MATIC", name: "Polygon" },
  { sym: "TON", name: "Toncoin" },
];

const NETWORKS = ["ERC20", "TRC20", "BEP20", "Polygon", "Solana", "TON", "Arbitrum", "Optimism", "Base", "Bitcoin", "Litecoin", "Tron"];

const FAQS = [
  {
    q: "What does Krait cost?",
    a: "A flat 3% markup on the settlement rate. No hidden fees, no withdrawal charges, no network surcharges added on top.",
  },
  {
    q: "Which Nigerian banks are supported?",
    a: "All commercial banks and most fintech accounts — GTBank, Access, Zenith, UBA, First Bank, Kuda, Opay, PalmPay, Moniepoint and more. If your bank runs on NIBSS, it works.",
  },
  {
    q: "Do I need to create an account or upload documents?",
    a: "No sign-up forms. You start the bot on Telegram, add a payout account once, and you're trading. That's it.",
  },
  {
    q: "How is my crypto and payout secured?",
    a: "Every trade is quoted, locked, and settled through automated infrastructure — no manual middlemen touching funds. Payout accounts are bound to your Telegram identity.",
  },
  {
    q: "What if settlement takes longer than 5 minutes?",
    a: "You get a bonus on the trade. The guarantee is written into how the bot operates, not a marketing line.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Assets />
        <Guarantee />
        <Referral />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return <img src={kraitWhite.url} alt="Krait" className={className} />;
}

function TelegramButton({
  children = "Start on Telegram",
  variant = "primary",
  size = "md",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 whitespace-nowrap";
  const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_10px_40px_-10px_var(--krait)]",
    ghost:
      "border border-border text-foreground hover:bg-secondary hover:border-foreground/20",
  };
  return (
    <a href={TG_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${sizes[size]} ${variants[variant]}`}>
      <TelegramIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-auto" />
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#assets" className="hover:text-foreground transition-colors">Assets</a>
          <a href="#referral" className="hover:text-foreground transition-colors">Referral</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <TelegramButton size="md">Open bot</TelegramButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--krait) 22%, transparent), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" style={{ background: "var(--neon)" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "var(--neon)" }} />
            </span>
            <span>Live on Telegram · @kraitrampbot</span>
          </div>

          <h1 className="mt-8 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Sell crypto.<br />
            Get naira in{" "}
            <span className="relative inline-block">
              <span style={{ color: "var(--neon)" }}>under 5 minutes.</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground md:text-xl">
            Krait is a Telegram bot that settles USDT, BTC, ETH and more directly to your Nigerian bank account. No sign-up forms. No waiting.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <TelegramButton size="lg">Start on Telegram</TelegramButton>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              See how it works →
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-border/60 pt-8 text-left">
            <Stat value="< 5 min" label="Settlement, guaranteed" />
            <Stat value="10+" label="Cryptocurrencies" />
            <Stat value="3%" label="Flat markup, no extras" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold md:text-3xl" style={{ color: "var(--krait)" }}>{value}</div>
      <div className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Send crypto to the bot", desc: "Pick your asset and network. Krait quotes a locked rate and gives you a one-time deposit address." },
    { n: "02", title: "Auto-settle on-chain", desc: "The moment your transaction confirms, settlement kicks off automatically. No approvals, no manual review." },
    { n: "03", title: "Naira lands in your bank", desc: "Payout hits the Nigerian bank account you set once. Under 5 minutes, every time." },
  ];
  return (
    <section id="how" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="How it works" title="Three steps. No forms in between." />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="group relative rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
              <div className="font-mono text-xs" style={{ color: "var(--krait)" }}>{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Assets() {
  return (
    <section id="assets" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Supported assets"
          title="10+ cryptocurrencies. 12+ networks."
          subtitle="If it's liquid, Krait probably takes it. If it isn't, ask us."
        />
        <div className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {ASSETS.map((a) => (
            <div key={a.sym} className="rounded-xl border border-border bg-card px-4 py-5">
              <div className="font-display text-lg font-semibold">{a.sym}</div>
              <div className="mt-1 text-xs text-muted-foreground">{a.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {NETWORKS.map((n) => (
            <span key={n} className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs text-muted-foreground">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: "color-mix(in oklab, var(--neon) 20%, transparent)" }}
          />
          <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The 5-minute promise</div>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl">
                Under 5 minutes,<br />
                or we pay you a bonus.
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Every trade is timed. If naira doesn't hit your account inside the window, Krait automatically adds a bonus to your settlement. No claims form, no waiting on support.
              </p>
              <div className="mt-8">
                <TelegramButton size="lg">Try it now</TelegramButton>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-background p-6 font-mono text-sm">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>trade_a91f</span>
                  <span style={{ color: "var(--neon)" }}>● settled</span>
                </div>
                <div className="mt-4 space-y-2">
                  <Row k="deposit" v="250 USDT · TRC20" />
                  <Row k="rate" v="₦ 1,612 / USDT" />
                  <Row k="payout" v="₦ 403,000" hi />
                  <Row k="bank" v="GTBank · **** 4421" />
                </div>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-muted-foreground">settlement time</span>
                    <span className="text-2xl" style={{ color: "var(--neon)" }}>02:41</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, hi }: { k: string; v: string; hi?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{k}</span>
      <span style={hi ? { color: "var(--krait)" } : undefined} className={hi ? "font-semibold" : ""}>{v}</span>
    </div>
  );
}

function Referral() {
  return (
    <section id="referral" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Referral program</div>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl">
              Earn <span style={{ color: "var(--krait)" }}>30%</span> for life.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Share your link. When people you refer trade on Krait, you keep 30% of the markup — every trade, forever. No expiry, no cap, no tiers.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Tile top="30%" bottom="Commission" />
            <Tile top="∞" bottom="No expiry" />
            <Tile top="0" bottom="Referral cap" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-center">
      <div className="font-display text-3xl font-semibold" style={{ color: "var(--krait)" }}>{top}</div>
      <div className="mt-2 text-xs text-muted-foreground">{bottom}</div>
    </div>
  );
}

function Trust() {
  const items = [
    { k: "Automated settlement", v: "No manual desk. Every trade is machine-quoted and machine-paid." },
    { k: "Nigerian rails", v: "Direct payout to any NIBSS-connected bank or fintech account." },
    { k: "Locked rates", v: "The rate you accept is the rate you get. No slippage between quote and payout." },
  ];
  return (
    <section className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Built for real money" title="Fintech-grade, not casino." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.k} className="rounded-2xl border border-border p-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "color-mix(in oklab, var(--neon) 15%, transparent)" }}>
                <div className="h-2 w-2 rounded-full" style={{ background: "var(--neon)" }} />
              </div>
              <div className="mt-4 font-semibold">{i.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{i.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="FAQ" title="Straight answers." />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium">
                {f.q}
                <span className="text-2xl leading-none text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-b border-border/60 py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-balance text-5xl font-bold leading-tight md:text-6xl">
          Ready in one tap.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Open Telegram, hit start, sell your crypto. Naira in your bank before your coffee is cold.
        </p>
        <div className="mt-10">
          <TelegramButton size="lg">Start on Telegram</TelegramButton>
        </div>
        <div className="mt-6 font-mono text-xs text-muted-foreground">@kraitrampbot</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center">
        <div>
          <Logo className="h-5 w-auto" />
          <div className="mt-4 text-xs text-muted-foreground">
            Krait Technologies · CAC RC 9560022<br />
            Port Harcourt, Nigeria
          </div>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href={TG_URL} className="hover:text-foreground transition-colors">Telegram</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          <span>© {new Date().getFullYear()} Krait</span>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--krait)" }}>{eyebrow}</div>
      <h2 className="mt-3 text-balance text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}
}
