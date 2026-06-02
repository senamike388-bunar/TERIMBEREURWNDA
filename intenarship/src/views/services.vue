<template>
  <section class="bg-gray-100 min-h-screen">

    <!-- HERO -->
    <div
      class="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style="background-image:url('https://i.pinimg.com/736x/f5/81/07/f58107575c7dbdf95abf12688282e9d7.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          Our Services
        </h1>

        <p class="text-xl text-gray-200">
          Explore Rwanda with comfort, adventure and unforgettable experiences.
        </p>
      </div>
    </div>

    <!-- SERVICES -->
    <section class="py-20 px-8 md:px-20">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-green-700">
          Services We Provide
        </h2>

        <p class="text-gray-600 mt-4">
          Everything you need to enjoy Rwanda.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">

        <!-- Tourism -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1200"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Gorilla Tourism
            </h3>

            <p class="text-gray-600">
              Visit Volcanoes National Park and experience Rwanda's famous mountain gorillas.
            </p>
          </div>
        </div>

        <!-- Hotels -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Luxury Hotels
            </h3>

            <p class="text-gray-600">
              Stay in world-class hotels including Kigali Marriott, Serena Hotel and Radisson Blu.
            </p>
          </div>
        </div>

        <!-- Transport -->
        <div class="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200"
            class="h-60 w-full object-cover"
          >

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700 mb-3">
              Transport Services
            </h3>

            <p class="text-gray-600">
              Car rentals, airport pickups, city tours and travel assistance.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- HOTELS -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-green-700">
          Popular Hotels
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-8">

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            Kigali Marriott Hotel
          </h3>
          <p class="text-gray-600">
            Luxury accommodation in Kigali.
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            Serena Hotel
          </h3>
          <p class="text-gray-600">
            Premium comfort and hospitality.
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            Radisson Blu
          </h3>
          <p class="text-gray-600">
            Modern rooms and conference facilities.
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            Lake Kivu Resort
          </h3>
          <p class="text-gray-600">
            Relaxing views near Lake Kivu.
          </p>
        </div>

      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="bg-green-800 text-white py-20 px-8 md:px-20">

      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold">
          Top Attractions
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-8 text-center">

        <div>
          <div class="text-6xl mb-4">🦍</div>
          <h3 class="text-2xl font-bold">Volcanoes Park</h3>
        </div>

        <div>
          <div class="text-6xl mb-4">🏞️</div>
          <h3 class="text-2xl font-bold">Lake Kivu</h3>
        </div>

        <div>
          <div class="text-6xl mb-4">🌳</div>
          <h3 class="text-2xl font-bold">Nyungwe Forest</h3>
        </div>

        <div>
          <div class="text-6xl mb-4">🏙️</div>
          <h3 class="text-2xl font-bold">Kigali City</h3>
        </div>

      </div>
    </section>

    <!-- IMIGONGO DESIGN -->
    <div class="bg-white py-8 flex justify-center">
      <div class="flex gap-3">
        <div class="w-8 h-8 border-4 border-green-700 rotate-45"></div>
        <div class="w-8 h-8 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 border-4 border-green-700 rotate-45"></div>
        <div class="w-8 h-8 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 border-4 border-green-700 rotate-45"></div>
      </div>
    </div>

  </section>
</template>

<script setup>
</script>