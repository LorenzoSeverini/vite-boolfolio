<script>
import axios from 'axios'

export default {
  name: 'ProjectCard',

  data() {
    return {
      apiUrl:'http://localhost:8000/api/',
      loading: false,
      projects: [],
    }
  },

  methods: {
    getProjects() {
      axios.get(this.apiUrl + 'projects').then(response => {
        console.log(response.data);
        this.loading = true;
        this.projects = response.data;
      })

    }, 
  },

  mounted() {
    this.getProjects();
  } 
}
</script>

<template>
  <!-- project card -->
    
</template>

<style lang="scss" scoped>

</style>