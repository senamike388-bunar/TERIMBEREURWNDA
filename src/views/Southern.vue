<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- HERO -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image:url('https://i.pinimg.com/736x/80/cb/eb/80cbeb7babdc97d17728c17be4cfe099.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Southern Province
        </h1>

        <p class="text-xl md:text-2xl">
          The Cultural Heart of Rwanda
        </p>
      </div>
    </section>

    <!-- IMIGONGO -->
    <div class="bg-white py-8">
      <div class="flex justify-center gap-3 flex-wrap">
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-green-700 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>
      </div>
    </div>

    <!-- INTRO -->
    <section class="py-20 px-8 md:px-20 bg-white">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-green-700 mb-6">
          Welcome to Southern Province
        </h2>

        <p class="text-lg text-gray-600 leading-8">
          Southern Province is famous for Rwanda's royal history,
          cultural heritage, museums, and educational institutions.
        </p>
      </div>
    </section>

    <!-- ATTRACTIONS -->
    <section class="py-20 px-8 md:px-20">
      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Top Attractions
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            King's Palace Museum
          </h3>
          <p>
            Discover Rwanda's royal history in Nyanza.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Ethnographic Museum
          </h3>
          <p>
            Explore Rwanda's culture and traditions.
          </p>
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Huye City
          </h3>
          <p>
            Educational and cultural center of Rwanda.
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

        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg">
          🏛️ Museum Tours
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg">
          💃 Traditional Dance
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg">
          📸 Photography
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg">
          🍲 Local Food
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg">
          👑 Royal Heritage Tours
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-lg">
          🌄 Nature Exploration
        </div>

      </div>
    </section>

    <!-- MAP -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Find Southern Province
      </h2>

      <div class="rounded-3xl overflow-hidden shadow-2xl">
        <iframe
          src="https://www.google.com/maps?q=Huye,Rwanda&output=embed"
          class="w-full h-[500px]"
        ></iframe>
      </div>

    </section>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white text-center py-12">
      <h2 class="text-4xl font-bold mb-4">
        Visit Southern Province
      </h2>

      <p>
        Discover Rwanda's Rich Cultural Heritage
      </p>
    </footer>

  </div>
</template>

<script setup>
</script>