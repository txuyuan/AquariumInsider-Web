<template>
  <div class="menu">
    <a
      @click="isOpen = !isOpen"
      href="#"
      class="menu__button material-design-icon--deco"
    >
      <MenuIcon class="menu__icon" />
    </a>

    <div
      class="menu__container"
      :class="{ 'menu__container--shown': isOpen }"
      @click="isOpen = false"
    >
      <div
        class="menu__popout nav__links"
        :class="{ 'menu__popout--shown': isOpen }"
        @click="isOpen = false"
      >
        <CloseIcon class="menu__close" />
        <NavLinks />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "nav.css";
.menu {
  z-index: 10;
}
.menu__button {
  aspect-ratio: 1/1;
  background-color: rgba(var(--bg), 0.75);
  border-radius: 0.5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
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

.menu__container {
  visibility: hidden;
  opacity: 0.3;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 14;
  top: 0;
  left: 0;
  background-color: rgba(var(--bg-rgb), 0.8);
  backdrop-filter: blur(7.5px);

  transition-property: visibility, opacity;
  transition-duration: 75ms;
  transition-timing-function: ease-in-out;
}
.menu__container--shown {
  visibility: visible;
  opacity: 1;
}

.menu__popout {
  flex-direction: column;
  align-items: flex-start;
  width: 15rem;
  height: 100vh;
  position: absolute;
  z-index: 15;
  top: 0;
  left: 0;

  visibility: hidden;
  opacity: 0.3;
  transform: translateX(-80px);
  transition-property: visibility, opacity, transform;
  transition-duration: 125ms;
  transition-timing-function: ease-in-out;

  background-color: var(--bg-1);
  border-right: 1px solid var(--bg-2);
  padding: 1rem;
}
.menu__popout--shown {
  display: flex;

  visibility: visible;
  opacity: 1;
  transform: none;
}
</style>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

export default {
  name: "NavMenu",
  components: {
    MenuIcon,
    CloseIcon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    click(event) {
      let dropdown = document.querySelector(".menu");
      let dropdownBackground = document.querySelector(".menu__container");
      console.log(
        event.target,
        dropdownBackground,
        event.target == dropdownBackground
      );
      if (
        event.target != dropdown &&
        !dropdown.contains(event.target) &&
        event.target != dropdownBackground
      ) {
        this.isOpen = false;
        console.log("ClickToggle");
      }
    },
  },
  mounted() {
    //document.addEventListener("mouseup", this.click);
  },
};
</script>
