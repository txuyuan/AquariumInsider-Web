<template>
  <footer>
    <div class="footer--content">
      <div class="info">
        <div class="info__section">
          <h3>Socials</h3>

          <Link href="mailto:contactus@aquariuminsider.org"
            ><EmailIcon />contactus@aquariuminsider.org</Link
          >
          <Link href="https://www.instagram.com/aquaristinsider/"
            ><InstagramIcon />@aquaristinsider</Link
          >
        </div>

        <div class="info__section">
          <h3>About Us</h3>
          <Link href="/our-story">Our Story</Link>
          <Link href="/our-team">Our Team</Link>
        </div>

        <div class="info__section">
          <h3>Other Links</h3>
          <Link href="/resources-references">Resources & References</Link>
          <Link href="https://github.com/txuyuan/AquariumInsider-Web"
            >Source Code</Link
          >
        </div>
      </div>

      <hr />

      © 2022 Aquarium Insider Team

      <br />

      Source code licensed under
      <Link
        href="https://github.com/txuyuan/AquariumInsider-Web/blob/master/LICENSE"
        >MIT License</Link
      >

      <br />

      Content licensed under
      <Link href="https://creativecommons.org/licenses/by-sa/4.0/"
        >CC BY-SA 4.0 License</Link
      >
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
  }
}

h2,
h3 {
  font-size: var(--footer-fs);
  font-weight: bolder;
  margin: 0.5rem 0 0.25rem;
}
hr {
  margin-top: 2.5rem;
  background-color: var(--bg-3);
}

.info a {
  display: flex;
  gap: 0.25rem;
}
.info a :deep(svg) {
  fill: var(--secondary);
}

footer {
  position: sticky;
  background-color: var(--bg-1);
  color: var(--fg-1);
  margin: 8rem 0 0;
  padding: 3rem 2.5rem 4rem 2.5rem;
  font-size: var(--footer-fs);
}
.footer--content {
  margin: 0 auto;
  max-width: var(--content-width);
  line-height: 2rem;
  font-weight: 300;
}
</style>

<script setup>
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
</script>

