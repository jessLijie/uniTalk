<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const liking = ref(false);
const router = useRouter();

const userId = ref(sessionStorage.getItem("userid"));
const props = defineProps({
    id: {
        type: String,
        default: "Undefined",
    },
    user: {
        type: String,
        default: "Undefined",
    },
    time: {
        type: String,
        default: "Undefined",
    },
    title: {
        type: String,
        default: "Undefined",
    },
    content: {
        type: String,
        default: "Undefined",
    },
    comment: {
        type: String,
        default: "0",
    },
    like: {
        type: String,
        default: "Undefined",
    },
    img: {
        type: String,
        default: "Undefined",
    }
});

var likingvalue = ref(props.like);

const checkLike = async () => {
    try {
        const response = await fetch(`http://localhost:8080/talks/check-like/${userId.value}/${props.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            liking.value = data.liked;
        }
    } catch (error) {
        console.error('Error checking like status:', error);
    }
};

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

const gotopage = async (id) => {
    router.push(`/campaign-detail/${id}`);
}

onMounted(() => {
    checkLike();
});

</script>

<template>
    <div class="container my-4">
        <div class="post">
            <router-link class="nav-link text-dark" :to="`/talks/${id}`">
                <div class="d-flex">
                    <img src="https://via.placeholder.com/50" alt="User Avatar" width="50" height="50">
                    <div class="mx-4">
                        <div class="name">{{ props.user }}</div>
                        <div class="text-muted">{{ props.time }}</div>
                    </div>
                </div>
                <div class="my-2">
                    <h3>{{ props.title }}</h3>
                    <p>{{ props.content }}</p>
                    <img :src="img" alt="Post Image" class="img-fluid" width="550" height="550">
                </div>
            </router-link>
            <div class="d-flex justify-content-between px-3 mb-3">
                <div>like {{ likingvalue }}</div>
                <div>Comment {{ props.comment }}</div>
            </div>
            <div class="d-flex bg-success p-2">
                <button
                    @click=" liking ? unlikePost(props.id, likingvalue, userId) : likePost(props.id, likingvalue, userId)"
                    class="border-0 bg-success text-white w-100 my-0">
                    {{ liking ? 'Unlike' : 'Like' }}
                </button>
                <button @click="gotopage(props.id)" class="border-0 bg-success text-white w-100 my-0">Comment</button>
                <button @click="gotopage(props.id)" class="border-0 bg-success text-white w-100 my-0">Share</button>
            </div>
        </div>
    </div>
</template>