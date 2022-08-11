<template>
  <Link class="nav__button" href="/"><HomeIcon />Home</Link>

  <div class="nav__section">
    <Link class="nav__section__header nav__button"
      ><BookOpenVariantIcon />Wiki<ChevronDownIcon /></Link
    >
    <ul class="nav__section__contents">
      <li>
        <Link class="nav__button" href="/introduction"
          ><PackageVariantIcon />Introduction</Link
        >
      </li>
      <li>
        <Link class="nav__button" href="/beginner-guide"
          ><AccountSchoolIcon />Beginner Guide</Link
        >
      </li>
      <li>
        <Link class="nav__button" href="/maintenance"
          ><HammerWrenchIcon />Maintenance</Link
        >
      </li>
      <li>
        <Link class="nav__button" href="/creature-hub"
          ><JellyfishIcon />Creature Hub</Link
        >
      </li>
    </ul>
  </div>

  <Link class="nav__button" href="/quiz"><NoteCheckIcon />Quiz</Link>
</template>

<script setup>
import HomeIcon from "vue-material-design-icons/Home.vue";
import BookOpenVariantIcon from "vue-material-design-icons/BookOpenVariant.vue";
import PackageVariantIcon from "vue-material-design-icons/PackageVariant.vue";
import AccountSchoolIcon from "vue-material-design-icons/AccountSchool.vue";
import HammerWrenchIcon from "vue-material-design-icons/HammerWrench.vue";
import FishIcon from "vue-material-design-icons/Fish.vue";
import JellyfishIcon from "vue-material-design-icons/Jellyfish.vue";
import NoteCheckIcon from "vue-material-design-icons/NoteCheck.vue";
import ChevronDownIcon from "vue-material-design-icons/ChevronDown.vue";
</script>

<style scoped>
@import "nav.css";
@import "~/assets/css/document.css";
</style>
