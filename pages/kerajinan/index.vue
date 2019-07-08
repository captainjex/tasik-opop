<template>
  <v-container>
    <v-layout row wrap justify-center class="mt-2">
      <v-flex xs4 class="text-xs-center my-0 py-0">
        <v-btn
          :class="$style.btnMenu"
          icon
          dark
          large
          :color="menu.color"
          fab
        >
          <v-icon large v-text="menu.icon" />
        </v-btn>
        <p>{{ menu.name }}</p>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <v-list>
          <v-list-tile v-for="(k, i) in kerajinans" :key="i" :to="`/kerajinan/${k.path}`">
            <v-list-tile-content>
              <v-list-tile-title v-text="k.name" />
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { indexMenus, kerajinans } from '../../constants/menus'
const PAGE_PATH = 'kerajinan'

export default {
  data() {
    return {
      kerajinans
    }
  },
  computed: {
    menu() {
      return indexMenus.find(e => e.path === PAGE_PATH)
    }
  }
}
</script>

<style lang="stylus" module>
.btnMenu
  border-width 2px !important
  border-radius 25%
</style>
