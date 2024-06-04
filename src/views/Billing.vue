<script setup>
import DonatorList from "./components/DonatorList.vue";
// import ArgonButton from "@/components/ArgonButton.vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

const body = document.getElementsByTagName("body")[0];

const store = useStore();
const role = ref(localStorage.getItem('role'));
onMounted(() => {
  setNavPills();
  setTooltip();
  role.value = localStorage.getItem('role');
  store.state.isAbsolute = true;
});

onBeforeMount(() => {
  role.value = localStorage.getItem('role');
  console.log(role.value);
  if (role.value !== 'null') {
    store.state.layout = "profile-overview";
    store.state.imageLayout = "profile-overview";
    store.state.showNavbar = true;
    store.state.showFooter = true;
    store.state.hideConfigButton = true;
    store.state.isAbsolute = true;
    body.classList.add("profile-overview");
  } else {
    store.state.hideConfigButton = true;
    store.state.showNavbar = false;
    store.state.showSidenav = false;
    store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
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
    body.classList.remove("profile-overview");
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

  <div class="container top-0 position-sticky z-index-sticky" v-if="role === 'null'">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="page-header min-height-200 bg-success" style="
        margin-right: -24px;
        margin-left: -34%;
      ">
      <span class="mask bg-gradient-success opacity-1"></span>
    </div>
  </div>
  <div class="container-fluid" style="margin-top:-5%;">
    <div class="row">
      <div class="col-md-12 mb-4">
        <div class="row mb-4">

          <div class="card">
            <div class="card-header pb-0 p-3">
              <div class="row p-3">
                <div class="d-flex my-2">
                  <img src="https://via.placeholder.com/50" alt="User Avatar" width="50" height="50">
                  <div class="mx-4">
                    <div class="name">John Doe</div>
                    <div class="text-muted">5 hrs ago</div>
                  </div>
                </div>
                <div class="col-6 flex-column align-items-center my-4">
                  <h4>{Education 360}</h4>
                  <p>To Educate People</p>
                  <img src="https://via.placeholder.com/500x300" alt="Post Image" class="img-fluid ">
                </div>
                <div class="d-flex justify-content-between mb-1">
                  <div>like 100</div>
                  <div>Comment 100</div>
                </div>
              </div>
              <div class="d-flex bg-success p-2">
                <button class="border-0 bg-success text-white w-100 my-0">Like</button>
                <button class="border-0 bg-success text-white w-100 my-0">Comment</button>
                <button class="border-0 bg-success text-white w-100 my-0">Share</button>
              </div>
              <div class="row my-4 mx-1">
                <DonatorList />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>




  </div>


</template>


<style scoped>
.closebutton {
  position: absolute;
  top: 5%;
  right: 5%;
}

#paynowbutton {
  background-color: #3BD99E;
  color: white;
  border: 1px solid #3BD99E;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 10px;
}

.donationamount {
  width: 50%;
  margin: 20px 3px 0 10px;
  padding: 10px;
  font-weight: 500;
  font-size: larger;
}

#button {
  background-color: #fff;
  color: #3BD99E;
  border: 1px solid #3BD99E;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 10px;
}

#button.selected {
  background-color: #3BD99E;
  color: #fff;

}

.donation-pop-out {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 30%;
  z-index: 99999;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
}

.checkbox-wrapper-46 input[type="checkbox"] {
  display: none;
  visibility: hidden;
}

.checkbox-wrapper-46 .cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}

.checkbox-wrapper-46 .cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-46 .cbx span:first-child {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098A9;
  transition: all 0.2s ease;
}

.checkbox-wrapper-46 .cbx span:first-child svg {
  position: absolute;
  top: 3px;
  left: 2px;
  fill: none;
  stroke: #FFFFFF;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}

.checkbox-wrapper-46 .cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #3BD99E;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}

.checkbox-wrapper-46 .cbx span:last-child {
  padding-left: 8px;
}

.checkbox-wrapper-46 .cbx:hover span:first-child {
  border-color: #3BD99E;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child {
  background: #3BD99E;
  border-color: #3BD99E;
  animation: wave-46 0.4s ease;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child svg {
  stroke-dashoffset: 0;
}

.checkbox-wrapper-46 .inp-cbx:checked+.cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave-46 {
  50% {
    transform: scale(0.9);
  }
}
</style>
