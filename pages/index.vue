<template>
  <div>
    <v-container fluid class="white elevation-2">
      <v-layout row wrap justify-center class="mt-2">
        <v-flex v-for="(menu, index) in indexMenus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn
            :class="$style.btnMenu"
            icon
            dark
            large
            :color="menu.color"
            fab
            :to="`/kerajinan`"
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
        <v-flex v-for="(event, i) in events" :key="i" xs6>
          <v-card style="cursor: pointer;" flat @click="$router.push(`/explore/${event.id}`)">
            <v-img :src="event.img" height="150px" />
            <v-card-text class="py-1 px-0">
              <h3 class="subheading" v-text="event.name" />
              <!-- <div class="caption" v-text="event.date" />
              <div class="body-1" v-text="event.price" /> -->
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { indexMenus, events } from '../constants/menus'

export default {
  data() {
    return {
      indexMenus,
      events
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
