import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Coins,
  Copy,
  DollarSign,
  TrendingUp,
  Users,
  Wallet,
  Zap,
  Award,
  Info,
  CheckCircle2,
  Lock,
  X,
  BookOpen,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

export const TG_URL = "https://t.me/kraitrampbot";

// EDIT OR ADD BLOG POSTS HERE
export const BLOG_POSTS = [
  {
    slug: "instant-crypto-settlement-nigeria",
    title: "The State of Instant Crypto Settlements in Nigeria",
    excerpt:
      "Why peer-to-peer (P2P) trading is slow and how automated settlement rails are changing the landscape.",
    date: "July 17, 2026",
    readTime: "5 min read",
    content:
      "P2P trading on major exchanges has long been the primary gateway for Nigerians converting crypto to Naira. However, P2P is plagued by high transfer latency, constant payment confirmation disputes, and risk of bank account freezes. Automated OTC portals like Krait use instant settlement rails that directly interact with local banking gateways (NIBSS) and blockchain APIs. This cuts settlement times down to under 5 minutes and removes the human counterparty risk entirely.",
  },
  {
    slug: "understanding-usdt-trc20-vs-erc20",
    title: "USDT Networks: TRC20, ERC20, and BEP20 Explained",
    excerpt:
      "A simple guide to choosing the right blockchain network when converting stablecoins to cash.",
    date: "July 12, 2026",
    readTime: "4 min read",
    content:
      "When sending Tether (USDT), choosing the network is critical. TRC20 (Tron network) and BEP20 (BNB Chain) offer low gas fees (under $1) and fast confirmation times, making them ideal for instant swaps. ERC20 (Ethereum network), while highly secure, suffers from high gas fees during congestion. Krait recommends using BEP20 or TRC20 for fast, cheap, and hassle-free payouts.",
  },
  {
    slug: "earning-passive-income-crypto-referrals",
    title: "How to Build Recurring Income with Crypto Referrals",
    excerpt: "Maximize your earnings by sharing Krait's automated swap bot with your network.",
    date: "July 05, 2026",
    readTime: "6 min read",
    content:
      "Many crypto referral programs offer small, one-time bonuses. Krait's referral dashboard gives you a lifetime 30% cut of the trade fee markup for every user you bring. As your referrals trade larger volumes, your commission scales passively. Payments are automated and can be withdrawn directly to your Nigerian bank account in a single tap.",
  },
];

export const ASSETS = [
  { sym: "USDT", name: "Tether", rate: 1620, min: 10, icon: TetherIcon },
  { sym: "BTC", name: "Bitcoin", rate: 110400000, min: 0.0002, icon: BitcoinIcon },
  { sym: "ETH", name: "Ethereum", rate: 5750000, min: 0.005, icon: EthereumIcon },
  { sym: "SOL", name: "Solana", rate: 290000, min: 0.1, icon: SolanaIcon },
  { sym: "LTC", name: "Litecoin", rate: 150000, min: 0.05, icon: LitecoinIcon },
];

const NETWORKS = [
  "ERC20",
  "TRC20",
  "BEP20",
  "Solana",
  "TON",
  "Arbitrum",
  "Optimism",
  "Base",
  "Polygon",
  "Bitcoin",
  "Litecoin",
];

const FAQS = [
  {
    q: "How does the 5-minute settlement guarantee work?",
    a: "Every trade is tracked with a smart countdown timer. If Naira does not hit your bank account within 5 minutes from the moment your transaction confirms on the blockchain, Krait automatically credits a 1% rate bonus to your payout. No support tickets or forms are needed — it is hard-coded into our payout system.",
  },
  {
    q: "What does using Krait cost?",
    a: "We charge a flat 3% markup on the settlement rate. No network fee surcharges, no withdrawal fees, and absolutely no hidden expenses. The rate you see in the bot is exactly the rate you receive.",
  },
  {
    q: "Which Nigerian bank accounts are supported?",
    a: "We support deposits to all commercial banks and primary fintech apps in Nigeria, including GTBank, Access Bank, Zenith Bank, Kuda, OPay, Moniepoint, PalmPay, and others. If the bank is on the NIBSS network, settlement takes under 5 minutes.",
  },
  {
    q: "Is my crypto and transaction secure?",
    a: "Yes. All transactions are handled by automated payment rails with no human intermediary touching your crypto or Naira in transit. Settlement is triggered automatically once your deposit is confirmed on-chain, removing manual errors, delays, or peer-to-peer security risks.",
  },
];

const PROOFS = [
  {
    title: "Real-time Live Rates Card",
    desc: "Actual rate updates pushed directly to the Krait bot showing sell rates for USDT, BTC, ETH, BNB, and SOL.",
    img: "/telegram/Screenshot_20260715-123444.jpg",
  },
  {
    title: "OPay Payout Confirmation",
    desc: "Proof of cash landing directly in user's OPay Business account matching Krait's Telegram settlement alert.",
    img: "/telegram/Screenshot_20260622-090942.jpg",
  },
  {
    title: "Referral & Rewards Dashboard",
    desc: "Detailed dashboard showing active referred users, total commissions earned, and the withdrawal actions.",
    img: "/telegram/Screenshot_20260715-123520.jpg",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Hero />
        <CalculatorSection />
        <SimulatorSection />
        <SocialProofTicker />
        <VisualProofsSection />
        <GuaranteeSection />
        <ReferralCalculator />
        <AssetsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Krait"
      className={`${className} transition-transform duration-300 hover:scale-102 dark:invert`}
    />
  );
}

export function TelegramButton({
  children = "Start on Telegram",
  variant = "primary",
  size = "md",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "md" | "lg";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer";
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-9 py-4.5 text-base",
  };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent/20 glow-neon",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-secondary/20 border border-border",
    ghost: "border border-border/80 text-foreground hover:bg-secondary hover:border-foreground/30",
  };
  return (
    <a
      href={TG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <TelegramIcon className="h-4.5 w-4.5" />
      {children}
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl transition-all duration-300 shadow-bottom">
      <div className="mx-auto flex h-16 md:h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Logo className="h-25 sm:h-27 md:h-29 w-auto object-contain" />
          </Link>
        </div>
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8 text-xs md:text-sm font-medium text-muted-foreground">
          <a href="/#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <TelegramButton
            size="md"
            variant="ghost"
            className="px-3 py-1.5 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Open Bot
          </TelegramButton>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 py-10 md:py-20 lg:py-32 bg-pattern-transparent shadow-bottom z-10">
      {/* Background Gradients */}
      <div
        className="pointer-events-none absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full blur-[140px] opacity-35"
        style={{ background: "color-mix(in oklab, var(--krait) 15%, transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full blur-[140px] opacity-30"
        style={{ background: "color-mix(in oklab, var(--neon) 12%, transparent)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Floating Brand Icons */}
      <div className="absolute hidden lg:flex left-[7%] top-[20%] animate-float h-14 w-14 rounded-2xl glass-card border border-border/80 shadow-lg items-center justify-center text-emerald-500 bg-emerald-50/5 hover:scale-105 transition-transform duration-300">
        <WhatsAppIcon className="h-8 w-8" />
      </div>
      <div className="absolute hidden lg:flex right-[7%] top-[20%] animate-float-reverse h-14 w-14 rounded-2xl glass-card border border-border/80 shadow-lg items-center justify-center text-sky-500 bg-sky-50/5 hover:scale-105 transition-transform duration-300">
        <TelegramIcon className="h-8 w-8" />
      </div>
      <div className="absolute hidden lg:flex left-[12%] bottom-[25%] animate-float-reverse hover:scale-115 transition-transform duration-300 select-none">
        <BitcoinIcon className="h-13 w-13 drop-shadow-lg" />
      </div>
      <div className="absolute hidden lg:flex right-[12%] bottom-[25%] animate-float hover:scale-115 transition-transform duration-300 select-none">
        <EthereumIcon className="h-13 w-13 drop-shadow-lg" />
      </div>
      <div className="absolute hidden lg:flex left-[35%] top-[12%] animate-float hover:scale-115 transition-transform duration-300 select-none">
        <TetherIcon className="h-11 w-11 drop-shadow-lg" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md"
          style={{
            background: "color-mix(in oklab, var(--krait) 8%, transparent)",
            borderColor: "color-mix(in oklab, var(--krait) 20%, transparent)",
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: "var(--krait)" }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--krait)" }}
            />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-primary"></span>
        </div>

        <h1 className="mt-8 text-balance text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
          From Crypto to Cash.
          <br />
          No sign up forms.
          <br />
          Settled in{" "}
          <span
            className="bg-clip-text text-transparent font-display"
            style={{ backgroundImage: "linear-gradient(90deg, var(--neon), var(--krait))" }}
          >
            &lt; 5 Minutes.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-balance text-base sm:text-lg leading-relaxed text-muted-foreground">
          Sell USDT, BTC, ETH, and other assets instantly to any Nigerian bank. Fully automated
          payout rails. Backed by an automated timing guarantee.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <TelegramButton size="lg" variant="accent" />
          <a
            href="#calculator"
            className="rounded-full border border-border/80 bg-secondary/20 hover:bg-secondary/50 backdrop-blur-sm px-8 py-4.5 text-sm font-bold text-foreground transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Check Live Rates
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 md:mt-20 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center p-6 rounded-2xl glass-card border border-border/40">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Instant Settlement</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Under 5 minutes average, running on completely automated payment rails.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl glass-card border border-border/40">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
              <Coins className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">No Sign-up Forms</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Zero onboarding friction. Initiate trades and get paid immediately via Telegram.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl glass-card border border-border/40">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">Payout Guarantee</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              If the transaction takes longer than 5 minutes, we pay you a rate bonus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [amount, setAmount] = useState<number>(100);
  const [selectedAsset, setSelectedAsset] = useState(ASSETS[0]);
  const [copied, setCopied] = useState(false);

  const rate = selectedAsset.rate;
  const payout = amount * rate;

  const handleAssetChange = (sym: string) => {
    const asset = ASSETS.find((a) => a.sym === sym) || ASSETS[0];
    setSelectedAsset(asset);
    setAmount(asset.min * 10);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(TG_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const SelectedAssetIcon = selectedAsset.icon;

  return (
    <section
      id="calculator"
      className="border-b border-border/40 py-12 md:py-24 relative shadow-bottom z-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Live Exchange Rate
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Calculate your payout instantly.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We charge a flat 3% markup already factored into our competitive rates. The rate you
              lock in is exactly what lands in your bank account — no hidden fees, no blockchain gas
              surcharges.
            </p>
            <div className="space-y-4 pt-4 border-t border-border/40">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm font-medium">Real-time local currency pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm font-medium">Zero network fee deductions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <span className="text-sm font-medium">
                  Payouts to OPay, Kuda, GTBank, and all primary banks
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-border/60 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] tracking-widest text-muted-foreground">
              KRT_CALC_V1
            </div>

            <div className="space-y-6">
              {/* Asset Select */}
              <div>
                <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                  Asset to Sell
                </label>
                <div className="mt-2 grid grid-cols-5 gap-2">
                  {ASSETS.map((asset) => {
                    const AssetIcon = asset.icon;
                    const isSelected = selectedAsset.sym === asset.sym;
                    return (
                      <button
                        key={asset.sym}
                        onClick={() => handleAssetChange(asset.sym)}
                        className={`py-3 rounded-xl border font-bold text-center transition-all flex flex-col items-center justify-center cursor-pointer ${
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/10 scale-105"
                            : "border-border bg-secondary/15 hover:bg-secondary/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <AssetIcon
                          className={`h-7 w-7 mb-1.5 ${isSelected ? "brightness-100" : "opacity-80 group-hover:opacity-100"}`}
                        />
                        <span className="block text-[11px] font-mono tracking-wide">
                          {asset.sym}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <div className="flex justify-between items-baseline">
                  <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    Amount to Sell
                  </label>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    Min: {selectedAsset.min} {selectedAsset.sym}
                  </span>
                </div>
                <div className="mt-2 relative">
                  <input
                    type="number"
                    value={amount}
                    min={selectedAsset.min}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full bg-secondary/10 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/10 rounded-2xl px-5 py-4 font-mono text-xl focus:outline-none transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-sm font-bold text-muted-foreground flex items-center gap-1.5">
                    <SelectedAssetIcon className="h-4.5 w-4.5" />
                    {selectedAsset.sym}
                  </div>
                </div>
              </div>

              {/* Rate Preview */}
              <div className="p-4 rounded-2xl bg-secondary/5 border border-border/40 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Current Rate
                </span>
                <span className="font-mono text-sm font-bold text-primary">
                  1 {selectedAsset.sym} = {selectedAsset.rate.toLocaleString()} ₦
                </span>
              </div>

              {/* Arrow Indicator */}
              <div className="flex justify-center -my-3">
                <div className="h-8 w-8 rounded-full border border-border/80 bg-background flex items-center justify-center shadow-md">
                  <ArrowRight className="h-4 w-4 rotate-90 text-muted-foreground" />
                </div>
              </div>

              {/* Payout Target */}
              <div>
                <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                  Guaranteed Naira Settlement
                </label>
                <div className="mt-2 w-full bg-secondary/15 border border-border/40 rounded-2xl px-5 py-4 flex justify-between items-center">
                  <span className="font-display text-2xl font-extrabold text-accent">
                    ₦{" "}
                    {payout.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span className="text-xs font-bold font-mono text-muted-foreground">NGN</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`${TG_URL}?start=sell_${amount}_${selectedAsset.sym}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent text-accent-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 glow-neon hover:opacity-95 transition-all text-sm"
                >
                  <TelegramIcon className="h-4.5 w-4.5" />
                  Initiate Trade
                </a>
                <button
                  onClick={handleCopy}
                  className="w-full border border-border hover:bg-secondary/35 text-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all text-sm"
                >
                  {copied ? (
                    <Check className="h-4.5 w-4.5 text-accent" />
                  ) : (
                    <Copy className="h-4.5 w-4.5 text-muted-foreground" />
                  )}
                  {copied ? "Link Copied!" : "Copy Bot Link"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimulatorSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Choose Asset & Network",
      desc: "Start Krait and select the cryptocurrency and network you want to deposit.",
      img: "/telegram/Screenshot_20260715-123242.jpg",
    },
    {
      title: "2. Secure Deposit Address",
      desc: "Verify locked rates, receive your one-time address, and deposit your assets.",
      img: "/telegram/IMG_20260715_123638_891.jpg",
    },
    {
      title: "3. Direct Bank Cashout",
      desc: "Krait matches confirmations and automates Naira payout directly to your bank account.",
      img: "/telegram/Screenshot_20260622-090942.jpg",
    },
  ];

  return (
    <section
      id="how"
      className="border-b border-border/40 py-12 md:py-24 bg-secondary/5 relative shadow-bottom z-10"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Simple Interface
          </div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Telegram commands, bank alerts.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No websites to log into, no apps to download. Click on a step below to view the actual
            bot screens.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Steps selector */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx
                    ? "bg-card border-primary/50 shadow-xl shadow-primary/5 scale-[1.02]"
                    : "border-border/60 hover:border-foreground/20 bg-card/45 opacity-70 hover:opacity-100"
                }`}
              >
                <h3
                  className={`font-bold text-lg ${activeStep === idx ? "text-primary" : "text-foreground"}`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </button>
            ))}
          </div>

          {/* Telegram Device Screenshot Simulator */}
          <div className="mx-auto w-full max-w-[300px] sm:max-w-[360px] h-[540px] sm:h-[640px] rounded-[42px] border-[10px] border-border bg-black shadow-2xl relative overflow-hidden flex flex-col">
            {/* Phone Speaker & Camera Notch */}
            <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex justify-center items-center">
              <div className="w-16 h-4 bg-zinc-900 rounded-full flex justify-center items-center gap-1.5">
                <div className="w-8 h-1 bg-zinc-800 rounded-full" />
                <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full" />
              </div>
            </div>

            {/* Displaying actual Telegram bot screenshot */}
            <div className="flex-1 overflow-hidden relative bg-zinc-950 pt-6">
              <img
                src={steps[activeStep].img}
                alt={steps[activeStep].title}
                className="w-full h-full object-contain select-none animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TickerTrade {
  id: string;
  asset: string;
  amount: string;
  payout: string;
  time: string;
  status: string;
}

function SocialProofTicker() {
  const [trades, setTrades] = useState<TickerTrade[]>([
    {
      id: "krt_a82f",
      asset: "USDT",
      amount: "350",
      payout: "₦567,000",
      time: "2m 14s",
      status: "settled",
    },
    {
      id: "krt_29be",
      asset: "SOL",
      amount: "12.5",
      payout: "₦3,625,000",
      time: "3m 45s",
      status: "settled",
    },
    {
      id: "krt_e901",
      asset: "BTC",
      amount: "0.015",
      payout: "₦1,656,000",
      time: "1m 58s",
      status: "settled",
    },
    {
      id: "krt_92d1",
      asset: "USDT",
      amount: "1,200",
      payout: "₦1,944,000",
      time: "2m 51s",
      status: "settled",
    },
  ]);

  useEffect(() => {
    const assets = ["USDT", "ETH", "SOL", "BTC", "LTC"];
    const banks = ["Kuda", "OPay", "GTBank", "Zenith", "Access", "Moniepoint"];
    const interval = setInterval(() => {
      const randomAsset = assets[Math.floor(Math.random() * assets.length)];
      const randomBank = banks[Math.floor(Math.random() * banks.length)];
      const randomAmount = Math.floor(Math.random() * 800) + 50;

      const newTrade = {
        id: `krt_${Math.random().toString(36).substring(2, 6)}`,
        asset: randomAsset,
        amount: randomAmount.toLocaleString(),
        payout: `₦${(randomAmount * 1620).toLocaleString()}`,
        time: `${Math.floor(Math.random() * 3) + 1}m ${Math.floor(Math.random() * 59)}s`,
        status: "settled",
      };

      setTrades((prev) => [newTrade, ...prev.slice(0, 3)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-border/40 py-4 md:py-8 bg-secondary/15 overflow-hidden shadow-bottom z-10 relative">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
        <div className="flex items-center gap-2 flex-shrink-0">
          <TrendingUp className="h-5 w-5 text-accent animate-pulse-soft" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Live Transaction Activity
          </span>
        </div>
        <div className="flex items-center gap-3 flex-1 justify-start md:justify-end overflow-x-auto no-scrollbar py-2 -my-2 select-none snap-x snap-mandatory">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="px-4 py-2.5 rounded-xl bg-card border border-border/40 flex items-center gap-3 text-[11px] font-mono shadow-sm shrink-0 snap-center"
            >
              <div className="h-2 w-2 rounded-full bg-accent" />
              <div>
                <span className="text-muted-foreground mr-1">{trade.id}</span>
                <span className="font-bold text-foreground">
                  {trade.amount} {trade.asset}
                </span>
                <span className="text-muted-foreground mx-1">→</span>
                <span className="font-bold text-primary">{trade.payout}</span>
                <span className="text-muted-foreground ml-2 text-[10px] bg-secondary/15 px-1.5 py-0.5 rounded">
                  {trade.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualProofsSection() {
  return (
    <section
      id="proofs"
      className="border-b border-border/40 py-12 md:py-24 bg-background shadow-bottom z-10 relative"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            On-Chain Proof
          </div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Verified proof & processes.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparency is central to Krait. Here are real-world transaction logs and system
            dashboards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PROOFS.map((proof, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-card border border-border/60 rounded-3xl overflow-hidden shadow-lg hover:border-primary/40 transition-all duration-300"
            >
              {/* Screenshot Wrapper */}
              <div className="h-[360px] overflow-hidden bg-zinc-950 flex items-center justify-center p-4 border-b border-border/40">
                <img
                  src={proof.img}
                  alt={proof.title}
                  className="h-full w-full object-contain select-none hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg text-foreground">{proof.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{proof.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  const [seconds, setSeconds] = useState(161); // 2m 41s

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="border-b border-border/40 py-12 md:py-24 shadow-bottom z-10 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-card rounded-[32px] border border-border/60 p-6 sm:p-10 md:p-16 relative overflow-hidden">
          <div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-[100px] opacity-25"
            style={{ background: "color-mix(in oklab, var(--neon) 20%, transparent)" }}
          />
          <div className="relative grid gap-8 md:gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                The 5-Minute Promise
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight font-display">
                Under 5 minutes,
                <br />
                or we pay you a bonus.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe speed should be guaranteed, not just promised. If Naira does not hit your
                bank account within 5 minutes of your cryptocurrency deposit confirming on-chain, we
                automatically credit a 1% payout bonus on your transaction.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <TelegramButton size="lg" variant="accent" />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[340px]">
              <div className="rounded-2xl bg-card border border-border/60 p-6 font-mono text-xs shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Order ID: krt_9a2f</span>
                  <span className="text-accent flex items-center gap-1 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    settling
                  </span>
                </div>

                <div className="h-px bg-border/40" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deposit</span>
                    <span className="text-foreground">250.00 USDT (TRC20)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Locked Rate</span>
                    <span className="text-foreground">₦ 1,620.00 / USDT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bank Target</span>
                    <span className="text-foreground">OPay (****1903)</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-muted-foreground">Guaranteed Payout</span>
                    <span className="text-primary">₦ 405,000.00</span>
                  </div>
                </div>

                <div className="h-px bg-border/40" />

                <div className="flex items-baseline justify-between pt-2">
                  <span className="text-muted-foreground uppercase text-[10px]">
                    Guaranteed Window
                  </span>
                  <span className="text-3xl font-extrabold font-display tracking-tight text-accent animate-pulse-soft">
                    {formatTime(seconds)}
                  </span>
                </div>

                <div className="bg-secondary/10 p-3 rounded-lg flex items-start gap-2 border border-border/20 text-[10px] text-muted-foreground">
                  <Info className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Countdown finishes, rate increases by 1% automatically.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferralCalculator() {
  const [volume, setVolume] = useState<number>(10000);

  // Rate: 1620. Markup is 3%. referral cut is 30% of that markup.
  // Commission = volume * 0.03 * 0.30 = volume * 0.009
  const commissionUsd = volume * 0.009;
  const commissionNaira = commissionUsd * 1620;

  return (
    <section
      id="referral"
      className="border-b border-border/40 py-12 md:py-24 bg-secondary/5 shadow-bottom z-10 relative"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
              Passive Income
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight font-display">
              Earn 30% for life.
              <br />
              No caps. No expiry.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Refer your friends to Krait. When they trade crypto, you earn a recurring 30% off
              their fees on every trade they complete. Instantly credited to your krait balance.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-card border border-border/40 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-primary font-display">30%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  markup cut
                </div>
              </div>
              <div className="bg-card border border-border/40 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-primary font-display">∞</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  no expiry
                </div>
              </div>
              <div className="bg-card border border-border/40 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-primary font-display">$0</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                  caps or limits
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-border/60 p-5 sm:p-8 shadow-2xl space-y-6">
            <div>
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                  Monthly Referred Trading Volume
                </label>
                <span className="font-mono text-sm font-bold text-foreground">
                  ${volume.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer mt-4 accent-primary"
              />
              <div className="flex justify-between font-mono text-[9px] text-muted-foreground mt-2">
                <span>$1,000</span>
                <span>$50,000</span>
                <span>$100,000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-secondary/15 border border-border/40 p-5 rounded-2xl">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Estimated USD Commission
                </div>
                <div className="text-2xl font-extrabold font-display text-foreground mt-2">
                  $
                  {commissionUsd.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1">per month</div>
              </div>

              <div className="bg-accent/5 border border-accent/20 p-5 rounded-2xl">
                <div className="text-xs text-accent uppercase tracking-wider">
                  Estimated NGN Payout
                </div>
                <div className="text-2xl font-extrabold font-display text-accent mt-2">
                  ₦{commissionNaira.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-[10px] text-accent/80 mt-1">per month</div>
              </div>
            </div>

            <TelegramButton size="lg" className="w-full" variant="accent">
              Get Your Referral Link
            </TelegramButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function AssetsSection() {
  return (
    <section
      id="assets"
      className="border-b border-border/40 py-12 md:py-24 shadow-bottom z-10 relative"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Liquidity & Networks
          </div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            10+ assets, 12+ blockchains.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We support the primary liquid stablecoins and standard native crypto assets across major
            Layer-1 and Layer-2 networks.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {ASSETS.map((asset) => {
            const AssetIcon = asset.icon;
            return (
              <div
                key={asset.sym}
                className="rounded-2xl border border-border/60 bg-card p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden group hover:border-primary/40 transition-all duration-300"
              >
                <span className="group-hover:scale-110 transition-transform duration-300">
                  <AssetIcon className="h-10 w-10" />
                </span>
                <h3 className="mt-4 font-bold text-lg font-mono">{asset.sym}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{asset.name}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h4 className="text-center font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Supported Blockchains
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {NETWORKS.map((network) => (
              <span
                key={network}
                className="px-4 py-2 border border-border/40 rounded-full font-mono text-[11px] text-muted-foreground bg-secondary/10"
              >
                {network}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-b border-border/40 py-12 md:py-24 bg-secondary/5 shadow-bottom z-10 relative"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Frequently Asked
          </div>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Answers, not excuses.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-card border border-border/60 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-6 font-semibold hover:bg-secondary/15 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ${
                    isOpen
                      ? "max-h-[300px] border-t border-border/40 opacity-100 font-normal"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="p-5 sm:p-6 text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-14 md:py-28 relative overflow-hidden shadow-bottom z-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 rounded-full blur-[140px] opacity-20 mx-auto"
        style={{
          background: "color-mix(in oklab, var(--krait) 25%, var(--neon))",
          maxWidth: "600px",
        }}
      />
      <div className="mx-auto max-w-3xl px-6 text-center space-y-6 md:space-y-8 relative">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-display">
          Naira in your bank account in under 5 minutes.
        </h2>
        <p className="max-w-lg mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
          Open Telegram, initiate your trade, and let our automated payment rails settle your cash
          immediately.
        </p>
        <div className="pt-4 flex flex-col items-center gap-3">
          <TelegramButton size="lg" variant="accent" />
          <span className="font-mono text-xs text-muted-foreground">@kraitrampbot</span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 md:py-16 bg-secondary/15 text-xs text-muted-foreground bg-pattern-transparent">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between gap-8 md:gap-10">
        <div className="space-y-4">
          <Logo className="h-16 w-auto object-contain" />
          <p className="leading-relaxed">
            Krait Technologies Ltd.
            <br />
            CAC RC 9560022
            <br />
            Port Harcourt, Nigeria
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="space-y-3">
            <h4 className="font-bold text-foreground uppercase tracking-wider text-[10px]">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#how" className="hover:text-foreground transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-foreground transition-colors">
                  Live Rate Calculator
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-foreground transition-colors">
                  Blog Insights
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-foreground uppercase tracking-wider text-[10px]">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/Kraitrampbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kraitrampbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={TG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Telegram Bot
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-foreground uppercase tracking-wider text-[10px]">
              Support & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href={TG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <span className="opacity-60">Terms & Privacy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-8 pt-6 md:mt-12 md:pt-8 border-t border-border/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px]">
        <span>© {new Date().getFullYear()} Krait. All Rights Reserved.</span>
        <span>Made for speed & convenience.</span>
      </div>
    </footer>
  );
}

export function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.24 3.64 11.95c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.031 2C6.49 2 2 6.477 2 12.016c0 1.91.531 3.678 1.453 5.201L2 22l4.906-1.277c1.478.805 3.16 1.258 4.969 1.258 5.54 0 10.03-4.471 10.03-10.01C22.062 6.477 17.571 2 12.03 2zm0 1.677c4.606 0 8.354 3.738 8.354 8.339 0 4.601-3.748 8.34-8.354 8.34-1.614 0-3.11-.458-4.385-1.248l-.313-.193-2.922.76.78-2.825-.213-.338c-.854-1.353-1.301-2.93-1.301-4.57 0-4.6 3.747-8.339 8.354-8.339zm-3.23 4.22c-.179.006-.35.034-.51.085-.36.115-.653.376-.826.716-.364.717-.502 1.488-.502 2.27 0 1.343.518 2.585 1.42 3.49l.062.063c1.785 1.785 4.148 2.687 6.643 2.518.784-.053 1.545-.3 2.158-.72.483-.332.812-.857.92-1.442.023-.122.03-.243.023-.365-.008-.124-.038-.24-.094-.343-.27-.492-1.298-1.026-1.57-1.127-.272-.102-.573-.06-.798.125-.262.215-.55.518-.742.66-.188.138-.415.176-.622.066-.35-.187-1.144-.572-1.89-1.238-.636-.566-1.1-1.21-1.328-1.59-.148-.25-.098-.517.094-.717.153-.16.353-.396.5-.59.083-.108.12-.242.094-.37-.087-.43-.53-1.67-.714-2.026-.113-.217-.33-.35-.572-.375z" />
    </svg>
  );
}

export function BitcoinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#btcGradient)" />
      <path
        d="M19.78 12.35c.34-.33.56-.76.56-1.34 0-1.22-.87-2.02-2.3-2.2v-1.7h-1.2v1.7h-1.07V7.11h-1.2v1.7H12.2V10.2h1.15c.67 0 .8.27.8.69v8.43c0 .28-.15.48-.68.48H12.2v1.43h2.36v1.73h1.2v-1.73h1.08v1.73h1.2v-1.73c1.78-.17 2.76-1 2.76-2.5 0-1.12-.66-1.89-1.82-2.18 1.05-.3 1.78-1.05 1.78-2.24 0-.03 0-.06-.02-.09zm-4.37-2.42h1.8c.6 0 .97.35.97.91s-.37.91-.97.91h-1.8v-1.82zm2.14 8.04h-2.14V15.9h2.14c.67 0 1.08.38 1.08.97 0 .61-.41 1.01-1.08 1.01z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="btcGradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F7931A" />
          <stop stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EthereumIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#ethGradient)" />
      <path
        d="M16 5l-5.6 9.3 5.6 3.3 5.6-3.3L16 5zm0 18.2L10.4 16 16 19.3l5.6-3.3-5.6 7.2z"
        fill="white"
        fillOpacity="0.8"
      />
      <path d="M16 5v12.6l5.6-3.3L16 5zm0 13.3v4.9l5.6-7.2-5.6 2.3z" fill="white" />
      <defs>
        <linearGradient
          id="ethGradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#627EEA" />
          <stop stopColor="#3B4FA0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TetherIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#usdtGradient)" />
      <path
        d="M17.92 11.23h3.58V8.65H10.5v2.58h3.58v4.32c-2.48.15-4.28.62-4.28 1.22 0 .58 1.8 1.05 4.28 1.22v4.86h3.84v-4.86c2.48-.17 4.28-.64 4.28-1.22s-1.8-1.07-4.28-1.22v-4.32zM16 16.92c-1.92 0-3.48-.3-3.48-.68s1.56-.68 3.48-.68 3.48.3 3.48.68-1.56.68-3.48.68z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="usdtGradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26A17B" />
          <stop stopColor="#0E7053" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SolanaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#solGradient)" />
      <path
        d="M22.5 10.3c-.1-.1-.3-.2-.5-.2H9.8c-.3 0-.5.2-.6.4-.1.2 0 .5.2.7l2.3 2.3c.1.1.3.2.5.2H22c.3 0 .5-.2.6-.4.1-.2 0-.5-.2-.7l-.9-.9zm-13 7.8c-.1-.1-.3-.2-.5-.2H9.8c-.3 0-.5.2-.6.4-.1.2 0 .5.2.7l2.3 2.3c.1.1.3.2.5.2H22c.3 0 .5-.2.6-.4.1-.2 0-.5-.2-.7l-12.7-2.6zm3.2-3.9H9.8c-.3 0-.5.2-.6.4-.1.2 0 .5.2.7l2.3 2.3c.1.1.3.2.5.2H22c.3 0 .5-.2.6-.4.1-.2 0-.5-.2-.7l-12.2-2.5z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="solGradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14F195" />
          <stop stopColor="#9945FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LitecoinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#ltcGradient)" />
      <path
        d="M19.8 19.3h-4.3l.8-3.1 1.7-.6.5-1.9-1.7.6.7-2.8H15l-.7 2.8-1.5.6-.5 1.9 1.5-.6-.8 3.1H9.8l-.5 1.9h10l.5-1.9z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="ltcGradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BEBEBE" />
          <stop stopColor="#8C8C8C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
