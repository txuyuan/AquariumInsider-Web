<template>
  <section class="section">
    <h2 class="section__title">Chemical Levels</h2>

    <img style="width: 15rem;" src="~/assets/images/aquarium_teststrip.jpg" alt="aquarium co-op multi test strip" class="image">

    <div class="tiled-cards--wrap">
      <span class="tiled-cards__card">
        <h3>pH</h3>

        <p>
          pH is the measure of how acidic or basic the water is. Pure water has
          a pH of 7.0, while alkaline water has a higher pH and acid has a lower
          pH.
        </p>
        <p>
          The ideal pH for most freshwater aquariums is 6.5 to 8.0. Some signs
          of abnormal pH are:
        </p>
        <ul>
          <li>frantic swimming</li>
          <li>lethargy</li>
          <li>rapid breathing</li>
          <li>other erratic behaviour</li>
        </ul>

        <p>
          The goal in managing pH levels is to prevent fluctuation and allow
          fish to adapt to the pH.
        </p>
      </span>

      <span class="tiled-cards__card">
        <h3>KH</h3>

        <p>
          KH is the amount of carbonates and bicarbonates in water, which
          affects the amount of acid or base needed to change the pH (buffering
          capacity). It is measured in ppm (parts per million) or dKH (degrees
          of KH), where 1dKH = 17.9ppm.
        </p>
        <p>
          Most freshwater aquariums should be between 4-8 dKH (or 70-140 ppm),
          but be sure to check for your species of animal, since some have
          different requirements. Note that a KH level of &lt;2 dKH could cause
          pH swings and kill your animals.
        </p>
        <p>
          If you're trying to adjust your pH, minimise your KH. If you're trying
          to avoid pH swings, aim for a high KH
        </p>
      </span>

      <span class="tiled-cards__card">
        <h3>GH</h3>

        <p>
          GH is the amount of calcium and magnesium ions in the water, the
          hardness of the water. Similar to KH, GH is measured in dGH or ppm. It
          is essential for many healthy biological functions.
        </p>

        <p>
          Most aquariums should be at 4-8 dKH (or 70-140 ppm), but different
          fishes require different levels, and you should always check first!
          Some signs of unhealthy GH levels are:
        </p>
        <ul>
          <li>
            Fish with poor appetite, slow growth rate, lethargy or faded colours
          </li>
          <li>Plants with signs of calcium or other mineral deficiencies</li>
          <li>Shrimp having trouble multing</li>
          <li>Snails with thin, flaking or pitted shells</li>
        </ul>
      </span>
    </div>

    <h3>Managing pH, KH, GH</h3>
    <p>
      Aquarium co-op multi-test strips have tests for all 3 levels, which should
      be done in regular aquarium maintenance. It is recommended to change pH,
      KH and GH levels gently, so that creatures in your aquarium can adapt
    </p>
    <p>
      To lower the levels, let the aquarium acidify through minimal water
      changes and gradually mixing in water through a RODI (reverse osmosis
      de-ionised) water system
    </p>
    <p>
      To raise the levels, add crushed coral by mixing into substrate or as a
      bag of filter media in the filter
    </p>
  </section>
</template>

<style scoped>
.tiled-cards__card {
  flex-basis: 80%;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Chemical Levels",
    };
  },
};
</script>
