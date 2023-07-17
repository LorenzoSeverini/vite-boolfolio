<script>
import HeaderTitle from './components/HeaderTitle.vue'
import ProjectCard from './components/ProjectCard.vue'

export default {
  name: 'App',
  components: {
    HeaderTitle,
    ProjectCard,
  },
  
  data() {
    return {
      //
    }
  },

  methods: {
    // 
  },

  mounted() {
    // 
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
      <h2>Vue-Api-Rock</h2>
    </footer>

  </div>
</template>
