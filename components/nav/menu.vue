<template>
  <div class="menu" menu-dropdown>
    <a
      @click="isOpen = !isOpen"
      href="#"
      class="menu__button"
      menu-dropdown-button
    >
      <MenuAlt3Icon class="menu__icon" />
    </a>

    <div
      @click="isOpen = false"
      class="menu__dropdown nav__links"
      :class="{ 'menu__dropdown--shown': isOpen }"
    >
      <NavLinks />
    </div>
  </div>
</template>

<style scoped>
@import "nav.css";
.menu {
  position: relative;
  z-index: 10;
}
.menu__button {
  aspect-ratio: 1/1;
  border: 1px solid var(--fg);
  background-color: rgba(var(--bg), 0.75);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.menu__button svg {
  margin: 0 auto;
}
.menu__button:hover {
  background-color: var(--bg-1);
}
.menu__icon {
  height: 20px;
  color: var(--fg);
}

.menu__dropdown {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  width: 70vw;
  position: absolute;
  top: 40px;
  right: 0;

  background-color: var(--bg-1);
  border: 1px solid var(--bg-2);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.menu__dropdown--shown {
  display: flex;
}
</style>

<script>
import { MenuAlt3Icon, TranslateIcon } from "@heroicons/vue/solid";

export default {
  name: "NavMenu",
  components: {
    TranslateIcon,
    MenuAlt3Icon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
