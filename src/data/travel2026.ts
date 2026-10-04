/**
 * 2026 年旅行的独立数据源。
 * 文字都是真实经历，不在这里编造新的地点或事件。
 * `photo` 字段预留：将来有真实照片时，把图片放进 public/travel/ 再填上路径即可。
 */
export type TravelEntry2026 = {
  id: string
  month: number
  /** 顶部切换用的短月份标签。 */
  monthLabel: string
  /** 页面里显示的完整月份名。 */
  monthName: string
  /** 一次旅行可能去多个地方，用数组表示。 */
  locations: string[]
  title: string
  /** 一段第一人称的简短回忆。 */
  summary: string
  /** 几个关键记忆点。 */
  highlights: string[]
  /** 预留：未来填真实照片的路径（如 '/travel/changchun.jpg'）。 */
  photo?: string
}

export const travel2026: TravelEntry2026[] = [
  {
    id: 'feb-changchun',
    month: 2,
    monthLabel: 'FEB',
    monthName: 'FEBRUARY',
    locations: ['长春'],
    title: '雪地与烧烤',
    summary:
      '二月去了长春，第一次认真玩雪。天冷得很，呼出的气都是白的。晚上找家烧烤店坐下，炭火一上来，整个人就暖和了。',
    highlights: ['玩雪', '东北烧烤'],
  },
  {
    id: 'apr-nanjing',
    month: 4,
    monthLabel: 'APR',
    monthName: 'APRIL',
    locations: ['南京'],
    title: '盐水鸭、书店与动物园',
    summary:
      '四月去南京。吃了盐水鸭，逛了先锋书店，还去红山森林动物园待了一下午，看到好多来自世界各地的动物。',
    highlights: ['盐水鸭', '先锋书店', '红山森林动物园'],
  },
  {
    id: 'may-hangzhou',
    month: 5,
    monthLabel: 'MAY',
    monthName: 'MAY',
    locations: ['杭州'],
    title: '人潮里的柔软西湖',
    summary:
      '五月去了杭州。游客真的很多，走到哪儿都挤。但看到西湖的时候，我还是觉得水很柔、很安静。湖边还看到一只松鼠。',
    highlights: ['西湖', '湿地', '湖边的松鼠'],
  },
  {
    id: 'sep-wuyi-sanqing',
    month: 9,
    monthLabel: 'SEP',
    monthName: 'SEPTEMBER',
    locations: ['武夷山', '三清山'],
    title: '从黑夜走到日出',
    summary:
      '九月去了武夷山和三清山。在武夷山，凌晨四点起床，五点左右天还黑着就开始爬山，一路摸黑往山顶走，等着天亮，最后在山顶看了日出，下山之后去寺里吃了早餐。后来到三清山坐缆车，缆车从山群之间穿过去，脚下是一片连绵的山。',
    highlights: ['凌晨爬山', '山顶日出', '寺院早餐', '缆车穿山群'],
  },
]
