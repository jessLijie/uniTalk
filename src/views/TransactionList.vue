<script setup>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import { onBeforeUnmount, onBeforeMount } from "vue";
import { useStore } from "vuex";
import AppFooter from "@/examples/PageLayout/Footer.vue";

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
const TransactionList = [
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "Educate360",
        timestamp: "56 seconds ago",
        amount: 8000
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "BizBoost",
        timestamp: "56 seconds ago",
        amount: 7000
    },
    {
        hash: "0x3142O2132we333312414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "AI Technology",
        timestamp: "57 seconds ago",
        amount: 10000
    },
    {
        hash: "0x311231232333nwe12414312",
        sender: "0x2256dfq424e565656341",
        receiver: "Caring",
        timestamp: "59 seconds ago",
        amount: 20000
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "Help Victim",
        timestamp: "89 seconds ago",
        amount: 8000
    },
    {
        hash: "0x3142Osdad1231nwe12414312",
        sender: "0x2256dfq424efrt382341",
        receiver: "Caring",
        timestamp: "89 seconds ago",
        amount: 7000
    }]
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
    <main class="mt-0 main-content">
        <section>

            <div class="px-6 mt-6 container-fluid">
                <div class="mt-8 row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <h3 class="">Investment</h3>
                                    <div class="column d-flex justify-content-center gap-2 pt-2 pe-3">
                                        <button type="button"
                                            class="btn p-2 d-flex justify-content-center align-items-center">
                                            <i class="ni ni-bold-left"></i>
                                        </button>
                                        <button type="button"
                                            class="btn p-2 d-flex  justify-content-center align-items-center">
                                            <i class="ni ni-bold-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="pe-md-3 d-flex align-items-center ms-md-auto">
                                    <div class="input-group">
                                        <span class="input-group-text text-body">
                                            <i class="fas fa-search" aria-hidden="true"></i>
                                        </span>
                                        <input type="text" class="form-control" placeholder="Type here..." />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body px-0 pt-2 pb-2">
                                <div class="px-lg-3 px-4">
                                    <div class="table-responsive p-0">
                                        <table class="table align-items-center justify-content-center mb-0"
                                            style="overflow-x: hidden;">
                                            <thead>
                                                <tr>
                                                    <th
                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        Transaction ID
                                                    </th>
                                                    <th
                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Sender
                                                    </th>
                                                    <th
                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Receiver
                                                    </th>
                                                    <th
                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Amount
                                                    </th>
                                                    <th
                                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Time
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(item, index) in TransactionList" :key="index">
                                                    <td>
                                                        <div class="d-flex px-1 py-1">
                                                            <div
                                                                class="d-flex px-2 align-items-center justify-content-center">
                                                                <i class="rounded-circle me-2 ni ni-sound-wave"
                                                                    alt="hash"></i>
                                                            </div>
                                                            <div class="my-auto">
                                                                <h6 class="mb-0 text-sm">{{ item.hash }}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold my-2">{{ item.sender }}</p>
                                                    </td>
                                                    <td>
                                                        <p class="text-sm font-weight-bold my-2">{{ item.receiver }}</p>
                                                    </td>

                                                    <td>
                                                        <h6 class="text-sm font-weight-bold my-2">RM{{ item.amount }}
                                                        </h6>
                                                    </td>
                                                    <td>
                                                        <span class="text-xs font-weight-bold my-2">
                                                            {{ item.timestamp }}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </main>
    <app-footer />
</template>
