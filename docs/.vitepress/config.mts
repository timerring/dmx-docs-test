import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from 'vitepress-plugin-mermaid' 

// https://vitepress.dev/reference/site-config
let config = defineConfig({
  title: "dmxdocs",
  description: "dmx official docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/dmx-docs-test/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '语言模型',
        collapsed: false,
        items: [
          {
            text: 'OpenAI',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          },
          {
            text: 'Gemini',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          },
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          }
        ]
      },
      {
        text: '音频模型',
        collapsed: false,
        items: [
          {
            text: 'OpenAI whisper',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          },
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          }
        ]
      },
      {
        text: '图像模型通识',
        collapsed: false,
        items: [
          { text: '图像输入的两种方式', link: '/image-input-method' },
          { text: '图像保存方式', link: '/image-save-method' },
        ]
      },
      {
        text: '图像处理模型',
        collapsed: false,
        items: [
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          },
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          }
        ]
      },
      {
        text: '图像生成模型',
        collapsed: false,
        items: [
          {
            text: '可灵 kling',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: 'Kling 文生图示例', link: '/image-generation/kling/kling-text-to-image' },
              { text: 'Kling 图生图示例', link: '/image-generation/kling/kling-image-to-image' },
              { text: 'Kling 生成图像接口', link: '/image-generation/kling/kling-image-generation-api' }
            ]
          },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },
      {
        text: '视频推理模型',
        collapsed: false,
        items: [
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          },
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          }
        ]
      },
      {
        text: '视频生成模型',
        collapsed: false,
        items: [
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          },
          {
            text: 'Qwen',
            collapsed: true, // 二级菜单默认折叠
            items: [
              { text: '特性1', link: '/language-models/feature1' },
              { text: '特性2', link: '/language-models/feature2' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  // optionally, you can pass MermaidConfig
  mermaid: {
    // refer for options:
    // https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    // set additional css class for mermaid container
    class: "mermaid"
  }
})

config = withMermaid(config) 

export default config