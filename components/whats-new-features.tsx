"use client"

import { motion } from "framer-motion"
import {
    Brain,
    Timer,
    ClipboardList,
    BookOpen,
    Link2,
    ShieldCheck,
    ExternalLink,
    Keyboard,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

const features = [
    {
        icon: Brain,
        titleEn: "Active Reading AI",
        titleVi: "AI Đọc Chủ động",
        descEn:
            "Highlight any text on any webpage → AI instantly analyzes, summarizes, and explains it right in his sidepanel. Your personal tutor for every article.",
        descVi:
            "Highlight bất kỳ đoạn nào trên web → AI phân tích, tóm tắt, giải thích ngay trong sidepanel. Gia sư cá nhân cho mọi bài viết.",
        gradient: "from-violet-500/20 to-purple-500/10",
        tag: "Core",
    },
    {
        icon: Timer,
        titleEn: "Focus Timer",
        titleVi: "Hẹn giờ Tập trung",
        descEn:
            "Built-in Pomodoro timer with 25/40/50 min presets. After each session, AI surfaces key insights you read — helping you retain more.",
        descVi:
            "Pomodoro tích hợp với preset 25/40/50 phút. Sau mỗi phiên, AI gợi lại những insight quan trọng — giúp bạn nhớ lâu hơn.",
        gradient: "from-amber-500/20 to-orange-500/10",
        tag: "Productivity",
    },
    {
        icon: ClipboardList,
        titleEn: "Smart Research Queue",
        titleVi: "Hàng đợi Nghiên cứu",
        descEn:
            "Save highlights as research cards, auto-grouped by topic. Build a structured knowledge base as you browse — no manual organizing needed.",
        descVi:
            "Lưu highlights thành thẻ nghiên cứu, tự nhóm theo chủ đề. Xây dựng kho kiến thức có cấu trúc ngay khi duyệt web — không cần sắp xếp thủ công.",
        gradient: "from-cyan-500/20 to-blue-500/10",
        tag: "Research",
    },
    {
        icon: BookOpen,
        titleEn: "AI Journal",
        titleVi: "Nhật ký AI",
        descEn:
            "Write daily reflections and get thoughtful AI responses that help you think deeper. Your private space for contemplation and growth.",
        descVi:
            "Viết nhật ký hàng ngày và nhận phản hồi sâu sắc từ AI giúp bạn suy nghĩ sâu hơn. Không gian riêng tư để chiêm nghiệm và phát triển.",
        gradient: "from-pink-500/20 to-rose-500/10",
        tag: "Reflection",
    },
    {
        icon: Link2,
        titleEn: "Neural Memory",
        titleVi: "Bộ nhớ Neural",
        descEn:
            "A semantic memory system that connects your saved insights across topics. Search by meaning, not keywords — find what you need instantly.",
        descVi:
            "Hệ thống bộ nhớ ngữ nghĩa kết nối insights xuyên chủ đề. Tìm kiếm theo ý nghĩa, không bằng từ khóa — tìm ngay thứ bạn cần.",
        gradient: "from-emerald-500/20 to-teal-500/10",
        tag: "Memory",
    },
    {
        icon: ShieldCheck,
        titleEn: "Safe Zone",
        titleVi: "Vùng An toàn",
        descEn:
            "Mark sensitive domains as safe zones where AmoNexus won't track or analyze. Full privacy control, one click.",
        descVi:
            "Đánh dấu domain nhạy cảm là vùng an toàn — AmoNexus sẽ không theo dõi hay phân tích. Toàn quyền riêng tư, chỉ một click.",
        gradient: "from-blue-500/20 to-indigo-500/10",
        tag: "Privacy",
    },
    {
        icon: ExternalLink,
        titleEn: "NotebookLM Bridge",
        titleVi: "Cầu nối NotebookLM",
        descEn:
            "Export your reading sessions and insights directly to Google NotebookLM. Seamless integration for serious researchers.",
        descVi:
            "Xuất phiên đọc và insights trực tiếp sang Google NotebookLM. Tích hợp liền mạch cho nhà nghiên cứu nghiêm túc.",
        gradient: "from-sky-500/20 to-blue-500/10",
        tag: "Export",
    },
    {
        icon: Keyboard,
        titleEn: "Quick Shortcut",
        titleVi: "Phím tắt Nhanh",
        descEn:
            "Press Ctrl+Shift+S anytime to instantly open the sidepanel. No searching through menus — your second brain is always one keystroke away.",
        descVi:
            "Nhấn Ctrl+Shift+S bất cứ lúc nào để mở sidepanel. Không cần tìm trong menu — bộ não thứ hai luôn chỉ một phím bấm.",
        gradient: "from-slate-500/20 to-gray-500/10",
        tag: "Utility",
    },
]

export function WhatsNewFeatures() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
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
                                Everything in <span className="text-primary">v3.5</span>
                            </>,
                            <>
                                Tất cả trong <span className="text-primary">v3.5</span>
                            </>,
                        )}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t(
                            "8 powerful features designed to make you a more effective learner and thinker.",
                            "8 tính năng mạnh mẽ giúp bạn trở thành người học và người tư duy hiệu quả hơn.",
                        )}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.titleEn}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className={`group relative ${index === 0 || index === 3 ? "lg:col-span-2" : ""
                                }`}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/40 group-hover:via-primary/20 group-hover:to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"
                            />

                            {/* Card */}
                            <div
                                className={`relative h-full p-6 md:p-7 rounded-2xl border border-border ${theme === "dark" ? "bg-card" : "bg-card"
                                    } backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-300`}
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative">
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className={`w-11 h-11 rounded-xl ${theme === "dark" ? "bg-secondary" : "bg-secondary"
                                                } flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300`}
                                        >
                                            <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                        </div>
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 py-1 rounded-full border border-border/50">
                                            {feature.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        {t(feature.titleEn, feature.titleVi)}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {t(feature.descEn, feature.descVi)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
