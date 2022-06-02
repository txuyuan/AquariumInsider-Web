<template>
  <div class="nav-menu nav__links">
    <NavLinks />
  </div>
</template>

<style>
.nav-menu {
  min-width: max(40%, 15rem);
  width: fit-content;
  padding: 1rem;
  margin: 1rem 0;

  border-radius: 0.5rem;
  background-color: var(--bg);
  filter: drop-shadow(0 2px 2px rgba(var(--fg-3), 0.3));
}
</style>
