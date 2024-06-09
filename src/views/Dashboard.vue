<script setup>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
import CategoriesList from "./components/CategoriesList.vue";

import AppFooter from "@/examples/PageLayout/Footer.vue";
import { onBeforeUnmount, onBeforeMount } from "vue";
import { useStore } from "vuex";
const body = document.getElementsByTagName("body")[0];

const store = useStore();
onBeforeMount(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");
});
onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add("bg-gray-100");
});

</script>

<script>

import axios from 'axios';
export default {
  data() {
    return {
      categories: [],
      recentTalks: [],
      userMap: {},
      userCount: 0,
      talkCount: 0,
      talkCountSinceYesterday: 0,
    };
  },
  mounted() {
    this.fetchMostRecentTalks();
    this.fetchCategoryCounts();
    this.fetchUserCount();
    this.fetchTalkCount();
  },
  methods: {
    async fetchMostRecentTalks() {
      try {
        const response = await axios.get('http://localhost:8080/talks/recent');
        this.recentTalks = response.data;

        const userResponse = await fetch(`http://localhost:8080/userList`);
        const users = await userResponse.json();

        // Create userMap using reduce
        this.userMap = users.reduce((map, user) => {
          map[user.id] = user.username;
          return map;
        }, {});
      } catch (error) {
        console.error('Error fetching most recent talks:', error);
      }
    },
    async fetchCategoryCounts() {
      try {
        const response = await axios.get('http://localhost:8080/categoryCounts');
        this.categories = response.data;
        console.log('Categories:', this.categories);
      } catch (error) {
        console.error('Error fetching category counts:', error);
      }
    },
    async fetchUserCount() {
      try {
        const response = await axios.get('http://localhost:8080/userCount');
        this.userCount = response.data;
        console.log('User count:', this.userCount);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    },

    async fetchTalkCount() {
      try {
        const response = await axios.get('http://localhost:8080/talkCount');
        this.talkCount = response.data;
        console.log('Talk count:', this.talkCount);
      } catch (error) {
        console.error('Error fetching talk count:', error);
      }
    },

    formatTimeAgo(postedDatetime) {
      const postedDate = new Date(postedDatetime);
      const timeDifference = Date.now() - postedDate.getTime();

      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(weeks / 4);
      const years = Math.floor(months / 12);

      if (years > 0) {
        return years + (years === 1 ? ' year' : ' years') + ' ago';
      } else if (months > 0) {
        return months + (months === 1 ? ' month' : ' months') + ' ago';
      } else if (weeks > 0) {
        return weeks + (weeks === 1 ? ' week' : ' weeks') + ' ago';
      } else if (days > 0) {
        return days + (days === 1 ? ' day' : ' days') + ' ago';
      } else if (hours > 0) {
        return hours + (hours === 1 ? ' hour' : ' hours') + ' ago';
      } else if (minutes > 0) {
        return minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago';
      } else {
        return 'Just now';
      }
    },
    getUsername(userId) {
      return this.userMap[userId];
    }
  },
};
</script>

<template>

  <main class="main-content">
    <section>
      <div class="min-height-400 d-flex justify-content-center align-items-center w-100 top-0 "
        :class="`${darkMode ? 'bg-transparent' : ''}`" style="
        background-image: url(&quot;https://media.licdn.com/dms/image/C4D12AQFeRJwOohFq4A/article-cover_image-shrink_600_2000/0/1568027906787?e=2147483647&v=beta&t=XGXcGAb5UW3Imcq8dfC7SSLPMrIBhNV_lMHZxk5aens&quot;);
        background-position: top;
      ">
        <div class="pt-8">

          <h1 class="text-black text-center text-white" style="padding-top: 5rem;">
            UniTalk
          </h1>
          <p class="text-black text-center text-white">
            <i> Your Voice, Your Space; Express Freely, Connect Deeply
            </i>
          </p>
          <center>
            <router-link class="nav-link" to="/signin">
              <button type="button" class="btn btn-outline-primary" style="background-color: white;">Get
                Started</button></router-link>
          </center>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row" style="padding-top: 3rem;">
              <div class="col-lg-4 col-md-6 col-12">
                <mini-statistics-card title="Total Talks" :value="talkCount.total"
                  :description="`<span class='text-sm font-weight-bolder text-success'>Yet to discuss more !</span> `"
                  :icon="{ component: 'ni ni-paper-diploma', background: 'bg-gradient-primary', shape: 'rounded-circle' }" />
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <mini-statistics-card title="Topics to talk" value="5++" description="
                    More to discover!" :icon="{
                      component: 'ni ni-bullet-list-67',
                      background: 'bg-gradient-danger',
                      shape: 'rounded-circle',
                    }" />
              </div>
              <div class="col-lg-4 col-md-6 col-12">
                <mini-statistics-card title="UniTalkers" :value="userCount.total" description="<span
                class='text-sm font-weight-bolder text-success'
                >Still increasing !</span>" :icon="{
                  component: 'ni  ni-world-2',
                  background: 'bg-gradient-info',
                  shape: 'rounded-circle',
                }" />
              </div>


            </div>

            <div class="row mt-5">
              <div class="col-lg-7 mb-lg-0 mb-4">
                <div class="card px-3">
                  <div class="p-3 pb-0 card-header">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h6 class="mb-0">Most Recent Talks</h6>
                      <router-link class="nav-link" to="/signin">
                        View All
                      </router-link>
                    </div>
                  </div>
                  <div class="table-responsive pe-3">
                    <table class="table align-items-center">
                      <tbody>
                        <tr v-for="(talk, index) in recentTalks" :key="index">
                          <td class="w-30">
                            <div class="px-2 py-1 d-flex align-items-center">
                              <div class="d-flex px-2 align-items-center justify-content-center">
                                <i class="rounded-circle me-2 ni ni-bold-right" alt="hash"></i>
                              </div>
                              <div class="ms-2">
                                <p class="mb-0 text-xs font-weight-bold">
                                  Topic:
                                </p>
                                <h6 class="mb-0 text-sm">{{ talk.title }}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-center">
                              <h6 class="mb-0 text-xs"><i>Posted by {{ getUsername(talk.user_id) }}</i></h6>
                            </div>
                          </td>
                          <td class="text-sm align-middle">
                            <div class="text-end col">
                              <h6 class="mb-0 text-xs">{{ formatTimeAgo(talk.posted_datetime) }}</h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <categories-list :categories="categories" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>
