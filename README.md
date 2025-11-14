# 知时 Landing Page

基于 [Dayflow](https://dayflow.so/) 的设计理念，为 Windows 时间管理应用 **知时** 打造的极简单页展示站点，呈现 Dayflow 级体验与 Windows 原生优化的结合。

## ✨ 项目亮点

- **Dayflow 体验 + Windows 优化**：文案与结构完整诠释“为 Windows 打造的 Dayflow 级时间管理”，突出熟悉的快捷方式、生态整合与性能调优。
- **亮色系玻璃拟态视觉**：采用亮色渐层、柔和阴影与玻璃拟态卡片，延续 Dayflow 的高级质感，同时贴合 Windows Fluent 风格。
- **双语内容切换**：提供中英文文案，支持一键切换，方便国内外团队沟通与推广。
- **响应式布局**：使用 CSS Grid 与 Flexbox，适配桌面、平板与手机设备。
- **轻量交互与动画**：Intersection Observer 驱动的渐入效果，保持性能与体验的平衡。
- **性能友好**：无外部框架、按需加载字体、资源体积小，确保快速打开与浏览。

## 🧱 项目结构

```
.
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── styles.css      # 全局样式（含响应式与动效）
│   ├── js/
│   │   └── main.js         # 语言切换、动效逻辑
│   └── images/
│       └── logo.svg        # 知时品牌占位标识
└── README.md               # 项目说明
```

## 🚀 使用方式

1. 克隆或下载本仓库代码。
2. 直接使用浏览器打开 `index.html` 即可浏览 Landing Page。
3. 若部署至静态站点托管平台（如 Vercel、Netlify、GitHub Pages），需保持上述目录结构。

## 🛠️ 技术栈

- **HTML5**：语义化结构，分区明确。
- **CSS3**：CSS 变量、Flexbox、Grid、亮色渐层与玻璃拟态实现视觉风格。
- **Vanilla JavaScript**：语言切换、动态文案填充、Intersection Observer 动效控制。

## 📱 响应式测试

已在以下尺寸验证布局与交互：

- 桌面端 ≥ 1280px
- 笔记本/平板：1024px、768px
- 手机端：414px、360px

> 如需进一步自定义品牌视觉（如替换 logo、调色或插画），可更新 `assets/images` 内资源，并根据需要调整 `:root` 中的 CSS 变量。

## 📄 版权声明

知时 Landing Page 仅作为产品展示用途，相关品牌素材与文案归 Zhishi Studio 所有。
