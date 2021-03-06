// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';
//Tmport iconfont
import Icon from './css/iconfont.css';
//Tmport Base
import Base from './css/base.css';
import Animate from './css/Animate.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Import Less
import Less from 'less-loader'

import Global from "./pages/Global.vue";
//LocalStorage
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)


// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)
    //分享
import Share from './pages/share.vue';

Vue.component('Share', Share);
//开关
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)

//vue-resource

import VueResource from 'vue-resource'

Vue.use(VueResource);
//moment 公共类库
Vue.use(require('vue-moment'));
//Vue.http.headers.common['token'] = '3303e05fc3c4fa5b882f8ec05038230d';
Vue.http.interceptors.push((request, next) => {
    request.headers.set('token', Vue.localStorage.get('token')); //setting request.headers
    next((response) => {
        return response
    })
})
new Vue({
    el: '#app',
    template: '<app/>',

    // Init Framework7 by passing parameters here
    framework7: {
        id: 'io.framework7.testapp', // App bundle ID
        name: 'Framework7', // App name
        theme: 'ios', // Automatic theme detection
        // App routes
        routes: Routes,
        // view: {
        //     pushState : true
        // }
    },



    // Register App Component
    components: {
        app: App
    }
})