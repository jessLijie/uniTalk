<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import CrowdFundCard from "./components/CrowdfundCard.vue";

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

const role = ref(localStorage.getItem('role'));
const store = useStore();
onBeforeMount(() => {
    role.value = localStorage.getItem('role');
    console.log(role.value);
    if (role.value !== 'null') {
        store.state.showNavbar = true;
        store.state.showFooter = true;
        store.state.hideConfigButton = true;
    } else {
        store.state.hideConfigButton = true;
        store.state.showNavbar = false;
        store.state.showSidenav = false;
        store.state.showFooter = false;
    }
})

onBeforeUnmount(() => {
    role.value = localStorage.getItem('role');
    if (role.value !== 'null') {
        store.state.layout = "default";
        store.state.isAbsolute = false;
        store.state.imageLayout = "default";
        store.state.showNavbar = true;
        store.state.showFooter = true;
        store.state.hideConfigButton = false;
    } else {
        store.state.hideConfigButton = false;
        store.state.isAbsolute = false;
        store.state.showNavbar = true;
        store.state.showSidenav = true;
        store.state.showFooter = true;
        // body.classList.add("bg-gray-100");
    }
})

</script>

<template>
    <div class="card m-4 px-4 pt-1">
        <h1 class="m-0 mx-auto pt-3">Crowdfund List</h1>
        <div class="d-flex justify-content-center align-items-center w-100 mt-3"
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
                    <div class="row py-4">
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
    </div>
</template>

<style></style>
