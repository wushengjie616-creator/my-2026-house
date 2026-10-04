/**
 * 2026 年实习的独立数据源。
 * 只包含真实经历，不补充公司名称、公司规模、客户、团队人数、项目收入、薪资总额、具体模型指标、实验结果等未提供的信息。
 * 各处的 `image` 字段预留：将来有真实照片时填路径即可，没有图片时 UI 自然显示。
 */

export type Internship2026 = {
  id: string
  /** 完整时间段，如「2026.03 – 2026.08」。 */
  period: string
  /** 时间线上的短标签，如「MAR — AUG」。 */
  periodShort: string
  /** 公司类型（科技公司 / 小型公司），不写具体公司名。 */
  companyType: string
  /** 岗位（中文）。 */
  role: string
  /** 岗位（英文）。 */
  roleEn?: string
  /** 日薪，仅作很小的信息标签，不作视觉中心。 */
  dailyRate: number
  /** 阶段关键词（中文）。 */
  stageTitle: string
  /** 正文：用成长视角书写的经历说明。 */
  summary: string
  /** 真实职责列表。 */
  responsibilities: string[]
  /** 关键词 chips。 */
  highlights: string[]
  /** 预留：实习照片路径（如 '/internships/internship-01.jpg'）。 */
  image?: string
}

export type InternshipReflection2026 = {
  title: string
  description: string
}

export type GrowthTrailNode2026 = {
  en: string
  zh: string
}

export const internships2026: Internship2026[] = [
  {
    id: 'internship-01',
    period: '2026.03 – 2026.08',
    periodShort: 'MAR — AUG',
    companyType: '科技公司',
    role: 'AI 算法实习生',
    roleEn: 'AI Algorithm Intern',
    dailyRate: 300,
    stageTitle: '从算法到工程',
    summary:
      '这是我 2026 年第一段持续时间比较长的实习。开始时更多关注算法本身，后来逐渐接触到业务工程化：算法不仅要「能算」，还需要真正接进系统、稳定地运行起来。在这段经历里，我逐步接触并掌握了 VCF 工程相关核心技术，也补上了后端和工程开发方面的基础能力，并开始建立对 RAG 与 Agent 整体设计结构的理解。',
    responsibilities: [
      '负责公司算法优化',
      '推动算法能力进行业务工程化落地',
      '学习并掌握 VCF 工程核心技术',
      '建立后端 / 工程开发的基础能力',
      '理解 RAG-Agent 的设计结构',
    ],
    highlights: ['算法优化', '业务工程化', 'VCF 工程', '后端基础', 'RAG / Agent'],
  },
  {
    id: 'internship-02',
    period: '2026.09',
    periodShort: 'SEP',
    companyType: '小型公司',
    role: 'Agent 开发实习生',
    roleEn: 'Agent Development Intern',
    dailyRate: 200,
    stageTitle: '开始真正做 Agent',
    summary:
      '九月，我开始把之前理解的 RAG 和 Agent 结构真正用到一个完整的业务场景里。我的主要任务是设计 AI 客服 Agent，通过简单的 RAG 检索链路，让 Agent 根据知识内容完成客服回答。相比之前更多参与已有业务，这一阶段让我第一次更完整地从「需求是什么」思考到「Agent 应该怎样工作」。',
    responsibilities: ['设计 AI 客服 Agent', '用简单的 RAG 检索链路为客服场景提供服务'],
    highlights: ['AI 客服', 'Agent 设计', 'RAG', '业务链路'],
  },
  {
    id: 'internship-03',
    period: '2026.10 – 2026.12',
    periodShort: 'OCT — DEC',
    companyType: '科技公司',
    role: '算法科研实习生',
    roleEn: 'Algorithm Research Intern',
    dailyRate: 300,
    stageTitle: '从工程走向科研',
    summary:
      '进入 2026 年最后一段实习后，我开始接触和之前不太一样的工作方式。这里不只是把功能做出来，还需要理解公司和实验室之间的科研需求，并尝试把 AI 模型应用到生物医疗相关问题中。这段经历让我第一次比较直接地接触「工程之外」的科研场景：很多问题并没有一个确定答案，需要先理解问题，再尝试模型、方法和可能的方向。',
    responsibilities: ['对接公司与实验室的科研业务', '在生物医疗方向探索 AI 模型'],
    highlights: ['科研业务对接', '公司 × 实验室', '生物医疗', 'AI 模型探索'],
  },
]

export const internshipReflection2026: InternshipReflection2026 = {
  title: '从算法，到 Agent，再到科研。',
  description:
    '三段实习让我看到 AI 工作完全不同的几个侧面：算法需要工程化，Agent 需要真正解决业务问题，而科研则需要面对还没有标准答案的问题。\n\n这一年，我一边工作，一边慢慢知道自己还需要学什么。',
}

export const internshipGrowthTrail2026: GrowthTrailNode2026[] = [
  { en: 'Algorithm', zh: '算法' },
  { en: 'Engineering', zh: '工程' },
  { en: 'Agent', zh: 'Agent' },
  { en: 'Research', zh: '科研' },
]
