<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Maintenance</h2>
    </template>

    <template #links>
      <li><Link to="/maintenance">Home</Link></li>
      <li>
        <Link to="/maintenance/water-changes">Water Changes</Link>
      </li>
      <li>
        <Link to="/maintenance/water-conditions">Water Conditions</Link>
      </li>

      <li>Diseases</li>
      <ul>
        <li>
          <Link to="/maintenance/diseases/infections">Infections</Link>
        </li>
        <li>
          <Link to="/maintenance/diseases/parasites">Parasites</Link>
        </li>
      </ul>

      <li>
        <Link to="/maintenance/new-fish">New Fish</Link>
      </li>
      <li>
        <Link to="/maintenance/common-mistakes">Common Mistakes</Link>
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
