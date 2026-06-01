<template>
  <section class="bg-gray-100 min-h-screen">

    <!-- HERO SECTION -->
    <div
      class="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style="background-image: url('https://i.pinimg.com/736x/ec/f8/57/ecf8577dae33ed28d1fcad325f0b6056.jpg');"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Text -->
      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          {{ t('about.heroTitle') }}
        </h1>

        <p class="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
          {{ t('about.heroText') }}
        </p>
      </div>
    </div>

    <!-- ABOUT CONTENT -->
    <div class="py-20 px-8 md:px-20">

      <div class="grid md:grid-cols-2 gap-14 items-center">

        <!-- IMAGE -->
        <div>
          <img
            src="https://i.pinimg.com/1200x/e9/22/a7/e922a7eca956f85e96f115adc9d9b3d1.jpg"
            alt="Rwanda Landscape"
            class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

        <!-- TEXT -->
        <div>
          <h2 class="text-4xl font-bold text-green-700 mb-6">
            {{ t('about.sectionTitle') }}
          </h2>

          <p class="text-gray-700 text-lg leading-9 mb-6">
            {{ t('about.paragraph1') }}
          </p>

          <p class="text-gray-700 text-lg leading-9 mb-6">
            {{ t('about.paragraph2') }}
          </p>

          <p class="text-gray-700 text-lg leading-9">
            {{ t('about.paragraph3') }}
          </p>
        </div>

      </div>
    </div>

    <!-- VALUES SECTION -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-green-700 mb-4">
          {{ t('about.valuesTitle') }}
        </h2>

        <p class="text-gray-600 text-lg">
          {{ t('about.valuesText') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-10">

        <!-- CARD 1 -->
        <div class="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
          <div class="text-green-700 text-5xl mb-6">
            🌍
          </div>

          <h3 class="text-2xl font-bold mb-4">
            {{ t('about.card1Title') }}
          </h3>

          <p class="text-gray-600 leading-8">
            {{ t('about.card1Text') }}
          </p>
        </div>

        <!-- CARD 2 -->
        <div class="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
          <div class="text-green-700 text-5xl mb-6">
            🏙️
          </div>

          <h3 class="text-2xl font-bold mb-4">
            {{ t('about.card2Title') }}
          </h3>

          <p class="text-gray-600 leading-8">
            {{ t('about.card2Text') }}
          </p>
        </div>

        <!-- CARD 3 -->
        <div class="bg-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
          <div class="text-green-700 text-5xl mb-6">
            🚀
          </div>

          <h3 class="text-2xl font-bold mb-4">
            {{ t('about.card3Title') }}
          </h3>

          <p class="text-gray-600 leading-8">
            {{ t('about.card3Text') }}
          </p>
        </div>

      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white py-10 text-center">
      <h2 class="text-3xl font-bold mb-3">
        {{ t('about.footerTitle') }}
      </h2>

      <p class="text-gray-300">
        {{ t('about.footerText') }}
      </p>
    </footer>

  </section>
</template>

<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>