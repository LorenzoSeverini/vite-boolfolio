<script>
import HeaderTitle from '../components/header/HeaderTitle.vue';
import FooterNav from '../components/footer/FooterNav.vue';

export default {
  name: 'AppHome',
    components: {
        HeaderTitle,
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
            <h1>Home</h1>
        </main>
        
        <footer>
            <FooterNav />
        </footer>
    </div>
</template>