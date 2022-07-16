<template>
  <article>
    <h2>Cycling</h2>

    <p>
      Cycling - the process of fostering nitrifying bacteria (known as
      'biofilter') that help filter out toxic waste in the nitrogen cycle,
      ensuring that the aquarium remains a healthy environment. The biofilter
      consumes food and waste that produce toxic ammonia, as well as breaking
      down existing ammonia to less-toxic nitrites
    </p>

    <p>
      One way to keep the biofilter alive is to ensure untreated tap water never
      touches your aquarium, as it contains chlorine and chloramines
    </p>

    <hr />

    <p>Following either of these sets of steps to kick-start your biofilter</p>

    <div class="tiled-cards">
      <div class="tiled-cards__card">
        <h3>Fishless Cycle</h3>

        <h4>Things needed</h4>
        <ul>
          <li>Ammonia (pure NH4Cl)</li>
          <li>Aquarium test kit</li>
          <li>Fish food</li>
        </ul>

        <h4>Steps</h4>
        <ol>
          <li>
            Test the water pH, as a pH &lt;7 can slow down or stop the cycling
            process
          </li>
          <li>If using tap water, add any dechlorinating agents you have</li>
          <li>Now, you can either:</li>
          <ol type="a">
            <li>
              Ghost-feed your tank, adding food that you would give to the
              amount of fish you intent to keep. The uneaten food breaks down
              and produces ammonia, starting the cycle
            </li>
            <li>
              Use ammonium agents to add ammonia directly. Add ammonia according
              to your tank's liquid capacity, in 3mg/L, or 3ppm. If using an
              ammonia badge, you can add little by little until it is in the
              'toxic' zone
            </li>
          </ol>
        </ol>
      </div>

      <div class="tiled-cards__card">
        <h3>Fish-in Cycling</h3>
        <em>Recommended only for experts!</em>

        <p>
          Simply add a few fish. This is to ensure less waste is produced, so
          the water is unlikely to become toxic. Limit its food, at least at
          first. This reduces waste produced, but uneaten food, reducing toxins
          produced
        </p>

        <p>
          During the process, you should change the tank's water every few days,
          by replacing 10-25% of its water with fresh water. If its a saltwater
          tank, you'll need to add more saline.
        </p>

        <p>
          Remember to check the toxic ammonia & nitrate levels with a water
          testing kit. Check on the water every few days, ensuring ammonia stays
          &lt;0.5mg/L and nitrate stays &lt;1mg.
        </p>

        <p>
          Once ammonia & nitrate levels drop to/near zero, the cycling process
          is complete, and your biofilter is live. Now, you can add fish slow,
          1/2 at a time, with a week or more between each addition.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Cycling",
    };
  },
};
</script>
