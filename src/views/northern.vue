<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- HERO SECTION -->
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center"
      style="background-image:url('https://i.pinimg.com/736x/7f/c1/f1/7fc1f1e347136dae5de6d0813bd65ab4.jpg')"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Northern Province
        </h1>

        <p class="text-xl md:text-2xl">
          Home of Mountain Gorillas and Volcanoes
        </p>
      </div>
    </section>

    <!-- IMIGONGO -->
    <div class="bg-white py-8">
      <div class="flex justify-center flex-wrap gap-3">
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div class="w-8 h-8 bg-yellow-400 rotate-45"></div>
        <div class="w-8 h-8 bg-green-700 rotate-45"></div>
        <div class="w-8 h-8 bg-yellow-400 rounded-full"></div>
      </div>
    </div>

    <!-- INTRO -->
    <section class="bg-white py-20 px-8 md:px-20">
      <div class="max-w-5xl mx-auto text-center">

        <h2 class="text-4xl font-bold text-green-700 mb-6">
          Welcome to Northern Province
        </h2>

        <p class="text-lg text-gray-600 leading-8">
          Northern Province is one of Rwanda's most famous tourism
          destinations. It is home to Volcanoes National Park,
          mountain gorillas, beautiful lakes, volcanic mountains,
          and breathtaking scenery.
        </p>

      </div>
    </section>

    <!-- VOLCANOES PARK -->
    <section class="py-20 px-8 md:px-20">

      <div class="grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://i.pinimg.com/736x/c1/66/12/c1661233858938875fc7782f8be5cfc2.jpg"
          class="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
        >

        <div>

          <h2 class="text-4xl font-bold text-green-700 mb-6">
            Volcanoes National Park
          </h2>

          <p class="text-lg text-gray-600 leading-8 mb-6">
            Rwanda's most famous national park, home to endangered
            mountain gorillas and the Virunga Volcanoes.
          </p>

          <ul class="space-y-3 text-lg">
            <li>🦍 Gorilla Trekking</li>
            <li>🌋 Volcano Hiking</li>
            <li>🥾 Nature Walks</li>
            <li>📸 Wildlife Photography</li>
          </ul>

        </div>

      </div>

    </section>

    <!-- TOP ATTRACTIONS -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Top Attractions
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-gray-50 p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Gorilla Trekking
          </h3>

          <p>
            Meet Rwanda's famous mountain gorillas.
          </p>
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Mount Bisoke
          </h3>

          <p>
            Popular volcano hike with a crater lake.
          </p>
        </div>

        <div class="bg-gray-50 p-8 rounded-3xl shadow-xl">
          <h3 class="text-2xl font-bold text-green-700 mb-4">
            Musanze
          </h3>

          <p>
            Tourism capital of Northern Rwanda.
          </p>
        </div>

      </div>

    </section>

    <!-- ACTIVITIES -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Things To Do
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          🦍 Gorilla Trekking
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          🌋 Volcano Hiking
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          🚴 Cycling Tours
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          🛶 Twin Lakes Visits
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          📸 Photography
        </div>

        <div class="bg-white p-8 rounded-3xl shadow-xl">
          🐦 Bird Watching
        </div>

      </div>

    </section>

    <!-- GALLERY -->
    <section class="bg-white py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Northern Province Gallery
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycDR9dRUX2V6VWd352vDnBE3KajpXovDwMQ&s"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://i.pinimg.com/1200x/4c/3f/ca/4c3fcae1a6097301b90f9ec02bbe648d.jpg"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPD9Ab5MozEzpAKALCyb4o_FK_hrvRe7372w&s"
          class="rounded-3xl shadow-xl h-80 w-full object-cover hover:scale-105 transition"
        >

      </div>

    </section>

    <!-- HOTELS -->
    <section class="py-20 px-8 md:px-20">

      <h2 class="text-4xl font-bold text-center text-green-700 mb-12">
        Popular Hotels
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div class="bg-white p-6 rounded-3xl shadow-lg">
          Five Volcanoes Boutique Hotel
        </div>

        <div class="bg-white p-6 rounded-3xl shadow-lg">
          Mountain Gorilla View Lodge
        </div>

        <div class="bg-white p-6 rounded-3xl shadow-lg">
          Virunga Hotel
        </div>

        <div class="bg-white p-6 rounded-3xl shadow-lg">
          Le Bambou Gorilla Lodge
        </div>

      </div>

    </section>

    <!-- MAP -->
    <section class="bg-white py-20 px-8 md:px-20">

      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-green-700">
          Find Northern Province
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-10">

        <div class="bg-gray-100 p-8 rounded-3xl shadow-xl">

          <h3 class="text-3xl font-bold text-green-700 mb-6">
            Province Information
          </h3>

          <ul class="space-y-4 text-lg">
            <li>📍 Province: Northern Province</li>
            <li>🏙️ Main City: Musanze</li>
            <li>🌋 Volcanoes National Park</li>
            <li>🦍 Gorilla Trekking</li>
            <li>🏞️ Twin Lakes Burera & Ruhondo</li>
          </ul>

        </div>

        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Musanze,Rwanda&output=embed"
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
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-green-900 text-white text-center py-12">

      <h2 class="text-4xl font-bold mb-4">
        Visit Northern Province
      </h2>

      <p class="text-gray-300">
        Discover Gorillas, Volcanoes and Adventure
      </p>

    </footer>

  </div>
</template>

<script setup>
</script>