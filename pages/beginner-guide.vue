<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Beginner Guide</h2>
    </template>

    <template #links>
      <li>
        <Link to="/beginner-guide">Home</Link>
      </li>
      <li>Setting Up</li>
      <ul>
        <li>
          <Link to="/beginner-guide/setting-up/containers">Containers</Link>
        </li>
        <li>
          <Link to="/beginner-guide/setting-up/water-equipment"
            >Water Equipment</Link
          >
        </li>
        <li>
          <Link to="/beginner-guide/setting-up/substrate">Substrate</Link>
        </li>
        <li>
          <Link to="/beginner-guide/setting-up/lights">Lights</Link>
        </li>
        <li>
          <Link to="/beginner-guide/setting-up/location">Location</Link>
        </li>
      </ul>

      <li>Preparing Water</li>
      <ul>
        <li>
          <Link to="/beginner-guide/preparing-water/dechlorination"
            >Dechlorination</Link
          >
        </li>
        <li>
          <Link to="/beginner-guide/preparing-water/temperature"
            >Temperature</Link
          >
        </li>
        <li>
          <Link to="/beginner-guide/preparing-water/chemical-levels"
            >Chemical Levels</Link
          >
        </li>
      </ul>

      <li>
        <Link to="/beginner-guide/planting">Planting</Link>
      </li>
      <li>
        <Link to="/beginner-guide/cycling">Cycling</Link>
      </li>

      <li>Taking Stock</li>
      <ul>
        <li>
          <Link to="/beginner-guide/taking-stock/compatibility"
            >Compatibility</Link
          >
        </li>
        <li>
          <Link to="/beginner-guide/taking-stock/quantity">Quantity</Link>
        </li>
      </ul>
    </template>

    <template #default>
      <NuxtChild />
    </template>
  </NuxtLayout>
</template>

<style>
@import "~/assets/css/document.css";
@import "~/assets/css/shapes.css";
@import "~/assets/css/pages.css";

.shape {
  margin: -0.5rem;
}
</style>

<script>
import ArrowRightIcon from "vue-material-design-icons/ArrowRight.vue";
import ArrowDownIcon from "vue-material-design-icons/ArrowDown.vue";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";
export default {
  components: {
    ArrowRightIcon,
    ArrowDownIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  },
  head() {
    return {
      title: "Beginner Guide",
    };
  },
};
definePageMeta({
  layout: "false",
});
</script>
