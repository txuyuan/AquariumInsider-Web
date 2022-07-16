<template>
  <article>
    <h2>Nitrogen Cycle</h2>

    <img
      src="~/assets/images/introduction/nitrogen_cycle.jpg"
      alt="nitrogen process"
      class="image"
    />

    <p>
      Naturally, the nitrogen cycle is a complete cycle where nitrogen goes from
      <strong>air → plant → animal → bacteria → air</strong>. <br />
      In an aquarium though, the nitrogen process is less like a loop and more
      like a cascade, involving the continuous chemical degradation of
      nitrogenous compounds from <strong>ammonia → nitrite → nitrate</strong>.
      <br />
      The end products, nitrates, are then taken up by aquarium plants or
      removed by other means.
    </p>
    <p>
      Various bacteria move the wastes from step to step, enabling the nitrogen
      process, and hence these bacteria must be established and fostered over
      time to effectively convert and remove all the waste toxins.
    </p>
    <p>
      In an aquarium, this process is established over time, taking up to
      <em>3 months</em> before a new aquarium has fully converted its wastes
      into nitrate. The method of stocking your aquarium gradually with younger,
      smaller fish allows the nitrogen-converting bacteria to grow and keep pace
      with the gradual increase of waste matter.
    </p>

    <div class="tiled-cards--wrap">
      <span class="tiled-cards__card">
        <h3>Ammonia</h3>
        <p>
          The first step in the nitrogen process is ammonia, a toxic, colourless
          and pungent gas, formed when fish urea and proteins get converted by
          bacteria. Ammonia content rising beyond healthy levels could be caused
          by overfeeding or overpopulation.
        </p>
        <p>
          A method of maintaining the balance is to introduce “nitrogen-fixing
          bacteria” to oxidise the ammonia, changing it to Nitrite.
        </p>
      </span>
      <span class="tiled-cards__card">
        <h3>Nitrite</h3>
        <p>
          The second step in the nitrogen cycle is nitrite, a common cause of
          aquarium fishes’ deaths, formed through the partial oxidation of
          ammonium ions.
        </p>
        <p>
          Methods to prevent the build-up of nitrite is to feed sparingly, and
          that there are not too many animals in the aquarium. Partial water
          changes should also be carried out regularly, replacing around 1/5th
          of the total volume with well-aged and not tap water.
        </p>
      </span>
      <span class="tiled-cards__card">
        <h3>Nitrate</h3>
        <p>
          The third and last step in the nitrogen cycle is nitrate, a substance
          far less lethal than nitrites but still of some significance. They are
          formed through the breakdown of animal protein and ammonium compounds,
          such as urine, excrement and dead organic matter. Even though most
          freshwater tropical fish and other aquarium inhabitants can tolerate
          even large quantities of nitrates, precautionary measures should still
          be taken to prevent a dangerous build-up of nitrates.
        </p>
        <p>
          This can be done through sparing feeding and maintaining a small
          animal population.
        </p>
      </span>
    </div>

    <p>
      Aquatic plants actively use nitrogen and can greatly reduce the levels of
      nitrate in an aquarium in a well-adjusted aquarium as well. In an
      artificial unplanted ecosystem, the tank owner must takeover the role of
      plants in removing nitrates at this final stage of the nitrogen process
    </p>

    <h3>How to reduce nitrogen compounds</h3>
    Nitrites are the most dangerous to aquarium fish, so they are the compounds
    to guard against.
    <ol>
      <li>
        The simplest step is to feed sparingly, making sure they are not too
        many animals in the tank
      </li>
      <li>
        Regularly carry out partial water changes, replacing at most 20% of the
        aquarium’s total volume with well-aged water, which is just water that
        has been allowed to sit for up to a few days, instead of tap water fresh
        from the tap.
        <Link
          href="https://www.thesprucepets.com/what-is-aged-aquarium-water-1381899"
          >(read more if you’d like)</Link
        >
      </li>
      <li>
        Make sure there are not too many living, waste-producing animals in the
        aquarium. Even though snails, catfish and algae eaters are “cleaner
        fish”, they still produce waste and add to the toxins in the nitrogen
        process
      </li>
    </ol>
  </article>
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
      title: "Nitrogen Cycle",
    };
  },
};
</script>
