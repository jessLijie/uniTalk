<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import ArgonButton from "@/components/ArgonButton.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

const body = document.getElementsByTagName("body")[0];

const store = useStore();

onMounted(() => {
  store.state.isAbsolute = true;
  setNavPills();
  setTooltip();
});
onBeforeMount(() => {
  store.state.layout = "profile-overview";
  store.state.imageLayout = "profile-overview";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = true;
  body.classList.add("profile-overview");
});
onBeforeUnmount(() => {
  store.state.layout = "default";
  store.state.isAbsolute = false;
  store.state.imageLayout = "default";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = false;
  body.classList.remove("profile-overview");
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
            <!-- <argon-button color="success" size="sm" class="ms-auto">Settings</argon-button> -->
          </div>
        </div>
        <div class="card-body">
          <p class="text-uppercase text-sm">General Information</p>
            <div class="col-md-12">
              <label for="investmentName" class="form-control-label">Talk Content</label>
              <argon-input type="text" placeholder="Enter investment name"></argon-input>
            </div>
            <div class="col-md-12">
              <label for="investmentPoster" class="form-control-label">Image</label>
              <br>
              <input type="file" class="form-control" id="investmentPoster" accept="image/*" />
            </div>
            <div class="col-md-6">
              <label for="plan" class="form-control-label">Topic
                <span class="info-icon" type="button" data-bs-toggle="modal" data-bs-target="#info-modal">
                  <i class="fas fa-info-circle"></i>
                </span>
              </label>
              <select class="form-control" id="plan">
                <option value="---Select topic---" selected disabled>--Select topic--</option>
                <option value="Food">Food</option>
                <option value="Technology">Technology</option>
                <option value="Fashion">Fashion</option>
                <option value="Sports">Sports</option>
                <option value="Transport">Transport</option>
              </select>
            </div>


          <hr class="horizontal dark" />
          <div class="row">
            <div class="col-md-6">
              <div class="modal fade" id="info-modal" tabindex="-1" aria-labelledby="ModalLabelD" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="ModalLabelD"><i class="fas fa-bookmark"></i> Plan offered</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="../assets/img/plan.jpg" alt="Info Image" width="100%">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <argon-button color="success" size="sm" class="ms-auto" style="float: right;">Submit</argon-button>
        </div>
      </div>
    </div>

  </main>
</template>
