const Foo = resolve => require(['@/components/Foo.vue'], resolve) 


const Index = resolve => require(['@/components/Index.vue'], resolve) 

const Ele = resolve => require(['@/components/Ele.vue'], resolve) 

//var Foo=require('@/components/Foo.vue')

var App=require('@/js/App')



var routes = [

    {
        path:'/',
        component:App
    },
    {
        path:'/foo',
        component:Foo
    },
    {
        path:'/ele',
        component:Ele
    }
]

var obj={
    routes
}
module.exports=obj





