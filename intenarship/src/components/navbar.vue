<template>
  <nav class="bg-green-800 text-white flex justify-between py-4 px-3 items-center shadow-lg">

    <!-- Logo -->
    <span class="text-xl font-bold flex gap-2 items-center">
      <img
        src="../assets/rwanda.png"
        alt="Rwanda"
        class="w-10 h-10 rounded-full"
      >
    </span>

    <!-- Navigation Links -->
    <ul class="flex gap-8 text-sm font-medium items-center">

      <!-- Home -->
      <li>
        <RouterLink to="/" class="hover:text-yellow-300 transition">
          Home
        </RouterLink>
      </li>

      <!-- About -->
      <li>
        <RouterLink to="/about" class="hover:text-yellow-300 transition">
          About us
        </RouterLink>
      </li>

      <!-- Services -->
      <li>
        <RouterLink to="/services" class="hover:text-yellow-300 transition">
          Services
        </RouterLink>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer">
          Gallery ▼
        </span>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50 transition-all duration-300"
        >
          <li>
            <RouterLink
              to="/photos"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Photos
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/video"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Videos
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer">
          Destination ▼
        </span>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-52 mt-2 z-50 transition-all duration-300"
        >
          <li>
            <RouterLink
              to="/northern"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Northern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/eastern"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Eastern Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/kigali"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Kigali City
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/western"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Western Province
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/southern"
              class="block px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Southern Province
            </RouterLink>
          </li>
        </ul>
      </li>

      <!-- Language Dropdown -->
      <li class="relative group">
        <span class="hover:text-yellow-300 cursor-pointer">
          Language ▼
        </span>

        <ul
          class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-44 mt-2 z-50 transition-all duration-300"
        >
          <li>
            <button
              class="w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              English
            </button>
          </li>

          <li>
            <button
              class="w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Ikinyarwanda
            </button>
          </li>

          <li>
            <button
              class="w-full text-left px-4 py-2 hover:bg-green-800 hover:text-white"
            >
              Français
            </button>
          </li>
        </ul>
      </li>

      <!-- Contact -->
      <li>
        <RouterLink to="/contact" class="hover:text-yellow-300 transition">
          Contact
        </RouterLink>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>