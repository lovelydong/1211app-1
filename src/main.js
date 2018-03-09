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


// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)
    //分享
import Share from './pages/share.vue';

Vue.component('Share', Share);
//开关
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
    //接口
import VueResource from 'vue-resource'

Vue.use(VueResource);
// Init App
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
    },
    // Register App Component
    components: {
        app: App
    }
});