<template>
  <footer>
    <div class="footer--content">
      <div class="info">
        <div class="info__section">
          <h3>Socials</h3>

          <Link href="mailto:contactus@aquariuminsider.org"
            >contactus@aquariuminsider.org</Link
          >
        </div>

        <div class="info__section">
          <h3>Other Links</h3>
          <Link href="https://github.com/txuyuan/AquariumInsider-Web"
            >Source Code</Link
          >
        </div>

        <div class="info__section">
          <h3>About Us</h3>
          <Link href="/about">About Us</Link>
        </div>
      </div>

      <hr />

      © 2022 Aquarium Insider •
    </div>
  </footer>
</template>

<style scoped>
@import "~/assets/css/index.css";
@import "~/assets/css/colours.css";

@media screen and (min-width: 896px) {
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .info__section {
    flex: 1 1 100%;
    padding-right: 2rem;
  }
}

h2,
h3 {
  font-size: var(--normal-fontsize);
  font-weight: bold;
  margin: 0.5rem 0 0.25rem;
}
hr {
  margin-top: 2.5rem;
}
footer {
  position: sticky;
  background-color: var(--bg-1);
  color: var(--fg-1);
  margin: 8rem 0 0;
  padding: 3rem 2.5rem 4rem 2.5rem;
  font-size: 14px;
}
.footer--content {
  margin: 0 auto;
  max-width: var(--content-width);
  line-height: 2rem;
  font-weight: 300;
}
</style>
