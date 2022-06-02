<template>
  <nav class="nav--external">
    <div class="nav--internal">
      <!-- Nested div to seperate border-bg and content max-w  -->

      <!-- Left bar -->
      <NavSection>
        <Link href="/" class="icon">
          <img width="26" height="26" src="~/assets/favicon.ico" alt="Home" />
          <span>Aquarium&nbsp;Insider</span>
        </Link>
      </NavSection>

      <!-- Right bar -->
      <NavSection>
        <ul class="nav__links showBig">
          <NavLinks />
        </ul>
        <div class="showSmall">
          <NavMenu></NavMenu>
        </div>
      </NavSection>
    </div>
  </nav>
</template>

<style scoped>
@import "nav.css";
.nav__links {
  display: inherit;
  align-items: center;
}

.nav--external {
  position: fixed;
  top: 0;
  z-index: 1;

  background-color: rgba(var(--bg), 0.4);
  backdrop-filter: blur(5px);
  margin: 0;
  width: 100vw;
  border: none;
  user-select: none;
}
.nav--internal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
  max-width: calc(var(--content-width) + 4rem);
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  height: 3rem;
}
</style>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      expanded: false,
    };
  },
};
</script>
