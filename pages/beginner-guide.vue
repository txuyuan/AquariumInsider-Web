<template>
  <main>
    <!-- nitrogen cycle, water matching, healthy fish, acclimating fish, water changes, tank maintenance -->

    <h1>Beginner Guide</h1>

    <div class="content-page">
      <h2>Pages</h2>
      <li>
        <Link to="/beginner-guide/nitrogen-cycle">Nitrogen&nbsp;Cycle</Link>
      </li>
      <li>
        <Link to="/beginner-guide/water-matching">Water&nbsp;Matching</Link>
      </li>
      <li><Link to="/beginner-guide/healthy-fish">Healthy&nbsp;Fish</Link></li>
      <li>
        <Link to="/beginner-guide/acclimating-fish">Acclimating&nbsp;Fish</Link>
      </li>
      <li>
        <Link to="/beginner-guide/water-changes">Water&nbsp;Changes</Link>
      </li>
      <li>
        <Link to="/beginner-guide/tank-maintenance">Tank&nbsp;Maintanence</Link>
      </li>
    </div>

    <NuxtChild />
  </main>
</template>

<style>
@import "~/assets/css/document.css";
@import "~/assets/css/shapes.css";

.shape {
  margin: -0.5rem;
}
</style>

<script>
import ArrowRightIcon from "vue-material-design-icons/ArrowRight.vue";
import ArrowDownIcon from "vue-material-design-icons/ArrowDown.vue";
export default {
  components: {
    ArrowRightIcon,
    ArrowDownIcon,
  },
  head() {
    return {
      title: "Beginner Guide",
    };
  },
};
</script>
