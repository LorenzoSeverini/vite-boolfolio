<script>
import axios from 'axios'

export default {
  name: 'ProjectCard',

  data() {
    return {
      apiUrl:'http://localhost:8000/api/',
      apiPath: 'projects',
      loading: false,
      projects: [],
      projectsCurrentPage: 0,
      projectsTotalPages: 0,
      loadingError: false,
    }
  },

  methods: {

    getProjectsFirstPage() {
     
      this.loading = true;

      axios.get(this.apiUrl + this.apiPath).then(response => {
        console.log(response.data);
        // ***************************************
        this.projects = response.data.results.data;
        this.projectsCurrentPage = response.data.results.current_page;
        this.projectsTotalPages = response.data.results.last_page;
        this.loading = false;
      }).catch(error => {
        console.log(error);
        this.loading = false;
        this.loadingError = true;
      });
    },

    getProjectsPage(pageNumber) { {

      
      if(pageNumber && pageNumber > 0 && pageNumber <= this.projectsTotalPages) {
        
        let config = {
          params: {
            page: pageNumber
          }
        };
      
        this.loading = true;

        axios.get(this.apiUrl + this.apiPath, config).then(response => {
          console.log(response.data);
          // ***************************************
          this.projects = response.data.results.data;
          this.projectsCurrentPage = response.data.results.current_page;
          this.projectsTotalPages = response.data.results.last_page;
          this.loading = false;
        }).catch(error => {
          console.log(error);
          this.loading = false;
          this.loadingError = true;
        });  

        } else {
          console.log('last page already loaded');
        }
      }
    },

    getProjectsPreviousPage() {
      this.getProjectsPage(this.projectsCurrentPage - 1);
    },

    getProjectsNextPage() {
      this.getProjectsPage(this.projectsCurrentPage + 1);
    },

  },
  
  mounted() {
    this.getProjectsFirstPage();
    // this.getProjects();
  } 
}
</script>

<template>
  <!-- project card -->
  <div class="main-container">
    <h3>Projects</h3>
    <h5 v-if="loadingError">Error loading projects! 🚨😱</h5>
    <h5 v-if="loading">Loading...</h5>
    <div class="card-container">
      <!-- card -->
      <div class="card" v-for="project in projects">
        <!-- card title -->
        <div class="card-title">
          <h2>{{ project.title }}</h2>
        </div>
        <div class="img-container">
          <img :src="project.image" alt="project image">
        </div>
        <!-- card text -->
        <div class="card-text">
          <p><strong>Description:</strong> {{ project.description }} </p>
          <p><strong>Link:</strong> {{ project.link }} </p>
          <p><strong>Publicate:</strong> {{ project.published_at }} </p>
          <!-- type -->
          <p><strong>Type:</strong> {{ project.type ? project.type.name : 'Nothing' }} </p>
          <!-- technologies -->
          <p><strong>Technologies:</strong> {{ project.technologies ? project.technologies.map(technology => technology.name).join(', ') : 'Nothing' }} </p>
        </div>
      </div>
    </div>
    <!-- buttons -->
    <div class="pagination">
      <button @click="getProjectsPreviousPage">Previous</button>
      <button @click="getProjectsPage(pageNumber)" v-for="pageNumber in projectsTotalPages">{{ pageNumber }}</button>
      <button @click="getProjectsNextPage">Pagina successiva</button>
    </div>
    <div class="page-counter">Page {{ projectsCurrentPage }} of {{ projectsTotalPages }}</div>
  </div>
</template>

<style lang="scss" scoped>

.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .card-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
  overflow-y: auto;

    .card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--color-primary);
      border: 1px solid var(--color-border);
      border-radius: 5px;
      color: var(--color-text-dark);
      padding: 1rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;

      .card-title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;

        h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
      }

      .img-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem; 

        img {
          width: 100%;
          height: 12.5rem;
          object-fit: cover;
          border-radius: 5px;
        }
      }

      .card-text {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;

        p {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
      }

      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  .pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    button {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: var(--color-primary);
      border: 1px solid var(--color-border);
      border-radius: 5px;
      color: var(--color-text-dark);
      padding: 1rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      margin: 0 1rem;

      &:hover {
        background-color: var(--color-primary-dark);
        color: var(--color-text-light);
      }

      &:focus {
        background-color: var(--color-primary-dark);
        color: var(--color-text-light);
      }

      &:active {
        background-color: var(--color-primary-dark);
        color: var(--color-text-light);
      }
    }
  }
  .page-counter {
    font-size: 1.5rem;
    color: var(--color-text-white);
  }

}
</style>