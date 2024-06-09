<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { onBeforeUnmount } from 'vue';
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const router = useRouter();
const store = useStore();
const email = ref('');
const password = ref('');
const body = document.getElementsByTagName("body")[0];

store.state.hideConfigButton = true;
store.state.showNavbar = false;
store.state.showSidenav = false;
store.state.showFooter = false;
body.classList.remove("bg-gray-100");

onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add("bg-gray-100");
});

// Assuming you have a method to handle sign-in and get the selected role
async function signIn() {
  try {
   
    const response = await axios.post('http://localhost:8080/signin', {
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) {
      const signInUser = response.data;
      console.log('Sign-in successful:', signInUser);
      const role = signInUser.role;
      const userId = signInUser.id;
      navigateToRolePage(role,userId);
    } else {
      console.error('Sign-in failed:', );
      displayErrorMessage(response.data.message);
    }
  } catch (error) {
    console.error('Sign-in failed:', );
    displayErrorMessage(error.response.data.message);
  }
}
function displayErrorMessage(message) {
  const errorMessageElement = document.getElementById('error-message'); // Assuming you have an element with id 'error-message' to display the error message
  errorMessageElement.innerHTML = `<center><span class="fade-in error-badge" style="color: red; font-size:15px">${message}</span></center>`;
}
const isValidEmail = ref(false);
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email.value)) {
    isValidEmail.value = true;
  } else {
    isValidEmail.value = false;
  }
}
// Method to navigate to the appropriate page based on the selected role
function navigateToRolePage(role, userId) {
  if (role === "user") {
    localStorage.setItem("role", "user");
    localStorage.setItem("userid", userId);
    router.push("/generallist");
  } else {
    localStorage.setItem("role", "admin");
    router.push("/admin/users-manage");
  }
}

</script>

<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row pt-6">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <argon-input v-model="email" id="email" placeholder="Email" name="email" size="lg" @input="validateEmail" />
                      <span v-if="!isValidEmail && email.length > 0" style="color: red;">Please enter a valid email address</span>  
                      </div>
                    <div class="mb-3">
                      <argon-input v-model="password" id="password" type="password" placeholder="Password" name="password" size="lg" />
                    </div>
                    
                    <argon-checkbox id="rememberMe" name="remember-me" checked>Remember me</argon-checkbox>
                    <div id="error-message"></div>

                    <div class="text-center">
                      <argon-button @click.prevent="signIn" class="mt-4" variant="gradient" color="success" fullWidth
                        size="lg">Sign
                        in</argon-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <a href="/signup" class="text-success text-gradient font-weight-bold">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <router-link class="nav-link" to="/dashboard-default">
              <div
                class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column">
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
                    A Hub for Honest Conversations; <br>Where Students Speak Freely
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<style >
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  .error-badge {
    background-color: rgb(255, 223, 223);
    color: white;
    padding: 5px 10px;
    border-radius: 10px;
  }

</style>