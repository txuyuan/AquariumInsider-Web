<template>
  <article>
    <h2>Lights</h2>

    <div class="tiled-cards">
      <span class="tiled-cards__card">
        <h3>Ammonia</h3>
        <p>
          Ammonia is found in fish waste material and in organic decomposition
        </p>
      </span>
      <span class="tiled-cards__card">
        <h3>Nitrite</h3>
        <p>
          Ammonia feeds ever-present nitrifying bacteria, producing nitrite
          substances
        </p>
      </span>
      <span class="tiled-cards__card">
        <h3>Nitrate</h3>
        <p>
          Nitrite is consumed by another type of nitrifying bacteria, producing
          nitrate substances.
        </p>
      </span>
    </div>
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Lights",
    };
  },
};
</script>
