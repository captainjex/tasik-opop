<template>
  <div>
    <v-container fluid class="white">
      <v-layout row wrap justify-center class="mt-2">
        <v-flex v-for="(menu, index) in indexMenus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn
            :class="$style.btnMenu"
            outline
            icon
            large
            :color="menu.color"
            fab
          >
            <v-icon large v-text="menu.icon" />
          </v-btn>
          <p>{{ menu.name }}</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg class="white mt-3 elevation-1">
      <h3 class="headline text-xs-center mb-2">
        Explore Tasik
      </h3>
      <v-layout wrap>
        <v-flex v-for="i in 6" :key="i" xs6>
          <v-card flat>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="150px" />
            <v-card-text class="py-1 px-0">
              <h3 class="subheading">
                Konser Noah
              </h3>
              <div class="caption">
                Sat, 31 Aug @ 10.00
              </div>
              <div class="body-1">
                GRATIS
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
