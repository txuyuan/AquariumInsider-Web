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

      <li>Complications</li>
      <ul>
        <li>
          <Link to="/maintenance/complications/recognising-complications"
            >Recognising Complications</Link
          >
        </li>
        <li>
          <Link to="/maintenance/complications/parasites">Parasites</Link>
        </li>
        <li>
          <Link to="/maintenance/complications/bacteria">Bacteria</Link>
        </li>
        <li>
          <Link to="/maintenance/complications/infections">Infections</Link>
        </li>
        <li>
          <Link to="/maintenance/complications/poisoning">Poisoning</Link>
        </li>
      </ul>

      <li>
        <Link to="/maintenance/equipment-maintenance"
          >Equipment Maintenance</Link
        >
      </li>
      <li>
        <Link to="/maintenance/new-fish">New Fish</Link>
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
