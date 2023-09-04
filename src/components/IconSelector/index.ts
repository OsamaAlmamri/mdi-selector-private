import {App, Plugin} from 'vue'

import IconSelector from './IconSelector.vue'

export default {
    install(Vue: App) {
        Vue.component(IconSelector.name, IconSelector)
    }
} as Plugin

export {
    IconSelector
}