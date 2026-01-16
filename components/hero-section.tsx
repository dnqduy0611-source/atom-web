"use client"

import { motion } from "framer-motion"
import { Chrome, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AtomOrb } from "@/components/atom-orb"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

export function HeroSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient - adjusted for theme */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]"
            : "bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12)_0%,_transparent_70%)]"
        }`}
      />

      {/* Grid pattern overlay - adjusted opacity for theme */}
      <div
        className={`absolute inset-0 ${theme === "dark" ? "opacity-[0.02]" : "opacity-[0.05]"}`}
        style={{
          backgroundImage: `linear-gradient(${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px),
                           linear-gradient(90deg, ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Navigation - added theme switcher */}
      <motion.nav
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="text-foreground font-semibold text-lg">ATOM</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">
            {t("Features", "Tính năng")}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {t("Docs", "Tài liệu")}
          </a>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">
              {t("Intelligent Attention Compass", "La bàn Chú ý Thông minh")}
            </span>
          </div>
        </motion.div>

        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <AtomOrb />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">{t("No addiction detox.", "Không cai nghiện.")}</span>
          <br />
          <span className="text-primary">{t("Just navigation.", "Chỉ điều hướng.")}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty"
        >
          {t(
            "ATOM is not a blocker. It's your mindful companion, helping you navigate attention intelligently and empathetically.",
            "ATOM không phải là một công cụ chặn. Nó là người bạn đồng hành mindful, giúp bạn điều hướng sự chú ý một cách thông minh và đồng cảm.",
          )}
        </motion.p>

        {/* CTA Buttons - updated colors to use semantic tokens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-full gap-2 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all"
          >
            <Chrome className="w-5 h-5" />
            {t("Add to Chrome", "Thêm vào Chrome")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border bg-secondary/50 backdrop-blur-sm hover:bg-secondary text-foreground font-semibold px-8 py-6 text-base rounded-full gap-2 transition-all"
          >
            <Play className="w-5 h-5" />
            {t("Watch Demo", "Xem Demo")}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
