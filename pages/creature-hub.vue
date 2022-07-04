<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Creature Hub</h2>
    </template>

    <template #links>
      <li>Animal Hub</li>
      <ul>
        <li>
          <Link to="/creature-hub/animal-hub/fish">Fish</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/shrimp">Shrimp</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/miscallenous">Miscallaneous</Link>
        </li>
      </ul>

      <Link to="creature-hub/plant-hub">Plant Hub</Link>
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
      title: "Creature Hub",
    };
  },
};
definePageMeta({
  layout: "false",
});
</script>
