<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Add the specific icons to the library
library.add(faTwitter, faFacebook);

export default {
    name: "FooterNav",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            navItems: [
                {
                    name: "Home",
                    path: "/",
                },
                {
                    name: "Projects",
                    path: "/projects",
                },
                {
                    name: "Contact",
                    path: "/contact",
                },
            ],
        };
    },
};

</script>

<template>
    <nav>
        <ul>
            <li v-for="item in navItems" :key="item.name">
                <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

nav {
   display: flex;
    justify-content: center;
    align-items: center;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 1rem;

        li{
            a{
                text-decoration: none;
                color: var(--color-text-dark);
                font-weight: 700;
                font-size: 1rem;
                transition: all 0.3s ease-in-out;

                &:hover{
                    color: var(--color-secondary);

                }
            }
        }
    }
}
</style>