<script setup>
import { useRoute } from "vue-router";
import SidenavItem from "./SidenavItem.vue";
import { ref } from "vue";

const getRoute = () => {
  const route = useRoute();
  const routeArr = route.path.split("/");
  return routeArr[1];
};

const sessionData = ref(sessionStorage.getItem('role'));

</script>
<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <!-- admin -->
      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          Talks
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-item to="/generallist" :class="getRoute() === 'generallist' ? 'active' : ''" navText="List">
          <template v-slot:icon>
            <i class="ni ni-collection text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" v-if="sessionData === 'admin'">
        <sidenav-item to="/admin/talks-manage" :class="getRoute() === 'crowdfundmanage' ? 'active' : ''" navText="Manage">
          <template v-slot:icon>
            <i class="fas fa-money-check text-sm text-dark opacity-10 position-absolute" style="top: 6px;"></i>
          </template>
        </sidenav-item>
      </li>

      <li class="mt-3 nav-item" v-if="sessionData === 'admin'">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          Users
        </h6>
      </li>
      <li class="nav-item" v-if="sessionData === 'admin'">
        <sidenav-item to="/admin/users-manage" :class="getRoute() === 'usermanage' ? 'active' : ''" navText="Manage">
          <template v-slot:icon>
            <i class="fas fa-users text-sm text-dark opacity-10 position-absolute" style="top: 6px;"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- user -->
      <li class="nav-item" v-if="sessionData === 'user'">
        <sidenav-item to="/talkList" :class="getRoute() === 'talkList' ? 'active' : ''"
          navText="Manage">
          <template v-slot:icon>
            <i class="fas fa-list text-sm text-dark opacity-10 position-absolute" style="top: 6px;"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item" v-if="sessionData === 'user'">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          ACCOUNT
        </h6>
      </li>
      <li class="nav-item" v-if="sessionData === 'user'">
        <sidenav-item to="/profile" :class="getRoute() === 'profile' ? 'active' : ''" navText="Profile">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- user -->
      <li class="mt-3 nav-item" v-if="sessionData === 'Investor'">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6 ms-2">
          ACCOUNT
        </h6>
      </li>
      <li class="nav-item" v-if="sessionData === 'Investor'">
        <sidenav-item to="/profile" :class="getRoute() === 'profile' ? 'active' : ''" navText="Profile">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item" v-if="sessionData === 'Investor'">
        <sidenav-item to="/investment" :class="getRoute() === 'investment' ? 'active' : ''" navText="Investment">
          <template v-slot:icon>
            <i class="ni ni-app text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>

</template>
