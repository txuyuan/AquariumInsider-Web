<template>
  <main>
    <h1>Aquarium Insider</h1>

    <img
      src="~/assets/images/home/aquaticLife.svg"
      alt="picture of underwater life"
      class="image"
    />

    <p>
      Hi! This is an information repository about everything aquarium! No matter
      whether you are a seasoned expert or a beginner, you can find something of
      use here.
    </p>

    <h3>Topics</h3>
    <table class="topics">
      <tr>
        <td><Link href="/introduction">Introduction</Link></td>
        <td>
          An introduction to 3 important concepts for aquariums, salinity, the
          nitrogen cycle and the phosphate cycle.
        </td>
      </tr>
      <tr>
        <td><Link href="/beginner-guide">Beginner Guide</Link></td>
        <td>
          This is the crashcourse for beginners. We run you through all the
          important steps you need to take in setting up an aquarium for the
          first time, including the equipment and the preparation of water and
          fish
        </td>
      </tr>
      <tr>
        <td><Link href="maintenance">Maintenance</Link></td>
        <td>
          This part becomes important after the initial setup. It covers
          everything that is important for maintaining an aquarium in the long
          run and ensuring it stays healthy.
        </td>
      </tr>
      <tr>
        <td><Link href="creature-hub">Creature Hub</Link></td>
        <td>
          This is an atlas on all the aquatic creatures you may want to have in
          your aquarium. This includes animals and plants, and many of their
          specific requirements and attributes.
        </td>
      </tr>
    </table>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";
.topics td {
  padding: 0.75rem 0.25rem;
  vertical-align: top;
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
