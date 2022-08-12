<template>
  <NuxtLayout name="docs">
    <template #title>
      <h2>Creature Hub</h2>
    </template>

    <template #links>
      <li>
        <Link href="/creature-hub">Home</Link>
      </li>
      <li>Animal Hub</li>
      <ul>
        <li>
          <Link href="/creature-hub/animal-hub/cherry-barb">Cherry Barb</Link>
        </li>
        <li>
          <Link href="/creature-hub/animal-hub/cory-catfish">Cory Catfish</Link>
        </li>
        <li>
          <Link href="/creature-hub/animal-hub/goldfish">Goldfish</Link>
        </li>
        <li>
          <Link href="/creature-hub/animal-hub/guppy">Guppy</Link>
        </li>
        <li>
          <Link href="/creature-hub/animal-hub/molly">Molly</Link>
        </li>
        <li>
          <Link href="/creature-hub/animal-hub/neon-tetra">Neon Tetra</Link>
        </li>
        <li>
          <Link href="/creature-hub/animal-hub/shrimp">Shrimp</Link>
        </li>
      </ul>

      <li>Plant Hub</li>
      <ul>
        <li>
          <Link href="/creature-hub/plant-hub/common-duckweed"
            >Common Duckweed</Link
          >
        </li>
        <li>
          <Link href="/creature-hub/plant-hub/amazon-frogbit"
            >Amazon Frogbit</Link
          >
        </li>
        <li><Link href="/creature-hub/plant-hub/java-moss">Java Moss</Link></li>
        <li><Link href="/creature-hub/plant-hub/java-fern">Java Fern</Link></li>
        <li>
          <Link href="/creature-hub/plant-hub/amazon-sword">Amazon Sword</Link>
        </li>
        <li>
          <Link href="/creature-hub/plant-hub/dwarf-aquarium-lily"
            >Dwarf Aquarium Lily</Link
          >
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
      title: "Creature Hub",
    };
  },
};
definePageMeta({
  layout: "false",
});
</script>
