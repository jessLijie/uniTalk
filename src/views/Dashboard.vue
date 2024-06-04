<script setup>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
// import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
// import Carousel from "./components/Carousel.vue";
import CategoriesList from "./components/CategoriesList.vue";
// import Navbar from "@/examples/PageLayout/Navbar.vue";
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

const transactionList = [{
  hash: "OMG!! Double decker bus caught fire in Lagos",
  sender: "0x2256dfq424efrt382341",
  receiver: "Anonymous",
  timestamp: "56",
  amount: 8000
},
{
  hash: "Hey guys I found out that the new iPhone 88 is out!!",
  sender: "0x2256dfq424efrt382341",
  receiver: "Qian888",
  timestamp: "56",
  amount: 7000
},
{
  hash: "What do you think about the new song of Ariana...",
  sender: "0x2256dfq424efrt382341",
  receiver: "Jess666",
  timestamp: "57",
  amount: 10000
}, {
  hash: "Did you guys know that we can actually fly to t...",
  sender: "0x2256dfq424efrt382341",
  receiver: "Anonymous",
  timestamp: "57",
  amount: 10000
}, {
  hash: "I hate it when my friends don't reply my messages",
  sender: "0x2256dfq424efrt382341",
  receiver: "Loy Chai",
  timestamp: "57",
  amount: 10000
},];// Log VueSession object
</script>
<template>
  <!-- <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div> -->
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
                <mini-statistics-card title="Total Talks" value="500" description="<span
                class='text-sm font-weight-bolder text-success'
                >+34</span> since yesterday" :icon="{
                  component: 'ni ni-paper-diploma',
                  background: 'bg-gradient-primary',
                  shape: 'rounded-circle',
                }" />
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
                <mini-statistics-card title="UniTalkers" value="+100" description="<span
                class='text-sm font-weight-bolder text-success'
                >+2%</span>" :icon="{
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
                        <tr v-for="(transaction, index) in transactionList" :key="index">
                          <td class="w-30">
                            <div class="px-2 py-1 d-flex align-items-center">
                              <div class="d-flex px-2 align-items-center justify-content-center">
                                <i class="rounded-circle me-2 ni ni-bold-right" alt="hash"></i>
                              </div>
                              <div class="ms-2">
                                <p class="mb-0 text-xs font-weight-bold">
                                  Topic:
                                </p>
                                <h6 class="mb-0 text-sm">{{ transaction.hash }}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-center">
                              <h6 class="mb-0 text-xs">Posted by {{ transaction.receiver }}</h6>
                            </div>
                          </td>
                          <td class="text-sm align-middle">
                            <div class="text-end col">
                              <h6 class="mb-0 text-xs">{{ transaction.timestamp }} minutes ago</h6>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <categories-list :categories="[
                  {
                    icon: {
                      component: 'fa fa-cutlery',
                      background: 'dark',
                    },
                    label: 'Food',
                    description: 'Total <strong>888 </strong>talks',
                  },
                  {
                    icon: {
                      component: 'ni ni-world-2',
                      background: 'dark',
                    },
                    label: 'Technology',
                    description: 'Total <strong>254 </strong>talks',
                  },
                  {
                    icon: { component: 'fa fa-heart', background: 'dark' },
                    label: 'Fashion',
                    description: 'Total <strong>100 </strong>talks',
                  },
                  {
                    icon: { component: 'fa fa-futbol-o', background: 'dark' },
                    label: 'Sport',
                    description: 'Total <strong>50 </strong>talks',
                  }, {
                    icon: { component: 'fa fa-bus', background: 'dark' },
                    label: 'Transport',
                    description: 'Total <strong>5 </strong>talks',
                  },
                ]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>
