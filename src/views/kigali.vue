<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image:url('https://i.pinimg.com/736x/41/c0/bc/41c0bca2f51420c6d4e983b168c60272.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          {{ t('destinations.kigali.title') }}
        </h1>

        <p class="text-xl md:text-2xl text-gray-200">
          {{ t('destinations.kigali.heroText') }}
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

    <!-- INTRO -->
    <section class="py-20 px-8 md:px-20 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-green-700 mb-6">
          {{ t('destinations.kigali.welcomeTitle') }}
        </h2>

        <p class="text-lg text-gray-600 leading-8">
          {{ t('destinations.kigali.welcomeText') }}
        </p>
      </div>
    </section>

    <!-- ATTRACTIONS -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        {{ t('destinations.common.topAttractions') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Kigali Convention Centre
          </h3>
          <p class="text-gray-600">
            Rwanda's iconic conference and event destination.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Kigali Genocide Memorial
          </h3>
          <p class="text-gray-600">
            A place of remembrance and learning about Rwanda's history.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Kimironko Market
          </h3>
          <p class="text-gray-600">
            One of the busiest markets in Kigali with local products.
          </p>
        </div>

      </div>
    </section>

    <!-- GALLERY -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        {{ t('destinations.kigali.galleryTitle') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <img
          src="https://i.pinimg.com/736x/87/61/e7/8761e78a47397c2728a4761b25198b09.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/736x/83/7d/88/837d88a81780eb71d9fabe2cd1e8c02b.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/1200x/b1/fb/82/b1fb82721bd63b8e22f6ee05cf66f30f.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

      </div>

    </section>

    <!-- HOTELS -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        {{ t('destinations.kigali.hotelsTitle') }}
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="bg-white p-6 rounded-3xl shadow-xl">
          <h3 class="font-bold text-xl mb-3">Kigali Marriott Hotel</h3>
          <p>Luxury accommodation in the city center.</p>
        </div>

        <div class="bg-white p-6 rounded-3xl shadow-xl">
          <h3 class="font-bold text-xl mb-3">Radisson Blu</h3>
          <p>Modern hotel near Kigali Convention Centre.</p>
        </div>

        <div class="bg-white p-6 rounded-3xl shadow-xl">
          <h3 class="font-bold text-xl mb-3">Serena Hotel</h3>
          <p>Premium hospitality and conference facilities.</p>
        </div>

        <div class="bg-white p-6 rounded-3xl shadow-xl">
          <h3 class="font-bold text-xl mb-3">Park Inn</h3>
          <p>Comfortable and modern accommodation.</p>
        </div>

      </div>

    </section>

    <!-- MAP -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-green-700">
          {{ t('destinations.kigali.findTitle') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-10">

        <div class="bg-gray-100 p-8 rounded-3xl shadow-xl">
          <h3 class="text-3xl font-bold text-green-700 mb-6">
            {{ t('destinations.kigali.info.title') }}
          </h3>

          <ul class="space-y-4 text-lg">
            <li>📍 {{ t('destinations.kigali.info.capital') }}</li>
            <li>🏙️ {{ t('destinations.kigali.info.infrastructure') }}</li>
            <li>✈️ {{ t('destinations.kigali.info.airport') }}</li>
            <li>🌍 {{ t('destinations.kigali.info.hub') }}</li>
            <li>🚗 {{ t('destinations.kigali.info.connected') }}</li>
          </ul>
        </div>

        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
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
        {{ t('destinations.kigali.footerTitle') }}
      </h2>

      <p class="text-gray-300">
        {{ t('destinations.kigali.footerText') }}
      </p>
    </footer>

  </div>
</template>

<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>