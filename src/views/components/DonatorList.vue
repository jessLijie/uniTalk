<script setup>
import { ref } from 'vue';

const temp = ref([
  { name: 'John Doe', time: '27 March 2020, at 12:30 PM', amount: 160000 },
  { name: 'Jane Smith', time: '28 March 2020, at 1:45 PM', amount: 160000 },
  { name: 'Michael Johnson', time: '29 March 2020, at 3:00 PM', amount: 160000 },
  { name: 'Emily Brown', time: '30 March 2020, at 2:15 PM', amount: 160000 },
  { name: 'David Wilson', time: '31 March 2020, at 4:30 PM', amount: 160000 },
]);
</script>
<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Investor List</h6>
          <p>5 investor</p>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
          </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <li v-for="donation in temp" :key="donation.name"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              class="d-flex align-items-center justify-content-center  mb-0 me-3 bi bi-person-circle"
              viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">{{ donation.name }}</h6>
              <span class="text-xs">{{ donation.time }}</span>
            </div>
          </div>
          <div class="d-flex align-items-center text-success">
            + RM {{ Math.abs(donation.amount) }}  </div>
        </li>
      </ul>

    </div>
  </div>
</template>
