<template>
  <v-layout justify-center>
    <v-flex>
      <!-- <v-img src="/app-logo.png" height="150px" contain /> -->
      <v-card :class="$style.cardMenu" class="mt-4 elevation-1" color="#fef9ff">
        <v-card-text>
          <v-layout row wrap justify-center class="mt-2">
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
        </v-card-text>
      </v-card>
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
.cardMenu
  border-radius 8px
.btnMenu
  border-width 2px !important
  border-radius 25%
</style>
