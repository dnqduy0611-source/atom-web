"use client"

import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import { WhatsNewHero } from "@/components/whats-new-hero"
import { WhatsNewFeatures } from "@/components/whats-new-features"
import { WhatsNewFlow } from "@/components/whats-new-flow"
import { Footer } from "@/components/footer"

export default function WhatsNewPage() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <main className="min-h-screen overflow-hidden">
                    <WhatsNewHero />
                    <WhatsNewFeatures />
                    <WhatsNewFlow />
                    <Footer />
                </main>
            </LanguageProvider>
        </ThemeProvider>
    )
}
