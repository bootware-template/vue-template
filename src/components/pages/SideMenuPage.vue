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

    <!-- Responsive: Display md-and-up-->
    <div class="hidden-sm-and-down">

      <v-row justify="center">

        <v-col class="col-md-3">
          <menu-list :routes="routes">
            <template v-slot:top>
              <v-card-title>{{ menuTitle }}</v-card-title>
              <v-divider></v-divider>
            </template>
            <template v-slot:under>
              <v-divider></v-divider>
              <v-list-item class="mt-3" @click="clickOther">Other</v-list-item>
            </template>
          </menu-list>
        </v-col>

        <v-col class="col-md-9">
          <v-fade-transition hide-on-leave>
            <div class="pa-md-3">
              <router-view/>
            </div>
          </v-fade-transition>
        </v-col>

      </v-row>

    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import DropDownListButton from "@/components/molecules/DropDownListButton.vue";
import MenuList from "@/components/molecules/MenuList.vue";

@Component({
  components: {
    MenuList,
    DropDownListButton
  }
})
export default class SideMenuPage extends Vue {
  name = "SideMenuPage";
  menuTitle = 'Menu';
  routes: any[] = [];

  created() {

    this.$router.options.routes?.filter((route: any) => route.name == this.name)
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