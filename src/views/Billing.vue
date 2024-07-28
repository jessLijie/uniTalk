<script setup>
import DonatorList from "./components/DonatorList.vue";
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from 'vue-router';
import axios from 'axios';
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import { useStore } from "vuex";

const body = document.getElementsByTagName("body")[0];
const route = useRoute();
const store = useStore();
const role = ref(localStorage.getItem('role'));
const talks = ref(null);
const userMap = ref({});
const liking = ref(false);
const userId = ref(sessionStorage.getItem("userid"));
var likingvalue = ref();
var commentvalue = ref();
const commentInput = ref(null);
const commentTextarea = ref(null);
const talkId = route.params.id;

const fetchCampaignDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/talks/${talkId}`);
    talks.value = response.data;

    const userResponse = await fetch('http://localhost:8080/userList');
    const users = await userResponse.json();

    userMap.value = users.reduce((map, user) => {
      map[user.id] = user.username;
      return map;
    }, {});

    const checklike = await fetch(`http://localhost:8080/talks/check-like/${userId.value}/${talks.value.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (checklike.ok) {
      const data = await checklike.json();
      liking.value = data.liked;
    }
  } catch (error) {
    console.error('Error fetching campaign details:', error);
  }
};

const formatTimeAgo = (postedDatetime) => {
  const postedDate = new Date(postedDatetime);
  const timeDifference = Date.now() - postedDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years + (years === 1 ? ' year' : ' years') + ' ago';
  } else if (months > 0) {
    return months + (months === 1 ? ' month' : ' months') + ' ago';
  } else if (weeks > 0) {
    return weeks + (weeks === 1 ? ' week' : ' weeks') + ' ago';
  } else if (days > 0) {
    return days + (days === 1 ? ' day' : ' days') + ' ago';
  } else if (hours > 0) {
    return hours + (hours === 1 ? ' hour' : ' hours') + ' ago';
  } else if (minutes > 0) {
    return minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago';
  } else {
    return 'Just now';
  }
};

function getUsername(userId) {
  return this.userMap[userId];
}

const likePost = async (id, like, userId) => {
  try {
    const response = await fetch(`http://localhost:8080/talks/add/${id}/${like}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    }); if (response.ok) {
      likingvalue.value++;
      liking.value = true;
    }
  } catch (error) {
    console.error('Error liking post:', error);
  }
};

const unlikePost = async (id, like, userId) => {
  try {
    const response = await fetch(`http://localhost:8080/talks/reduce/${id}/${like}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    }); if (response.ok) {
      likingvalue.value--;
      liking.value = false;
    }
  } catch (error) {
    console.error('Error liking post:', error);
  }
};

const adjustTextareaHeight = () => {
  const textarea = commentTextarea.value;
  textarea.style.height = 'auto'; // Reset height to auto to calculate the new height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
  const button = textarea.nextElementSibling;
  button.style.height = `${textarea.scrollHeight}px`; // Match button height to textarea height
};

const submitComment = async (talkId) => {
  try {
    const response = await fetch(`http://localhost:8080/talks/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: userId.value, talkId: talkId, comment: commentInput.value, commentValue: commentvalue.value })
    }); if (response.ok) {
      commentInput.value = ''; // Clear the input field after successful submission
      adjustTextareaHeight(); // Adjust the textarea height
      window.location.reload(); // Refresh the page
    }
  } catch (error) {
    console.error('Error liking post:', error);
  }
};

onMounted(() => {
  setNavPills();
  setTooltip();
  role.value = localStorage.getItem('role');
  store.state.isAbsolute = true;
  fetchCampaignDetails().then(() => {
    likingvalue.value = talks.value.likes;
    commentvalue.value = talks.value.comments;
  });
});

onBeforeMount(() => {
  role.value = localStorage.getItem('role');
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
});

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
  }
});
</script>
<template>
  <div>
    <!-- Campaign Header -->
    <div class="container-fluid">
      <div class="page-header min-height-200 bg-success" style="margin-right: -24px; margin-left: -34%;">
        <span class="mask bg-gradient-success opacity-1"></span>
      </div>
    </div>
    <!-- Campaign Details -->
    <div class="container-fluid" style="margin-top:-5%;">
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="card">
            <div class="card-header pb-0 p-6">
              <div class="row" v-if="talks">
                <div class="d-flex my-2">
                  <img :src="talks.userAvatar || 'https://via.placeholder.com/50'" alt="User Avatar" width="50"
                    height="50">
                  <div class="mx-4">
                    <div class="name">{{ getUsername(talks.user_id) }}</div>
                    <div class="text-muted">{{ formatTimeAgo(talks.postedDatetime) }}</div>
                  </div>
                </div>
                <div class="flex-column align-items-center my-4">
                  <h4>{{ talks.title }}</h4>
                  <p>{{ talks.content }}</p>
                  <img :src="talks.image || 'https://via.placeholder.com/500x300'" alt="Post Image" class="img-fluid"
                    width="1000" height="1000">
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <div>like {{ likingvalue }}</div>
                  <div>Comment {{ talks.comments || 0 }}</div>
                </div>
              </div>
              <div class="d-flex bg-success p-2">
                <button
                  @click=" liking ? unlikePost(talks.id, likingvalue, userId) : likePost(talks.id, likingvalue, userId)"
                  class="border-0 bg-success text-white w-100 my-0"> {{ liking ? 'Unlike' : 'Like' }}
                </button>
                <button class="border-0 bg-success text-white w-100 my-0">Comment</button>
                <button class="border-0 bg-success text-white w-100 my-0">Share</button>
              </div>
              <form @submit.prevent="submitComment(talks.id)">
                <div class="row my-4 mx-1">
                  <div class="border-radius-1 border comment-container d-flex align-items-center mt-3 p-3">
                    <textarea style=" resize: none;" ref="commentTextarea" type="text"
                      class="form-control me-2 border-0" v-model="commentInput" placeholder="Write a comment..."
                      @input="adjustTextareaHeight" required></textarea>
                    <button class="btn btn-success mb-0 h-100">Comment</button>
                  </div>
                </div>
              </form>
              <div class="row my-4 mx-1">
                <DonatorList :id="talkId" :userId="userId" :commentValue="commentvalue" />
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
