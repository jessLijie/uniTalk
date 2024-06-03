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
    <router-link class="nav-link text-dark" to="/campaign-detail">
        <div class="card card-profile mb-6 ">
            <div>
                <img src="../../assets/img/bg-profile.jpg" alt="Image placeholder" class="card-img-top" />
                <span :class="{ 'card mask opacity-6': status === 'Closed' }"></span>
            </div>
            <div class="card-body py-3">
                <div class="text-center">
                    <h5>
                        {{ title }}
                    </h5>
                    <div class="d-flex justify-content-center align-items-center gap-2 m-1">
                        <i class="ni ni-tag text-sm"></i>
                        <h6 class="m-0 ">{{ category }}</h6>
                    </div>
                    <div>
                        {{ objective }}
                    </div>
                </div>
            </div>
            <div class="row px-3 pb-4">
                <div class="col-12 d-flex justify-content-center">
                    <div class="d-grid text-center justify-content-center col-4">
                        <span class="text-lg font-weight-bolder">RM{{ goal }}</span>
                        <span class="text-sm" :class="{ 'opacity-8': status !== 'Closed' }">Goals</span>
                    </div>
                    <div class="d-grid text-center justify-content-center  col-4">
                        <span class="text-lg font-weight-bolder">{{ investor }}</span>
                        <span class="text-sm" :class="{ 'opacity-8': status !== 'Closed' }">Investor</span>
                    </div>
                    <div class="d-grid text-center justify-content-center col-4">
                        <span class="text-lg font-weight-bolder">RM{{ raised }}</span>
                        <span class="text-sm" :class="{ 'opacity-8': status !== 'Closed' }">Raised</span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>