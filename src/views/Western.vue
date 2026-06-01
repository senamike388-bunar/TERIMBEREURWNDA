<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image:url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          {{ t('destinations.western.title') }}
        </h1>

        <p class="text-xl md:text-2xl">
          {{ t('destinations.western.heroText') }}
        </p>
      </div>
    </section>

    <!-- IMIGONGO DESIGN -->
    <div class="bg-white py-8">
      <div class="flex justify-center flex-wrap gap-3">
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </div>

    <!-- INTRODUCTION -->
    <section class="bg-white py-20 px-8 md:px-20">
      <div class="max-w-5xl mx-auto text-center">

        <h2 class="text-4xl font-bold text-green-700 mb-6">
          Welcome to Western Province
        </h2>

        <p class="text-lg text-gray-600 leading-8">
          Western Province is one of Rwanda's most scenic destinations.
          It is famous for Lake Kivu, Nyungwe National Park, beautiful
          beaches, forests, wildlife, and adventure tourism.
        </p>

      </div>
    </section>

    <!-- ATTRACTIONS -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Top Attractions
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Lake Kivu
          </h3>

          <p class="text-gray-600">
            One of Africa's most beautiful lakes with beaches,
            islands and water activities.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Nyungwe Forest
          </h3>

          <p class="text-gray-600">
            Home to chimpanzees, monkeys and hundreds of bird species.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Canopy Walkway
          </h3>

          <p class="text-gray-600">
            Walk above the forest and enjoy breathtaking views.
          </p>
        </div>

      </div>

    </section>

    <!-- ACTIVITIES -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Things To Do
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-blue-50 p-8 rounded-3xl shadow-lg">
          🚤 Boat Cruises
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl shadow-lg">
          🏊 Swimming
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl shadow-lg">
          🌳 Canopy Walk
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl shadow-lg">
          🐒 Chimpanzee Tracking
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl shadow-lg">
          🦜 Bird Watching
        </div>

        <div class="bg-blue-50 p-8 rounded-3xl shadow-lg">
          📸 Photography
        </div>

      </div>

    </section>

    <!-- GALLERY -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        {{ t('destinations.western.galleryTitle') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <img
          src="https://i.pinimg.com/1200x/fc/b4/58/fcb4586f461ee0ad9457e47abcbe0049.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/736x/71/e0/37/71e03763736f0c9d0c5941cda29689e9.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/736x/6c/bf/ab/6cbfab17ef317092d8ba62e2d3dca7e5.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

      </div>

    </section>

    <!-- HOTELS -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Popular Hotels
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="bg-gray-50 p-6 rounded-3xl shadow-lg">
          <h3 class="font-bold text-xl mb-3">
            Lake Kivu Serena Hotel
          </h3>
          <p>Luxury lakeside accommodation.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-3xl shadow-lg">
          <h3 class="font-bold text-xl mb-3">
            Cormoran Lodge
          </h3>
          <p>Beautiful views overlooking Lake Kivu.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-3xl shadow-lg">
          <h3 class="font-bold text-xl mb-3">
            Kivu Marina Bay
          </h3>
          <p>Modern comfort near the lake.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-3xl shadow-lg">
          <h3 class="font-bold text-xl mb-3">
            Moriah Hill Resort
          </h3>
          <p>Relaxing accommodation with nature views.</p>
        </div>

      </div>

    </section>

    <!-- MAP -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-green-700">
          Find Western Province
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-10">

        <div class="bg-gray-100 p-8 rounded-3xl shadow-xl">
          <h3 class="text-3xl font-bold text-green-700 mb-6">
            Province Information
          </h3>

          <ul class="space-y-4 text-lg">
            <li>📍 Province: Western Province</li>
            <li>🌊 Famous for Lake Kivu</li>
            <li>🌳 Home of Nyungwe Forest</li>
            <li>🐒 Chimpanzee Tracking</li>
            <li>🏖️ Beaches and Water Activities</li>
          </ul>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Western+Province+Rwanda&output=embed"
            class="w-full h-[450px]"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </section>

    <!-- FOOTER IMIGONGO -->
    <div class="bg-green-800 py-10">
      <div class="flex justify-center gap-4 flex-wrap">
        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-12 h-12 border-4 border-white rotate-45"></div>
        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-12 h-12 border-4 border-white rotate-45"></div>
        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white text-center py-12">

      <h2 class="text-4xl font-bold mb-4">
        {{ t('destinations.western.footerTitle') }}
      </h2>

      <p class="text-gray-300">
        {{ t('destinations.western.footerText') }}
      </p>

    </footer>

  </div>
</template>

<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>