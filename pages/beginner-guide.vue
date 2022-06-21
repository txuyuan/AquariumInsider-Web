<template>
  <main>
    <!-- nitrogen cycle, water matching, healthy fish, acclimating fish, water changes, tank maintenance -->

    <div class="info-pages">
      <ContentPage>
        <template #title>
          <h2>Beginner Guide</h2>
          <ChevronRightIcon class="content-page__drop-icon" />
        </template>

        <li>
          <Link to="/beginner-guide/nitrogen-cycle">Nitrogen&nbsp;Cycle</Link>
        </li>
        <li>
          <Link to="/beginner-guide/water-matching">Water&nbsp;Matching</Link>
        </li>
        <li>
          <Link to="/beginner-guide/healthy-fish">Healthy&nbsp;Fish</Link>
        </li>
        <li>
          <Link to="/beginner-guide/acclimating-fish"
            >Acclimating&nbsp;Fish</Link
          >
        </li>
        <li>
          <Link to="/beginner-guide/water-changes">Water&nbsp;Changes</Link>
        </li>
        <li>
          <Link to="/beginner-guide/tank-maintenance"
            >Tank&nbsp;Maintanence</Link
          >
        </li>
      </ContentPage>

      <br class="content-page__space" />

      <NuxtChild />
    </div>
  </main>
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
</script>
