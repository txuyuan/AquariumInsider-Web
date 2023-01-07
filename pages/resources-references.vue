<template>
  <main>
    <h1>Resources & References</h1>

    <section>
      <h2>Resources</h2>
      All the websites, information and resources you could want. You can use
      these for further reading and as a list of reliable sources, since we've
      used many of these ourselves!
    </section>

    <p style="display:flex; align-items:center; gap:0.2rem;"><YoutubeIcon /><Link href="https://www.youtube.com/c/Aquariumcoop">AquariumCoop</Link></p>

    <ul>
      <li>
        <Link href="https://www.thesprucepets.com">thesprucepets.com</Link>
      </li>
      <li>
        <Link href="https://www.aquariumcoop.com">aquariumcoop.com</Link>
      </li>
      <li><Link href="https://www.petco.com">petco.com</Link></li>
      <li><Link href="https://www.aqueon.com/">aqueon.com</Link></li>
      <li>
        <Link href="https://www.fortunaaquatics.com/">fortunaaquatics.com</Link>
      </li>
      <li>
        <Link href="https://reefbuilders.com/">reefbuilders.com</Link>
      </li>
    </ul>

    <section>
      <h2>References</h2>
      A complete list of our source materials and information. (refer to
      Resources if you want useful further reading)
    </section>

    <ul>
      <li>
        How to Keep Your Fish Free from Disease—The Aquarium Guide. (n.d.).
        Retrieved August 11, 2022, from
        <Link
          href="https://theaquariumguide.com/articles/keep-fish-free-disease"
          >https://theaquariumguide.com/articles/keep-fish-free-disease</Link
        >
      </li>
      <li>
        Saltwater Aquarium Maintenance: Water Changes | Reef Builders | The Reef
        and Saltwater Aquarium Blog. (n.d.). Retrieved August 11, 2022, from
        <Link
          href="https://reefbuilders.com/2017/03/01/saltwater-aquarium-maintenance-water-changes/"
          >https://reefbuilders.com/2017/03/01/saltwater-aquarium-maintenance-water-changes/</Link
        >
      </li>
      <li>
        Fortuna Aquatics. (n.d.). Fortuna Aquatics. Retrieved August 11, 2022,
        from
        <Link href="https://www.fortunaaquatics.com"
          >https://www.fortunaaquatics.com</Link
        >
      </li>
      <li>
        Alderton, D. (2005). Encyclopedia of Aquarium &amp; Pond Fish. Dorling
        Kindersley.
      </li>
      <li>
        Fish compatibility: How to build a peaceful community fish tank. Home.
        (n.d.). Retrieved July 5, 2022, from
        <Link href="https://www.aqueon.com/articles/fish-compatibility"
          >https://www.aqueon.com/articles/fish-compatibility</Link
        >
      </li>
      <li>
        Freshwater Aquarium Disease Prevention, recognition and treatment. Home.
        (n.d.). Retrieved July 5, 2022, from
        <Link href="https://www.aqueon.com/articles/aquarium-disease-prevention"
          >https://www.aqueon.com/articles/aquarium-disease-prevention</Link
        >
      </li>
      <li>
        How to test fish tank water: Petbarn. Petbarn Articles. (2020, June 16).
        Retrieved July 5, 2022, from
        <Link
          href="https://www.petbarn.com.au/petspot/fish/care-and-maintenance-fish/how-can-i-tell-if-my-fish-tank-water-is-healthy/"
          >https://www.petbarn.com.au/petspot/fish/care-and-maintenance-fish/how-can-i-tell-if-my-fish-tank-water-is-healthy/</Link
        >
      </li>
      <li>
        Salvi, A. (2012, January 18). How to choose compatible fish for your
        community aquarium. PetHelpful. Retrieved July 5, 2022, from
        <Link
          href="https://pethelpful.com/fish-aquariums/How-to-get-the-community-right-in-your-community-aquarium"
          >https://pethelpful.com/fish-aquariums/How-to-get-the-community-right-in-your-community-aquarium</Link
        >
      </li>
      <li>
        Sharpe, S. (2021, October 25). Calculating how many fish to keep in your
        aquarium. The Spruce Pets. Retrieved July 5, 2022, from
        <Link
          href="https://www.thesprucepets.com/amount-of-fish-and-aquarium-size-1378335"
          >https://www.thesprucepets.com/amount-of-fish-and-aquarium-size-1378335</Link
        >
      </li>
      <li>
        Sharpe, S. (2022, June 9). Change the water in your aquarium and keep
        Fish Healthy. The Spruce Pets. Retrieved July 5, 2022, from
        <Link href="https://www.thesprucepets.com/water-changes-1381886"
          >https://www.thesprucepets.com/water-changes-1381886</Link
        >
      </li>
    </ul>
  </main>
</template>

<style scoped>
a {
  color: var(--fg);
}
li + li {
  margin-top: 0.5rem;
}
:deep(.material-design-icon) {
  display: inline-flex;
  justify-content: center;
  align-items: center
}
</style>

<script setup>
import YoutubeIcon from "vue-material-design-icons/Youtube.vue";
</script>
