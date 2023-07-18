<script>
import HeaderTitle from '../components/header/HeaderTitle.vue';
import ProjectCard from '../components/project/ProjectCard.vue';
import FooterNav from '../components/footer/FooterNav.vue';

export default {
  name: 'ProjectList',
  components: {
    HeaderTitle,
    ProjectCard,
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
      <ProjectCard />
    </main>
    
    <footer>
        <FooterNav />
    </footer>
  </div>
</template>