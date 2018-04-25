# layout

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

```html

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
  <Sider toggle foldSpan={{fold: '44', unfold: '116'}} />
  <Layout>
    <Header style={{ background: '#eee' }} />
    <Content />
    <Footer style={{ background: '#eee' }} />
  </Layout>
</Layout>

```

- 使用Sider时，如果需要配合其他Header, Content, Footer使用其他类型组件外层需要在包个Layout

### API

Sider

| 成员       | 说明                   | 类型               | 默认值       |
|-----------|-------------------------------------|--------------------|-------------|
| span      | 基本宽度32px + 12 * span span最大值 20  | number  | 0 |
| toogle    | 可选, 是否添加缩进图标    | boolean             |   |
| toogleStyle    | 可选, 图标样式 position:absolute; 可设置top,left    | object             |   |
| children    | 可选, 内容元素    | node             |   |
| foldSpan    | 可选, fold,unflod状态下侧边栏的span值    | object             | {unfold: '7', fold: '1'}  |
| collapse    | 可选, sider初始化折叠状态    | boolean             |   |
| onCollapse    | 可选, 切换sider是回调函数    | function             |   |

Header

| 成员       | 说明                   | 类型               | 默认值       |
|-----------|-----------------------|--------------------|-------------|
| span      | 基本宽度60px + 15 * span 最大值 2 | number   | 0           |
