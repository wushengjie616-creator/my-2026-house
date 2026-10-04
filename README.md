# My 2026 House 🏡

把我的 2026 年做成一间温馨、可爱、可以探索的 3D 玩偶屋。访客可以从斜上方俯视整间小屋，点击衣柜、电脑、电视、书架等物品，慢慢了解这一年的故事。

整个项目限定只展示 **2026 年** 发生的事情。场景固定在一个温暖的傍晚：暖黄灯光、木质地板、米色奶油色家具、窗外是蓝紫色的傍晚天空。

---

## 技术栈

- [Vite](https://vite.dev/) — 构建 / 开发服务器
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Three.js](https://threejs.org/) — 3D 渲染
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) — React 里写 Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) — 常用 3D 工具（OrbitControls、useCursor、Html）

> 状态管理和复杂动画暂时都没引入 —— 交互用一个轻量的 React Context，家具用基础几何体拼装，保持轻量。

---

## 当前已完成

**第一阶段 · 温馨 3D 小屋原型**

- ✅ Vite + React + TS 项目初始化
- ✅ 温暖傍晚氛围 + 暖色灯光 + 柔和阴影
- ✅ 欢迎页（Enter 进入）+ Loading 状态 + 底部操作提示

**第二阶段 · 玩偶屋多房间**

- ✅ 从单房间扩展成 **5 个房间**的玩偶屋：卧室、客厅、书房、衣帽间、厨房
- ✅ 玩偶屋风格外壳：底座、地板、后墙、左右墙、内部**矮分隔墙**（面向镜头一侧完全敞开，斜上方可一眼看全）
- ✅ 玩偶屋镜头：默认斜上方俯视、拖动旋转、限制缩放与角度（不会翻到地板下面）
- ✅ 统一的 `InteractiveObject` 交互机制（hover 高亮 + 光标 + 悬浮标签 + 点击）
- ✅ 4 个可点击对象：**衣柜 / 电脑 / 电视 / 书架**，文案统一来自 `houseContent2026.ts`
- ✅ 统一的信息卡 `InfoCard`（标题 + 分类徽章 + 正文，可扩展图片 / 标签）

**第三阶段 · 2026 旅行**

- ✅ 客厅茶几上的 **旅行相册**（Travel Album，复用 `InteractiveObject` 交互）
- ✅ 点击打开 `TravelAlbumPanel` 旅行手账面板（纸张感 / 明信片风格）
- ✅ 四段真实旅行：长春 / 南京 / 杭州 / 武夷山 & 三清山（FEB / APR / MAY / SEP 月份切换）
- ✅ 独立数据文件 `travel2026.ts`，预留 `photo` 字段用于未来照片

**第四阶段 · 2026 学业**

- ✅ 书房书桌上的 **学业手账**（Study Journal，复用 `InteractiveObject` 交互）
- ✅ 点击打开 `StudyJournalPanel`（左侧五章标签 + 笔记 / 便签 / 时间线风格）
- ✅ 五个章节：PROFILE / COURSES / COURSEWORK / PATENT / NEXT
- ✅ 独立数据文件 `academic2026.ts`，专利明确写为「申请 · 尚未授权」，预留 `image` 字段

**第五阶段 · 灯与游戏手机**

- ✅ 修复书房书架的穿模与位置（原柜体左沿 x=-2.35 穿进左分隔墙，改到 x=-1.9，紧贴墙内、不再穿模）
- ✅ 客厅左侧新增 **可交互落地灯**：默认亮着，点击开关；暖黄点光源 + 灯罩发光，关掉后角落明显变暗、整屋不会全黑
- ✅ 卧室床头柜新增 **手机**（2026 Games）：点击打开 `GamesPhonePanel`
- ✅ 独立数据文件 `games2026.ts`（暂为空数组，不虚构游戏名；空状态显示温暖的「整理中」文案）

**第六阶段 · 2026 实习**

- ✅ 书房书桌上新增 **工作证**（Work Badge，复用 `InteractiveObject`）：点击打开 `InternshipPanel`
- ✅ 三段实习以「成长轨迹」呈现：算法 → 工程 → Agent → 科研，对应 03–08 / 09 / 10–12
- ✅ 独立数据文件 `internships2026.ts`，日薪仅作小标签、不虚构公司名，预留 `image` 字段
- ✅ 年度总结：「从算法，到 Agent，再到科研。」

**第七阶段 · 2026 Engineering Toolkit**

- ✅ 书房 **电脑** 升级为入口：点击不再打开旧 InfoCard，改为 `openPanel('engineering')`
- ✅ 五个能力模块：Backend System Design / AI & Agent Engineering / Full-Stack Building / Agent Collaboration / Product & System Thinking
- ✅ 不用百分比 / 进度条 / 雷达图，改用行为层次（Understand / Design / Build with Agent / Review）表达能力
- ✅ 明确标注 `Agent-assisted` 实现方式，不夸大前端能力，不隐藏 AI 协作
- ✅ 独立数据文件 `engineering2026.ts`，含 How I Build 流程、Parallel Work 协作与年度总结

**第八阶段 · My 2026 Desktop + 2026 Projects**

- ✅ 书房 **电脑** 升级为入口：点击打开 `DesktopPanel`（My 2026 Desktop），不再直接打开单个面板
- ✅ Desktop 三个入口：**Projects**（2026 项目）/ **Engineering Toolkit**（复用工程工具包）/ **2026.log**（极简占位）
- ✅ **2026 Projects** 完整实现：四个真实项目（西班牙语学习助手 / 多租户 AI 客服平台 / Public Opinion Monitor / Puzzle Solving Agent）
- ✅ 每个项目含 category / tagline / What I Built / What I Learned / Built With / status；顶部一条轻量成长轨迹（Personal Product → Backend System → Data System → Agent System）
- ✅ 状态三态：Open Source（附 GitHub 链接）/ Private Project / In Development；Private 与 In Development 不给链接、不暴露敏感信息
- ✅ 独立数据文件 `projects2026.ts`，预留 `image` 与 `architecture` 字段

**第九阶段 · 2026 Games**

- ✅ 卧室床头柜 **手机** 补齐内容：`games2026.ts` 从空数组正式填入四个真实游戏
- ✅ 手机首页列出四种快乐：CHALLENGE（第五人格）/ CASUAL（和平精英）/ STORIES（橙光互动文游）/ TOGETHER（Big Walk），各配一句极短总结
- ✅ 单游戏详情页：Category / Game Name / Title / 正文 / Tags / Quote / 记忆数据，支持返回手机首页
- ✅ 第五人格带个人记忆数据（17 条项链 / 噩梦难度通关），和平精英带搞笑自嘲小标签（Play Style / Confidence vs Bots）
- ✅ 不用排行榜 / 时长 / 段位 / 胜率 / 氪金 / 成就，不虚构竞技数据，不使用官方图片与 Logo

> 除旅行、学业、实习、工程工具包、项目、游戏外，其余内容（衣柜 / 电视 / 书架）仍是占位文案；2026.log 仍是极简占位。

---

## 如何运行

```bash
npm install     # 首次安装依赖
npm run dev     # 启动开发服务器（终端会打印本地地址）
```

然后打开浏览器访问终端里显示的地址（默认 http://localhost:5173）。

其他命令：

```bash
npm run build   # 类型检查 + 生产构建
npm run preview # 预览生产构建
npm run lint    # 代码检查（oxlint）
```

---

## 目录简介

```
src/
├── main.tsx                 # 入口：挂载 React 应用
├── index.css                # 全局样式 + 主题变量
├── app/
│   ├── App.tsx              # 顶层：欢迎页 / 场景 / UI 覆盖层的状态切换
│   └── SceneCanvas.tsx      # 创建 Three.js <Canvas>，不含具体场景
├── scene/
│   ├── World.tsx            # 组合环境 + 灯光 + 小屋 + 镜头
│   ├── Lighting.tsx         # 全局暖色灯光
│   ├── Camera.tsx           # 玩偶屋 OrbitControls 镜头配置
│   └── Environment.tsx      # 房间之外的背景色
├── rooms/
│   ├── House.tsx            # 小屋外壳（底座 / 墙 / 矮分隔墙 / 窗户）+ 摆放 5 个房间
│   ├── Bedroom/             # 卧室（床 / 床头柜 / 台灯 / 手机★ / 地毯）
│   ├── LivingRoom/          # 客厅（电视★ / 落地灯★ / 沙发 / 茶几 / 旅行相册★ / 地毯）
│   ├── Study/               # 书房（书桌 / 电脑★ / 学业手账★ / 工作证★ / 椅子 / 书架★）
│   ├── Wardrobe/            # 衣帽间（衣柜★ / 落地镜 / 挂衣架）
│   └── Kitchen/             # 厨房（冰箱 / 料理台 / 灶台 / 餐桌）
├── interactions/
│   ├── interactionContext.ts# 「哪个对象被选中」的 Context + hook
│   ├── InteractiveObject.tsx# 可复用的交互包装（hover + 点击 + 标签）
│   └── InteractionManager.tsx# Context Provider
├── ui/
│   ├── WelcomeScreen.tsx    # 欢迎页
│   ├── LoadingScreen.tsx    # Loading 状态
│   ├── InfoCard.tsx         # 点击后弹出的统一信息卡
│   ├── TravelAlbumPanel.tsx # 旅行手账面板（相册打开后显示）
│   ├── StudyJournalPanel.tsx# 学业手账面板（手账打开后显示）
│   ├── GamesPhonePanel.tsx  # 游戏手机面板（手机打开后显示，首页 + 详情）
│   ├── InternshipPanel.tsx  # 实习面板（工作证打开后显示）
│   ├── DesktopPanel.tsx     # 电脑桌面面板（电脑打开后显示，含三入口）
│   ├── EngineeringToolkitPanel.tsx # 工程工具包面板（桌面 Engineering Toolkit 入口打开）
│   ├── ProjectsPanel.tsx    # 项目面板（桌面 Projects 入口打开）
│   └── HUD.tsx              # 底部操作提示
├── data/
│   ├── profile.ts           # 站点身份
│   ├── houseContent2026.ts  # 信息卡文案（衣柜 / 电视 / 书架；电脑已改由桌面接管）
│   ├── travel2026.ts        # 2026 旅行数据（预留 photo 字段）
│   ├── academic2026.ts      # 2026 学业数据（预留 image 字段）
│   ├── internships2026.ts   # 2026 实习数据（三段实习 + 年度总结）
│   ├── engineering2026.ts   # 2026 工程能力数据（五个能力模块）
│   ├── projects2026.ts      # 2026 项目数据（四个项目 + 成长轨迹）
│   └── games2026.ts         # 2026 游戏数据（四个真实游戏 + 记忆数据）
├── utils/
│   └── palette.ts           # 全站暖色主题色板
└── styles/
    └── ui.css               # 覆盖层 UI 样式
```

> 带 ★ 的是可交互对象。家具没有过度组件化 —— 简单的几何体直接写在对应房间文件里，只有需要复用的交互逻辑才抽成 `InteractiveObject`。

---

## 页面运行链路

```
main.tsx
  └─ App.tsx                 （决定显示欢迎页还是场景）
       ├─ WelcomeScreen      （点 Enter → 进入场景）
       └─ SceneCanvas        （<Canvas> 容器）
            └─ World         （组合一切）
                 ├─ Environment / Lighting / CameraRig
                 └─ House    （小屋外壳 + 5 个房间）
                      └─ 各房间 → InteractiveObject → 点击 → InfoCard
```

---

## 五个房间的布局

小屋占地 12 × 8，从斜上方看是「三列 × 两行」，右侧一列被厨房打通：

| 房间 | 位置 | 主要家具 |
|---|---|---|
| 卧室 | 左后 | 床、床头柜、台灯、手机★、地毯 |
| 书房 | 中后 | 书桌、电脑★、学业手账★、工作证★、椅子、书架★ |
| 厨房 | 右列（通高） | 冰箱、料理台、灶台、餐桌 |
| 衣帽间 | 左前 | 衣柜★、落地镜、挂衣架 |
| 客厅 | 中前 | 电视★、落地灯★、沙发、茶几、地毯 |

---

## 下一阶段计划（仅建议，未开始）

- 为旅行相册补充真实照片：把图片放进 `public/travel/`，再在 `travel2026.ts` 对应条目填 `photo` 字段（面板会自动显示）
- 为学业手账补充照片：课程作品 / 专利 / 保研图片放进 `public/academic/`，再在 `academic2026.ts` 对应字段填 `image`
- 填充其余板块的真实数据（衣柜 / 电视 / 书架的占位文案）
- 信息卡支持图片 / 标签 / 列表
- 更多可交互对象（相框、绿植、冰箱贴等）
- 房间细节与软装（床品花纹、墙面色调、装饰画）
- 衣帽间换装 / 开关衣柜门的小动画
- 白天 / 夜晚的光照切换
