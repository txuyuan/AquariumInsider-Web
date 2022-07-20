<template>
  <nav class="nav--external">
    <div class="nav--internal">
      <!-- Nested div to seperate border-bg and content max-w  -->
      <div class="showSmall">
        <NavMenu></NavMenu>
      </div>

      <div class="icon-container">
        <Link href="/" class="icon">
          <img
            width="20"
            height="20"
            src="/favicon.svg"
            alt=""
            class="icon__image"
          />
          <span>Aquarium&nbsp;Insider</span>
        </Link>
      </div>

      <ul class="nav__links showBig">
        <NavLinks />
      </ul>

      <div>
        <!-- TODO: TOGGLE BASED ON VALUE -->
        <button href="#" class="theme-toggle menu__button" @click="toggleTheme">
          <ThemeSwitcherIcon class="menu__icon theme-switcher" />
        </button>
      </div>
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
  margin: 0;
  padding: 0.75rem 1.5rem;
  height: var(--nav-height);
}

.theme-switcher {
  height: 20px;
  width: 20px;
}
.theme-switcher :deep(svg) {
  height: 22px;
  width: 22px;
}
</style>

<script setup>
import FishIcon from "vue-material-design-icons/Fish.vue";
import ThemeSwitcherIcon from "vue-material-design-icons/ThemeLightDark.vue";

function toggleTheme() {
  const colorMode = useColorMode();
  colorMode.preference = colorMode.preference == "light" ? "dark" : "light";
}
</script>
