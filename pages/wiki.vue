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

    <section class="section">
      <h2 class="section__title">Lorem ipsum</h2>
      <p>There is literally nothing here</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        doloribus dolorem laborum iure animi fuga quod odit illo laboriosam nemo
        consequatur, ipsa tempore aliquid officiis ab impedit non at maiores
        exercitationem quaerat repellendus quisquam reprehenderit expedita. Quam
        maxime vel quidem.
      </p>
    </section>

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
