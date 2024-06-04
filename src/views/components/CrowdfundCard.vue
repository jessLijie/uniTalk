<script setup>
defineProps({
    user: {
        type: String,
        default: "Undefined",
    },
    time: {
        type: String,
        default: "Undefined",
    },
    content: {
        type: String,
        default: "Undefined",
    },
    comment: {
        type: String,
        default: "Undefined",
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
</script>
<template>
    <div class="container my-4">
        <div class="post">
            <router-link class="nav-link text-dark" to="/campaign-detail">
                <div class="d-flex">
                    <img src="https://via.placeholder.com/50" alt="User Avatar" width="50" height="50">
                    <div class="mx-4">
                        <div class="name">{{ user }}</div>
                        <div class="text-muted">{{ time }}</div>
                    </div>
                </div>
                <div class="my-2">
                    <p>{{ content }}</p>
                    <img src="https://via.placeholder.com/500x300" alt="Post Image" class="img-fluid">
                </div>
            </router-link>
            <div class="d-flex justify-content-between px-3 mb-3">
                <div>like {{ like }}</div>
                <div>Comment {{ comment }}</div>
            </div>
            <div class="d-flex bg-success p-2">
                <button class="border-0 bg-success text-white w-100 my-0">Like</button>
                <button class="border-0 bg-success text-white w-100 my-0">Comment</button>
                <button class="border-0 bg-success text-white w-100 my-0">Share</button>
            </div>
        </div>
    </div>
</template>