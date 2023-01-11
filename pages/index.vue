<template>
  <div>
    <!-- Section Home Start -->
    <section id="home" class="pt-36 pb-32">
      <div class="container mx-auto">
        <div class="flex flex-wrap flex-col-reverse md:flex-row">
          <div class="w-full self-center md:w-1/2 px-4">
            <h1 class="text-sky-600 dark:text-sky-200 text-base lg:text-xl font-semibold">
              Selamat Datang di Aplikasi
              <span
                class="block font-bold text-black dark:text-white text-2xl py-2 lg:pb-4 mt-1 lg:text-4xl"
                >Kasir Faisal</span
              >
            </h1>
            <p class="text-gray-400 dark:text-slate-200">
              Aplikasi
              <span class="text-red-400 font-bold">Kasir Faisal</span> adalah
              aplikasi kasir yang dibuat dengan menggunakan framework
              <span class="text-lime-400 font-bold">Nuxt.js</span> dan
              <span class="text-sky-400 font-bold">Tailwind CSS</span>.
            </p>
            <div class="mt-12 flex justify-center md:justify-start">
              <a
                class="bg-blue-600 text-base text-white font-semibold px-8 py-2 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                href="#"
                >Mulai Aplikasi</a
              >
            </div>
          </div>
          <div class="w-full self-end md:w-1/2 px-4 pb-8">
            <div class="relative mt-10 lg:right-0 lg:mt-0">
              <img
                src="~/assets/img/undraw_shopping.svg"
                alt="Shopping Undraw Illustration"
                class="relative z-10 mx-auto px-2 max-w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section Home End -->

    <!-- Section Feature Start -->
    <!-- Section Feature End -->
    <footer></footer>
  </div>
</template>

<script lang="ts">

definePageMeta({
  layout: "guest",
});

export default {
  name: "Index",
  data() {
    return {
      // ...
    };
  },
  methods: {
    // ...
  },
  mounted() {
    // ...
  },
};
</script>
