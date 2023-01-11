<template>
  <div
    :class="
      'relative h-screen rounded-lg bg-blue-800 p-5 pt-8 duration-300 dark:border-r dark:border-slate-200 dark:bg-slate-700 ' +
      (navbarOpen ? 'w-72' : 'w-20 hover:w-72')
    "
  >
    <Icon
      :name="'mdi:arrow-left'"
      :class="
        'absolute -right-3 top-9 cursor-pointer overflow-hidden rounded-full border border-black bg-white p-1 text-3xl text-sky-600 ' +
        (!navbarOpen ? 'rotate-180 transform' : '')
      "
      @click="toggleNavbar"
    />

    <!-- Menu Items -->
    <ul class="h-full pt-1">
      <perfect-scrollbar class="h-full">
        <template v-for="(menu, index) in menuItem" :key="index">
          <div
            :class="
              (menu.spacing
                ? 'my-4 border border-solid border-white'
                : 'my-2') +
              ' ' +
              (index === 0 ? 'mt-0' : '') +
              ' ' +
              (index === menuItem.length ? 'mb-64' : '')
            "
          ></div>
          <div v-if="menu.link">
            <NuxtLink
              class="text-gray flex cursor-pointer gap-x-4 self-center rounded-md p-2 text-sm hover:bg-slate-200 hover:bg-opacity-60"
              :to="menu.link"
            >
              <span class="float-left block">
                <Icon :name="menu.icon" :class="'text-lg text-white'" />
              </span>
              <span
                :class="'flex-1 text-base font-medium text-white duration-200 '"
              >
                {{ menu.title }}
              </span>
            </NuxtLink>
          </div>
          <div v-else>
            <div
              class="text-gray flex cursor-pointer gap-x-4 self-center rounded-md p-2 text-sm hover:bg-slate-200 hover:bg-opacity-60"
              :to="menu.link"
              @click="toggleSubMenu(index)"
            >
              <span class="float-left block">
                <Icon :name="menu.icon" :class="'text-lg text-white'" />
              </span>
              <span
                :class="'flex-1 text-base font-medium text-white duration-200 '"
              >
                {{ menu.title }}
              </span>

              <!-- SubMenu Items -->
              <span v-if="menu.subMenu">
                <Icon
                  :name="'mdi:chevron-down'"
                  :class="
                    'block text-lg text-white duration-200 ' +
                    (subMenuOpen ? 'rotate-180 transform' : '')
                  "
                />
              </span>
            </div>
            <div v-if="menu.subMenu && menu.subMenuOpen">
              <ul>
                <template
                  v-for="(subMenu, index) in menu.submenuItem"
                  :key="index"
                >
                  <NuxtLink :to="subMenu.link"
                    class="text-gray flex cursor-pointer items-center gap-x-4 rounded-md p-2 ml-8 px-5 text-sm font-semibold text-white hover:bg-slate-200 hover:bg-opacity-60"
                  >
                    {{ subMenu.title }}
                  </NuxtLink>
                </template>
              </ul>
            </div>
          </div>
        </template>
      </perfect-scrollbar>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navbarOpen: false,
      subMenuOpen: false,
      menuItem: [
        { title: "Dashboard", icon: "mdi:home", link: "/admin" },
        {
          title: "Product",
          icon: "mdi:package-variant-closed",
          link: "/admin/product",
          spacing: true,
        },
        {
          title: "Datamaster",
          icon: "mdi:package-variant-closed",
          spacing: true,
          subMenu: true,
          submenuItem: [
            { title: "Category", link: "/admin/datamaster/category" },
            { title: "Unit", link: "/admin/datamaster/unit" },
            { title: "Supplier", link: "/admin/datamaster/supplier" },
          ],
          subMenuOpen: false,
        },
        {
          title: "Transaction",
          icon: "mdi:package-variant-closed",
        },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    toggleSubMenu(index: number) {
      if (this.menuItem[index].subMenuOpen) {
        this.menuItem[index].subMenuOpen = !this.menuItem[index].subMenuOpen;
        return;
      }

      this.menuItem.map((item) => {
        return (item.subMenuOpen = false);
      });

      this.menuItem[index].subMenuOpen = !this.menuItem[index].subMenuOpen;
    },
  },
};
</script>
