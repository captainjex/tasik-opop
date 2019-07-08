<template>
  <div>
    <v-container fluid class="white">
      <v-layout row wrap justify-center class="mt-2">
        <v-flex v-for="(menu, index) in indexMenus" :key="index" xs4 class="text-xs-center my-0 py-0">
          <v-btn
            :class="$style.btnMenu"
            icon
            dark
            large
            :color="menu.color"
            fab
            @click.stop="bottomSheetEnabled = true"
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
          <v-card flat>
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

    <v-bottom-sheet v-model="bottomSheetEnabled">
      <v-layout class="white py-4" justify-center>
        <v-flex shrink class="text-xs-center my-0 py-0">
          <v-btn
            :class="$style.btnMenu"
            outline
            icon
            large
            :color="'#77cbb9'"
            fab
          >
            <v-icon large v-text="'fas fa-tshirt'" />
          </v-btn>
          <p>Fashion</p>
        </v-flex>
      </v-layout>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { indexMenus } from '../constants/menus'

const events = [
  {
    img: 'https://user-images.githubusercontent.com/21119252/60812506-d4a43b80-a1bb-11e9-82f9-aae37f68d592.jpg',
    name: 'Tasik Wedding Festival',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    img: 'https://user-images.githubusercontent.com/21119252/60812899-c0ad0980-a1bc-11e9-86d0-f0721fb5d528.jpg',
    name: 'NGULISIK (Nguriling Kota Tasik)',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    img: 'https://user-images.githubusercontent.com/21119252/60812918-c6a2ea80-a1bc-11e9-963f-bd5d17a2233b.jpg',
    name: 'Kelas Komunikasi Miracle',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    img: 'https://user-images.githubusercontent.com/21119252/60812936-d3274300-a1bc-11e9-88bc-21bd9d79761a.jpg',
    name: 'TOF (Tasik Oktober Festival)',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    img: 'https://user-images.githubusercontent.com/21119252/60812942-d7536080-a1bc-11e9-8f1b-bb3d9b36645c.jpg',
    name: 'Kuliner Pasar Mambo',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  },
  {
    img: 'https://user-images.githubusercontent.com/21119252/60812952-dc181480-a1bc-11e9-8830-22da98bab8ab.jpg',
    name: 'KOLECER (Kota Literasi Cerdas)',
    date: 'Sat, 31 Aug @ 10.00',
    price: 'GRATIS'
  }
]

export default {
  data() {
    return {
      indexMenus,
      bottomSheetEnabled: false,
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
