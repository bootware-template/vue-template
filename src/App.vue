<template>
  <v-app>

    <v-app-bar
        app
        elevation="0"
        class="transparent"
    >
      <div class="text-h4">Template</div>
      <v-spacer></v-spacer>
      <slot name="right"/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer>
      <v-container>
        <v-row>
          <v-col align="center">
            2021 &copy; bootware
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class App extends Vue {
  name = 'App';
}
</script>
