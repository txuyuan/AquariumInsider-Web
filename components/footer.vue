<template>
  <footer>
    <LayeredWaveSeperator class="footer-spacer" />

    <div class="footer--content">
      <div class="info">
        <div class="info__section">
          <h3>Contact Us</h3>

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
          <Link href="https://github.com/txuyuan/AquariumInsider-Web" style="display: flex;align-items: center"
            >Source Code<OpenInNewIcon style="height:16px; width:16px"/></Link
          >
        </div>
      </div>

      <hr />

      <p>Aquarium Insider <strong>{{ latestVersion }}</strong></p>

      <div class="copyright">
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
  font-weight: semibold;
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

.footer-spacer {
  position: absolute;
  top: calc(-1 * 100vw * 200 / 960);
  margin: 0 -2rem;
  padding: 0;
  width: 100vw;
  aspect-ratio: 960/200;
}

.copyright {
  line-height: 1.75rem;
}

footer {
  position: relative;
  background-color: var(--bg-1);
  color: var(--fg-4);
  margin: calc(8rem + 100vw * (200 / 960)) 0 0; /* 8rem default space, calc space for curve border */
  padding: 2.5rem 2rem;
  font-size: var(--footer-fs);
}
.footer--content {
  margin: 0 auto;
  max-width: var(--content-width);
  line-height: 2rem;
  font-weight: 400;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import EmailIcon from "vue-material-design-icons/Email.vue";
import OpenInNewIcon from "vue-material-design-icons/OpenInNew.vue"

const latestVersion = ref("")

onMounted(() => {
    fetch("https://api.github.com/repos/txuyuan/AquariumInsider-Web/releases/latest")
      .then((resp) => resp.json())
      .then((data) => {
        latestVersion.value = data.tag_name;
      });
})

</script>
