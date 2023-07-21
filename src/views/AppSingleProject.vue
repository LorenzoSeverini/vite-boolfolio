<script>
import axios from 'axios';
import { store } from '../store/store.js';

export default {
    name: 'AppSingleProject',

    data() {
        return {
            store,
            loading: false,
            loadingError: false,
            project: null
        }
    },

    methods: {
        getProject(id) {

            this.loading = true;

            axios.get(this.store.apiUrl + 'projects/' + id)
            .then(response => {
                this.project = response.data.results;
                this.loading = false;
            })
            .catch(error => {
                this.loading = false;
                this.loadingError = error.message;
                this.router.push({ name: 'ErrorNotFound', params: { code: 404 } });
            });
        }
    },

    mounted() {
        this.getProject(this.$route.params.id);
    },

    beforeRouteUpdate(to, from) {
        if(from.name == 'AppSingleProject') {
            this.getProject(to.params.id);
        }
        next();
    }
}
</script>

<template>
    <div class="container">
        <div v-if="project" class="project">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <!-- img  -->
            <img :src="store.storageUrl + project.image" alt="project image"> 
            <p>{{ project.link }}</p>
            <!-- <p>
                <router-link :to="{ name: 'AppProjectList' }">Back to projects</router-link>
            </p> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    padding: 1rem;
}
.loading {
    font-size: 1rem;
    padding: 1rem;
}

.project {
    padding: 2rem;

    h2 {
        font-size: 2rem;
        
    }

    p {
        font-size: 1rem;
    }
}
</style>