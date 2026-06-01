<template>
  <section class="min-h-screen bg-gray-100">

    <!-- HERO SECTION -->
    <div
      class="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style="background-image:url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">
          {{ t('gallery.videosTitle') }}
        </h1>

        <p class="text-xl text-gray-200">
          {{ t('gallery.videosText') }}
        </p>
      </div>
    </div>

    <!-- IMIGONGO PATTERN -->
    <div class="bg-white py-8">
      <div class="flex justify-center flex-wrap gap-2">

        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-700 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>

        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-700 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>

        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-700 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>

      </div>
    </div>

    <!-- TITLE -->
    <div class="text-center py-12">
      <h2 class="text-4xl font-bold text-green-700">
        {{ t('gallery.videosHeading') }}
      </h2>

      <p class="text-gray-600 mt-4 text-lg">
        {{ t('gallery.videosHeadingText') }}
      </p>
    </div>

    <!-- VIDEOS -->
    <div class="px-8 md:px-20 pb-20">

      <div class="grid md:grid-cols-2 gap-10">

        <!-- VIDEO 1 -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://youtu.be/bqeVQxjxrg4"
            title="Visit Rwanda"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ t('gallery.video1Title') }}
            </h3>
          </div>
        </div>


        <!-- VIDEO 2 -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://youtu.be/6vr8UsEhJtk"
            title="Rwanda Tourism"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ t('gallery.video2Title') }}
            </h3>
          </div>
        </div>

        <!-- VIDEO 3 -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://youtu.be/QQ7mscbSuLk"
            title="Wildlife in Rwanda"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ t('gallery.video3Title') }}
            </h3>
          </div>
        </div>

        <!-- VIDEO 4 -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            class="w-full h-80"
            src="https://youtu.be/Sjl8jQsEcfw"
            title="Kigali City"
            allowfullscreen
          ></iframe>

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-700">
              {{ t('gallery.video4Title') }}
            </h3>
          </div>
        </div>

      </div>

    </div>

    <!-- LARGE IMIGONGO DESIGN -->
    <div class="bg-green-800 py-12">

      <div class="flex justify-center flex-wrap gap-4">

        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-12 h-12 border-4 border-white rotate-45"></div>
        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-12 h-12 border-4 border-white rotate-45"></div>
        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>
        <div class="w-12 h-12 border-4 border-white rotate-45"></div>
        <div class="w-12 h-12 border-4 border-yellow-400 rounded-full"></div>

      </div>

    </div>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white text-center py-10">
      <h2 class="text-3xl font-bold mb-3">
        {{ t('gallery.footerTitle') }}
      </h2>

      <p class="text-gray-300">
        {{ t('gallery.footerText') }}
      </p>
    </footer>

  </section>
</template>

<script setup>
import { useI18n } from '../i18n.js'
const { t } = useI18n()
</script>