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
          {{ t('services.heroTitle') }}
        </h1>

        <p class="text-xl text-gray-200">
          {{ t('services.heroText') }}
        </p>
      </div>
    </div>

    <!-- SERVICES -->
    <section class="py-20 px-8 md:px-20">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-green-700">
          {{ t('services.title') }}
        </h2>

        <p class="text-gray-600 mt-4">
          {{ t('services.subtitle') }}
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
              {{ t('services.card1Title') }}
            </h3>

            <p class="text-gray-600">
              {{ t('services.card1Text') }}
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
              {{ t('services.card2Title') }}
            </h3>

            <p class="text-gray-600">
              {{ t('services.card2Text') }}
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
              {{ t('services.card3Title') }}
            </h3>

            <p class="text-gray-600">
              {{ t('services.card3Text') }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- HOTELS -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-green-700">
          {{ t('services.hotelsTitle') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-8">

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            {{ t('services.hotel1') }}
          </h3>
          <p class="text-gray-600">
            {{ t('services.hotel1Text') }}
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            {{ t('services.hotel2') }}
          </h3>
          <p class="text-gray-600">
            {{ t('services.hotel2Text') }}
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            {{ t('services.hotel3') }}
          </h3>
          <p class="text-gray-600">
            {{ t('services.hotel3Text') }}
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl p-6 shadow">
          <h3 class="text-xl font-bold text-green-700 mb-2">
            {{ t('services.hotel4') }}
          </h3>
          <p class="text-gray-600">
            {{ t('services.hotel4Text') }}
          </p>
        </div>

      </div>
    </section>

    <!-- DESTINATIONS -->
    <section class="bg-green-800 text-white py-20 px-8 md:px-20">

      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold">
          {{ t('services.attractionsTitle') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-4 gap-8 text-center">

        <div>
          <div class="text-6xl mb-4">🦍</div>
          <h3 class="text-2xl font-bold">{{ t('services.attraction1') }}</h3>
        </div>

        <div>
          <div class="text-6xl mb-4">🏞️</div>
          <h3 class="text-2xl font-bold">{{ t('services.attraction2') }}</h3>
        </div>

        <div>
          <div class="text-6xl mb-4">🌳</div>
          <h3 class="text-2xl font-bold">{{ t('services.attraction3') }}</h3>
        </div>

        <div>
          <div class="text-6xl mb-4">🏙️</div>
          <h3 class="text-2xl font-bold">{{ t('services.attraction4') }}</h3>
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
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>