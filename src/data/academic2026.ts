/**
 * 2026 年学业的独立数据源。
 * 只包含真实经历，不补充学校名称、具体排名、成绩、导师、专利编号等未提供的信息。
 * 各处的 `image` 字段预留：将来有真实照片时填路径即可，没有图片时 UI 自然显示。
 */

export type AcademicCourse2026 = {
  id: string
  name: string
}

export type CourseworkProject2026 = {
  id: string
  name: string
  description: string
  /** 预留：课程作品照片路径（如 '/academic/bp-monitor.jpg'）。 */
  image?: string
}

export type PatentTimelineStep = {
  /** 时间点标签：JAN 2026 / APR 2026 / NOW。 */
  timeLabel: string
  /** 该节点的状态说明：提交 / 公开 / 尚未授权。 */
  label: string
}

export type PatentProgress2026 = {
  topic: string
  /** 当前整体状态，明确是「申请」而非「已授权」。 */
  status: string
  steps: PatentTimelineStep[]
  /** 预留：专利相关截图路径。 */
  image?: string
}

export type AcademicMilestone2026 = {
  title: string
  description: string
  nextStep: string
  /** 预留：保研相关照片路径。 */
  image?: string
}

export type Academic2026 = {
  major: string
  /** 简短视觉标签。 */
  rankingLabel: string
  /** 中文正文说明。 */
  ranking: string
  courses: AcademicCourse2026[]
  /** 课程作品部分的一句话总结。 */
  courseworkSummary: string
  courseworkProjects: CourseworkProject2026[]
  patent: PatentProgress2026
  milestone: AcademicMilestone2026
}

export const academic2026: Academic2026 = {
  major: '智能感知工程',
  rankingLabel: 'Top 30%',
  ranking: '绩点位于专业前 30%，成绩优异',
  courses: [
    { id: 'computer-vision', name: '计算机视觉' },
    { id: 'big-data', name: '大数据分析' },
    { id: 'modern-optics', name: '现代光学技术' },
    { id: 'sensor', name: '传感器原理' },
  ],
  courseworkSummary: '从传感器与电路，到视觉识别，再到机械臂控制。',
  courseworkProjects: [
    {
      id: 'bp-monitor',
      name: '电子血压计电路搭建',
      description: '完成电子血压计相关电路搭建。',
    },
    {
      id: 'dice',
      name: '骰子点数识别',
      description: '完成骰子点数识别课程作品。',
    },
    {
      id: 'robot-arm',
      name: '机械臂控制',
      description: '完成机械臂控制相关课程作品。',
    },
  ],
  patent: {
    topic: '传感器主题专利申请',
    status: '目前尚未授权',
    steps: [
      { timeLabel: 'JAN 2026', label: '提交' },
      { timeLabel: 'APR 2026', label: '公开' },
      { timeLabel: 'NOW', label: '尚未授权' },
    ],
  },
  milestone: {
    title: '成功保研',
    description: '2026 年，我成功保研至本校本专业。',
    nextStep: '下一阶段，继续学习智能感知工程。',
  },
}
