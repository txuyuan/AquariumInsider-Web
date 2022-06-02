<template>
  <Link class="nav__button" href="/"><HomeIcon />Home</Link>
  <Link class="nav__button" href="/beginner-guide"
    ><BookOpenVariantIcon />Beginner&nbsp;Guide</Link
  >
  <Link class="nav__button" href="/wiki"
    ><BookInformationVariantIcon />Wiki</Link
  >
  <!-- Nitrogen Cycle, matching water, healthy fish, acclimating fish, changing water, tank maintanence -->
</template>

<script>
import BookOpenVariantIcon from "vue-material-design-icons/BookOpenVariant.vue";
import BookInformationVariantIcon from "vue-material-design-icons/BookInformationVariant.vue";
import HomeIcon from "vue-material-design-icons/Home.vue";
export default {
  name: "NavLinks",
  components: {
    HomeIcon,
    BookOpenVariantIcon,
    BookInformationVariantIcon,
  },
};
</script>

<style scoped>
@import "nav.css";
@import "~/assets/css/document.css";
</style>
