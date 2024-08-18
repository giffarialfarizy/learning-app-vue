<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink class="navbar_brand" to="/">Navbar</RouterLink>
      <!-- Toggle button -->
      <button
        class="navbar_toggler"
        type="button"
        @click="toggleNavbar"
        aria-controls="navbarSupportedContent"
        :aria-expanded="isCollapsed ? 'false' : 'true'"
        aria-label="Toggle navigation"
      >
        <span class="navbar_toggler_icon"></span>
      </button>
      <!-- Toggle this element on mobile view -->
      <div :class="['navbar_collapse', { show: !isCollapsed }]" id="navbarSupportedContent">
        <ul class="navbar_nav">
          <li class="navbar_nav_item">
            <RouterLink class="navbar_nav_link" :class="{ active: isActive('/') }" to="/">
              Home
            </RouterLink>
          </li>
          <li class="navbar_nav_item">
            <RouterLink class="navbar_nav_link" :class="{ active: isActive('/about') }" to="/about">
              About
            </RouterLink>
          </li>
          <li
            class="navbar_nav_item dropdown"
            @mouseenter="toggleDropdown(true)"
            @mouseleave="toggleDropdown(false)"
          >
            <button
              class="navbar_nav_link dropdown_toggle"
              role="button"
              :aria-expanded="dropdownOpen ? 'true' : 'false'"
            >
              Dropdown
            </button>
            <ul class="dropdown_menu" :class="{ show: dropdownOpen }">
              <li><RouterLink class="dropdown_item" to="/typography">Typography</RouterLink></li>
              <li>
                <RouterLink class="dropdown_item" to="/another-action">Page B</RouterLink>
              </li>
              <li><hr class="dropdown_divider" /></li>
              <li>
                <RouterLink class="dropdown_item" to="/something-else">
                  Something else here
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="navbar_nav_item">
            <RouterLink class="navbar_nav_link disabled" aria-disabled="true" to="#">
              Disabled
            </RouterLink>
          </li>
        </ul>
        <form class="flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchQuery"
          />
          <button class="btn btn-outline--primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Reactive state
const isCollapsed = ref(true)
const dropdownOpen = ref(false)
const searchQuery = ref('')

// Methods
const toggleNavbar = () => {
  isCollapsed.value = !isCollapsed.value
}

const toggleDropdown = (open: boolean) => {
  dropdownOpen.value = open
}

const isActive = (routePath: string) => {
  return route.path === routePath
}
</script>

<!-- <script>
export default {
  data() {
    return {
      isCollapsed: true,
      dropdownOpen: false,
      searchQuery: ''
    }
  },
  methods: {
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleDropdown(open) {
      this.dropdownOpen = open
    },
    isActive(route) {
      return this.$route.path === route
    }
  }
}
</script> -->

<style scoped>
/* Include the custom CSS defined earlier here, or import an external CSS file */
</style>
