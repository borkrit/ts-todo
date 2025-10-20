import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import TodoListPage from "./pages/TodoListPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoListPage />
  </StrictMode>,
)
