<template>
  <main>
    <h1>Wiki</h1>

    <div class="content-page">
      <h2>Pages</h2>
      <li>
        <Link to="/wiki/">Lorem ipsum</Link>
      </li>
      <li>
        <Link to="/wiki/">Dolor sit</Link>
      </li>
      <li>
        <Link to="/wiki/">Amet consectetur</Link>
      </li>
      <li>
        <Link to="/wiki/">Adipisicing elit</Link>
      </li>
    </div>

    <NuxtChild />
  </main>
</template>

<style>
@import "~/assets/css/document.css";
</style>

<script>
export default {
  head() {
    return {
      title: "Wiki",
    };
  },
};
</script>
