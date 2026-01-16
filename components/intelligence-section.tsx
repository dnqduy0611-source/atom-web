"use client"

import { motion } from "framer-motion"
import { Scan, TrendingUp, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

const features = [
    {
        icon: Scan,
        titleEn: "Signal Analysis System",
        titleVi: "Hệ thống Phân tích Tín hiệu",
        descEn: "Automatically measures scroll inertia and real interaction time to understand your engagement.",
        descVi: "Tự động đo lường quán tính cuộn trang và thời gian tương tác thực tế để hiểu mức độ cuốn hút.",
        gradient: "from-violet-500/20 to-purple-500/10",
    },
    {
        icon: TrendingUp,
        titleEn: "Resistance Score",
        titleVi: "Chỉ số Kháng cự",
        descEn: "If you continuously ignore prompts, ATOM increases intervention intensity to help you 'wake up' more effectively.",
        descVi: "Nếu bạn liên tục lờ đi các nhắc nhở, ATOM sẽ tự động tăng mức độ can thiệp để giúp bạn 'tỉnh thức' hiệu quả hơn.",
        gradient: "from-red-500/20 to-orange-500/10",
    },
    {
        icon: Sparkles,
        titleEn: "Mood Personalization",
        titleVi: "Cá nhân hóa theo Tâm trạng",
        descEn: "Integrated AI (Gemini) analyzes browsing journals to provide personalized advice based on your emotions (happy, sad, or stressed).",
        descVi: "Tích hợp AI (Gemini) để phân tích nhật ký lướt web, đưa ra lời khuyên cá nhân hóa dựa trên cảm xúc của bạn (vui, buồn, hay căng thẳng).",
        gradient: "from-emerald-500/20 to-teal-500/10",
    },
]

export function IntelligenceSection() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    return (
        <section className="py-24 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                        {t("Behavioral Intelligence", "Công nghệ Thấu hiểu Hành vi")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        {t(
                            "ATOM understands your resistance, not just your time.",
                            "ATOM không chỉ hoạt động dựa trên thời gian, mà còn hiểu được 'sự kháng cự' của bạn."
                        )}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.titleEn}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            {/* Card */}
                            <div
                                className={`relative h-full p-6 rounded-2xl border border-border ${theme === "dark" ? "bg-card" : "bg-card"} overflow-hidden hover:shadow-lg transition-shadow duration-300`}
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div
                                        className={`w-14 h-14 rounded-full ${theme === "dark" ? "bg-background/80" : "bg-background/80"} backdrop-blur-sm flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <feature.icon className="w-7 h-7 text-foreground" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{t(feature.titleEn, feature.titleVi)}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{t(feature.descEn, feature.descVi)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
