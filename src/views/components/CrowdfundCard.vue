<script setup>
defineProps({
    title: {
        type: String,
        default: "Undefined",
    },
    category: {
        type: String,
        default: "Undefined",
    },
    objective: {
        type: String,
        default: "Undefined",
    },
    goal: {
        type: String,
        default: "Undefined",
    },
    raised: {
        type: String,
        default: "Undefined",
    },
    investor: {
        type: String,
        default: "Undefined",
    },
    status: {
        type: String,
        default: "Undefined",
    },
});
</script>
<template>
    <div class="container my-4">
        <div class="post">
            <router-link class="nav-link text-dark" to="/campaign-detail">
                <div class="d-flex">
                    <img src="https://via.placeholder.com/50" alt="User Avatar" width="50" height="50">
                    <div class="mx-4">
                        <div class="name">John Doe</div>
                        <div class="text-muted">5 hrs ago</div>
                    </div>
                </div>
                <div class="my-2">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>
                    <img src="https://via.placeholder.com/500x300" alt="Post Image" class="img-fluid">
                </div>
            </router-link>
            <div class="d-flex justify-content-between px-3 mb-3">
                <div>like 100</div>
                <div>Comment 100</div>
            </div>
            <div class="d-flex bg-success p-2">
                <button class="border-0 bg-success text-white w-100 my-0">Like</button>
                <button class="border-0 bg-success text-white w-100 my-0">Comment</button>
                <button class="border-0 bg-success text-white w-100 my-0">Share</button>
            </div>
        </div>
    </div>
</template>