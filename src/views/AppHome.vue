<script>
import HeaderTitle from '../components/header/HeaderTitle.vue';
import FooterNav from '../components/footer/FooterNav.vue';
import HomePage from '../components/home/HomePage.vue';

export default {
  name: 'AppHome',
    components: {
        HeaderTitle,
        HomePage,
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
            <HomePage />
        </main>
        
        <footer>
            <FooterNav />
        </footer>
    </div>
</template>