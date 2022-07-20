<template>
  <LayoutDefault>
    <div class="content" :class="{ 'content--shown': dropdown }">
      <div class="content__header">
        <!-- Page title & Chevron -->
        <div class="content__title" @click="dropdownActivate">
          <slot name="title"></slot>
          <ChevronRightIcon class="content__drop-icon"></ChevronRightIcon>
        </div>

        <!-- Content chapters -->
        <nav class="content__links">
          <ul>
            <slot name="links"></slot>
          </ul>
        </nav>
      </div>

      <div class="content__spacer"></div>

      <main class="content__content">
        <!-- Main page content -->
        <slot></slot>
      </main>
    </div>
  </LayoutDefault>
</template>

<style scoped>
:deep(a) {
  color: var(--fg);
}

.content__header {
  display: block;
  z-index: 5;
  white-space: nowrap;

  --content-height: 2.5rem;
}
.content__title {
  height: var(--content-height);
}
.content__drop-icon {
  transition: transform 75ms ease-in-out;
  display: flex;
  align-items: center;
}
.content__drop-icon--active {
  transform: rotate(90deg);
}

.content__links > ul {
  list-style: none;
  white-space: nowrap;
  padding: 0;
}
.content__links > ul :deep(ul) {
  list-style: none;
  margin-left: 0.5rem;
}

/* Mobile configuration */
@media screen and (max-width: 896px) {
  .content__header {
    position: fixed;
    top: calc(var(--nav-height) + 1.5rem);
    height: fit-content;
    max-height: var(--content-height);
    overflow-y: hidden;
    width: calc(100vw - 3.75rem);
    padding: 0 2rem;
    margin: 0 -2rem;
    transition: max-height 175ms ease-in-out;

    border-bottom: 1px solid var(--bg-2);
    background-color: rgba(var(--bg-rgb), 0.8);
    backdrop-filter: blur(7.5px);
  }
  .content--shown .content__header {
    max-height: 80vh;
  }
  .content__title {
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    flex-direction: row;
    justify-content: flex-start /* Push chevron to end */;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    user-select: none;
  }
  .content__drop-icon {
    transition: transform 75ms ease-in-out;
    transform-origin: center;
  }
  .content--shown .content__drop-icon {
    transform: rotate(90deg);
  }
  :deep(.content__title h2) {
    margin-block: 0.625rem;
    font-weight: 500;
    font-size: 16px;
  }
  .content__links {
    margin: 0.5rem 0;
    font-size: 14px;
  }
  .content__spacer {
    height: 1rem;
  }
}
/* Desktop configuration */
@media screen and (min-width: 896px) {
  .content {
    display: flex;
    flex-direction: row;
  }
  .content__header {
    width: fit-content;
    margin-right: 4rem;
    position: -webkit-sticky;
    position: sticky;
    top: calc(var(--nav-height) + 1.5rem);
    align-self: flex-start;
  }
  :deep(.content__title h2) {
    margin-block: 0.75rem;
  }
  .content__drop-icon {
    display: none;
  }
}

.content__content {
  flex-grow: 5;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import LayoutDefault from "~/layouts/default.vue";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight.vue";

const dropdown = ref(false);

function dropdownActivate() {
  setTimeout(() => {
    dropdown.value = !dropdown.value;
  }, 1);
}
function linkClick() {
  dropdown.value = false;
}
function backgroundClick(event) {
  const header = document.querySelector(".content__header");
  if (!header.contains(event.target)) {
    dropdown.value = false;
  }
}
onMounted(() => {
  let contentLinks = document.querySelectorAll(".content__links a");

  for (var i = 0; i < contentLinks.length; i++) {
    let link = contentLinks[i];
    link.addEventListener("click", linkClick);
  }
  document.addEventListener("click", backgroundClick);
});
</script>
