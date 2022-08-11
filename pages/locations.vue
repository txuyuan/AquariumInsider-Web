<template>
  <section>
    <h1>Locations</h1>
    We compiled a list of useful locations in <strong>Singapore</strong>, where
    we are based. We hope to expand to other locations soon!
  </section>

  <div class="embedded-map-container">
    <iframe
      class="embedded-map"
      src="https://www.google.com/maps/d/embed?mid=1Cu84RKJHzzAdjy4I5VDJxFglaSbhY6w&ehbc=2E312F"
    ></iframe>
  </div>

  <div class="tiled-cards--wrap">
    <div class="tiled-cards__card">
      <h3>Seasonal Aquarium</h3>
      <p></p>
    </div>
    <div class="tiled-cards__card">
      <h3>Marc's Aquarium</h3>
      <p></p>
    </div>
    <div class="tiled-cards__card">
      <h3>House of Discus</h3>
      <p></p>
    </div>
    <div class="tiled-cards__card">
      <h3>Toh Aquarium</h3>
      <p></p>
    </div>
    <div class="tiled-cards__card">
      <h3>Blue Paradise Aquarium</h3>
      <p></p>
    </div>
  </div>
</template>

<style scoped>
.tiled-cards__card {
  flex-basis: 70%;
}

.embedded-map-container {
  --height: clamp(20rem, 70vh, 40rem);
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
