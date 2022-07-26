<template>
  <main>
    <h1>Our Team</h1>

    <p>
      This is the core team behind this project. Of course, we have to thank all
      the people who have given us suggestions, feedback and other tips.
    </p>

    <div class="team tiled-cards--wrap">
      <div class="member tiled-cards__card">
        <img
          src="~/assets/images/about/yukang_headshot.jpg"
          alt=""
          class="member__photo"
        />

        <div class="member__desc">
          <h2 class="member__name">
            <Link href="/our-team/lin-yukang">Lin Yukang</Link>
          </h2>

          <p>Project Lead<br />Outreach Manager</p>
        </div>
      </div>

      <div class="member tiled-cards__card">
        <img
          src="~/assets/images/about/keagan_headshot.jpg"
          alt=""
          class="member__photo"
        />

        <div class="member__desc">
          <h2 class="member__name">
            <Link href="/our-team/keagan-njoman">Keagan Njoman</Link>
          </h2>

          <p>Creative Lead<br />Fact-Checker</p>
        </div>
      </div>

      <div class="member tiled-cards__card">
        <img
          src="~/assets/images/about/xuyuan_headshot.jpg"
          alt=""
          class="member__photo"
        />

        <div class="member__desc">
          <h2 class="member__name">
            <Link href="/our-team/tang-xuyuan">Tang Xuyuan</Link>
          </h2>

          <p>Technical Specialist<br />Outreach Manager</p>
        </div>
      </div>

      <div class="member tiled-cards__card">
        <img
          src="~/assets/images/about/yuxuan_headshot.jpg"
          alt=""
          class="member__photo"
        />

        <div class="member__desc">
          <h2 class="member__name">
            <Link href="/our-team/pek-yuxuan">Pek Yuxuan</Link>
          </h2>

          <p>Resource Manager<br />Resource Editor</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "~/assets/css/document.css";
@import "~/assets/css/profiles.css";

.tiled-cards__card {
  flex-basis: 40%;
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
