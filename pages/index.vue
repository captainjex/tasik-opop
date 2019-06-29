<template>
  <v-layout align-center justify-center>
    <v-flex>
      <v-img src="/app-logo.png" height="200px" contain />

      <v-layout row wrap justify-center class="mt-4">
        <v-flex v-for="(menu, index) in indexMenus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn
            :class="$style.btnMenu"
            outline
            icon
            large
            dark
            :color="menu.color"
            fab
          >
            <v-icon large v-text="menu.icon" />
          </v-btn>
          <p>{{ menu.name }}</p>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { indexMenus } from '../constants/menus'
export default {
  data() {
    return {
      indexMenus
    }
  }
}
</script>

<style lang="stylus" module>
.btnMenu
  border-width 2px !important
</style>
