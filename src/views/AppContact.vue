<script>
import HeaderTitle from '../components/header/HeaderTitle.vue';
import FooterNav from '../components/footer/FooterNav.vue';

export default {
    name: "AppContact",
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
            <h1>Contact</h1>
        </main>
    
        <footer>
            <FooterNav />
        </footer>
    </div>
</template>