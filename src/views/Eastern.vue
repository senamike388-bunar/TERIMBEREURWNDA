<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- HERO -->
    <section
      class="relative h-screen flex items-center justify-center bg-cover bg-center"
      style="background-image:url('https://i.pinimg.com/1200x/29/f4/61/29f461d366254d4be331f02244f306fa.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          {{ t('destinations.eastern.title') }}
        </h1>

        <p class="text-xl md:text-2xl text-gray-200">
          {{ t('destinations.eastern.heroText') }}
        </p>
      </div>
    </section>

    <!-- IMIGONGO -->
    <div class="bg-white py-8">
      <div class="flex justify-center flex-wrap gap-3">
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-700 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-700 rounded-full"></div>
      </div>
    </div>

    <!-- INTRO -->
    <section class="py-20 px-8 md:px-20 bg-white">

      <div class="max-w-5xl mx-auto text-center">

        <h2 class="text-4xl font-bold text-green-700 mb-6">
          {{ t('destinations.eastern.welcomeTitle') }}
        </h2>

        <p class="text-lg text-gray-600 leading-8">
          {{ t('destinations.eastern.welcomeText') }}
        </p>

      </div>

    </section>

    <!-- AKAGERA -->
    <section class="py-20 px-8 md:px-20">

      <div class="grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://i.pinimg.com/1200x/68/9d/b4/689db485910d312bf791388306a37936.jpg"
          class="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
          alt="Akagera"
        >

        <div>

          <h2 class="text-4xl font-bold text-green-700 mb-6">
            Akagera National Park
          </h2>

          <p class="text-lg text-gray-600 leading-8 mb-6">
            Akagera National Park is Rwanda's largest protected wildlife
            area and home to the Big Five.
          </p>

          <ul class="space-y-3 text-lg">
            <li>🦁 Lions</li>
            <li>🐘 Elephants</li>
            <li>🦏 Rhinoceros</li>
            <li>🦒 Giraffes</li>
            <li>🦓 Zebras</li>
            <li>🐊 Crocodiles</li>
          </ul>

        </div>

      </div>

    </section>

    <!-- ATTRACTIONS -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        {{ t('destinations.common.topAttractions') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-gray-50 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Akagera National Park
          </h3>

          <p class="text-gray-600">
            Rwanda's famous wildlife reserve and safari destination.
          </p>
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Lake Ihema
          </h3>

          <p class="text-gray-600">
            Beautiful lake perfect for boat trips and bird watching.
          </p>
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Rwamagana
          </h3>

          <p class="text-gray-600">
            The capital city of Eastern Province.
          </p>
        </div>

      </div>

    </section>

    <!-- WILDLIFE GALLERY -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        {{ t('destinations.eastern.galleryTitle') }}
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <img
          src="https://i.pinimg.com/1200x/72/7f/96/727f967fd40823db4cff575a46704bfe.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/736x/2d/a0/a4/2da0a4298c8449bb2c9797d7f5a2bf46.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/736x/e7/bd/96/e7bd964a413f07d13104cec4b6a66db8.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

      </div>

    </section>

    <!-- LOCATION -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-green-700 mb-4">
          {{ t('destinations.eastern.findTitle') }}
        </h2>

        <p class="text-gray-600 text-lg">
          {{ t('destinations.eastern.findText') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">

        <div class="bg-gray-100 p-8 rounded-3xl shadow-xl">

          <h3 class="text-3xl font-bold text-green-700 mb-6">
            Location Information
          </h3>

          <ul class="space-y-4 text-lg text-gray-700">
            <li>📍 Province: Eastern Province</li>
            <li>🏙️ Capital: Rwamagana</li>
            <li>🌍 Country: Rwanda</li>
            <li>🦁 Main Attraction: Akagera National Park</li>
            <li>🚗 About 1 Hour From Kigali</li>
          </ul>

        </div>

        <div class="overflow-hidden rounded-3xl shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=Eastern+Province+Rwanda&output=embed"
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
        {{ t('destinations.eastern.footerTitle') }}
      </h2>

      <p class="text-gray-300">
        {{ t('destinations.eastern.footerText') }}
      </p>

    </footer>

  </div>
</template>

<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>