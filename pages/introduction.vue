<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Introduction</h2>
    </template>

    <template #links>
      <li>
        <Link to="/introduction">Home</Link>
      </li>
      <li>
        <Link to="/introduction/salinity">Salinity</Link>
      </li>
      <li>
        <Link to="/introduction/nitrogen-cycle">Nitrogen Cycle</Link>
      </li>
      <li>
        <Link to="/introduction/phosphate-cycle">Phosphate Cycle</Link>
      </li>
    </template>

    <template #default>
      <NuxtChild />
    </template>
  </NuxtLayout>
</template>

<script>
export default {
  head() {
    return {
      title: "Introduction",
    };
  },
};

definePageMeta({
  layout: "false",
});
</script>
