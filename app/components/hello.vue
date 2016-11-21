<template>
    <div class="hello">
        <div>this is template body</div>
        <div>{{message}}</div>
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