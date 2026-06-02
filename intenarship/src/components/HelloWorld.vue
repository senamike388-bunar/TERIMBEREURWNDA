<script setup>
import { ref } from 'vue'

const count = ref(0)

const leaders = [
  {
    role: 'Head Master',
    name: 'Jean de Dieu'
  },
  {
    role: 'Director of Students',
    name: 'Zkarie'
  },
  {
    role: 'Director of Students',
    name: 'Louis Mallices'
  }
]
</script>

<template>
  <section class="bg-gray-100 min-h-screen py-12 px-6">
    
    
    <div class="text-center mb-10">
      <h1 class="text-5xl font-bold text-gray-800 mb-3">
        OUR LEADERS
      </h1>

      <p class="text-gray-600 text-lg">
        School Leadership Team
      </p>
    </div>

    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      <div
        v-for="(leader, index) in leaders"
        :key="index"
        class="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition duration-300"
      >
        
        
        <div
          class="w-24 h-24 mx-auto mb-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold"
        >
          {{ leader.name.charAt(0) }}
        </div>

        
        <h2 class="text-2xl font-bold text-gray-800 mb-2">
          {{ leader.role }}
        </h2>

        
        <p class="text-gray-600 text-lg">
          {{ leader.name }}
        </p>

      </div>

    </div>

    
    <div class="text-center mt-12">
      <button
        @click="count++"  
        class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Count is: {{ count }}
      </button>
    </div>

  </section>
</template>