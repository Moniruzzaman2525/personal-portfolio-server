import { Router } from "express";
import { UserRoute } from "../modules/auth/auth.route";
import { productRoute } from "../modules/products/product.route";
import { blogRoutes } from "../modules/blog/blog.route";
import { messageRoutes } from "../modules/message/message.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/auth',
        route: UserRoute
    },
    {
        path: '/projects',
        route: productRoute
    },
    {
        path: '/messages',
        route: messageRoutes
    },
    {
        path: '/blogs',
        route: blogRoutes
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
