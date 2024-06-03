<script setup>
defineProps({
  title: {
    type: String,
    default: "Categories",
  },
  categories: {
    type: Array,
    required: true,
    icon: {
      component: String,
      background: String,
    },
    label: String,
    description: String,
  },
});
</script>
<template>
  <div class="card px-3">
    <div class="p-3 pb-0 card-header d-flex justify-content-between align-items-center mb-1">
      <h6 class="mb-0">{{ title }}</h6>
      <router-link class="nav-link" to="/crowdfundlist">
        Explore All
      </router-link>
    </div>
    <div class="p-3 py-1 card-body">
      <ul :class="`list-group `">
        <li v-for="(
            { icon: { component, background }, label, description }, index
          ) of categories" :key="index"
          :class="`mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg px-0`">
          <div class="d-flex align-items-center">
            <div :class="`text-center shadow icon icon-shape icon-sm bg-gradient-${background} me-3
        }`">
              <i :class="`${component} text-white opacity-10`"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ label }}</h6>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span class="text-xs" v-html="description"> </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
