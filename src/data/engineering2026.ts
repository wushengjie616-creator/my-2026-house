/**
 * 2026 年工程能力（Engineering Toolkit）的独立数据源。
 * 只包含真实能力，不使用「精通 / Expert / Senior」等夸大表述，
 * 也不使用百分比 / 进度条 / 雷达图等方式给技能打分。
 * 具体实现依赖 AI Agent 协作这一点如实保留，不隐藏。
 */

export type EngineeringCapability2026 = {
  id: string
  /** 导航入口短名。 */
  nav: string
  /** 完整标题。 */
  title: string
  /** 副标题（如 Agent Collaboration 的流程句）。 */
  subtitle?: string
  /** 一句话正文。 */
  summary: string
  /** 展开的能力说明，逐条列出。 */
  details: string[]
  /** 技术关键词，仅作分组展示，不是「熟练度」。 */
  keywords: string[]
  /** 行为层次的表达（Understand / Design / Build with Agent / Review 等），替代百分比。 */
  levelLabels: string[]
  /** 实现方式标签，如 'Agent-assisted'。 */
  implementation?: string
  /** 轻量的流程链路（视觉说明，不运行）。 */
  flow?: string[]
}

export type Engineering2026 = {
  intro: {
    title: string
    subtitle: string
    description: string
    mode: string
  }
  capabilities: EngineeringCapability2026[]
  /** How I Build 开发流程。 */
  workflow: string[]
  parallelWork: {
    title: string
    description: string
    branches: { name: string; agent: string }[]
  }
  reflection: string
}

export const engineering2026: Engineering2026 = {
  intro: {
    title: '2026',
    subtitle: 'From writing code to designing systems.',
    description:
      '这一年，我开始不再只关注某一段代码如何实现，而是逐渐理解需求、前端、后端、数据和 AI 如何组成一个完整的软件系统。',
    mode: 'AI-assisted Software Engineering',
  },

  capabilities: [
    {
      id: 'backend',
      nav: 'Backend',
      title: 'Backend System Design',
      summary:
        '能够理解常见后端系统的核心组件和数据流，根据需求设计项目结构，并借助 AI Agent 完成具体实现和迭代。',
      details: [
        '理解常见后端系统的核心概念与设计原理：REST API、FastAPI、数据库与 SQL、JWT 身份认证、Redis 缓存、限流、异步处理、消息队列、日志、健康检查、Docker、测试，以及服务之间的数据流。',
        '能够根据需求设计项目整体结构，判断一个系统大致需要哪些组件，并设计模块之间如何连接。',
        '具体代码实现目前主要依赖 AI Agent 协作完成；能够阅读 Agent 生成的实现，通过日志定位问题、人工分析测试结果，并根据错误继续指导 Agent 修改。',
      ],
      keywords: ['API', 'FastAPI', 'Database', 'SQL', 'Redis', 'Queue', 'Docker', 'Auth'],
      levelLabels: ['Understand', 'Design', 'Build with Agent', 'Review'],
      implementation: 'Agent-assisted',
    },
    {
      id: 'ai-agent',
      nav: 'AI & Agent',
      title: 'AI & Agent Engineering',
      summary:
        '能够从单次 LLM 调用进一步设计由 RAG、上下文、路由、工具和业务规则组成的 Agent 系统。',
      details: [
        '理解哪些任务适合交给模型，哪些事情应该由确定性程序负责。',
        '能够解释 LLM API、Prompt、RAG、文档分块、检索、证据门控、上下文、意图分类、路由、Agent、工具调用、工具权限、Mock LLM 与真实 LLM、多轮上下文、失败兜底，以及 LLM 与业务代码之间的安全边界。',
        'LLM for reasoning, code for constraints.',
      ],
      keywords: ['LLM API', 'RAG', 'Agent', 'Prompt', 'Tool Calling', 'Context', 'Routing', 'Mock / Real LLM'],
      levelLabels: ['Understand', 'Design', 'Explain', 'Build with Agent', 'Review'],
      implementation: 'Agent-assisted',
      flow: ['Input', 'Context', 'Intent / Routing', 'RAG / Tools', 'LLM', 'Validation', 'Response'],
    },
    {
      id: 'fullstack',
      nav: 'Full Stack',
      title: 'Full-Stack Building',
      summary:
        '能够理解前端、后端、数据库与 AI 服务之间的连接方式，并借助 AI Agent 从产品需求持续推进完整 Web 项目的实现。',
      details: [
        '目前更偏向系统设计、后端与 AI 工程；前端主要负责接口关系理解、内容调整和 Agent 协同开发。',
        'Current focus: system design, backend and AI engineering.',
        'Frontend: API integration understanding + basic content editing + Agent-assisted implementation.',
      ],
      keywords: ['API Integration', 'Frontend ↔ Backend', 'Basic UI Content Editing'],
      levelLabels: ['Understand', 'Design', 'Build with Agent'],
      implementation: 'Agent-assisted',
    },
    {
      id: 'collaboration',
      nav: 'Agent Collaboration',
      title: 'Agent Collaboration',
      subtitle: 'Plan → Build → Review → Test → Iterate',
      summary:
        '逐渐形成了一套以规划、文档和验收为核心的 Agent 协作流程。复杂任务会先拆解并记录计划，再通过 Git 分支进行模块化开发，最后结合构建、测试、日志和人工 QA 完成验收。',
      details: [
        '开始任务前先让 Agent 阅读现有项目并先提出计划，我审查后再把大任务拆成阶段，为每个阶段规定明确范围，避免 Agent 顺手过度开发。',
        '用文档记录工程进度，让后续 Agent 能快速接手上下文；用 Git 分支进行并行开发，规划不同 Agent / 分支负责不同模块，尽量避免多人 / 多 Agent 修改同一部分造成冲突。',
        'Agent 完成后阅读修改总结，执行 build / lint / test，人工 QA 页面、查看 Console / 日志，根据实际错误继续让 Agent 修复；不因为 Agent 说「完成了」就直接认为任务成功。',
        'Agent 负责提高实现效率，我负责定义目标、架构、边界和验收标准。',
      ],
      keywords: ['Git', 'Git Branch', 'Build', 'Lint', 'Test', 'Logs', 'Documentation'],
      levelLabels: ['Plan', 'Build', 'Review', 'Test', 'Iterate'],
    },
    {
      id: 'system',
      nav: 'System Thinking',
      title: 'Product & System Thinking',
      summary:
        '开始能够从完整产品链路思考问题：用户需求如何进入前端，如何经过 API、数据、业务逻辑和 AI 系统，最终成为可以运行和验证的软件。',
      details: [
        '年初理解一个 AI 项目时可能首先想到「调用一个 LLM API」；现在设计产品时会从需求、页面、API、认证、数据库、缓存、消息队列、RAG / Agent、LLM / Tools、测试、日志、Docker 到部署，从系统整体去考虑。',
        '不是所有项目都需要以上所有组件，重点是开始能够从系统整体而不是单个函数理解软件。',
      ],
      keywords: ['Requirements', 'Architecture', 'Product', 'System'],
      levelLabels: ['Understand', 'Design'],
      flow: ['User', 'Frontend', 'API', 'Backend', 'Data / Infrastructure', 'RAG / Agent / Tools', 'LLM', 'Response'],
    },
  ],

  workflow: [
    'Requirement',
    'Plan',
    'Architecture',
    'Agent Implementation',
    'Review',
    'Build / Lint / Test',
    'Manual QA',
    'Iterate',
  ],

  parallelWork: {
    title: 'Parallel Work',
    description:
      '复杂项目中，我会利用 Git 分支拆分不同模块，让不同 Agent 分别工作，并通过明确的任务边界和文档记录减少代码冲突。',
    branches: [
      { name: 'feature/backend', agent: 'Agent A' },
      { name: 'feature/ui', agent: 'Agent B' },
      { name: 'feature/data', agent: 'Agent C' },
    ],
  },

  reflection: '最大的变化不是多会了一门语言，而是开始知道一个完整的软件系统是怎么组成的。',
}
