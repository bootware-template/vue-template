<template>
  <v-menu>
    <template v-slot:activator="{ on: menu, attrs }">
      <v-btn
          class="mt-5 mb-3"
          tile
          outlined
          block
          v-bind="attrs"
          v-on="{ ...menu }">
        Menu
      </v-btn>
    </template>
    <v-list>
      <slot name="top"/>
      <v-list-item
          v-for="route in routes"
          color="secondary"
          link
          :to="route.path"
          :key="route.name"
      >
        {{ route.name }}
      </v-list-item>
      <slot name="under"/>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import DefaultVue from 'vue';

@Component
export default class DropDownListButton extends Vue {
  name = "DropDownListButton";
  @Prop({default: []}) routes: any[];
}

DefaultVue.component(DropDownListButton.name, DropDownListButton);
</script>

<style scoped>

</style>