<template>
  <section class="bg-gray-100 min-h-screen">

    <!-- HERO SECTION -->
    <div
      class="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1600&auto=format&fit=crop');"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Text -->
      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Contact Us
        </h1>

        <p class="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
          We'd love to hear from you. Reach out to us for tourism,
          culture, and travel information about Rwanda.
        </p>
      </div>
    </div>

    <!-- CONTACT SECTION -->
    <div class="py-20 px-8 md:px-20">

      <div class="grid md:grid-cols-2 gap-14">

        <!-- LEFT SIDE -->
        <div>

          <h2 class="text-4xl font-bold text-green-700 mb-6">
            Get In Touch
          </h2>

          <p class="text-gray-600 text-lg leading-8 mb-10">
            Feel free to contact us anytime. We are always ready to help
            visitors explore the beauty and culture of Rwanda.
          </p>

          <!-- CONTACT INFO -->
          <div class="space-y-8">

            <div class="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
              <div class="bg-green-700 text-white p-4 rounded-full">
                📍
              </div>

              <div>
                <h3 class="font-bold text-xl text-gray-800">
                  Address
                </h3>

                <p class="text-gray-600">
                  Kigali, Rwanda
                </p>
              </div>
            </div>

            <div class="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
              <div class="bg-green-700 text-white p-4 rounded-full">
                📞
              </div>

              <div>
                <h3 class="font-bold text-xl text-gray-800">
                  Phone
                </h3>

                <p class="text-gray-600">
                  +250 788 000 000
                </p>
              </div>
            </div>

            <div class="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-md">
              <div class="bg-green-700 text-white p-4 rounded-full">
                ✉️
              </div>

              <div>
                <h3 class="font-bold text-xl text-gray-800">
                  Email
                </h3>

                <p class="text-gray-600">
                  visitrwanda@gmail.com
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- RIGHT SIDE FORM -->
        <div class="bg-white p-10 rounded-3xl shadow-2xl">

          <h2 class="text-3xl font-bold text-green-700 mb-8">
            Send Message
          </h2>

          <form class="space-y-6">

            <!-- NAME -->
            <div>
              <label class="block mb-2 text-gray-700 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <!-- EMAIL -->
            <div>
              <label class="block mb-2 text-gray-700 font-semibold">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <!-- MESSAGE -->
            <div>
              <label class="block mb-2 text-gray-700 font-semibold">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                class="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-700"
              ></textarea>
            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 w-full"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white py-10 text-center">
      <h2 class="text-3xl font-bold mb-3">
        Visit Rwanda
      </h2>

      <p class="text-gray-300">
        Experience Beauty, Culture, and Peace
      </p>
    </footer>

  </section>
</template>

<script setup>
</script>