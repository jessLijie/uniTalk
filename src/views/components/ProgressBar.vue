<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
</script>
<template>
  <div class="card mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">We need your help</h6>
        </div>


        <div class="col-6 text-end">
          <argon-button color="dark" variant="gradient">
            <i class="bi bi-heart-fill"></i>
            Donate Now
          </argon-button>
        </div>
        <div class="col-12 text-end p-3">
          <div class="progress" style="height:40px;border-radius:10px;">
            <div class="progress-bar"  role="progressbar" style="width: 50%;border-radius:10px;" aria-valuenow="25" aria-valuemin="0"
              aria-valuemax="100">50%</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <div class="col-md-4 mb-md-0 mb-4">
          <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
            <h3>Our Goal</h3>
            <h6>100000ETH</h6>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
            <h3>Raised</h3>
            <h6>5000ETH</h6>
          </div>
        </div>
        <div class="col-md-4 mb-md-0 mb-4">
          <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-column">
            <h3>Completed</h3>
            <h6>50%</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
