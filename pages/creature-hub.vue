<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Creature Hub</h2>
    </template>

    <template #links>
      <li>
        <Link to="/creature-hub">Home</Link>
      </li>
      <li>Animal Hub</li>
      <ul>
        <li>
          <Link to="/creature-hub/animal-hub/cherry-barb">Cherry Barb</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/cory-catfish">Cory Catfish</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/goldfish">Goldfish</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/guppy">Guppy</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/molly">Molly</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/neon-tetra">Neon Tetra</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/shrimp">Shrimp</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/miscellaneous">Miscellaneous</Link>
        </li>
      </ul>

      <Link to="/creature-hub/plant-hub">Plant Hub</Link>
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
