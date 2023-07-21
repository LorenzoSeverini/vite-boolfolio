import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AppHome.vue';
import Contact from '../views/AppContact.vue';
import ProjectList from '../views/AppProjectList.vue';
import SingleProject from '../views/AppSingleProject.vue';
import ErrorPage from '../views/errors/ErrorPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [  
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectList,
        },
        {
            path: '/projects/:id',
            name: 'SingleProject',
            component: SingleProject,
        },
        {
            path: '/error/:code',
            name: 'Error',
            component: ErrorPage,
        },
    ],  
});

export default router;