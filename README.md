# 💼 InfoJobs UI

React components following InfoJobs style guide

## 👀 Demo

[Visit the docs site](https://infojobs-ui.vercel.app) to take a look at all the components

## ▶️ Getting started

1. Install the package

```bash
npm install infojobs-ui
```

2. Import the stylesheet in the root of your project

Make sure to import it **_before_** your global styles

```jsx
import 'infojobs-ui/dist/style.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

3. Enjoy!

```jsx
import { Accordion } from 'infojobs-ui'

export default function App() {
  return (
    <Accordion
      items={[
        { element: <span>lorem ipsum dolor</span>, label: 'First item' },
        { element: <div>lorem ipsum dolor</div>, label: 'Second item' },
        { element: <article>lorem ipsum dolor</article>, label: 'Third item' }
      ]}
    />
  )
}
```

## Components

List of all the components available

- Accordion
- Breadcrumb
- Button
- Modal
- Tabs
- Toggle
- Tooltip


## 🚀 Stack

- ⚛️ React
- 💄TailwindCSS
