import Vue from 'vue'
import App from './App.vue'

Vue.filter('text-length', function(value) {
    var textLen=value.length;
    return value+"("+textLen+")";
});

Vue.mixin({
    data(){
        return{
            word2:'',
        }
    },
    computed:{
        wordLen(){
            var textLen=this.word2.length;
            return this.word2+"("+textLen+")";
        },
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
