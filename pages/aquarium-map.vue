<template>
  <main>
    <section>
      <h1>Aquarium Map</h1>
      We compiled a list of useful locations in <strong>Singapore</strong>,
      where we are based. We hope to expand to other locations soon!
    </section>

    <p>
      This map is a compilation of all the locations we have found personally
      useful in setting up an aquarium. This includes stores for equipment, fish
      and aquariums, as well as other large aquariums where you can draw
      inspiration for your aquarium or simply admire sea life
    </p>

    <div class="embedded-map-container">
      <iframe
        class="embedded-map"
        src="https://www.google.com/maps/d/embed?mid=1Cu84RKJHzzAdjy4I5VDJxFglaSbhY6w&ehbc=2E312F"
      ></iframe>
    </div>
  </main>
</template>

<style scoped>
.tiled-cards__card {
  flex-basis: 70%;
}

.embedded-map-container {
  --height: clamp(20rem, 90vh, 60rem);
  --bar-height: 4rem;

  /* Hide top bar of Google My Maps */
  border-radius: 0.5rem;
  border: 2px solid var(--bg-2);
  height: calc(var(--height) - var(--bar-height));
  overflow: hidden;
}
.embedded-map {
  width: 100%;
  height: var(--height);
  border: none;
  transform: translateY(calc(-1 * var(--bar-height)));
}
</style>

<script setup>
useHead({
  title: "Aquarium Map",
});
</script>
