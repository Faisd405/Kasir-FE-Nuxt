<template>
  <div>
    <section id="login" class="pt-32 pb-16">
      <div class="container">
        <div
          class="flex h-full flex-wrap self-center rounded-lg border border-sky-400 bg-slate-100 py-6 shadow-lg shadow-slate-400 dark:bg-slate-700 dark:shadow-blue-800"
        >
          <div class="flex justify-center self-center md:w-1/2">
            <img
              src="~/assets/img/undraw_shopping.svg"
              alt="Shopping Undraw Illustration"
              class="w-1/2 rounded-l-lg bg-cover"
            />
          </div>
          <div class="self-center md:w-1/2">
            <div
              class="m-16 rounded-md border border-sky-300 bg-white p-8 shadow-md dark:border-sky-800 dark:bg-slate-800 dark:shadow-blue-800"
            >
              <div>
                <h1 class="text-xl font-semibold text-sky-400">Login</h1>
                <p class="text-sm text-gray-400">
                  Masukan Emain dan Password yang telah terdaftar!
                </p>
              </div>
              <form action="#" method="post">
                <div class="my-6 flex flex-col">
                  <label for="email" class="py-2 text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    class="rounded-md border px-2 py-1"
                  />
                </div>
                <div class="my-6 flex flex-col">
                  <label for="text" class="py-2 text-sm font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="idontknowyourpw123"
                    class="rounded-md border px-2 py-1"
                  />
                </div>
                <div class="mt-12 mb-8 flex justify-center">
                  <button
                    type="submit"
                    class="rounded-full bg-sky-400 px-6 py-2 font-semibold text-white shadow-lg hover:opacity-80"
                  >
                    Login your account
                  </button>
                </div>
              </form>
              <p class="text-sm text-gray-400">
                Don't have an account?
                <a href="#" class="text-sky-400">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
definePageMeta({
  layout: "guest",
});

export default {
  name: "Login",
  data() {
    return {
      // ...
    };
  },
  methods: {
    // ...
  },
};
</script>
