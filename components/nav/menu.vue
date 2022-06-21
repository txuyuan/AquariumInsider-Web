<template>
  <div class="menu" menu-dropdown>
    <a @click="isOpen = !isOpen" href="#" class="menu__button">
      <MenuAlt2Icon class="menu__icon" />
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
  /* display: none; */
  flex-direction: column;
  align-items: flex-start;
  width: 15rem;
  position: absolute;
  top: 40px;
  left: 0;

  visibility: hidden;
  opacity: 0.3;
  transform: translateY(-20px);
  transition-property: visibility, opacity, transform;
  transition-duration: 75ms;
  transition-timing-function: ease-in-out;

  background-color: var(--bg-1);
  border: 1px solid var(--bg-2);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.menu__dropdown--shown {
  display: flex;

  visibility: visible;
  opacity: 1;
  transform: none;
}
</style>

<script>
import { MenuAlt2Icon } from "@heroicons/vue/solid";

export default {
  name: "NavMenu",
  components: {
    MenuAlt2Icon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    click(event) {
      let dropdown = document.querySelector(".menu__dropdown");
      if (dropdown != event.target && !dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("mouseup", this.click);
  },
};
</script>
