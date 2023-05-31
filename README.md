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

<!-- ```tsx

``` -->

### Accordion

#### Props

- `items`: an array of objects containing:
  - `label`: text control
  - `element`: any component or element

```tsx
<Accordion
  items={[
    { element: <span>hello</span>, label: 'First element' },
    { element: <span>hello</span>, label: 'Second element' },
    { element: <span>hello</span>, label: 'Third element' }
  ]}
/>
```

### Breadcrumb

#### Props

- `items`: an array of strings, representing each item in the breadcrumb

```tsx
<Breadcrumb items={['Home', 'Dashboard', 'Settings', 'API Usage']} />
```

### Button

#### Props

- `color`: blue | darkblue | orange | gray | green | red | yellow
- `variant`: primary | secondary
  - primary: solid background of the specified color, white text
  - secondary: transparent background, border and text of the specified color

#### Primary button example

```tsx
<Button color="red" variant="primary">
  primary
</Button>
```

#### Secondary button example

```tsx
<Button color="green" variant="secondary">
  secondary
</Button>
```

### Modal

#### Props

- `children`: The content of the modal
- `openModalButtonText`: The text of the button that opens the modal

```tsx
<Modal openModalButtonText={'Default modal'}>
  <p>Lorem ipsum dolor sit amet.</p>
</Modal>
```

- `title`: The title of the modal (optional)

```tsx
<Modal openModalButtonText={'With title'} title={'I am a title'}>
  <p>Lorem ipsum dolor sit amet.</p>
</Modal>
```

- `closeOnBackdropClick`: Indicates whether the modal should close when clicking its backdrop

```tsx
<Modal openModalButtonText={'Close on backdrop click'} closeOnBackdropClick>
  <p>Lorem ipsum dolor sit amet.</p>
</Modal>
```

- `closeOnEscClick`: Indicates whether the modal should close when pressing the `ESC` key

```tsx
<Modal openModalButtonText={'Close on ESC click'} closeOnEscClick>
  <p>Lorem ipsum dolor sit amet.</p>
</Modal>
```

- `onCancel`: Function triggered when user clicks the "cancel" button (optional)
- `onConfirm`: Function triggered when user clicks the "confirm" button (optional)

These props are optional, but if you specify one, you also need to supply the other. When both are present, they display a "cancel" and a "confirm" button at the bottom of the modal.

```tsx
<Modal
  openModalButtonText={'Confirm modal'}
  onCancel={() => {
    console.log('user canceled')
  }}
  onConfirm={() => {
    console.log('user confirmed')
  }}
>
  <p>Lorem ipsum dolor sit amet.</p>
</Modal>
```

### Tabs

#### Props

- `tabs`: array of objects containing:
  - `element`: A React Node (can be any component or element)
  - `title`: The title displayed as the tab control
  - `id`: a `React.Key` to identify each tab (must be unique)

```tsx
<TabGroup
  tabs={[
    {
      element: <div className="flex flex-col gap-2"></div>,
      title: 'Text only',
      id: 2
    }
  ]}
/>
```

### Toggle

#### Props

- `onToggle`: The function triggered when user toggles the element. Receives the `checked` prop, a boolean that indicates if it is checked or not

```tsx
<Toggle
  onToggle={(isChecked) => {
    if (isChecked) {
      return console.log('user checked toggle')
    }

    console.log('user unchecked toggle')
  }}
/>
```

### Tooltip

#### Props

- `direction`: left | right | top | bottom
  - Indicates the position of the tooltip
- `label`: The text displayed as the tooltip content
- `children`: the element that users hover over to see the tooltip

```tsx
<Tooltip direction="top" label="Mark as favorite">
  <StarIcon />
</Tooltip>
```

## 🚀 Stack

- ⚛️ React
- 💄TailwindCSS

```

```
