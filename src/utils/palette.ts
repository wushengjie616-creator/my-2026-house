/**
 * 全站共享的暖色主题色板。
 *
 * 把颜色集中在这里，是为了让「温馨 / 奶油感 / 傍晚小屋」的整体氛围
 * 只需要改这一个文件就能统一调整，而不是散落在每个家具组件里。
 */
export const palette = {
  // 房间
  floor: '#b5895f',
  wall: '#f4ead9',
  wallTrim: '#e6d5bf',

  // 木制家具
  wood: '#9a6f4a',
  woodLight: '#c3946c',
  woodDark: '#7a5638',

  // 柔软织物
  cream: '#f5efe6',
  blanket: '#d8a39c',
  rug: '#d5a28f',
  rugInner: '#c78e79',

  // 灯
  lampShade: '#f4dcab',
  lampGlow: '#ffcf9a',

  // 绿植
  plant: '#7e9c76',
  plantDark: '#5f7f5c',
  pot: '#c98d6a',

  // 窗户 / 傍晚天空
  skyDusk: '#7786bd',
  skyDuskDeep: '#241f38',
  sunsetGlow: '#f2a65a',

  // 其他
  metal: '#b9b2a8',
} as const
