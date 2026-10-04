/**
 * 2026 年内容的统一数据源。
 * 房子里所有可点击物品的信息卡内容都从这里读取，而不是写死在组件里。
 * 未来可以在这里按 category 扩展更多字段（图片、标签、日期等）。
 */
export type HouseContentCategory = 'projects' | 'highlights' | 'learning' | 'wardrobe'

export interface HouseContent2026 {
  id: string
  title: string
  description: string
  category: HouseContentCategory
}

export const houseContent2026: HouseContent2026[] = [
  {
    id: 'wardrobe',
    title: '2026 Wardrobe',
    description: '这里以后会记录 2026 年不同状态下的我，以及换装系统。',
    category: 'wardrobe',
  },
  {
    id: 'computer',
    title: '2026 Projects',
    description: '这里以后会记录我在 2026 年完成的重要项目与技术成长。',
    category: 'projects',
  },
  {
    id: 'tv',
    title: '2026 Highlights',
    description: '这里以后会播放属于我的 2026 年重要时刻。',
    category: 'highlights',
  },
  {
    id: 'bookshelf',
    title: '2026 Books & Learning',
    description: '这里以后会记录我在 2026 年阅读、学习和探索过的东西。',
    category: 'learning',
  },
]

export function getHouseContent(id: string): HouseContent2026 {
  const content = houseContent2026.find((item) => item.id === id)
  if (!content) {
    throw new Error(`houseContent2026: 找不到 id 为 "${id}" 的内容`)
  }
  return content
}
