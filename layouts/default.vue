<template>
  <div>
    <NavBar />
    <div class="body">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.body {
  background-color: var(--bg);
  color: var(--fg);
  padding: 0 5vw;
  margin: 5.5rem auto 5rem; /* Navbar and footer space */
  min-height: 90vh; /* Keep footer out of sight until scrolled*/
  max-width: var(--content-width);
}
@media screen and (max-width: 480px) {
  .body {
    padding: 0 1.125rem;
  }
}
</style>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  head: {
    link: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  },
});
</script>
