<script setup>
import { ref, onMounted } from 'vue';
import CommentModal from './CommentModal.vue';

var comment = ref({});
const userMap = ref({});
const showModals = ref(false);
const currentParentId = ref(null);

const props = defineProps({
  id: {
    type: String,
    default: "Undefined",
  },
  userId: {
    type: String,
    default: "Undefined",
  },
  commentValue: {
    type: String,
    default: "0",
  },
});

var commentv = ref(props.commentValue);
const checkComment = async () => {
  try {
    const response = await fetch(`http://localhost:8080/talks/${props.id}/comment`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const userResponse = await fetch('http://localhost:8080/userList');
    const users = await userResponse.json();

    userMap.value = users.reduce((map, user) => {
      map[user.id] = user.username;
      return map;
    }, {});
    if (response.ok) {
      const data = await response.json();
      comment.value = data;
      commentv.value = data.length();
    }
  } catch (error) {
    console.error('Error checking like status:', error);
  }
};

function getUsername(userId) {
  return this.userMap[userId];
}

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
const openModal = (parentId) => {
  currentParentId.value = parentId;
  showModals.value = true;
};

const closeModal = () => {
  showModals.value = false;
};

// const handleCommentSubmitted = () => {
//   showModal.value = false;
//   checkComment();  // Refresh comments
// };
onMounted(() => {
  checkComment();
});

</script>
<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-4">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Comment</h6>
          <p>{{ commentValue }} replies</p>
        </div>
      </div>
    </div>
    <div class="card-body pt-1 p-3">
      <ul class="list-group">
        <li class="list-group-item border-0 border-radius-lg">
          <div v-for="(c, index) in comment" :key="index">
            <div v-if="c.parent_id == 0" class="my-3">
              <div class="d-flex align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                  class="d-flex align-items-center justify-content-center mt-3 me-3 bi bi-person-circle"
                  viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <div class="d-flex flex-column">
                  <h6 class="mb-1 text-dark text-sm">{{ getUsername(c.user_id) }} <span class="text-xs">{{
            formatTimeAgo(c.posted_datetime) }}</span>
                  </h6>
                  <span>{{ c.comment_content }}</span>

                  <span type="button" class="text-xs" @click="openModal(c.id)">reply</span>
                </div>

              </div>

              <ul v-if="c.child != 0">
                <li class="list-group-item border-0 justify-content-between py-1 border-radius-lg">
                  <div v-for="(subc, index) in comment" :key="index">
                    <div v-if="subc.parent_id == c.id" class="d-flex align-items-center my-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="d-flex align-items-center justify-content-center  mb-0 me-3 bi bi-person-circle"
                        viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>
                      <div class="d-flex flex-column">
                        <h6 class="mb-1 text-dark text-sm">{{ getUsername(subc.user_id) }} <span class="text-xs">{{
            formatTimeAgo(subc.posted_datetime) }}</span>
                        </h6>
                        <span>{{ subc.comment_content }}</span>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </div>


          </div>
        </li>
      </ul>

    </div>
  </div>
  <CommentModal v-show="showModals" :userId="userId" :talkId="id" :parentId="currentParentId"
    :commentValue="commentValue" @close="closeModal" :isVisible="true" />

</template>
