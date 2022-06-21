<template>
  <main>
    <h1>Aquarium Insider</h1>
    <a href="#" class="button--solid" @click="trigger">Lorem, ipsum.</a>
    <a href="#" class="button--outline" @click="switchModes">Lorem, ipsum.</a>
    <p :class="{ 'triggered-style': isTriggered }" class="nontriggered-style">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, odio enim
      consequatur, nobis et neque corrupti minima sed natus architecto inventore
      in provident, ea corporis nulla obcaecati ducimus iste quidem.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
      placeat iste nemo cumque soluta, quae error, laudantium impedit dolorum
      nam, ipsam ducimus quis quisquam officia suscipit. Ipsam eveniet doloribus
      autem, similique tenetur nulla possimus veniam magnam, necessitatibus
      eaque placeat voluptatum non inventore hic quae quasi omnis? Molestias
      eaque odio nam.
    </p>
    <p>
      Voluptatem perspiciatis, nesciunt harum exercitationem, eum aspernatur
      architecto aliquid voluptatibus minus corrupti illum fugit omnis! Mollitia
      debitis ipsa expedita, eligendi pariatur harum rem esse veritatis tempora,
      numquam odit recusandae consectetur?
    </p>
    <p>
      Necessitatibus inventore minus illo ullam cum suscipit, nulla impedit
      aperiam facere dolore, perspiciatis enim? Tempore ducimus dolore deserunt
      sit velit distinctio esse nam, doloribus unde molestias vel inventore sint
      culpa?
    </p>
    <p>
      Consectetur eligendi, quis fugiat totam veniam ea fugit vitae debitis
      labore earum modi hic quo, obcaecati, perferendis ducimus ipsum delectus
      corrupti aperiam! Maxime cum ullam esse repellendus enim vel sit.
    </p>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";

.section:nth-of-type(2n) {
  background-color: var(--fg);
}

.nontriggered-style {
  transition: transform 50ms ease-in-out, opacity 50ms ease-in-out;
  opacity: 0.5;
}
.triggered-style {
  transform: translateY(50px);
  display: block;
  opacity: 1;
}
</style>

<script>
export default {
  methods: {
    switchModes() {},
    trigger() {
      this.isTriggered = !this.isTriggered;
    },
  },
  data() {
    return {
      isTriggered: false,
    };
  },
};
</script>
