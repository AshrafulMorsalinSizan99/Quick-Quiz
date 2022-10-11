import { createBrowserRouter } from "react-router-dom";
import Root from '../components/Root';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Statistics from '../components/Statistics';
import Blogs from '../components/Blogs';
import QuizDetails from "../components/QuizDetails/QuizDetails";


const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
        },
        {
            path: '/home',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
        },
        // {
        //     path: '/quiz',
        //     loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/:${params.id}`),
        //     element: < QuizDetails ></QuizDetails >
        // },

        {
            path: '/statistics',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Statistics></Statistics>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/quiz/:quizId',
            loader: async ({ params }) => {
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element: <QuizDetails></QuizDetails>
        },
    ]
}])

export default router