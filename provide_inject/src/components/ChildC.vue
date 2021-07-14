<template>
  <div>
    <p>components c {{ username }}<br /></p>
    <p>compostion api {{ childUserName }}<br /></p>
    <h1>child composition api {{ countvalue }}</h1>
    <br />
    <h1>child composition api {{ firstName }}{{ lastName }}</h1>
    <button @click="incrementcountvalue">increment count value</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";

export default {
  name: "ChildC",
  inject: ["username"],
  setup() {
    const countvalue = inject("c_count", 0);
    const childHero = inject("c_hero", {});
    const childUserName = inject("c_userName", "Default username");
    const incrementcountvalue = inject("incrementCount");

    return {
      childUserName,
      ...toRefs(childHero),
      countvalue,
      incrementcountvalue,
    };
  },
};
</script>

<style scoped>
</style>