<template>
    <div>
        components B {{countvalu}}<br/>

        <button @mouseover="hover_increment">hover increment from component b</button>
<ChildC/>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import ChildC from './ChildC.vue'

    export default {
        name:'ChildB',
        components:{
            ChildC
        },
        setup(){
            const hover_increment = inject("hoverincrement")
            const countvalu =inject('count_value',0)
            return{
                hover_increment,countvalu
            }
        }
    }
</script>

<style scoped>

</style>