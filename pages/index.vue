<template>
  <v-layout align-center justify-center>
    <v-flex>
      <div class="primary--text text-xs-center">
        <div class="display-1">
          One Place
        </div>
        <div class="display-1">
          One Product
        </div>
        <div class="secondary--text headline">
          Kota Tasikmalaya
        </div>
      </div>

      <v-layout row wrap justify-center class="mt-4">
        <v-flex v-for="(menu, index) in indexMenus" :key="index" xs6 class="text-xs-center my-0 py-0">
          <v-btn icon large dark :color="menu.color" fab>
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
