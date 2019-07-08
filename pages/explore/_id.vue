<template>
  <v-container>
    <div class="headline font-weight-medium mb-3 primary--text text--darken-1" v-text="eventData.name" />
    <v-card flat>
      <v-img :src="eventData.img" height="300px" />
      <v-card-text class="py-1 px-0">
        <!-- <h3 class="subheading" v-text="event.name" /> -->
        <!-- <div class="caption" v-text="event.date" />
              <div class="body-1" v-text="event.price" /> -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { events } from '../../constants/menus'

export default {
  computed: {
    eventData() {
      const { id } = this.$route.params
      return events.find(e => e.id === parseInt(id))
    }
  }
}
</script>
