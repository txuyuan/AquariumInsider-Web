<template>
  <section class="section">
    <h2 class="section__title">Temperature</h2>

    <img
      src="~/assets/images/beginner-guide/aquarium_heater.jpg"
      alt="aquarium with heater"
      class="image"
    />

    <p>
      Ideal temperature varies for every fish, but most fish feel welcome at
      <em>23 to 27 centigrade (or 73.4 to 80.6 farenheit)</em>. For more
      detailed fish specific temperatures, please seek advice from the fish shop
      owner when buying the fish.
    </p>

    <div class="tiled-cards--wrap">
      <div class="tiled-cards__card">
        <h3>Positioning</h3>

        <p>
          The tank preferably should not be close to a window or neat a hot lamp
          as these may contribute to temperature fluctuation within the tank
        </p>
        <p>
          Somewhere near the corner or the side of a room should ensure that
          temperature remains relatively stable throughout the day
        </p>
      </div>
      <div class="tiled-cards__card">
        <h3>Heater / Chiller</h3>

        <p>
          Do invest in a thermometer in the tank to ensure that the temperature
          is within the acceptable range at all times. When necessary, equip a
          heater or a chiller respectively in the event that you monitor that
          the temperature is either too low or too high respectively.
        </p>
        <p>
          Fish tank heaters/chillers are designed to activate when the
          temperature drops below the specified temperature.
        </p>
      </div>
    </div>

    <h3>Positioning</h3>

    <p>
      The tank preferably should not be close to a window or neat a hot lamp as
      these may contribute to temperature fluctuation within the tank
    </p>
    <p>
      Somewhere near the corner or the side of a room should ensure that
      temperature remains relatively stable throughout the day
    </p>

    <h3>Heater / Chiller</h3>
    <p>
      Do invest in a thermometer in the tank to ensure that the temperature is
      within the acceptable range at all times. When necessary, equip a heater
      or a chiller respectively in the event that you monitor that the
      temperature is either too low or too high respectively. Fish tank
      heaters/chillers are designed to activate when the temperature drops below
      the specified temperature.
    </p>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Temperature",
    };
  },
};
</script>
