<script>
import HeaderTitle from '../components/header/HeaderTitle.vue';
import ProjectShow from '../components/project/ProjectShow.vue';
import FooterNav from '../components/footer/FooterNav.vue';

export default {
    name: 'ProjectDetails',
    components: {
        HeaderTitle,
        ProjectShow,
        FooterNav,
    },
}
</script>

<template>
    <div class="container">
        <header>
            <HeaderTitle msg="Hello 🫡" />
        </header>

        <main>
            <ProjectShow />
        </main>
        
        <footer>
            <FooterNav />
        </footer>
    </div>
</template>
