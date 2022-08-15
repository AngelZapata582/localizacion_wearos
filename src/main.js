import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps';

createApp(App).
use(VueGoogleMaps,{
    load:{
        key:'AIzaSyAZuGpoyDCc_zsLhn83Zq4s0IEcBv3wXHc',
    }
})
.mount('#app')
