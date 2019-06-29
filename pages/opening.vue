<template>
  <v-layout
    column
    fill-height
    justify-center
    align-center
  >
    <v-flex grow />
    <v-flex shrink>
      <v-card flat color="transparent" class="text-xs-center primary--text">
        <div class="display-2">
          One Place
        </div>
        <div class="display-2">
          One Product
        </div>
        <div class="headline secondary--text">
          Kota Tasikmalaya
        </div>
        <v-img
          src="https://freedesignfile.com/upload/2013/03/Colorful-tree-5.jpg"
          class="grey lighten-2 my-2"
        />
        <v-btn color="#3B5998" depressed block dark>
          <v-icon left>
            fab fa-facebook-square
          </v-icon>
          Sign in with Facebook
        </v-btn>
        <v-btn color="black" block outline>
          <v-icon left>
            fab fa-google-plus-g
          </v-icon>
          Sign in with Google
        </v-btn>
      </v-card>
    </v-flex>
    <v-flex grow />
    <v-flex shrink>
      <v-btn flat>
        Belum punya akun
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  components: {
  }
}
</script>
