<template>
  <nav class="navbar">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/"> Navbar </RouterLink>
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNavbar"
        aria-controls="navbarSupportedContent"
        :aria-expanded="isCollapsed ? 'false' : 'true'"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"> </span>
      </button>
      <!-- Toggle this element on mobile view -->
      <div :class="['navbar-collapse', { show: !isCollapsed }]" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ active: isActive('/') }" to="/">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :class="{ active: isActive('/about') }" to="/about">
              About
            </RouterLink>
          </li>
          <li
            class="nav-item dropdown"
            @mouseenter="toggleDropdown(true)"
            @mouseleave="toggleDropdown(false)"
          >
            <button
              class="nav-link dropdown-toggle"
              role="button"
              :aria-expanded="dropdownOpen ? 'true' : 'false'"
            >
              Dropdown
            </button>
            <ul class="dropdown-menu" :class="{ show: dropdownOpen }">
              <li><RouterLink class="dropdown-item" to="/action">Page A</RouterLink></li>
              <li>
                <RouterLink class="dropdown-item" to="/another-action">Page B</RouterLink>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <RouterLink class="dropdown-item" to="/something-else"
                  >Something else here</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link disabled" aria-disabled="true" to="#">Disabled</RouterLink>
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
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
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
</script>

<style scoped>
/* Include the custom CSS defined earlier here, or import an external CSS file */
</style>
