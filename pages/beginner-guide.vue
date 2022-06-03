<template>
  <main>
    <!-- nitrogen cycle, water matching, healthy fish, acclimating fish, water changes, tank maintenance -->

    <div class="info-pages">
      <div class="content-page">
        <div class="content-page__title" @click="contentsPress">
          <h2>Beginner Guide</h2>
          <ChevronRightIcon v-if="!contentsExpanded" class="content-page__drop-icon" />
          <ChevronDownIcon v-else class="content-page__drop-icon"/>
        </div>
        <ul v-if="contentsExpanded" class="content-page__links">
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
        </ul>
      </div>
      
      <br class="content-page__space">

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
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue"
export default {
  components: {
    ArrowRightIcon,
    ArrowDownIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  },
  data() {
    return {
      contentsToggle: false,
    };
  },
  methods: {
    contentsPress() {
      if (window.innerWidth < 1008) {
        this.contentsToggle = !this.contentsToggle;
      }
    },
    contentsSelected() {

    },
  },
  computed: {
    contentsExpanded() {
      console.log(window.innerWidth, window.innerWidth>1008 || this.contentsToggle);
      return window.innerWidth > 1008 || this.contentsToggle;
    },
  },
  head() {
    return {
      title: "Beginner Guide",
    };
  },
};
</script>
