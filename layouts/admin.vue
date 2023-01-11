<template>
  <div>
    <NavbarComponent />
    <main class="flex">
      <SidebarComponent />
      <div class="p-7">
        <slot />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import NavbarComponent from "~/components/navbar.vue";
import SidebarComponent from "~~/components/sidebar.vue";

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
  },

  beforeMount() {
    const colorMode = useColorMode();
    console.log(colorMode.preference);
  },
};
</script>
