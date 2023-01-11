<template>
    <div>
        <NavbarComponent />
        <main>
            <slot />
        </main>
    </div>
</template>

<script lang="ts">

import NavbarComponent from "~/components/navbar.vue";

export default {
    components: {
        NavbarComponent,
    },
};
</script>