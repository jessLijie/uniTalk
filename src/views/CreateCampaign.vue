<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import ArgonButton from '@/components/ArgonButton.vue';
import ArgonInput from '@/components/ArgonInput.vue';
import setNavPills from '@/assets/js/nav-pills.js';
import setTooltip from '@/assets/js/tooltip.js';

const body = document.getElementsByTagName('body')[0];
const store = useStore();

const title = ref('');
const topic = ref('');
const content = ref('');
const image = ref(null);

const handleFileUpload = (event) => {
  image.value = event.target.files[0];
};

const handleSubmit = async () => {
  if (!title.value || !topic.value || !content.value || !image.value) {
    alert('Please fill out all fields and select an image.');
    return;
  }

  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('topic', topic.value);
  formData.append('content', content.value);
  formData.append('image', image.value);

  try {
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post('http://localhost:8080/talks/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    alert('Talk created successfully!');
  } catch (error) {
    alert('Failed to create talk: ' + error.response.data.message);
  }
};

onMounted(() => {
  store.state.isAbsolute = true;
  setNavPills();
  setTooltip();
});

onBeforeMount(() => {
  store.state.layout = 'profile-overview';
  store.state.imageLayout = 'profile-overview';
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = true;
  body.classList.add('profile-overview');
});

onBeforeUnmount(() => {
  store.state.layout = 'default';
  store.state.isAbsolute = false;
  store.state.imageLayout = 'default';
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = false;
  body.classList.remove('profile-overview');
});
</script>

<template>
  <main>
    <div class="container-fluid">
      <div class="page-header min-height-300" style="
          background-image: url(&quot;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg&quot;);
          margin-right: -24px;
          margin-left: -34%;
        ">
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>

      <div class="card shadow-lg mt-n6">
        <div class="card-header pb-0">
          <div class="d-flex" style="float: right;">
            <a href="/issuer/crowdfundmanage">
              <argon-button size="sm" class="ms-auto">Back</argon-button>
            </a>
          </div>
          <br>
          <div class="d-flex align-items-center">
            <p class="mb-0">Create Talk</p>
          </div>
        </div>
        <div class="card-body">
          <p class="text-uppercase text-sm">General Information</p>
          <div class="col-md-12">
            <label for="talkTitle" class="form-control-label">Talk Title</label>
            <argon-input type="text" placeholder="Enter talk title" v-model="title"></argon-input>
          </div>
          <div class="col-md-12">
            <label for="talkContent" class="form-control-label">Talk Content</label>
            <argon-input type="text" placeholder="Enter talk content" v-model="content"></argon-input>
          </div>
          <div class="col-md-12">
            <label for="talkImage" class="form-control-label">Image</label>
            <br>
            <input type="file" class="form-control" id="talkImage" accept="image/*" @change="handleFileUpload" />
          </div>
          <div class="col-md-6">
            <label for="talkTopic" class="form-control-label">Topic</label>
            <select class="form-control" id="talkTopic" v-model="topic">
              <option value="" disabled selected>--Select topic--</option>
              <option value="Food">Food</option>
              <option value="Technology">Technology</option>
              <option value="Fashion">Fashion</option>
              <option value="Sports">Sports</option>
              <option value="Transport">Transport</option>
            </select>
          </div>

          <hr class="horizontal dark" />
          <argon-button color="success" size="sm" class="ms-auto" style="float: right;"
            @click="handleSubmit">Submit</argon-button>
        </div>
      </div>
    </div>
  </main>
</template>
