<template>
  <div class="container">
      <canvas class="viewport" />
      <gameUI></gameUI>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.viewport {
  /* min-width: 100vw;
  min-height: 100vh; */
  width: 0;
  height: 0;
}
</style>
