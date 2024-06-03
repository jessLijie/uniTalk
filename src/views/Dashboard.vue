<script setup>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import Carousel from "./components/Carousel.vue";
import CategoriesList from "./components/CategoriesList.vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
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
  hash: "0x3142Osdad1231nwe12414312",
  sender: "0x2256dfq424efrt382341",
  receiver: "Educate360",
  timestamp: "56",
  amount: 8000
},
{
  hash: "0x3142Osdad1231nwe12414312",
  sender: "0x2256dfq424efrt382341",
  receiver: "BizBoost",
  timestamp: "56",
  amount: 7000
},
{
  hash: "0x3142O2132we333312414312",
  sender: "0x2256dfq424efrt382341",
  receiver: "AI Technology",
  timestamp: "57",
  amount: 10000
},];// Log VueSession object
</script>
<template>

  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <main class="main-content">
    <section>
      <div class="min-height-400 d-flex justify-content-center align-items-center w-100 top-0 "
        :class="`${darkMode ? 'bg-transparent' : ''}`" style="
        background-image: url(&quot;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg&quot;);
        background-position: top;
      ">
        <div class="pt-8">
          <h1 class="text-black text-center text-white">
            XiLiJiJi
          </h1>
          <p class="text-black text-center text-white">
            Empowering Dreams, Secured by Blockchain
          </p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row" style="padding: 5rem 0;">
              <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="ECF PROJECTs" value="3" description="<span
                class='text-sm font-weight-bolder text-success'
                >+55%</span> since yesterday" :icon="{
          component: 'ni ni-paper-diploma',
          background: 'bg-gradient-primary',
          shape: 'rounded-circle',
        }" />
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="RAISED" value="RM54,000" description="<span
                class='text-sm font-weight-bolder text-success'
                >+3%</span> since last week" :icon="{
          component: 'ni ni-money-coins',
          background: 'bg-gradient-danger',
          shape: 'rounded-circle',
        }" />
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="INVESTMENTS" value="+3,462" description="<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last quarter" :icon="{
          component: 'ni  ni-paper-diploma',
          background: 'bg-gradient-info',
          shape: 'rounded-circle',
        }" />
              </div>
              <div class="col-lg-3 col-md-6 col-12">
                <mini-statistics-card title="INVESTORS" value="+332" description="<span
                class='text-sm font-weight-bolder text-danger'
                >-2%</span> since last month" :icon="{
          component: 'ni ni-world',
          background: 'bg-gradient-success',
          shape: 'rounded-circle',
        }" />
              </div>

            </div>
            <div class="row">
              <div class="col-lg-7 mb-lg">
                <!-- line chart -->
                <div class="card z-index-2">
                  <gradient-line-chart id="chart-line" title="Raised " description="<i class='fa fa-arrow-up text-success'></i>
      <span class='font-weight-bold'>4% more</span> in 2021" :chart="{
          labels: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Amount',
              data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            },
          ],
        }" />
                </div>
              </div>
              <div class="col-lg-5">
                <carousel />
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-7 mb-lg-0 mb-4">
                <div class="card px-3">
                  <div class="p-3 pb-0 card-header">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h6 class="mb-0">Investment</h6>
                      <router-link class="nav-link" to="/transactionlist">
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
                                <i class="rounded-circle me-2 ni ni-sound-wave" alt="hash"></i>
                              </div>
                              <div class="ms-2">
                                <p class="mb-0 text-xs font-weight-bold">
                                  Transaction Hash:
                                </p>
                                <h6 class="mb-0 text-sm">{{ transaction.hash }}</h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="text-center">
                              <h6 class="mb-0 text-sm">{{ transaction.receiver }}</h6>
                            </div>
                          </td>
                          <td>
                            <div class="text-center">
                              <h6 class="mb-0 text-sm">RM{{ transaction.amount }}</h6>
                            </div>
                          </td>
                          <td class="text-sm align-middle">
                            <div class="text-end col">
                              <h6 class="mb-0 text-sm">{{ transaction.timestamp }} seconds ago</h6>
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
              component: 'ni ni-mobile-button',
              background: 'dark',
            },
            label: 'E-Commerce',
            description: '13 closed <strong>32 open</strong>',
          },
          {
            icon: {
              component: 'ni ni-tag',
              background: 'dark',
            },
            label: 'Service',
            description: '123 closed <strong>15 open</strong>',
          },
          {
            icon: { component: 'ni ni-box-2', background: 'dark' },
            label: 'Technology',
            description: '3 closed <strong>25 open</strong>',
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
