# Zhishi - Time Management for Windows

一个为 Windows 优化的极简时间管理应用。提供与 Dayflow 相同的优雅简洁体验。

*A minimalist time management app optimized for Windows. Elegant simplicity like Dayflow.*

## 📋 目录 / Table of Contents

- [产品简介 / Product Overview](#产品简介--product-overview)
- [特性 / Features](#特性--features)
- [快速开始 / Getting Started](#快速开始--getting-started)
- [部署指南 / Deployment Guide](#部署指南--deployment-guide)
- [文件结构 / Project Structure](#文件结构--project-structure)
- [技术栈 / Tech Stack](#技术栈--tech-stack)
- [浏览器支持 / Browser Support](#浏览器支持--browser-support)
- [响应式设计 / Responsive Design](#响应式设计--responsive-design)
- [性能优化 / Performance Optimization](#性能优化--performance-optimization)
- [多语言支持 / Multilingual Support](#多语言支持--multilingual-support)
- [常见问题 / FAQ](#常见问题--faq)
- [许可证 / License](#许可证--license)

## 产品简介 / Product Overview

**Zhishi（知时）** 是一款专为 Windows 系统优化的极简时间管理应用。它继承了 Dayflow 的设计理念和功能特性，同时深度融合 Windows 生态，为 Windows 用户提供一致、高效、优雅的时间管理体验。

**Zhishi** is a minimalist time management app specifically designed and optimized for Windows. It combines Dayflow's elegant design philosophy with native Windows integration, providing Windows users with a consistent, efficient, and elegant time management experience.

### 核心价值 / Core Value

- **极简设计** - Clean, minimal interface focusing on what matters
- **高级质感** - Premium design with elegant interactions
- **Windows 优化** - Native integration with Windows ecosystem
- **快速响应** - Zero-latency experience and smooth performance
- **自由易用** - Intuitive workflow with minimal setup required

## 特性 / Features

### 核心特性 / Core Features

1. **极简设计**
   - 干净简洁的用户界面
   - 去除所有不必要的元素
   - 聚焦于时间管理本质

2. **直观操作**
   - 简单易用的工作流程
   - 快速记录和管理时间
   - 支持一键快速操作

3. **原生体验**
   - 深度集成 Windows 系统
   - 一致的用户体验
   - 优化的性能表现

4. **优雅质感**
   - 精心设计的视觉效果
   - 流畅的交互动画
   - 高级应用体验

5. **专注工具**
   - 帮助保持专注
   - 提高工作效率
   - 实现生产力目标

6. **快速记录**
   - 一键快速记录
   - 支持快捷键
   - 最小化设置步骤

## 快速开始 / Getting Started

### 系统要求 / System Requirements

- **Windows**: Windows 10 or later
- **浏览器 / Browser**: 
  - Chrome 90+
  - Firefox 88+
  - Edge 90+
  - Safari 14+

### 本地开发 / Local Development

1. **克隆仓库 / Clone the repository**
   ```bash
   git clone https://github.com/zhishi/landing-page.git
   cd zhishi-landing-page
   ```

2. **启动本地服务器 / Start local server**
   ```bash
   # Using Python 3
   python -m http.server 3000
   
   # Or using Python 2
   python -m SimpleHTTPServer 3000
   
   # Or using Node.js (if you have http-server installed)
   npx http-server -p 3000
   ```

3. **打开浏览器 / Open browser**
   - 访问 / Visit: `http://localhost:3000`

4. **浏览页面 / Browse the page**
   - 使用语言切换按钮 / Use the language toggle button in the top-right corner
   - 与 FAQ 互动 / Interact with the FAQ accordion
   - 测试响应式设计 / Test responsive design by resizing the window

## 部署指南 / Deployment Guide

### GitHub Pages 部署 / Deploy to GitHub Pages

1. **Fork or clone the repository**
   ```bash
   git clone https://github.com/zhishi/landing-page.git
   cd zhishi-landing-page
   ```

2. **Push to GitHub Pages branch**
   ```bash
   git branch -D gh-pages 2>/dev/null
   git checkout --orphan gh-pages
   git add .
   git commit -m "Deploy landing page"
   git push -u origin gh-pages
   ```

3. **在 GitHub 仓库设置中启用 GitHub Pages**
   - Go to Settings → Pages
   - Select `gh-pages` branch as source
   - Save

### 静态服务器部署 / Deploy to Static Server

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### 其他服务器 / Other Servers
只需上传以下文件到你的服务器：
- `index.html`
- `style.css`
- `script.js`

Upload these files to your web server:
- `index.html`
- `style.css`
- `script.js`

## 文件结构 / Project Structure

```
zhishi-landing-page/
├── index.html          # Main HTML file (主 HTML 文件)
├── style.css           # Stylesheet (样式表)
├── script.js           # JavaScript interactions (交互脚本)
├── package.json        # Project metadata (项目元数据)
├── README.md           # This file (本文件)
└── .gitignore          # Git ignore file (Git 忽略文件)
```

## 技术栈 / Tech Stack

- **HTML5** - Semantic markup with proper accessibility
- **CSS3** - Modern styling with CSS Grid, Flexbox, and CSS Variables
- **Vanilla JavaScript** - No dependencies, pure JavaScript
- **Responsive Design** - Mobile-first approach

### 核心特技术特性 / Key Technical Features

1. **CSS Variables** - Comprehensive design system
2. **CSS Grid & Flexbox** - Modern layout system
3. **CSS Animations** - Smooth transitions and effects
4. **IntersectionObserver** - Performance-optimized scroll animations
5. **LocalStorage** - Language preference persistence
6. **Semantic HTML** - Accessibility-first markup

## 浏览器支持 / Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |
| IE 11 | - | ❌ Not Supported |

## 响应式设计 / Responsive Design

该页面完全响应式，支持以下断点：

**Fully responsive design supporting all breakpoints:**

- **Desktop** (1200px+)
  - Full navigation menu
  - Multi-column layouts
  - Optimized spacing and typography

- **Tablet** (768px - 1199px)
  - Responsive grid layouts
  - Simplified navigation
  - Adjusted font sizes

- **Mobile** (< 768px)
  - Single column layouts
  - Touch-friendly buttons
  - Optimized mobile experience

- **Small Mobile** (< 480px)
  - Extra large touch targets
  - Simplified components
  - Readable typography

## 性能优化 / Performance Optimization

### 已实施的优化 / Implemented Optimizations

1. **Zero External Dependencies**
   - No npm packages required
   - Faster load times
   - Smaller bundle size

2. **Efficient CSS**
   - CSS Variables for consistent theming
   - Minimal CSS selectors
   - Optimized animations (GPU-accelerated)

3. **JavaScript Optimization**
   - Vanilla JavaScript (no frameworks)
   - RequestAnimationFrame for smooth scrolling
   - IntersectionObserver for lazy loading animations
   - Event delegation for better performance

4. **Image Optimization**
   - SVG icons for sharp rendering
   - CSS-based placeholders
   - No unnecessary image assets

### 性能指标 / Performance Metrics

- **首屏加载时间** / First Contentful Paint: < 1s
- **完整加载时间** / Largest Contentful Paint: < 2s
- **交互就绪时间** / Time to Interactive: < 2s
- **累积布局偏移** / Cumulative Layout Shift: < 0.1

## 多语言支持 / Multilingual Support

### 支持的语言 / Supported Languages

- **English** (English)
- **中文** (Simplified Chinese)

### 语言切换 / Language Toggle

- 使用页面右上方的语言切换按钮 / Use the language toggle button in the top-right corner
- 语言偏好保存在 LocalStorage / Language preference is saved in LocalStorage
- 键盘快捷键：Ctrl/Cmd + L / Keyboard shortcut: Ctrl/Cmd + L

### 翻译 / Translations

所有内容都配有数据属性进行翻译：

All content is structured with data attributes for easy translation:

```html
<span data-cn="中文文本" data-en="English text">English text</span>
```

要添加新语言，请按照相同的模式添加新的数据属性。

To add a new language, follow the same pattern and add a new data attribute.

## 常见问题 / FAQ

### 我可以在本地自定义这个页面吗？ / Can I customize this page locally?

是的！所有源代码都在仓库中。您可以：
- 修改 HTML 内容
- 自定义 CSS 样式（使用 CSS 变量很方便）
- 扩展 JavaScript 功能

Yes! All source code is in the repository. You can:
- Modify HTML content
- Customize CSS styles (CSS variables make it easy)
- Extend JavaScript functionality

### 这个页面如何集成下载功能？ / How do I integrate download functionality?

在 `script.js` 中修改 `handleDownloadClick()` 函数：

Edit the `handleDownloadClick()` function in `script.js`:

```javascript
function handleDownloadClick() {
    // Replace with your actual download link
    window.location.href = 'https://your-download-url.com/zhishi';
}
```

### 如何修改主题色？ / How do I change the theme color?

在 `style.css` 中修改 CSS 变量：

Modify CSS variables in `style.css`:

```css
:root {
    --color-primary: #000000;        /* Change this */
    --color-accent: #5865f2;         /* Change this */
    /* ... other variables ... */
}
```

### 我如何添加分析跟踪？ / How do I add analytics?

在 `script.js` 中的 `trackEvent()` 函数已为分析集成做好准备。

The `trackEvent()` function in `script.js` is ready for analytics integration:

```javascript
// Integrate with Google Analytics, Mixpanel, etc.
function trackEvent(eventName, data = {}) {
    // Your analytics code here
    if (window.gtag) {
        gtag('event', eventName, data);
    }
}
```

## 开发指南 / Development Guide

### 代码风格 / Code Style

- **HTML** - Semantic HTML5 with proper accessibility attributes
- **CSS** - BEM methodology for class naming
- **JavaScript** - ES6+ with clear function naming and comments

### 提交贡献 / Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Git 工作流 / Git Workflow

```bash
# Create feature branch
git checkout -b feat-your-feature

# Make changes
git add .

# Commit changes
git commit -m "feat: describe your changes"

# Push to remote
git push origin feat-your-feature

# Create Pull Request on GitHub
```

## 许可证 / License

MIT License - See LICENSE file for details

## 联系方式 / Contact

- **Website** - https://zhishi.windows (coming soon)
- **GitHub** - https://github.com/zhishi/landing-page
- **Email** - contact@zhishi.dev (placeholder)

---

## 鸣谢 / Credits

- 设计灵感来自 / Design inspiration from [Dayflow](https://dayflow.so/)
- 构建于 / Built with HTML5, CSS3, and Vanilla JavaScript

---

**最后更新** / *Last Updated*: 2024-11-14

祝您使用愉快！ / Enjoy! 🎉
