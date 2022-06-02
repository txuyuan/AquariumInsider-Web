<template>
  <section class="section">
    <h2 class="section__title">Water Matching</h2>

    <p>
      Fishes are often only able to thrive in water with certain parameters.
      This is important, but you don't need to worry about every parameter for
      beginner-level fish.
    </p>
    <p>
      There are 2 general parameters that define which types of fish you can
      keep, known as:
    </p>

    <!-- TODO: GET MORE SG SAMPLES -->

    <div class="tiled-cards">
      <span class="tiled-cards__card">
        <h3>Hard Water</h3>
        <p>
          Water with a high mineral content and typically high pH. If your pH
          level is above 7, you may want to ask for "hard water fish suitable
          for beginners"
        </p>

        A few types of hard-water suitable fish:
        <ul>
          <li>Live Bearars (such as Guppies, Mollies, Swordtails)</li>
          <li>Brackish fish (such as Archers, Monos, Scats)</li>
          <li>Central American and African Cichlids</li>
          <li>Rainbow fish (Melanotaeniidae)</li>
        </ul>
      </span>
      <span class="tiled-cards__card">
        <h3>Soft Water</h3>

        <p>
          Water with a low mineral content and typically low-neutral pH. Many
          popular fish in the US are suitable for soft water, such as:
        </p>
        <ul>
          <li>Tetras</li>
          <li>Corydoras</li>
          <li>Rasboras</li>
          <li>Barbs</li>
          <li>South American Cichlids</li>
          <li>Bettas</li>
        </ul>
      </span>
    </div>

    Obviously, there are much more specific lists on fish-water suitability, and
    you should check up what your fish is suited for
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Water Matching",
    };
  },
};
</script>
