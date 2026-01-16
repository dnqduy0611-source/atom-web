"use client"

import { motion } from "framer-motion"
import { Activity, Heart, Shield, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

const features = [
  {
    icon: Heart,
    titleEn: "Gentle-First Approach",
    titleVi: "Can thiệp Thông minh",
    descEn: "Instead of rigid blocking, ATOM uses a 'least intrusive' ladder: Presence signals, gentle Micro-closure prompts, and Hard Interrupts only when necessary.",
    descVi: "Thay vì chặn cứng nhắc, ATOM dùng chiến thuật 'leo thang tối thiểu': Tín hiệu hiện diện, Lời nhắc nhẹ (Micro-closure), và chỉ Can thiệp sâu khi cần thiết.",
    gradient: "from-pink-500/20 to-rose-500/10",
  },
  {
    icon: Activity,
    titleEn: "Behavioral Intelligence",
    titleVi: "Thấu hiểu Hành vi",
    descEn: "ATOM measures scroll inertia and resistance scores to adapt intervention intensity. AI analyzes your journal to personalize guidance based on your mood.",
    descVi: "ATOM đo lường quán tính cuộn và chỉ số kháng cự để điều chỉnh mức độ can thiệp. AI phân tích nhật ký để cá nhân hóa lời khuyên theo tâm trạng.",
    gradient: "from-primary/20 to-primary/10",
  },
  {
    icon: Shield,
    titleEn: "Privacy-First",
    titleVi: "Riêng tư là Ưu tiên",
    descEn: "Local-first processing keeps browsing history on your device. Transparent Online AI usage and Safe Zones ensure your work sessions remain private.",
    descVi: "Xử lý dữ liệu chủ yếu trên thiết bị. AI online minh bạch và tính năng Vùng an toàn (Safe Zone) giúp bạn yên tâm làm việc mà không bị theo dõi.",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Zap,
    titleEn: "Modern Architecture",
    titleVi: "Tối ưu Hiệu suất",
    descEn: "Built on Manifest V3 for stability and resource efficiency. Includes a Snooze feature to pause interventions when you really need to focus.",
    descVi: "Xây dựng trên Manifest V3 giúp hoạt động ổn định, tiết kiệm tài nguyên. Hỗ trợ tính năng Tạm nghỉ (Snooze) khi bạn cần tập trung gấp.",
    gradient: "from-amber-500/20 to-orange-500/10",
  },
]

export function FeatureGrid() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {t(
              <>
                Built with <span className="text-primary">understanding</span>
              </>,
              <>
                Được xây dựng với <span className="text-primary">sự thấu hiểu</span>
              </>,
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Every feature is designed to support you, not control you.",
              "Mọi tính năng đều được thiết kế để hỗ trợ, không phải kiểm soát bạn.",
            )}
          </p>
        </motion.div>

        {/* Bento Grid - adjusted glow effects for theme */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover glow effect */}
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/50 group-hover:via-primary/30 group-hover:to-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`}
              />

              {/* Card */}
              <div
                className={`relative h-full p-6 md:p-8 rounded-2xl border border-border ${theme === "dark" ? "bg-card" : "bg-card"} backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-300`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl ${theme === "dark" ? "bg-secondary" : "bg-secondary"} flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t(feature.titleEn, feature.titleVi)}</h3>
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
