<script setup>
import DonatorList from "./components/DonatorList.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

const body = document.getElementsByTagName("body")[0];

const store = useStore();
const showdonation = ref(false);
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

const selectedAmount = ref(null);

const selectAmount = (amount) => {
  selectedAmount.value = amount;
};

const updateSelectedAmount = () => {
  selectedAmount.value = selectedAmount.value ? parseInt(selectedAmount.value) : null;
};

const router = useRouter();
const toggledonation = () => {
  if (role.value !== 'null') {
    showdonation.value = !showdonation.value;
  } else {
    router.push('/signin');
  }
};

</script>

<template>

  <div class="container top-0 position-sticky z-index-sticky" v-if="role === 'null'">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="page-header min-height-400" style="
        background-image: url(https://www.unodc.org/res/endht/get-involved_html/join-theme.png);
        margin-right: -24px;
        margin-left: -34%;
      ">
      <span class="mask bg-gradient-success opacity-1"></span>
    </div>
  </div>
  <div class="container-fluid" style="margin-top:-5%;">
    <div class="row">
      <div class="col-lg-8">
        <div class="col-md-12 mb-4">
          <div class="row mb-4">

            <div class="card">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-6 flex-column align-items-center">
                    <h4>Education 360</h4>
                    <p>To Educate People</p>
                  </div>


                  <div class="col-6 text-end">
                    <argon-button @click="toggledonation" color="dark" variant="gradient">
                      <i class="bi bi-heart-fill"></i>
                      Invest Now
                    </argon-button>
                  </div>
                  <div class="col-12 text-end p-3">
                    <div class="progress" style="height:40px;border-radius:10px;">
                      <div class="progress-bar" role="progressbar" style="width: 50%;border-radius:10px;"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
                      <h3>Our Goal</h3>
                      <h6>RM7000000</h6>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
                      <h3>Raised</h3>
                      <h6>RM80000</h6>
                    </div>
                  </div>
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div
                      class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
                      <h3>Completed</h3>
                      <h6>1.14%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div class="row mb-4">
            <DonatorList />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="col-md-12 mb-4">
          <div class="card">
            <div class="p-4">
              <h6>About the investment</h6>
              <hr />
              <p class="text-sm mb-0">Investment Deadline</p>
              <p class="text-sm" style="color:black;font-weight:bold">21 March 2025</p>
              <p class="text-sm mb-0">Investment Price Per Share</p>
              <p class="text-sm" style="color:black;font-weight:bold">12</p>
              <p class="text-sm mb-0">Investment Target Amount</p>
              <p class="text-sm" style="color:black;font-weight:bold">RM7000000</p>
              <p class="text-sm mb-0">Investment Valuation</p>
              <p class="text-sm" style="color:black;font-weight:bold">RM50000000</p>
              <p class="text-sm mb-0">Minimum Investment</p>
              <p class="text-sm" style="color:black;font-weight:bold">RM1000</p>
              <p class="text-sm mb-0">Maximum Investment</p>
              <p class="text-sm" style="color:black;font-weight:bold">RM699994
                </p>
              <p class="text-sm mb-0">Minimum Number of Shares Offered</p>
              <p class="text-sm" style="color:black;font-weight:bold">2555</p>
              <p class="text-sm mb-0">Maximum Number of Shares Offered</p>
              <p class="text-sm" style="color:black;font-weight:bold">60000</p>

              <p class="text-sm mb-0">Offering Type</p>
              <p class="text-sm" style="color:black;font-weight:bold">Public</p>
              <p class="text-sm mb-0">Asset Type</p>
              <p class="text-sm" style="color:black;font-weight:bold">Equity</p>
              <p class="text-sm mb-0">Shares Offered</p>
              <p class="text-sm" style="color:black;font-weight:bold">Common</p>
              <p class="text-sm mb-0">Campaign Organiser</p>
              <p class="text-sm mb-0" style="color:black;font-weight:bold">Bruce Lee</p>
            </div>
          </div>
        </div>
      </div>


    </div>


  </div>
  <div v-if="showdonation" class="donation-pop-out border rounded-lg shadow ">
    <div @click="toggledonation"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red"
        class="bi bi-x-circle closebutton" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg></div>
    <h4 style="margin-left:10px">Investment amount</h4>

    <button id="button" :class="{ 'selected': selectedAmount === 100 }" @click="selectAmount(5000)">5000</button>
    <button id="button" :class="{ 'selected': selectedAmount === 200 }" @click="selectAmount(300000)">300000</button>
    <button id="button" :class="{ 'selected': selectedAmount === 300 }" @click="selectAmount(699994)">699994 </button>
<div>
    RM<input class="donationamount" v-model="selectedAmount" @input="updateSelectedAmount" placeholder="Amount" />
  </div>
    <div class="d-flex align-items-center mt-3" style="margin-left:10px">
      <div class="checkbox-wrapper-46">
        <input class="inp-cbx" id="cbx-46" type="checkbox" />
        <label class="cbx" for="cbx-46"><span>
            <svg width="12px" height="10px" viewbox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg></span>
        </label>
      </div>
      <p class="mb-0" style="display:inline;font-size:14px;margin-left:3px;">I agree with the terms and conditions
      </p>
    </div>
    <div class="d-flex align-items-center justify-content-center mt-4">
      <button id="paynowbutton" @click="toggledonation"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
          fill="currentColor" class="bi bi-wallet-fill" style="margin-right:5px;" viewBox="0 0 16 16">
          <path
            d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z" />
          <path
            d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z" />
        </svg>Pay Now</button>
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
