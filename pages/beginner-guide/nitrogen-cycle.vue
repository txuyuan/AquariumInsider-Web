<template>
  <section class="section">
    <h2 class="section__title">Nitrogen Cycle</h2>

    <div class="tiled-cards shape-container">
      <span class="tiled-cards__card">
        <h3>Ammonia</h3>
        <p>
          Ammonia is found in fish waste material and in organic decomposition
        </p>
      </span>
      <ArrowRightIcon class="shape showBig" />
      <ArrowDownIcon class="shape showSmall" />
      <span class="tiled-cards__card">
        <h3>Nitrite</h3>
        <p>
          Ammonia feeds ever-present nitrifying bacteria, producing nitrite
          substances
        </p>
      </span>
      <ArrowRightIcon class="shape showBig" />
      <ArrowDownIcon class="shape showSmall" />
      <span class="tiled-cards__card">
        <h3>Nitrate</h3>
        <p>
          Nitrite is consumed by another type of nitrifying bacteria, producing
          nitrate substances.
        </p>
      </span>
    </div>

    <h2>Problem</h2>

    <ul>
      <li>
        Ammonia is toxic to aquatic life and in an aquarium, will kill fish in
        time
      </li>
      <li>
        Nitrates are only harmful in concentrated amounts, but will build up
        quickly in an aquarium
      </li>
    </ul>

    <h2>Solution</h2>

    <p>
      After setting up your aquarium, add
      <em>cycling products, frozen food or live feeder fish</em> and wait 2
      weeks. This cycles a tank, and if nitrate levels remain high after
      cycling, you can do a water change to reduce them. Typically, the nitrogen
      cycle takes between 6-7 weeks to complete and stabilise. You can speed
      this up with an "ammonia seed" of a small amount of
      <em>gravel or biological filter media</em> from an established, healthy
      aquarium. Once the nitrogen cycle has stabilised, you can slowly introduce
      fish to the tank, but water tests should still always be taken regularly.
    </p>

    <p>
      <span class="red"><strong>IMPORTANT</strong></span
      >: do NOT add fish until ammonia & nitrates levels reach 0
    </p>

    <p>
      It is also important to keep your aquarium well-oxygenated as nitrosomas
      bacteria, which significantly regulate ammonia and nitrate levels, need
      oxygen to develop and grow.
    </p>
  </section>
</template>

<script>
import ArrowRightIcon from "vue-material-design-icons/ArrowRight.vue";
import ArrowDownIcon from "vue-material-design-icons/ArrowDown.vue";
export default {
  components: {
    ArrowRightIcon,
    ArrowDownIcon,
  },
  head() {
    return {
      title: "Nitrogen Cycle",
    };
  },
};
</script>
