<template>
  <div class="footer--external">
    <div class="footer--internal">
      Get in touch at
      <Link href="mailto:contactus@aquariuminsider.org"
        >contactus@aquariuminsider.org</Link
      >

      <br />

      © 2022 Aquarium Insider. All rights reserved
    </div>
  </div>
</template>

<style scoped>
.footer--external {
  position: sticky;
  background-color: var(--bg-1);
  margin: 8rem 0 0;
  padding: 3rem 2.5rem 4rem 2.5rem;
  font-size: 14px;
}
.footer--internal {
  margin: 0 auto;
  max-width: var(--content-width);
  line-height: 2rem;
  font-weight: 300;
}
</style>
