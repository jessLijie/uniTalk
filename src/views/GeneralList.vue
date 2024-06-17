<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import CrowdFundCard from "./components/CrowdfundCard.vue";

const userList = [{
    users: "Joshua",
    time: "5 hrs ago",
    content: "Hi, this is my first post",
    category: "Food",
    comment: 100,
    like: 10,
    img: "https://via.placeholder.com/500x300"
}, {
    users: "John",
    time: "5 hrs ago",
    content: "Hi, this is my second post",
    category: "Technology",
    comment: 100,
    like: 10,
    img: "https://via.placeholder.com/500x300"
}, {
    users: "Peter",
    time: "2 hrs ago",
    content: "Hi, this is my third post",
    category: "Sport",
    comment: 100,
    like: 10,
    img: "https://via.placeholder.com/500x300"
}, {
    users: "Gavin",
    time: "8 hrs ago",
    content: "Hi, this is my fourth post",
    category: "Transport",
    comment: 100,
    like: 10,
    img: "https://via.placeholder.com/500x300"
}, {
    users: "Yam",
    time: "3 hrs ago",
    content: "Hi, this is my fifth post",
    category: "Fashion",
    comment: 100,
    like: 10,
    img: "https://via.placeholder.com/500x300"
},];

const filteredUserList = ref(userList);
const selectedCategory = ref(""); // Track the selected category

const filterTransactions = (category) => {
    if (selectedCategory.value === category) {
        filteredUserList.value = userList;
        selectedCategory.value = "";
    }
    else {
        selectedCategory.value = category; // Update the selected category
        filteredUserList.value = userList.filter(users => users.category === category);
    }
};

const role = ref(sessionStorage.getItem('role'));
const store = useStore();
onBeforeMount(() => {
    role.value = sessionStorage.getItem('role');
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
    role.value = sessionStorage.getItem('role');
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
        <h1 class="m-0 mx-auto pt-5">Crowdfund List</h1>
        <div class="d-flex justify-content-center align-items-center w-100 mt-4"
            :class="`${darkMode ? 'bg-transparent' : ''}`">
            <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Food' }"
                @click="filterTransactions('Food')">
                Food
            </button>
            <button type="button" class="btn mx-3" :class="{ 'btn-success': selectedCategory === 'Technology' }"
                @click="filterTransactions('Technology')">
                Technology
            </button>
            <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Fashion' }"
                @click="filterTransactions('Fashion')">
                Fashion
            </button>
            <button type="button" class="btn mx-3" :class="{ 'btn-success': selectedCategory === 'Sport' }"
                @click="filterTransactions('Sport')">
                Sport
            </button>
            <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Transport' }"
                @click="filterTransactions('Transport')">
                Transport
            </button>
        </div>
        <div class="container">
            <div class="row">
                <div class="px-3 py-2" v-for="(user, index) in filteredUserList" :key="index">
                    <CrowdFundCard :user="user.users" :time="user.time" :content="user.content" :comment="user.comment"
                        :like="user.like" :img="user.img" />
                </div>
            </div>

        </div>
    </div>
</template>

<style></style>
