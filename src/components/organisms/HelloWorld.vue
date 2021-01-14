<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ hello.getMessage() }}
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import Hello from "@/modules/hello";

@Component
export default class HelloWorld extends Vue {
  name = 'HelloWorld';
  hello: Hello = new Hello('Vue Template');
}
</script>
