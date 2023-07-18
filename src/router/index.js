import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome.vue';
import AppContact from '../views/AppContact.vue';
import ProjectList from '../views/AppProjectList.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [  
        {
            path: '/',
            name: 'Home',
            component: AppHome,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: AppContact,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectList,
        },
    ],  
});

export default router;

