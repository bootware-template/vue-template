<template>
  <div class="pa-md-3">
    <v-card rounded elevation="0">
      <slot name="top"/>
      <v-list>
        <v-list-item
            v-for="route in routes"
            class="mb-3"
            color="secondary"
            link
            :to="route.path"
            :key="route.name"
        >
          {{ route.name }}
        </v-list-item>
        <slot name="under"/>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import DefaultVue from "vue";

@Component
export default class SideMenuList extends Vue {
  name = "SideMenuList";
  @Prop({default: []}) routes!: any[];
}

DefaultVue.component(SideMenuList.name, SideMenuList);
</script>

<style scoped>

</style>