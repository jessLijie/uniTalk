<script setup>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import { onBeforeUnmount, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import CrowdfundCard from "./components/CrowdfundCard.vue";


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
  img: "https://via.placeholders.com/500x300"
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
        <div class="px-3" v-for="(user, index) in filteredUserList" :key="index">
          {{ user.users }}
          <CrowdfundCard :user="user.users" :time="user.time" :content="user.content" :comment="user.comment"
            :like="user.like" :img="user.img" />
        </div>
      </div>

    </section>
  </main>
  <app-footer />
</template>
