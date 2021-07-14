<template>
  <div>
    <h1>{{profilename}}'s Profile component</h1>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: "Profile",
  data(){
      return{
          profilename:''
      }
  },
  mounted(){
      const route = useRoute();
      console.log('route Details',route.params.name)
      this.profilename = route.params.name
  }
};
</script>

<style scoped>

</style>