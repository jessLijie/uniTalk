<script setup>

const transactionList = [{
  hash: "OMG!! Double decker bus caught fire in Lagos",
  sender: "0x2256dfq424efrt382341c",
  //   receiver: "Anonymous",
  amount: 8000
},
{
  hash: "Hey guys I found out that the new iPhone 88 is out!!",
  sender: "0x2256dfq424efrt382341",
  //   receiver: "Qian888",
  amount: 7000
},
{
  hash: "What do you think about the new song of Ariana...",
  sender: "0x2256dfq424efrt382341",
  //   receiver: "Jess666",
  amount: 10000
}, {
  hash: "Did you guys know that we can actually fly to t...",
  sender: "0x2256dfq424efrt382341",
  //   receiver: "Anonymous",
  amount: 10000
}, {
  hash: "I hate it when my friends don't reply my messages",
  sender: "0x2256dfq424efrt382341",
  //   receiver: "Loy Chai",
  amount: 10000
},];
</script>
<template>

  <div class="row">

    <div v-if="editProfile" class="row">
      <div class="col-md-4 col11 d-flex justify-content-center align-items-center" style="background-color:white;">
        <div class="container d-flex justify-content-center">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            <div class="justify-content-center align-items-center d-flex mb-4"
              style="background-color:white;border-radius:50%;height:150px;width:150px; ">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                style="background-color:white;border-radius:50%;height:150px;width:150px; " />
            </div>
            <div class=" d-flex flex-row justify-content-center align-items-center gap-2  mt-4">
              <div class=" d-flex flex-column"> <!-- HTML !-->
                <div class="button-31" style="margin-bottom: 20px;">
                  <span>Upload Photo</span>
                  <input type="file" class="upload-file-button">
                </div>
                <button class="button-31" role="button" @click="toggleEditProfile">Save Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-8 col22">
        <div class="p-4 form-style-5" style="border-radius: 1rem;">
          <h5 class="mb-4">User Information</h5>
          <div class="row">
            <div class="col-md-10">
              <label for="example-text-input" class="form-control-label">Username</label>
              <input type="text" :value="user[0].username" />
            </div>
            <div class="col-md-10">
              <label for="example-text-input" class="form-control-label">Email</label>
              <input type="email" :value="user[0].email" />
            </div>
            <div class="col-md-10">
              <label for="example-text-input" class="form-control-label">Password</label>
              <input class="form-control" type="text" :value="user[0].password" />
            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center col11" style="background-color:white;">
        <div class="container d-flex justify-content-center">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            <div class="justify-content-center align-items-center d-flex mb-4"
              style="background-color:white;border-radius:50%;height:150px;width:150px; ">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                style="background-color:white;border-radius:50%;height:150px;width:150px; " />
            </div>
            <div class=" d-flex flex-row justify-content-center align-items-center gap-2  mt-4">
              <div class=" d-flex"> <!-- HTML !-->
                <button class="button-31" role="button" @click="toggleEditProfile">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-8 col22">
        <div class="card-header pb-0">
          <div class="d-flex align-items-center">
          </div>
        </div>
        <div class="card-body">
          <h5 class="mb-4">User Information</h5>
          <div v-if="user && user.length > 0">
            <div>
              <h6 style="display:inline-block; width:30%;">Username</h6>
              <p style="display:inline-block;">{{ user[0].username }}</p>
            </div>
            <br>
            <div>
              <h6 style="display:inline-block; width:30%;">Email </h6>
              <p style="display:inline-block;">{{ user[0].email }}</p>
            </div>
            <br>
            <div>
              <h6 style="display:inline-block; width:30%;">Password </h6>
              <p style="display:inline-block;">{{ user[0].password }}</p>
            </div>
          </div>
          <div v-else>
            <p>Loading user data...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-7 mb-lg-0 mb-4">
        <div class="card px-3">
          <div class="p-3 pb-0 card-header">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="mb-0">Liked Post</h6>
              <router-link class="nav-link" to="/signin">
                View All
              </router-link>
            </div>
          </div>
          <div class="table-responsive pe-3">
            <table class="table align-items-center">
              <tbody>
                <tr v-for="(transaction, index) in transactionList" :key="index">
                  <td class="w-30">
                    <div class="px-2 py-1 d-flex align-items-center">
                      <div class="d-flex px-2 align-items-center justify-content-center">
                        <i class="rounded-circle me-2 ni ni-bold-right" alt="hash"></i>
                      </div>
                      <div class="ms-2">
                        <p class="mb-0 text-xs font-weight-bold">
                          Topic:
                        </p>
                        <h6 class="mb-0 text-sm">{{ transaction.hash }}</h6>
                      </div>
                    </div>
                  </td>
                  <!-- <td>
                            <div class="text-center">
                              <h6 class="mb-0 text-xs">Posted by {{ transaction.receiver }}</h6>
                            </div>
                          </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <categories-list :categories="[
          {
            icon: {
              component: 'fa fa-cutlery',
              background: 'dark',
            },
            label: 'Food',
            description: 'Total <strong>888 </strong>talks',
          },
          {
            icon: {
              component: 'ni ni-world-2',
              background: 'dark',
            },
            label: 'Technology',
            description: 'Total <strong>254 </strong>talks',
          },
          {
            icon: { component: 'fa fa-heart', background: 'dark' },
            label: 'Fashion',
            description: 'Total <strong>100 </strong>talks',
          },
          {
            icon: { component: 'fa fa-futbol-o', background: 'dark' },
            label: 'Sport',
            description: 'Total <strong>50 </strong>talks',
          }, {
            icon: { component: 'fa fa-bus', background: 'dark' },
            label: 'Transport',
            description: 'Total <strong>5 </strong>talks',
          },
        ]" />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      user:[],
      editProfile: false,
      user_id: localStorage.getItem('userid'),
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch(`http://localhost:8080/userList?user_id=${this.user_id}`);
        this.user = await response.json();
        console.log('User:', this.user);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    toggleEditProfile() {
      this.editProfile = !this.editProfile;
    },

  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

}

col-md-8 {
  padding-left: 0 !important;
}

@media (min-width: 768px) {
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
    padding-left: 0 !important;
  }
}


.button-31 {
  background: #1abc9c;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
}

.button-31:hover,
.button-31:focus {
  opacity: .75;
}

.formans {
  padding-left: 5px;
}

.number {
  background: #1abc9c;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 15px 15px 15px 0px;
}

.form-style-5 {
  background: white;
}

.form-style-5 fieldset {
  border: none;
}

.form-style-5 legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

.form-style-5 label {
  display: block;
  margin-bottom: 8px;
}

.form-style-5 input[type="text"],
.form-style-5 input[type="date"],
.form-style-5 input[type="datetime"],
.form-style-5 input[type="email"],
.form-style-5 input[type="number"],
.form-style-5 input[type="search"],
.form-style-5 input[type="time"],
.form-style-5 input[type="url"],
.form-style-5 textarea,
.form-style-5 select {
  border: 1px groove rgb(198, 198, 198);
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  color: #c4c8cb;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}

.form-style-5 input[type="text"]:focus,
.form-style-5 input[type="date"]:focus,
.form-style-5 input[type="datetime"]:focus,
.form-style-5 input[type="email"]:focus,
.form-style-5 input[type="number"]:focus,
.form-style-5 input[type="search"]:focus,
.form-style-5 input[type="time"]:focus,
.form-style-5 input[type="url"]:focus,
.form-style-5 textarea:focus,
.form-style-5 select:focus {
  background: #e7e7e7;
}

.form-style-5 .number {
  background: #1abc9c;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 15px 15px 15px 0px;
}

.form-style-5 input[type="submit"],
.form-style-5 input[type="button"] {
  position: relative;
  display: block;
  padding: 19px 39px 18px 39px;
  color: #FFF;
  margin: 0 auto;
  background: #1abc9c;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid #16a085;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
}

.form-style-5 input[type="submit"]:hover,
.form-style-5 input[type="button"]:hover {
  background: #109177;
}

.col11 {
  border-radius: 1rem 0 0 1rem !important;
}

.col22 {
  border-radius: 0 1rem 1rem 0 !important;
}

@media screen and (max-width: 765px) {
  .col11 {
    border-radius: 1rem 1rem 0rem 0rem !important;
  }

  .col22 {
    border-radius: 0rem 0rem 1rem 1rem !important;
  }
}
</style>
