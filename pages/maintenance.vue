<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Maintenance</h2>
    </template>

    <template #links>
      <li>
        <Link tot="/maintenance/water-changes">Water Changes</Link>
      </li>
      <li>
        <Link tot="/maintenance/water-conditions">Water Conditions</Link>
      </li>

      <li>Diseases</li>
      <ul>
        <li>
          <Link tot="/maintenance/diseases/infections">Infections</Link>
        </li>
        <li>
          <Link tot="/maintenance/diseases/parasites">Parasites</Link>
        </li>
      </ul>

      <li>
        <Link tot="/maintenance/new-fish">New Fish</Link>
      </li>
      <li>
        <Link tot="/maintenance/common-mistakes">Common Mistakes</Link>
      </li>
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
export default {
  head() {
    return {
      title: "Maintenance",
    };
  },
};
definePageMeta({
  layout: "false",
});
</script>
