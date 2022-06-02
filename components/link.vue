<template style="display: inherit">
  <a
    v-if="isExternal"
    :href="href"
    v-bind="$attrs"
    :target="isExternal ? '_blank' : ''"
    ><slot
  /></a>
  <NuxtLink v-else :to="href"><slot /></NuxtLink>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: String,
  },
  computed: {
    isExternal() {
      return !this.href.startsWith("/");
    },
  },
};
</script>

<style scoped>
a {
  display: inline-block;
}
</style>
