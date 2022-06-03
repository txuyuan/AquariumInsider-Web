<template>
  <div>
    <NavBar />
    <div class="body">
      <div class="error">
        <h1 class="error__status">{{ error.statusCode }}</h1>
        <h2 class="error__message">{{ error.message }}</h2>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.error {
  text-align: center;
  margin-top: 20vh;
}
.error__status {
  padding-bottom: 3rem;
  font-size: 108px;
}

.body {
  background-color: var(--bg);
  color: var(--fg);
  padding: 0 1rem;
  margin: 5rem auto 15rem;
  min-height: 80vh; /* Keep footer out of sight until scrolled*/
  max-width: var(--content-width);
}
</style>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
