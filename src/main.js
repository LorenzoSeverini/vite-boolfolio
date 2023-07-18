import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook, faInstagram);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon )
.use(router)
.mount('#app')
