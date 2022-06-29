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
          <Link to="/creature-hub/animal-hub/snails">Snails</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/terrapins">Terrapins</Link>
        </li>
        <li>
          <Link to="/creature-hub/animal-hub/miscallenous">Miscallaneous</Link>
        </li>
      </ul>

      <li>Plant Hub</li>
      <ul>
        <li>
          <Link to="/creature-hub/plant-hub/floating-plants"
            >Floating Plants</Link
          >
        </li>
        <li>
          <Link to="/creature-hub/plant-hub/green-grass">Green Grass</Link>
        </li>
        <li>
          <Link to="/creature-hub/plant-hub/moss">Moss</Link>
        </li>
      </ul>
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
      title: "creature-hub",
    };
  },
};
definePageMeta({
  layout: "false",
});
</script>
