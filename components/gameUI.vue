<template>
  <div class="game-ui">
      <movable class="testmove" posTop="444" :grid="20">
        <span>Inventory</span>
        <div class="inventory">
          <img src="~/assets/sprites/Legendary_sword.png" />
          <img src="~/assets/sprites/Allergy_potion.png" />
        </div>
      </movable>
  </div>
</template>

<script>
export default {
  name: 'gameUI',
  components: { },
  data () {
    return {    }
  },
  methods: {
  }
}
</script>

<style scoped>
    .game-ui {
        width: 100vw;
        height: 100vh;
    }
      .testmove {
        display:block;
        position: absolute;
        top: 0;
        height: 200px;
        width: 340px;
        margin: 200px;
        background: #333;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .inventory {
        margin-top: 20px;
        display: flex;
        gap: 20px;
      }
      img {
        border: 1px solid white;
      }
    
</style>
