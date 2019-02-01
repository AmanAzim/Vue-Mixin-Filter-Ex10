export const CountLen={
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
}