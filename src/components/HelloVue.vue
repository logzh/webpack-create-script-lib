<template>
    <div class="hello">
        <div>A custom component</div>
        <div>{{message}}</div>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{index}}:{{ todo.text }}
            </li>
        </ul>
    </div>
</template>
<style scoped>
    .hello{
        background-color:#0000ff;
    }
</style>
<script>
    //    import HeaderComponent from './components/header.vue'
    //    import OtherComponent from './components/other.vue'
    export default{
        name:'hello-vue',
        props:['todos'],
        data(){
            return{
                message:'hello vue'
            }
        }
//        components:{
//            'other-component':OtherComponent,
//            HeaderComponent,
//        }
    }
</script>