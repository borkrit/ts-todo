import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './assets/scss/normalize.scss'
import './assets/scss/style.scss'
import TodoListPage from "./pages/TodoListPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from "./pages/404.tsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import type {Todo} from "./components/TodoList/types.ts";
import Layouts from "./layouts/Layouts.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts/>,
        children: [
            {
                path: '/',
                index: true,
                element: <HomePage />
            },
            {
                path: '/todo',
                element: <TodoListPage/>
            },
            {
                path: '/list/*',
                children: [
                    {
                        path: ':id',
                        element: <ItemDetailsPage />
                    },
                ]

            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }

])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>,
)
