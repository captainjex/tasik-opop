<template>
  <v-container>
    <v-layout wrap>
      <v-flex v-for="(item, i) in kerajinan.items" :key="i" xs12>
        <v-card class="mt-3">
          <v-layout>
            <v-flex xs5>
              <v-img
                :src="item.img"
                height="125px"
                contain
              />
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                  <div class="headline" v-text="item.name" />
                  <div>Foster the People</div>
                  <div>(2014)</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider light />
          <v-card-actions class="pa-3">
            Rate this album
            <v-spacer />
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
            <v-icon>star_border</v-icon>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { kerajinans } from '../../constants/menus'

export default {
  computed: {
    kerajinan() {
      const { path } = this.$route.params
      return kerajinans.find(k => k.path === path)
    }
  }
}
</script>
