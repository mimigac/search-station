import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserHistory } from 'history'
import reportWebVitals from './reportWebVitals'

declare global {
  interface Window {
    renderSearchStation: Function
    unmountSearchStation: Function
  }
}
let root: ReactDOM.Root
window.renderSearchStation = (containerId: string, history: BrowserHistory) => {
  root = ReactDOM.createRoot(
    document.getElementById(containerId) as HTMLElement,
  )
  root.render(
    <>
      <App history={history} />
    </>,
  )
}

window.unmountSearchStation = (containerId: string) => {
  //怪しい
  root = ReactDOM.createRoot(
    document.getElementById(containerId) as HTMLElement,
  )
  root.unmount()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
