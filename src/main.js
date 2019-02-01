import Vue from 'vue'
import App from './App.vue'

Vue.filter('text-length', function(value) {
    var textLen=value.length;
    return value+"("+textLen+")";
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
