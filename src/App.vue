<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>Name:{{name}}</p>
                <p>Reversed Name: {{name | make_reverse}}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" --><hr>
                <input v-model="word">
                <p>Lenght of the word: {{word | text-length}}</p>


                <!-- Exercise 3 --><hr>
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>With Computed property:</p>
                <p>Name:{{name}}</p>
                <p>Reversed Name: {{reverse_name}}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'Aman',
                word:'',
            };
        },
        filters:{
            make_reverse(value){
                var splitString=value.split("");
                var reverseArr=splitString.reverse();
                var joinString=reverseArr.join("");
                return joinString;
            }
        },
        computed:{
            reverse_name(){
                var splitString=this.name.split("");
                var reverseArr=splitString.reverse();
                var joinString=reverseArr.join("");
                return joinString;
            }
        }
    }
</script>

<style>
</style>
