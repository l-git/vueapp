
var Vue=require('vue')


var App=Vue.component('App',{
    template:`<div><div>App</div>
    <div class="red">red</div>
    <div @click="gofoo">gofoo</div>

    </div>`,
    methods:{
        gofoo(){

            this.$router.push('/foo')

        }
    }
})



module.exports=App


