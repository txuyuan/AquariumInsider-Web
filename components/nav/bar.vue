<template>
  <nav class="nav--external">
    <div class="nav--internal">
      <!-- Nested div to seperate border-bg and content max-w  -->
      <div class="showSmall">
        <NavMenu></NavMenu>
      </div>

      <div class="icon-container">
        <Link href="/" class="icon">
          <!-- <img width="26" height="26" src="~/assets/favicon.ico" alt="" /> -->
          <FishIcon />
          <span>Aquarium&nbsp;Insider</span>
        </Link>
      </div>

      <ul class="nav__links showBig">
        <NavLinks />
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@import "nav.css";
:deep(*) {
  --ui-fontsize: 15px;
}

.nav__links {
  display: inherit;
  align-items: center;
}

.nav--external {
  position: fixed;
  top: 0;
  z-index: 10;

  background-color: rgba(var(--bg-rgb), 0.8);
  backdrop-filter: blur(7.5px);
  margin: 0;
  width: 100vw;
  border: none;
  user-select: none;
}
.nav--internal {
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  height: 3rem;
}
</style>

<script>
import FishIcon from "vue-material-design-icons/Fish.vue";
export default {
  name: "NavBar",
  components: {
    FishIcon,
  },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>
