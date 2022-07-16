<template>
  <article>
    <h2>Containers</h2>
    <p>Choosing a tank for your aquarium can be a difficult task.</p>

    <img
      src="~/assets/images/beginner-guide/aquarium.jpg"
      alt="large aquarium with fish inside"
      class="image"
    />

    <p>
      When selecting a tank to house your fish, you must not only consider the
      species of fish, but also make sure that the aquarium fits your habitat as
      well. Here are some guidelines for how to select an aquarium tank
    </p>
    <p><strong>Arranged in descending priority</strong></p>

    <div class="tiled-cards--wrap">
      <div class="tiled-cards__card">
        <h3>Size</h3>

        <p><em>Bigger is always better</em></p>

        <p>
          When it comes to aquariums, an unavoidable factor is that they will
          produce waste, and a lot of it
          <span class="nowrap"
            >(<Link href="/introduction/nitrogen-cycle">nitrogen cycle</Link
            >)</span
          >. In larger aquariums, chemicals produced by waste build up
          relatively slowly, allowing more room for error and making them easier
          to care for. Larger tanks also mean a more humane living environment
          for aquatic animals.
        </p>

        <p>
          A good rule of thumb is to start off with at least
          <em>50 litres, or 13.2 gallons</em> of tank.
        </p>
      </div>

      <div class="tiled-cards__card">
        <h3>Placement</h3>

        The placement of an aquarium impacts not only the amount of joy derived
        from it, but also the aquarium's overall success. A few factors for
        consideration are:
        <ul>
          <li>Visibility - Can you see it?</li>
          <li>Proximity to Electrical and water supply</li>
          <li>Temperature of the area</li>
          <li>
            Lighting of the area - Direct sunlight encourages algae growth
          </li>
          <li>
            Support - Can the location a heavy tank? Aquarium stands can be used
            if not
          </li>
        </ul>
      </div>

      <div class="tiled-cards__card">
        <h3>Price</h3>

        <p>
          The bigger your aquarium, the more expensive it is to maintain. Bigger
          aquariums hold more water, and thus require large heaters, bigger
          filters, more water conditioner...untold costs compound with larger
          aquariums
        </p>
        <p>
          If you are on a tight budget, you may have to compromise on the size
          of your aquarium
        </p>
      </div>

      <div class="tiled-cards__card">
        <h3>Fish Stock</h3>

        <p>
          Fish grow. The majority of fish sold are babies/juveniles, and will
          grow over time. At full size, they may be too large for your aquarium
        </p>
        <p>You should also leave space for offspring</p>
        <p>
          Some fish are also unsuitable for sharing aquariums with others.
          Territorial and agressive fish are an absolute no-go for shared tanks
          with insufficient space
        </p>
      </div>

      <div class="tiled-cards__card">
        <h3>Opening Space</h3>

        <p>
          Fish breathe oxygen, just like you and me. However, the oxygen that
          dissolves into the water of your aquarium depends on the exposed area
          of water on the top of the tank
        </p>

        Consider the following tanks. Which one can hold more fish?
        <img
          src="~/assets/images/beginner-guide/tank_openings.jpg"
          class="image"
          alt="tank A and tank B, similiar width, B is taller"
        />
        <p>
          While tank B may seem obvious, they can actually hold around the same
          amount of fish. The opening of the aquarium determines the amount of
          oxygen dissolving into the water, meaning that both tanks absorb the
          same amount of oxygen. While you may use an airstone to aerate your
          aquarium, the opening of your fish tank is going to be the biggest
          limitation to how many fish you can stock.
        </p>
      </div>

      <div class="tiled-cards__card">
        <h3>Material</h3>

        <p>Hands-down, <em>glass</em>.</p>
        <ul>
          <li>Lower-maintenance - scratches less easily than acrylic</li>
          <li>
            Cheaper and more widely available than acrylic for smaller sizes
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
.tiled-cards__card {
  flex-basis: 70%;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Containers",
    };
  },
};
</script>
