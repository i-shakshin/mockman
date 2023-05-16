import { createRoot } from 'react-dom/client'

const Hello = () => <h1>Hello from React with Typescript!</h1>

const container = document.querySelector('#root')
const root = createRoot(container!)
root.render(<Hello />)
