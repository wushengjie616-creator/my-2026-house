/**
 * 2026 年项目的独立数据源。
 * 只包含可公开的真实项目信息；Private / In Development 项目不提供公开链接，
 * 也不暴露客户名称、采集样本、Token / Key、内部路径、具体数据量等敏感信息。
 * `image` 字段预留：将来有正式截图时填 public/projects/ 下的路径即可，没有图片时 UI 正常显示。
 */

export type Project2026 = {
  id: string
  /** 项目中文名（若有），否则英文名。 */
  name: string
  /** 英文展示名。 */
  nameEn?: string
  /** 导航短名。 */
  navShort: string
  category: string
  tagline: string
  description: string
  whatIBuilt: string
  whatILearned: string
  technologies: string[]
  status: 'open-source' | 'private' | 'in-development'
  githubUrl?: string
  /** 极简架构链路（视觉说明，不运行）。 */
  architecture?: string[]
  /** 预留：项目截图路径，如 '/projects/spanish-learning.jpg'。 */
  image?: string
}

export type ProjectsGrowthTrailNode2026 = {
  en: string
  zh: string
}

export const projects2026: Project2026[] = [
  {
    id: 'spanish-learning',
    name: '西班牙语学习助手',
    nameEn: 'Spanish Learning Assistant',
    navShort: 'Spanish',
    category: 'Personal Product',
    tagline: '把自己的学习需求做成一个真正可以使用的 AI 学习产品。',
    description:
      '这是一个围绕西班牙语阅读、写作、词汇理解和个性化练习设计的学习 Web 产品，支持分级阅读材料、中文辅助、点击查词、AI 生成个性化材料和练习，并保存个人学习进度。',
    whatIBuilt:
      '从自己的西班牙语学习需求出发，设计并实现了一个包含阅读、AI 辅助理解、个性化材料和练习记录的完整 Web 学习产品。',
    whatILearned:
      '这个项目让我第一次比较完整地经历了从「我需要什么功能」到「页面、服务、AI 和数据应该如何连接」的过程。',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'DeepSeek'],
    status: 'open-source',
    githubUrl: 'https://github.com/wushengjie616-creator/projectForEsLearn',
  },
  {
    id: 'customer-service',
    name: '多租户 AI 客服平台',
    nameEn: 'Multi-Tenant AI Customer Service',
    navShort: 'AI Customer Service',
    category: 'Backend / System Design',
    tagline: '把 AI 客服从「能回答」，做到「能够作为一个系统可靠运行」。',
    description:
      '这是一个多租户 AI 客服 Demo，重点不只是 LLM 回答，而是 API 接入、多租户隔离、RAG、消息队列、Worker、缓存、数据库、AI / 业务路由、安全边界、人工转接和可靠消息处理。',
    whatIBuilt:
      '设计并实现一个多租户 AI 客服系统，把消息接入、RAG、Agent 路由、异步处理、缓存、数据库和业务工具串成完整链路。',
    whatILearned:
      '这个项目让我开始真正理解后端工程中的可靠性问题：消息如何处理、数据如何隔离、并发如何削峰，以及 LLM 应该被放在系统的什么位置。',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'NATS', 'RAG'],
    status: 'open-source',
    githubUrl: 'https://github.com/wushengjie616-creator/multi-tenant-ai-customer-service-demo',
    architecture: ['API', 'Outbox', 'NATS', 'Worker', 'RAG / Tools / LLM'],
  },
  {
    id: 'opinion-monitor',
    name: 'Public Opinion Monitor',
    navShort: 'Opinion Monitor',
    category: 'Data / Analysis',
    tagline: '把散落的文本信息整理成可以被人判断的事件。',
    description:
      '一个文本舆情收集与分析项目。系统将不同来源的文本整理为结构化事件，进行主题、风险、情感与事实状态分析，并通过人工复核和可视化看板帮助用户快速定位值得关注的信息。',
    whatIBuilt: '建立从文本导入、去重、事件聚合、自动分析到人工研判和可视化展示的完整流程。',
    whatILearned:
      '这个项目让我开始面对真实世界数据的不确定性：数据可能缺失、重复、来源不同，模型判断也不能直接等同于事实。',
    technologies: ['Python', 'FastAPI', 'Text Analysis', 'Dashboard'],
    status: 'private',
  },
  {
    id: 'puzzle-agent',
    name: 'Puzzle Solving Agent',
    navShort: 'Puzzle Agent',
    category: 'Agent / Reasoning',
    tagline: '让模型负责理解和联想，让程序负责约束和验证。',
    description:
      '这是一个面向 PuzzleHunt、纸笔谜题和古典密码设计的解谜 Agent。核心思想不是把整个谜题直接交给一个 LLM，而是把解题拆成「观察 → 分类与联想 → 提出假设 → 工具实验 → 证据评价 → 验证 → 结果」，让 LLM 负责理解、联想、假设，让确定性程序负责密码转换、数独、数织、规则约束、replay 与验证。',
    whatIBuilt:
      '尝试设计一个可以在「开放式推理」和「确定性验证」之间协作的 Puzzle Agent，把模型擅长的理解与程序擅长的验证组合起来。',
    whatILearned:
      '做这个项目时，我开始认真思考 Agent 不能只「给出答案」，还需要知道自己为什么相信这个答案，以及什么时候应该停止。',
    technologies: ['Agent', 'DeepSeek', 'Deterministic Tools', 'FastAPI'],
    status: 'in-development',
  },
]

export const projectsGrowthTrail2026: ProjectsGrowthTrailNode2026[] = [
  { en: 'Personal Product', zh: '个人产品' },
  { en: 'Backend System', zh: '后端系统' },
  { en: 'Data System', zh: '数据系统' },
  { en: 'Agent System', zh: 'Agent 系统' },
]
