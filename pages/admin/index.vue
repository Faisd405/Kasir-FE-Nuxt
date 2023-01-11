<template>
  <div>
    <h1 class="text-2xl font-semibold">Dashboard OngoingF</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "AdminDashboard",
  data() {
    return {
      navbarOpen: false,
      subMenuOpen: false,
      menuItem: [
        { title: "Home", icon: "mdi:home", link: "/admin" },
        {
          title: "Product",
          icon: "mdi:package-variant-closed",
          link: "/admin/product",
          spacing: true,
        },
        {
          title: "Datamaster",
          icon: "mdi:package-variant-closed",
          subMenu: true,
          submenuItem: [
            { title: "Category", link: "" },
            { title: "Unit", link: "" },
            { title: "Supplier", link: "" },
          ],
        },
        {
          title: "Transaction",
          icon: "mdi:package-variant-closed",
        },
      ],
    };
  },
};
</script>
