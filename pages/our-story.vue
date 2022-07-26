<template>
  <main>
    <h1>Our Story</h1>
    <p>
      We're a group of 4 students from Hwa Chong Institution, Singapore. We
      found that we had a common interest in aquariums, and knew that although
      online resources were many, they were often jumbled and confusing for the
      beginner. Many of us owned/own aquariums and had faced many challenges, as
      most aquarists do.
    </p>
    <p>
      So, we decided to create a repository of all the information a complete
      beginner would need. This way, they would have a seamless and complete
      experience learning about aquariums, and come out ready to face most
      challenges.
    </p>

    <h2>Our Goal</h2>

    <p>
      Here at Aquarium Insider, we aim to provide useful and actionable
      information for beginners and veterans. For veterans, this would serve as
      a refresher and recap to shore up their knowledge. For beginners, this
      would serve as a crashcourse for everything a person needs to get into
      aquariums.
    </p>
    <p>
      We cover every part of the aquarium care process. In the crucial setup
      step, we cover the aquarium itself and everything that goes into it. This
      includes the water equipment and preparation, as well as the
      specifications and requirements of many beginner-friendly aquatic animals.
    </p>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";
.tiled-cards__card {
  flex-basis: 40%;
}

.member {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
}
.member p {
  margin-top: 0;
}
.member__photo {
  --size: 8rem;
  width: var(--size);
  height: var(--size);
  aspect-ratio: 1/1;

  border-radius: 50%;
  border: 3px solid var(--dark);
}
.member__name {
  margin-block: 1.5rem;
}
</style>

<script>
export default {
  head() {
    return {
      title: "About Us",
    };
  },
};
</script>
