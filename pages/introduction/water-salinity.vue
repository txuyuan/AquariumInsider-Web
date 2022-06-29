<template>
  <section class="section">
    <h2 class="section__title">Water Salinity</h2>

    <div class="tiled-cards--wrap">
      <div class="tiled-cards__card">
        <h3>Freshwater</h3>

        <p>
          <em
            >Salt concentration: low
            <span class="nowrap">(&lt; 0.05%)</span></em
          >
        </p>
        <p>
          Freshwater is found at streams, rivers, ponds and lakes, making up to
          1% of earth's water bodies.
        </p>

        Some fish suited to freshwater:
        <ul>
          <li>Angelfish (along with saltwater)</li>
          <li>Betta (fighting fish)</li>
          <li>Danios</li>
          <li>Goldfish</li>
          <li>Guppies</li>
          <li>Mollies</li>
          <li>Platys</li>
          <li>Swordtails</li>
          <li>Tetras</li>
        </ul>
      </div>

      <div class="tiled-cards__card">
        <h3>Brackish Water</h3>

        <p>
          <em
            >Salt concentration: medium
            <span class="nowrap">(0.05% - 3%)</span></em
          >
        </p>
        <p>
          Brackish water is the mixture of freshwater and saltwater, found at
          estuaries, where freshwater rivers meet the sea.
        </p>

        Some fish suited to brackish water:
        <ul>
          <li>Pufferfish (along with saltwater)</li>
          <li>Archer fish</li>
          <li>Tigerfish</li>
          <li>Mono Sebae</li>
          <li>Scat fish</li>
        </ul>
      </div>

      <div class="tiled-cards__card">
        <h3>Saltwater</h3>

        <p>
          <em>Salt concentration: high <span class="nowrap">(> 3%)</span></em>
        </p>
        <p>
          Saltwater is the water in our oceans and seas, making up more than ⅔
          of the earth’s surface
        </p>

        Some fish suited to saltwater:
        <ul>
          <li>Angelfish (along with freshwater)</li>
          <li>Clownfish</li>
          <li>Gobies</li>
          <li>Eels</li>
          <li>Lionfish</li>
          <li>Pufferfish (along with brackish water)</li>
          <li>Rabbitfish</li>
          <li>Dottbacks</li>
          <li>Butterfly fish</li>
          <li>Cardinal fish</li>
          <li>Basslets</li>
          <li>Damsels</li>
          <li>Seahorses</li>
          <li>Tangs</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tiled-cards__card {
  flex-basis: 40%;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Water Salinity",
    };
  },
};
</script>
