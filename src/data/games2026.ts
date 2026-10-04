/**
 * 2026 年真实玩过的四类游戏。
 * 这是「游戏记忆册」，不是排行榜 / 平台统计中心：不记录时长、段位、胜率、氪金、成就。
 * 只使用本人提供的真实经历，不虚构竞技数据；`image` 预留，未来有截图时填 public/games/ 路径。
 */

export type GameStat2026 = {
  label: string
  value: string
}

export type Game2026 = {
  id: string
  /** 游戏 / 游戏类型名。 */
  name: string
  /** 记忆类型：Challenge / Casual / Stories / Together。 */
  category: string
  /** 详情页大标题。 */
  title: string
  /** 英文小标签。 */
  tags: string[]
  /** 首页一句极短总结。 */
  summary: string
  /** 详情页正文（按段落）。 */
  body: string[]
  /** 视觉 quote（可选）。 */
  quote?: string
  /** 题材 / 亮点（可选，如橙光的仙侠 / 娱乐圈 / 养成）。 */
  highlights?: string[]
  /** 真实记忆数据（可选，如第五人格的项链数 / 难度）。 */
  stats?: GameStat2026[]
  /** 搞笑自嘲小标签（可选，如和平精英的玩法自评）。 */
  funFacts?: GameStat2026[]
  /** 预留：游戏截图路径，如 '/games/identity-v.jpg'。 */
  image?: string
}

export const games2026: Game2026[] = [
  {
    id: 'identity-v',
    name: '第五人格',
    category: 'Challenge',
    title: '今年运气最好的一本手记',
    tags: ['Challenge', 'Friends', 'Lucky'],
    summary: '技术还在进步，运气已经毕业。',
    body: [
      '今年很喜欢《第五人格》的「加页手记」。在朋友的帮助下，终于成功打通了噩梦难度。',
      '更让我开心的是，今年已经累计收集到了 17 条项链。技术可能还在慢慢进步，但运气显然已经提前毕业了。',
    ],
    stats: [
      { label: 'Necklaces', value: '17' },
      { label: 'Nightmare', value: 'Cleared' },
    ],
  },
  {
    id: 'peace-elite',
    name: '和平精英',
    category: 'Casual',
    title: '枪法一般，心态良好',
    tags: ['Shooting', 'Casual', 'Rookie'],
    summary: '枪法一般，心态良好。',
    body: [
      '偶尔也会打开《和平精英》体验一下枪战。遗憾的是，我显然没有点亮什么射击游戏天赋。',
      '目前最大的舒适区还是新手局：遇到真人会开始紧张，遇到人机就可以自信出击。',
      '不追求上分，成功击倒几个目标，就已经是一局很有参与感的游戏。',
    ],
    funFacts: [
      { label: 'Play Style', value: 'Casual' },
      { label: 'Confidence vs Bots', value: 'Very High' },
    ],
  },
  {
    id: 'orange-story-games',
    name: '橙光互动文游',
    category: 'Stories',
    title: '把小说读进游戏里',
    tags: ['Story', 'Choice', 'Growth'],
    summary: '这一次，我可以替主角做决定。',
    body: [
      '我一直很喜欢小说，所以也很喜欢橙光这种介于「小说」和「游戏」之间的体验。',
      '仙侠、娱乐圈、养成……具体题材并不是最重要的。我最喜欢的是跟着一个角色从普通的起点慢慢成长：做选择、培养属性、认识不同的人，然后一点一点变强。',
      '有时候吸引我的不是「赢」，而是想看看这个人物最后会走到哪里。',
    ],
    quote: '像是在读一本小说，只不过这一次，我可以替主角做决定。',
    highlights: ['仙侠', '娱乐圈', '养成'],
  },
  {
    id: 'big-walk',
    name: 'Big Walk',
    category: 'Together',
    title: '和新朋友一起迷路',
    tags: ['Co-op', 'Exploration', 'Friendship'],
    summary: '我们会走散，也会重新找到彼此。',
    body: [
      '今年和新认识的朋友一起玩了《Big Walk》。世界很大，于是经常会出现一种非常真实的情况：走着走着，一个人不见了。',
      '找不到彼此、重新汇合，再靠交流和一点奇怪的默契解决路上的任务。很多时候，好像「完成任务」反而不是最重要的事情。',
      '最有意思的是，我们真的会在一个虚拟世界里走散，然后又努力把彼此找回来。',
    ],
    quote: 'Getting lost was part of the fun.',
  },
]
