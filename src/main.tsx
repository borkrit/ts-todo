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

const todosLists: Todo[] = [
    {
        id: 0,
        text: 'test 1',
        isComplete: false
    },
    {
        id: 1,
        text: 'test 2',
        isComplete: true
    },
    {
        id: 2,
        text: 'test 3',
        isComplete: false
    },
    {
        id: 3,
        text: 'test 4',
        isComplete: false
    },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts/>,
        children: [
            {
                path: '/',
                index: true,
                element: <HomePage todos={todosLists}/>
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
                        element: <ItemDetailsPage todos={todosLists}/>
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
        <RouterProvider router={router}/>
    </StrictMode>,
)
