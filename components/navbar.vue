<template>
  <header
    class="relative top-0 left-0 z-10 flex w-full items-center rounded-b-xl border bg-transparent shadow-inner dark:border-slate-600"
  >
    <div class="container">
      <div class="relative flex items-center justify-between">
        <div class="items-center px-4">
          <NuxtLink
            href="/"
            class="block py-4 text-lg font-bold text-sky-400 dark:text-white"
          >
            Faisal Kasir
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <nav>
            <ul class="flex items-center px-4">
              <!-- Landing Page -->
              <li class="group">
                <a
                  href="/#home"
                  class="mx-6 flex py-1 text-base text-slate-800 transition duration-300 ease-in-out hover:text-sky-400 dark:text-slate-200"
                  >Home</a
                >
              </li>
              <!-- Go App -->
              <li class="group">
                <NuxtLink
                  to="/auth/login"
                  class="mx-2 flex rounded-full bg-sky-400 py-1 px-6 text-base text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg dark:bg-blue-800"
                >
                  Go to App
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div>
            <button
              class="rounded-xl border px-2 py-2 shadow-lg duration-200 hover:bg-sky-400 dark:hover:bg-slate-600"
              @click="toggleColorMode"
            >
              <span
                class="block rotate-[360] transition duration-500 dark:hidden"
              >
                <Icon name="mdi:white-balance-sunny" class="h-6 w-6" />
              </span>
              <span
                class="hidden rotate-[360] transition duration-500 dark:block"
              >
                <Icon name="mdi:weather-night" class="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarLayout",
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.value === "dark" ? "light" : "dark";
    },
  },
};
</script>
