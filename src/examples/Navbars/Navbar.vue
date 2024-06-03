<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Breadcrumbs from "../Breadcrumbs.vue";

const showMenu = ref(false);
const store = useStore();
const isRTL = computed(() => store.state.isRTL);

const router = useRoute();

const currentRouteName = computed(() => {
  return router.name;
});
// const currentDirectory = computed(() => {
//   let dir = route.path.split("/")[1];
//   return dir.charAt(0).toUpperCase() + dir.slice(1);
// });

const minimizeSidebar = () => store.commit("sidebarMinimize");

const closeMenu = () => {
  setTimeout(() => {
    showMenu.value = false;
  }, 100);
};

const signOut = () => {
  // Clear session data
  clearSessionData();
};

// Method to clear session data
const clearSessionData = () => {
  localStorage.setItem('role', 'null');
};
</script>
<template>
  <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
    :class="isRTL ? 'top-0 position-sticky z-index-sticky' : ''" v-bind="$attrs" id="navbarBlur" data-scroll="true">
    <div class="px-3 py-1 container-fluid ">
      <breadcrumbs :current-page="currentRouteName" />

      <div class="d-flex justify-content-end mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="isRTL ? 'px-0' : 'me-sm-4'" id="navbar">

        <ul class="navbar-nav justify-content-end">
          <li class="px-lg-2 nav-item dropdown d-flex align-items-center">
            <a href="#" class="p-0 nav-link text-white" :class="[showMenu ? 'show' : '']" id="dropdownMenuButton"
              data-bs-toggle="dropdown" aria-expanded="false" @click="showMenu = !showMenu" @blur="closeMenu">
              <i class="cursor-pointer fa fa-bell"></i>
            </a>
            <ul class="py-3 dropdown-menu dropdown-menu-end me-sm-n4" :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton">
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <i class="fas fa-exclamation-circle text-danger fs-3 me-3"></i>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Alert - Frequent Transfer</span>
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="javascript:;">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <i class="fas fa-exclamation-triangle text-warning fs-3 me-3"></i>
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">Alert - Large Amount Transfer</span>
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        1 day
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <router-link :to="{ name: 'Notification' }"
                  class="px-0 nav-link font-weight-bold dropdown-item border-radius-md text-center">
                  <span class="d-sm-inline d-none">View All</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item d-xl-none px-2 d-flex align-items-center">
            <a href="#" @click="minimizeSidebar" class="p-0 nav-link text-white" id="iconNavbarSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line bg-white"></i>
                <i class="sidenav-toggler-line bg-white"></i>
                <i class="sidenav-toggler-line bg-white"></i>
              </div>
            </a>
          </li>
          <li class="nav-item d-flex align-items-center px-2">
            <router-link :to="{ name: 'Signin' }" class="px-0 nav-link font-weight-bold text-white" @click="signOut">
              <span class="d-sm-inline d-none">Sign Out</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
