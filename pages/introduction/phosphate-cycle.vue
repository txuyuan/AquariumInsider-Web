<template>
  <section class="section">
    <h2 class="section__title">Phosphate Cycle</h2>

    <img src="~/assets/images/algae_growth.jpg" alt="algae growing in aquarium" class="image">

    <p>
      Phosphate is not too common, being part of fats and proteins, or as
      particulate phosphorus (found in detritus). It normally gets into
      ecosystems through primary producers like plankton.
    </p>

    <h3>Monitoring Phosphates</h3>
    <p>
      The main problem with phosphorus is that excessive amounts promote algae
      growth. To prevent this, keep phosphate concentrations below 1-2 ppm
      (parts per million) Phosphate levels must also be kept low for corals and
      reef inhabitants, since coral reefs naturally have low phosphate levels.
      To keep waters hospitable, keep phosphate concentrations below 0.02 ppm
    </p>
    <p>
      To monitor and ensure proper phosphate levels, the water must be monitored
      using a reliable aquarium water testing kit
    </p>

    <h3>Managing Phosphates</h3>
    <p>
      Proper phosphate management is obviously quite important for the health of
      an aquarium. Some advanced filtration devices/chemicals can maintain very
      low phosphate levels (though this is not always needed)
    </p>
    <p>
      Phosphates rarely need to be added to a reef tank and aquariums usually
      have too much. Instead, phosphates should be actively removed to prevent
      issues.
    </p>

    <h3>Ways to remove phosphate</h3>

    <div class="tiled-cards--wrap">
      <span class="tiled-cards__card">
        <h3>Water Changes</h3>
        <p>
          The old-fashion, reliable way to remove phosphates (assuming purified
          freshwater is used in preparing new water). Even with all the other
          methods, at least some regular water changes are needed
        </p>
      </span>

      <span class="tiled-cards__card">
        <h3>Vacuuming the substrate</h3>
        <p>
          The most efficient way to remove phosphate is to remove detritus (such
          as with gravel cleaners). This prevents settled particulate organic
          matter from causing stockpiling of phosphates
        </p>
      </span>

      <span class="tiled-cards__card">
        <h3>Plants</h3>
        <p>
          A natural and popular way to control nutrients like phosphate is to
          plant aquariums thoroughly. Plants like seaweeds absorb nutrients like
          seaweed as they grow, storing them in the plant to be removed.
        </p>
        <p class="footnote">
          Because detritivorous microcrustaceans, such as copepods, heavily
          populate refugia, this method additionally helps to release phosphorus
          from detritus into phosphate.
        </p>
      </span>

      <span class="tiled-cards__card">
        <h3>Chemical filtrants</h3>
        <p>
          Some chemical filtrants absorb and store phosphate, such as ferric
          iron granules and aluminium oxide beads.
        </p>
        <p>
          While ferric iron granules are strong phosphate absorbers, they are
          prone to clumping/compaction. On the other hand, aluminium oxide beads
          do not clump and can be held in a mesh bump and placed in an overflow
          box or sump for easy maintenance.
        </p>
      </span>

      <span class="tiled-cards__card">
        <h3>Chemical Filter Pads</h3>
        <p>
          Chemical filter pads provide even more control over phosphate levels
          by removing particulate matter as well as phosphate.
        </p>
      </span>
    </div>
  </section>
</template>

<style scoped>
.tiled-cards__card {
  flex-basis: 25%;
}
</style>

<script>
export default {
  head() {
    return {
      title: "Phosphate Cycle",
    };
  },
};
</script>
