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

    <h3>Wiki</h3>
    <table class="topics">
      <tr>
        <td>
          <Link class="page-reference" href="/introduction"><PackageVariantIcon />Introduction</Link>
        </td>
        <td>
          An introduction to 3 important concepts for aquariums, salinity, the
          nitrogen cycle and the phosphate cycle.
        </td>
      </tr>
      <tr>
        <td>
          <Link class="page-reference" href="/beginner-guide"
            ><AccountSchoolIcon />Beginner Guide</Link
          >
        </td>
        <td>
          This is the crashcourse for beginners. We run you through all the
          important steps you need to take in setting up an aquarium for the
          first time, including the equipment and the preparation of water and
          fish
        </td>
      </tr>
      <tr>
        <td>
          <Link class="page-reference" href="/maintenance"><HammerWrenchIcon />Maintenance</Link>
        </td>
        <td>
          This part becomes important after the initial setup. It covers
          everything that is important for maintaining an aquarium in the long
          run and ensuring it stays healthy.
        </td>
      </tr>
      <tr>
        <td>
          <Link class="page-reference" href="/creature-hub"><JellyfishIcon />Creature Hub</Link>
        </td>
        <td>
          This is an atlas on all the aquatic creatures you may want to have in
          your aquarium. This includes animals and plants, and many of their
          specific requirements and attributes.
        </td>
      </tr>
    </table>

    <h3><Link class="page-reference" href="/quiz"><NoteCheckIcon />Quiz</Link></h3>
    <p>
      We created a quiz based on the Wiki, containing all the most important
      information when owning an aquarium. You can try this quiz after reading
      through the Wiki to test your learning, or before to assess how
      knowledgeable you are about aquariums.
    </p>

    <h3><Link class="page-reference" href="/aquarium-map"><MapIcon />Aquarium Map</Link></h3>
    <p>
      After learning about aquariums, the obvious next step is to apply! So, we
      decided to collate a list of useful locations about aquariums, so that you
      can go out and find your own aquarium. Unfortunately, this is still only
      in Singapore (where we are based), but we do look to expand to other
      locations soon!
    </p>

    <h3>
      <Link class="page-reference" href="/resources-references"><PackageVariantPlusIcon />Resources</Link>
    </h3>
    <p>
      These are just some extra reading materials and references, in case there
      are still some things you are unclear about. Plus, we've personally used
      many of these resources, so there are quite reliable!
    </p>

    <h3>
      <Link class="page-reference" href="/our-story"><BookOpenVariantIcon />Our Story</Link>
      <Link class="page-reference" href="/our-team"><AccountGroupIcon />Our Team</Link>
    </h3>
    <p>
      Our story of creating and running this website, as well as the team that
      does that
    </p>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";

h3 {
  font-size: var(--normal-fs);
}
p {
  margin-block: 0.25rem;
}
a + a {
  margin-left: 0.5rem !important;
}

.topics {
  margin-block: 1rem;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--bg-2);
}
.topics a {
  padding: 0.5rem;
  margin: 0 0.5rem;
}
.topics td {
  padding: 0.75rem 0.25rem;
  vertical-align: top;
}
.topics tr {
  margin-block: 0.75rem;
  border-radius: 0.5rem;
}
.topics tr + .topics tr {
  border-top: 1px solid var(--bg-3);
}
</style>

<script setup>
import PackageVariantIcon from "vue-material-design-icons/PackageVariant.vue";
import AccountSchoolIcon from "vue-material-design-icons/AccountSchool.vue";
import HammerWrenchIcon from "vue-material-design-icons/HammerWrench.vue";
import JellyfishIcon from "vue-material-design-icons/Jellyfish.vue";
import NoteCheckIcon from "vue-material-design-icons/NoteCheck.vue";
import MapIcon from "vue-material-design-icons/Map.vue";
import PackageVariantPlusIcon from "vue-material-design-icons/PackageVariantPlus.vue"
import BookOpenVariantIcon from "vue-material-design-icons/BookOpenVariant.vue";
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";

import { ref } from "vue";

const isTriggered = ref(false)
function trigger() {
  isTriggered.value = !isTriggered.value
}
</script>
