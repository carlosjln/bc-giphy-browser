import '@/assets/reset.css';
import '@/assets/base.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from '@/app.vue';
import router from '@/router';
import lazyLoad from '@/directives/lazyload';

const app = createApp(App);

app.config.productionTip = false;
app.directive('lazyload', lazyLoad);

app.use(createPinia());
app.use(router);

app.mount('#app');