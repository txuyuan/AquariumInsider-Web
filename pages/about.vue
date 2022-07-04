<template>
  <main>
    <h1>About Us</h1>

    <h2>Our Goal</h2>

    <p>
      Here at Aquarium Insider, we aim to provide useful and actionable **
      CENTRED AQUARIUM ** information for beginners and veterans. For veterans,
      this would serve as a refresher and recap to shore up their knowledge. For
      beginners, this would serve as a crashcourse for everything a person needs
      to get into aquariums.
    </p>
    <p>
      We cover every part of the aquarium care process. In the crucial setup
      step, we cover the aquarium itself and everything that goes into it. This
      includes the water equipment and preparation, as well as the
      specifications and requirements of many beginner-friendly aquatic animals.
    </p>

    <h2>Our Story</h2>
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

    <h2>Our Team</h2>

    <div class="team tiled-cards--wrap">
      <div class="member tiled-cards__card">
        <img src="~/assets/images/yukang_headshot.png" alt="" class="member__photo" />

        <div class="member__desc">
          <h2 class="member__name">Lin Yukang</h2>
          
          <p>Project Lead</p>
          <p>Outreach Manager</p>
          <p></p>
        </div>
      </div>

      <div class="member tiled-cards__card">
        <img src="~/assets/images/keagan_headshot.png" alt="" class="member__photo" />

        <div class="member__desc">
          <h2 class="member__name">Keagan Njoman</h2>
          
          <p>Creative Lead</p>
          <p>Fact-Checker</p>
        </div>
      </div>

      <div class="member tiled-cards__card">
        <img src="~/assets/images/xuyuan_headshot.png" alt="" class="member__photo" />

        <div class="member__desc">
          <h2 class="member__name">Tang Xuyuan</h2>
          
          <p>Technical Specialist</p>
          <p>Devil's Advocate</p>
        </div>
      </div>

      <div class="member tiled-cards__card">
        <img src="~/assets/images/yuxuan_headshot.png" alt="" class="member__photo" />

        <div class="member__desc">
          <h2 class="member__name">Pek Yuxuan</h2>
          
          <p>Resource Management</p>
          <p>Resource Editor</p>
        </div>
      </div>
    </div>
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
.member__photo {
  --size: 8rem;
  width: var(--size);
  height: var(--size);
  aspect-ratio: 1/1;
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
