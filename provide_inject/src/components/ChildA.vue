<template>
    <div>
        components A {{counthover}}
<ChildB/>
<button @mouseover="incrementvalue" >hover increment</button>
    </div>
</template>

<script>
import { ref,provide } from 'vue'
import ChildB from './ChildB.vue'

    export default {
        name:'ChildA',
        components:{
            ChildB
        },
        setup(){
            const counthover= ref("0")
            provide('count_value', counthover)
            provide('hoverincrement', incrementvalue)
            function incrementvalue(){
                counthover.value ++
            }
            return{
                incrementvalue,counthover
            }
        }
    }
</script>

<style scoped>

</style>