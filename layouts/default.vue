<template>
  <div>
    <NavBar />
    <hr class="navbar-space" />
    <div class="body">
      <slot />
    </div>
    <hr class="footer-space" />
  </div>
</template>

<style scoped>
.navbar-space {
  height: 5.5rem;
}
.footer-space {
  height: 15rem;
}
.body {
  background-color: var(--bg);
  color: var(--fg);
  padding: 0 5vw;
  margin: 0 auto;
  min-height: 90vh; /* Keep footer out of sight until scrolled*/
  max-width: var(--content-width);
}
@media screen and (max-width: 480px) {
  .body {
    padding: 0 1.125rem;
  }
}
</style>
