<script setup>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import { onBeforeUnmount, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import CrowdFundCard from "./components/CrowdfundCard.vue";


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
  title: "Educate360",
  category: "Service",
  objective: "To educate people",
  goal: 7000000,
  raised: 80000,
  investor: 4,
  status: "Open"
}, {
  title: "BizBoost",
  category: "E-Commerce",
  objective: " Elevate, Expand, Excel!",
  goal: 3000000,
  raised: 60000,
  investor: 2,
  status: "Open"
}, {
  title: "Caring",
  category: "Service",
  objective: "To enhance experience",
  goal: 10000000,
  raised: 8000000,
  investor: 3,
  status: "Closed"
}, {
  title: "AI Technology",
  category: "Technology",
  objective: "To enhance experience",
  goal: 15000000,
  raised: 10000000,
  investor: 3,
  status: "Closed"
}, {
  title: "Help Victim",
  category: "Service",
  objective: "Together, We Rebuild Lives.",
  goal: 13000000,
  raised: 700000,
  investor: 2,
  status: "Closed"
},];

const filteredTransactions = ref(transactionList);
const selectedCategory = ref(""); // Track the selected category

const filterTransactions = (category) => {
  if (selectedCategory.value === category) {
    filteredTransactions.value = transactionList;
    selectedCategory.value = "";
  }
  else {
    selectedCategory.value = category; // Update the selected category
    filteredTransactions.value = transactionList.filter(transaction => transaction.category === category);
  }
};

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
  <main class="mt-4 main-content">
    <section>
      <div style="margin-top: 8rem;" class="d-flex justify-content-center align-items-center w-100"
        :class="`${darkMode ? 'bg-transparent' : ''}`">
        <!-- admin -->
        <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'E-Commerce' }"
          @click="filterTransactions('E-Commerce')">
          E-Commerce
        </button>
        <button type="button" class="btn mx-3" :class="{ 'btn-success': selectedCategory === 'Service' }"
          @click="filterTransactions('Service')">
          Service
        </button>
        <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Technology' }"
          @click="filterTransactions('Technology')">
          Technology
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row py-5">
              <div class="col-lg-4 col-md-6 col-12 px-3" v-for="(transaction, index) in filteredTransactions"
                :key="index">
                <CrowdFundCard :title="`${transaction.title}`" :category="`${transaction.category}`"
                  :objective="`${transaction.objective}`" :goal="`${transaction.goal}`"
                  :raised="`${transaction.raised}`" :investor="`${transaction.investor}`"
                  :status="`${transaction.status}`" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>
