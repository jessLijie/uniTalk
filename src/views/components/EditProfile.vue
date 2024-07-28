<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const user = ref({
  id: null,
  username: '',
  email: '',
  password: '',
});

const editProfile = ref(false);
const user_id = ref(sessionStorage.getItem('userid'));

const talks = ref([]);

// Fetch user data
const fetchUsers = async () => {
  try {
    const response = await fetch(`http://localhost:8080/userList?user_id=${user_id.value}`);
    const userData = await response.json();
    if (userData && userData.length > 0) {
      user.value = userData[0];
    } else {
      console.error('User data is missing.');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const toggleEditProfile = () => {
  editProfile.value = !editProfile.value;
};

const updateUser = async () => {
  try {

    console.log("Username:", user.value.username);
    console.log("Email:", user.value.email);
    console.log("Password:", user.value.password);

    if (!user_id.value) {
      alert('User ID is missing. Cannot update profile.');
      return;
    }

    if (!user.value.username || !user.value.email || !user.value.password) {
      alert('User data is missing. Cannot update profile.');
      return;
    }

    const userID = user_id.value;
    const response = await axios.put(
      `http://localhost:8080/users/${userID}`,
      {
        username: user.value.username,
        email: user.value.email,
        password: user.value.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      alert('Profile updated successfully');
      toggleEditProfile();
    } else {
      alert('Failed to update profile');
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

const fetchLikedPost = async () => {
  try{
        const userID = user_id.value;

        if (!userID) {
          console.error('User ID is missing.');
          return;
        }
        const response = await axios.get(`http://localhost:8080/talks/liked-by/${userID}`);
        console.log("API Response:", response.data); // Log the response data
        talks.value = response.data;
    }catch(error){
        console.error('Error fetching talks:', error);
    }
};

onMounted(() => {
    fetchUsers();
    fetchLikedPost();
});
  
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
              <div class=" d-flex flex-column">
                <div class="button-31" style="margin-bottom: 20px;">
                  <span>Upload Photo</span>
                  <input type="file" class="upload-file-button">
                </div>
                <button class="button-31" role="button" @click="updateUser">Save Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card col-md-8 col22">
        <div class="p-4 form-style-5" style="border-radius: 1rem;">
          <h5 class="mb-4 d-flex justify-content-between align-items-center">
            User Information
            <router-link class="nav-link back-link" to="/">
              Back
            </router-link>
          </h5>
          <div class="row">
            <div class="col-md-10">
              <label for="example-text-input" class="form-control-label">Username</label>
              <input type="text" v-model="user.username" />
            </div>
            <div class="col-md-10">
              <label for="example-text-input" class="form-control-label">Email</label>
              <input type="email" v-model="user.email" />
            </div>
            <div class="col-md-10">
              <label for="example-text-input" class="form-control-label">Password</label>
              <input class="form-control" type="text" v-model="user.password" />
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
              <div class=" d-flex">
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
          <div v-if="user && user.username">
            <div>
              <h6 style="display:inline-block; width:30%;">Username</h6>
              <p style="display:inline-block;">{{ user.username }}</p>
            </div>
            <br>
            <div>
              <h6 style="display:inline-block; width:30%;">Email </h6>
              <p style="display:inline-block;">{{ user.email }}</p>
            </div>
            <br>
            <div>
              <h6 style="display:inline-block; width:30%;">Password </h6>
              <p style="display:inline-block;">{{ user.password }}</p>
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
          </div>
          <div class="table-responsive pe-3">
            <table class="table align-items-center">
              <tbody>
                <tr v-for="(talk, index) in talks" :key="index">
                  <td class="w-30">
                    <a :href="`/talks/${talk.id}`">
                    <div class="px-2 py-1 d-flex align-items-center">
                      <div class="d-flex px-2 align-items-center justify-content-center">
                        <a :href="`/talks/${talk.id}`">
                          <i class="rounded-circle me-2 ni ni-bold-right" alt="hash"></i>
                        </a>                      
                      </div>
                      <div class="ms-2">
                        <h6 class="mb-0 text-sm">{{ talk.title }}</h6>
                        <h7 class="mb-0 text-xs">{{ talk.content }}</h7>
                      </div>
                    </div>
                    </a>
                  </td>
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
            icon: { component: 'fa fa-book', background: 'dark' },
            label: 'Study',
            description: 'Total <strong>200 </strong>talks',
          },
        ]" />
      </div>
    </div>
  </div>
</div>
</template>





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

.back-link {
  margin-left: auto; 
}

.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
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
