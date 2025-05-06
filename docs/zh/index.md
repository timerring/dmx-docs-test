---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: DMXAPI 文档
  text: 一个 Key 用全球大模型
  tagline: DMX = 大模型拼音首字母
  image:
    src: /logo-day.png
  actions:
    - theme: brand
      text: 查看文档
      link: /zh/guide/getting-started
    - theme: alt
      text: 访问官网
      link: https://dmxapi.cn
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/dmxapi/dmxapi-docs

features:
  - icon: <span class="rive-canvas" data-rive-canvas="true" data-rive-src="/icons/rocket-emoji-animated.riv"></span>
    title: 超高并发与同步更新
    details: 采用先进的架构设计与优化，轻松应对<strong class="strong-text">海量并发请求</strong>，适用于各类高流量场景。我们<strong class="strong-text">即时同步全球最新AI大模型</strong>，确保您始终掌握最新技术。
  - icon: <img src="/icons/Technologist.png" alt="及时的技术支持">
    title: 一对一客服支持
    details: 我们提供近乎<strong class="strong-text">7×24小时的一对一在线客服技术支持</strong>，无论是技术问题还是个性化需求，客服团队随时待命，确保迅速响应。
  - icon: <img src="/icons/RMB.png" alt="人民币">
    title: 人民币计价全球大模型
    details: 1 个 Key 直连畅通使用国内外领先大模型 API 服务，并且通过<strong class="strong-text">直接与大模型原厂合作</strong>，我们采用<strong class="strong-text">集中采购</strong>的方式获取资源，确保为您提供<a href="https://www.dmxapi.cn/pricing" class="custom-link">极具竞争力的价格</a>。
  - icon: <img src="/icons/Page.png" alt="开发票">
    title: 极其便捷的发票服务
    details: 我们严格遵循商务流程，确保每一步操作都规范透明。从<a href="https://www.aiqbh.com/openai-api.html#contact" class="custom-link">合同签署</a>到<a href="https://www.dmxapi.cn/fapiao" class="custom-link">发票开具</a>，<strong class="strong-text">全程支持</strong>，保证每笔交易合法合规，为您提供<strong class="strong-text">最安心便捷的合作体验</strong>。
  - icon: <img src="/icons/Locked.png" alt="数据安全">
    title: 数据安全
    details: 我们专注于 API 聚合中转服务，<strong class="strong-text">不存储任何客户数据</strong>，绝对确保信息安全与隐私保护。选择我们，既可享受高效服务，又能获得数据安全保障。
  - icon: <img src="/icons/Handshake.png" alt="握手">
    title: 服务承诺
    details: DMXAPI 始终秉持<strong class="strong-text">诚信与专业</strong>的原则，我们确保向客户提供真实、可靠的模型服务，维护客户的信任与满意度，<a href="https://dmxapi.cn/chengnuo.html" class="custom-link">服务与价格承诺</a>。
nolebase:
  index: false

gitChangelog: false
---

<script setup>
import sidebarPackageJSON from '~/packages/vitepress-plugin-sidebar/package.json'
import biDirectionalLinksPackageJSON from '~/packages/markdown-it-bi-directional-links/package.json'
import elementTransform from '~/packages/markdown-it-element-transform/package.json'
import unlazyImg from '~/packages/markdown-it-unlazy-img/package.json'
import enhancedReadabilities from '~/packages/vitepress-plugin-enhanced-readabilities/package.json'
import index from '~/packages/vitepress-plugin-inline-link-preview/package.json'
import inlineLinkPreview from '~/packages/vitepress-plugin-inline-link-preview/package.json'
import highlightTargetedHeading from '~/packages/vitepress-plugin-highlight-targeted-heading/package.json'
import gitChangelog from '~/packages/vitepress-plugin-git-changelog/package.json'
import enhancedMark from '~/packages/vitepress-plugin-enhanced-mark/package.json'
import thumbnailHash from '~/packages/vitepress-plugin-thumbnail-hash/package.json'
</script>

<HomeContent>

## 支持模型

`DMXAPI` 提供了全面而便捷的大模型 API 集成服务，让开发者能够通过单一接口轻松访问 ChatGPT、Claude、Gemini 和其他主流 大语言模型。我们的解决方案兼容多种开发框架和平台，支持 Node.js、Python、Go 等主流语言，并提供了丰富的示例代码和工具集，帮助开发者快速实现从聊天机器人到内容生成的各类 AI 应用场景。

<div class="grid gap-5 lg:grid-cols-2 max-w-172 lg:max-w-none mx-auto">
  <IntegrationCard type="markdown-it" title="双向链接" package="markdown-it-bi-directional-links">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${biDirectionalLinksPackageJSON.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="markdown-it" title="元素转换" package="markdown-it-element-transform">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${elementTransform.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="markdown-it" title="懒加载模糊缩略图" package="markdown-it-unlazy-img">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${unlazyImg.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="自动生成侧边栏" package="vitepress-plugin-sidebar">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${sidebarPackageJSON.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="阅读增强" package="vitepress-plugin-enhanced-readabilities">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${enhancedReadabilities.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="索引页" package="vitepress-plugin-index">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${index.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="行内链接预览" package="vitepress-plugin-inline-link-preview">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${inlineLinkPreview.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="闪烁高亮当前的目标标题" package="vitepress-plugin-highlight-targeted-heading">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${highlightTargetedHeading.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="基于 Git 的页面历史" package="vitepress-plugin-git-changelog">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${gitChangelog.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="<meta> 页面元信息生成" package="vitepress-plugin-meta">
    <template v-slot:title>
      <code>&lt;meta&gt;</code> 页面元信息生成
    </template>
    <template v-slot:badge>
      <Badge type="warning" text="Beta 测试" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="预览图片（社交媒体卡片）生成" package="vitepress-plugin-og-image">
    <template v-slot:badge>
      <Badge type="warning" text="Beta 测试" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="页面属性" package="vitepress-plugin-page-properties">
    <template v-slot:badge>
      <Badge type="danger" text="Alpha 测试" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="<mark> 元素增强" package="vitepress-plugin-enhanced-mark">
    <template v-slot:title>
      <code>&lt;mark&gt;</code> 元素增强
    </template>
    <template v-slot:badge>
      <Badge type="tip" :text="`v${enhancedMark.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="vitepress" title="缩略图模糊哈希生成" package="vitepress-plugin-thumbnail-hash">
    <template v-slot:badge>
      <Badge type="tip" :text="`v${thumbnailHash.version}`" />
    </template>
  </IntegrationCard>

  <IntegrationCard type="obsidian" title="UnoCSS" package="obsidian-plugin-unocss">
    <template v-slot:badge>
      <Badge type="warning" text="Beta 测试" />
    </template>
  </IntegrationCard>
</div>


</HomeContent>
