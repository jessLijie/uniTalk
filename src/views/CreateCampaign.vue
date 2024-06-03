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
            <p class="mb-0">Create Campaign</p>
            <!-- <argon-button color="success" size="sm" class="ms-auto">Settings</argon-button> -->
          </div>
        </div>
        <div class="card-body">
          <p class="text-uppercase text-sm">General Information</p>
          <div class="row">
            <div class="col-md-6">
              <label for="investmentName" class="form-control-label">Campaign Name</label>
              <argon-input type="text" placeholder="Enter investment name"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="investmentPoster" class="form-control-label">Campaign Poster (Image
                File Format)</label>
              <br>
              <input type="file" class="form-control" id="investmentPoster" accept="image/*" />
            </div>
            <div class="col-md-6">
              <label for="investmentPurpose" class="form-control-label">Investment Purpose</label>
              <argon-input type="text" placeholder="Enter investment description"></argon-input>

            </div>
            <div class="col-md-6">
              <label for="investmentIssuer" class="form-control-label">
                Issuer Name</label>
              <argon-input type="text" placeholder="Enter issuer"></argon-input>
            </div>
          </div>

          <hr class="horizontal dark" />

          <p class="text-uppercase text-sm">Investment Details</p>
          <div class="row">
            <div class="col-md-6">
              <label for="investmentPricePerShare" class="form-control-label">Price Per
                Share (ETH)</label>
              <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="investmentTargetAmount" class="form-control-label">Target
                Amount (ETH)</label>
              <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="investmentDeadline" class="form-control-label">Deadline
                (dd/mm/yy hh:mm)</label>
              <argon-input type="datetime-local" placeholder="Select deadline"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="investmentValuation" class="form-control-label">Valuation</label>
              <argon-input type="text" placeholder="Enter valuation"></argon-input>
            </div>
          </div>

          <hr class="horizontal dark" />

          <p class="text-uppercase text-sm">Investment Breakdown</p>
          <div class="row">
            <div class="col-md-6">
              <label for="minInvestment" class="form-control-label">Minimum Investment
                (ETH)</label>
              <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="maxInvestment" class="form-control-label">Maximum Investment
                (ETH)</label>
              <argon-input type="number" step="0.01" placeholder="0.00"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="minSharesOffered" class="form-control-label">Minimum Number of Shares
                Offered</label>
              <argon-input type="number" placeholder="Enter minimum shares"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="maxSharesOffered" class="form-control-label">Maximum Number of Shares
                Offered</label>
              <argon-input type="number" placeholder="Enter maximum shares"></argon-input>
            </div>
            <div class="col-md-6">
              <label for="offeringType" class="form-control-label">Offering Type</label>
              <select class="form-control" id="offeringType">
                <option value="---Select offering type---" selected disabled>--Select offering
                  type--</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="assetType" class="form-control-label">Asset Type</label>
              <select class="form-control" id="assetType">
                <option value="---Select asset type---" selected disabled>--Select asset type--
                </option>
                <option value="equity">Equity</option>
                <option value="debt">Debt</option>
                <option value="real estate">Real Estate</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="sharesOffered" class="form-control-label">Shares Offered</label>
              <select class="form-control" id="sharesOffered">
                <option value="---Select shares offered---" selected disabled>--Select shares
                  offered--</option>
                <option value="common">Common</option>
                <option value="preferred">Preferred</option>
              </select>
            </div>
          </div>

          <hr class="horizontal dark" />
          <p class="text-uppercase text-sm">Choose plan</p>
          <div class="row">
            <div class="col-md-6">
              <label for="plan" class="form-control-label">Plan chosen
                <span class="info-icon" type="button" data-bs-toggle="modal" data-bs-target="#info-modal">
                  <i class="fas fa-info-circle"></i>
                </span>
              </label>
              <select class="form-control" id="plan">
                <option value="---Select plan offered---" selected disabled>--Select plan offered--</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
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
