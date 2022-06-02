<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "NavSection",
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
}
</style>
