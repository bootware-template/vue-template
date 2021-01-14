<template>
  <div class="mt-md-8">

    <!-- Responsive: Display md-and-up-->
    <div class="hidden-md-and-up mx-5">
      <drop-down-list-button :routes="routes">
        <template v-slot:under>
          <v-divider></v-divider>
          <v-list-item @click="clickOther">Other</v-list-item>
        </template>
      </drop-down-list-button>

      <v-fade-transition hide-on-leave>
        <router-view/>
      </v-fade-transition>
    </div>

    <v-container>
      <v-row class="hidden-sm-and-down" justify="center">

        <!-- Responsive: Display md-and-up-->
        <v-col class="col-md-3">
          <div class="pa-md-3">
            <v-card rounded elevation="0">
              <v-card-title>{{ menuTitle }}</v-card-title>
              <v-divider></v-divider>
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
                <v-divider></v-divider>
                <v-list-item class="mt-3" @click="clickOther">Other</v-list-item>
              </v-list>
            </v-card>
          </div>
        </v-col>

        <v-col class="col-md-9">
          <v-fade-transition hide-on-leave>
            <div class="pa-md-3">
              <router-view/>
            </div>
          </v-fade-transition>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import DropDownListButton from "@/components/molecules/DropDownListButton.vue";

@Component({
  components: {
    DropDownListButton
  }
})
export default class SideMenuPage extends Vue {
  name = "SideMenuPage";
  menuTitle = 'Menu';
  routes: any[] = [];

  created() {
    this.$router.options.routes
        .filter((route: any) => route.name == this.name)
        .flatMap((route: any) => route.children)
        .forEach((route: any) => {
          this.routes.push({
            name: route.name,
            path: route.path
          });
        });
  }

  clickOther(): void {
    alert("other!");
  }
}
</script>

<style scoped>

</style>