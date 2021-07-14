<template>
  <div>
    Parent a {{ name }}<br />
    <h1>parent component composition api {{ count }}</h1>
    <h1>parent component composition api {{ firstName }}{{ lastName }}</h1>
    <button @click="incrementCount">increment count value</button>

    <ChildA />
  </div>
</template>

<script>
import ChildA from "./ChildA.vue";
import { provide, ref, toRefs, reactive } from "vue";
export default {
  name: "Parent",
  components: {
    ChildA,
  },
  setup() {
    const count = ref("0");
    const state = reactive({
      firstName: "bruce",
      lastName: "wayne",
    });
    provide("c_count", count);
    provide("c_hero", state);
    provide("c_userName", "Codevolution");
    provide('incrementCount', incrementCount)
    function incrementCount() {
      count.value++
    }
        return {
      count,
      ...toRefs(state),incrementCount
    };
  },

  data() {
    return {
      name: " sam curran",
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>

<style scoped>
</style>