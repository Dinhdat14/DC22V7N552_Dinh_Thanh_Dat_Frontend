import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/contacts/add",
        name: "contact.add",
        component: () => import("@/views/ContactAdd.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// KHẮC PHỤC LỖI ĐIỀU HƯỚNG TẠI ĐÂY
router.beforeEach((to, from, next) => {
    const publicPages = ['login', 'register', 'notfound'];
    const authRequired = !publicPages.includes(to.name);
    const loggedIn = localStorage.getItem('userToken');

    if (authRequired && !loggedIn) {
        return next({ name: 'login' });
    }

    if (loggedIn && (to.name === 'login' || to.name === 'register')) {
        return next({ name: 'contactbook' });
    }

    next();
});

export default router;