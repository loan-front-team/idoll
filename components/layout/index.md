---
category: Components
chinese: 布局
type: Basic
cols: 1
english: Layout
---

layout 布局

## 如何使用

-用于页面的整体布局

## 如何使用
import { Layout, Sider, Header, Footer, Content } from './components/layout'

<Layout>
  <Sider />
  <Layout>
    <Header />
    <Content />
    <Footer />
  </Layout>
</Layout>

<Layout>
  <Header />
  <Content />
  <Footer />
</Layout>

- 使用Sider时，如果需要配合其他Header, Content, Footer使用其他类型组件外层需要在包个Layout

### API

Sider
| 成员       | 说明                   | 类型               | 默认值       |
|-----------|-----------------------|--------------------|-------------|
| span      | 基本宽度32px + 12 * span 最大值 10  | number  | 0
| toogle    | 可选, 是否添加缩进图标    | number             |

Header
| 成员       | 说明                   | 类型               | 默认值       |
|-----------|-----------------------|--------------------|-------------|
| span      | 基本宽度60px + 15 * span 最大值 2 | number   | 0
