<script setup>
import { onBeforeUnmount, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

import axios from 'axios';
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { ref } from "vue";
const body = document.getElementsByTagName("body")[0];
const router = useRouter();

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
const email = ref('');
const password = ref('');
const username = ref('');
const isValidEmail = ref(false);

async function signup() {
      // Validate email before proceeding
      if (!isValidEmail.value) {
        return;
      }
      
      try {
        // Make API request to signup
        const response = await axios.post('http://localhost:8080/signup', {
          email: email.value,
          password: password.value,
          username: username.value
        });
        
        // Handle successful signup
        console.log('Signup successful:', response.data);
        const userId = response.data.id;
        localStorage.setItem("role", "user");
        localStorage.setItem("userid", userId);
        router.push("/profile");
        
      } catch (error) {
        console.error('Signup failed:', error.response.data.message);
        displayErrorMessage(error.response.data.message);
      }
    }
    function displayErrorMessage(message) {
  const errorMessageElement = document.getElementById('error-message'); // Assuming you have an element with id 'error-message' to display the error message
  errorMessageElement.innerHTML = `<center><span class="fade-in error-badge" style="color: red; font-size:15px">${message}</span></center>`;
}
    function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email.value)) {
    isValidEmail.value = true;
  } else {
    isValidEmail.value = false;
  }
}

</script>
<template>
  
  <main class="main-content mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <router-link class="nav-link" to="/dashboard-default">
 
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute start-0 justify-content-center flex-column">
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url(&quot;https://www.shutterstock.com/shutterstock/videos/1030949834/thumb/4.jpg?ip=x480&quot;);
                  background-size: cover;
                ">
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4 class="mt-5 text-white font-weight-bolder position-relative">
                  "Unleash Your Thoughts"
                </h4>
                <p class="text-white position-relative">
                  A Hub for Honest Conversations;<br> Where Students Speak Freely
                </p>
              </div>
            </div>
            </router-link>
            <div
              class="mx-0 col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-8 mt-7 position-absolute end-0 top-6 px-5">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                  <p class="mb-0">Enter your name, email and password to sign up</p>
                 
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input v-model="username" id="username" type="text" placeholder="Username" name="username" size="lg" />
                    </div>
                    <div class="mb-3">
                      <argon-input v-model="email" id="email" placeholder="Email" name="email" size="lg" @input="validateEmail" />
                      <span v-if="!isValidEmail && email.length > 0" style="color: red;">Please enter a valid email address</span>
                    </div>
                    <div class="mb-3">
                      <argon-input v-model="password" id="password" type="password" placeholder="Password" name="password" size="lg" />
                    </div>
                    <div id="error-message"></div>

                    <argon-checkbox checked>
                      <label class="form-check-label" for="flexCheckDefault">
                        I agree the
                        <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                      </label>
                    </argon-checkbox>
                    <div class="text-center">
                      <argon-button @click.prevent="signup" fullWidth color="secondary" variant="gradient" class="mt-4" size="lg" >Sign
                        up</argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Already have an account?
                    <a href="/signin" class="text-dark font-weight-bolder">Sign in</a>
                  </p>
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
