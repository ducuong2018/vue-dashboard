<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <router-view />
      <Banner />
    </div>
  </div>
</template>

<script>
import './charts/ChartjsConfig';
import { ref } from 'vue'
import Sidebar from '@partials/Sidebar.vue'
import Header from '@partials/Header.vue'
import Banner from '@partials/Banner.vue';

export default {
  components: {
    Sidebar,
    Header,
    Banner
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }
  }
}
</script>

