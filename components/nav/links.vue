<template>
  <Link class="nav__button" href="/"><HomeIcon />Home</Link>
  <Link class="nav__button" href="/introduction"
    ><PackageVariantIcon />Introduction</Link
  >
  <Link class="nav__button" href="/beginner-guide"
    ><BookOpenVariantIcon />Beginner Guide</Link
  >
  <Link class="nav__button" href="/maintenance"
    ><HammerWrenchIcon />Maintenance</Link
  >
  <Link class="nav__button" href="/creature-hub"><FishIcon />Creature Hub</Link>
  <!-- <Link class="nav__button" href="/plant-hub"><SpaIcon />Plant Hub</Link> -->
</template>

<script>
import HomeIcon from "vue-material-design-icons/Home.vue";
import PackageVariantIcon from "vue-material-design-icons/PackageVariant.vue";
import BookOpenVariantIcon from "vue-material-design-icons/BookOpenVariant.vue";
import HammerWrenchIcon from "vue-material-design-icons/HammerWrench.vue";
import FishIcon from "vue-material-design-icons/Fish.vue";
import SpaIcon from "vue-material-design-icons/Spa.vue";
export default {
  name: "NavLinks",
  components: {
    HomeIcon,
    PackageVariantIcon,
    BookOpenVariantIcon,
    HammerWrenchIcon,
    FishIcon,
    SpaIcon,
  },
};
</script>

<style scoped>
@import "nav.css";
@import "~/assets/css/document.css";
</style>
