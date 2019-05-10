<template>
  <div class="container">
    <header-view ></header-view>
    <router-view></router-view>
    <footer-view ></footer-view>
  </div>
</template>

<script>
import headerview from '@/pages/commonPages/header.vue'
import footerview from '@/pages/commonPages/footer.vue'
export default {
  components: {
    'header-view': headerview,
    'footer-view': footerview
  },

  mounted: function () {
    // this.$router.push({name:'index'})
  }
}
</script>

<style scoped>

</style>
