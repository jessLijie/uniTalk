<script setup>
import { ref } from "vue";
const editProfile = ref(false);

const toggleEditProfile = () => {
    editProfile.value = !editProfile.value;
};

const sessionData = ref(localStorage.getItem('role'));
</script>
<template>

    <div class="row">

        <div v-if="editProfile" class="row">
            <div class="col-md-4 col11 d-flex justify-content-center align-items-center"
                style="background-color:white;">
                <div class="container d-flex justify-content-center">
                    <div class=" image d-flex flex-column justify-content-center align-items-center">
                        <div class="justify-content-center align-items-center d-flex mb-4"
                            style="background-color:white;border-radius:50%;height:150px;width:150px; ">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
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
                    <h5 class="mb-4"><span class="number">1</span> User Information</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Username</label>
                            <input type="text" value="lucky.jesse" />
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Citizenship</label>
                            <input type="email" value="Malaysian" />
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">First name</label>
                            <input class="form-control" type="text" value="Jesse" />
                        </div>
                        <div class="col-md-6">
                            <label for="example-text-input" class="form-control-label">Last name</label>
                            <input type="text" value="Lucky" />
                        </div>
                    </div>
                    <hr />
                    <h5 class="mb-4"><span class="number">2</span> Contact Information</h5>
                    <div class="row">
                        <div class="col-md-12 row mb-1">
                            <div class="col-md-7">
                                <label for="example-text-input" class="form-control-label">Wallet Address</label>
                                <button class="button-31" style="margin-bottom: 20px;">Connect to Metamask</button>
                            </div>
                            <div class="col-md-5" v-if="sessionData === 'Issuer'">
                                <label for="example-text-input" class="form-control-label">Documentation</label>
                                <div class="button-31" style="margin-bottom: 20px;">
                                    <span>Upload Document</span>
                                    <input type="file" class="upload-file-button">
                                </div>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="example-text-input" class="form-control-label">Phone Number</label>
                            <input type="text" value="5855555555" />
                        </div>
                        <div class="col-md-8">
                            <label for="example-text-input" class="form-control-label">Email Address</label>
                            <input type="text" value="jesse@example.com" />
                        </div>

                    </div>

                </div>
            </div>

        </div>
        <div v-else class="row">
            <div class="col-md-4 d-flex justify-content-center align-items-center col11"
                style="background-color:white;">
                <div class="container d-flex justify-content-center">
                    <div class=" image d-flex flex-column justify-content-center align-items-center">
                        <div class="justify-content-center align-items-center d-flex mb-4"
                            style="background-color:white;border-radius:50%;height:150px;width:150px; ">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
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
                    <h5 class="mb-4"><span class="number">1</span> User Information</h5>
                    <div>
                        <div>
                            <h6 style="display:inline-block; width:30%;">Username:</h6>
                            <p style="display:inline-block;">Jesse</p>
                        </div>
                        <div>
                            <h6 style="display:inline-block; width:30%;">Citizenship:</h6>
                            <p style="display:inline-block;">Malaysian</p>
                        </div>
                        <div>
                            <h6 style="display:inline-block; width:30%;">Name:</h6>
                            <p style="display:inline-block;">Wong Yu Hui</p>
                        </div>

                    </div>

                    <hr />
                    <h5 class="mb-4"><span class="number">2</span> Contact Information</h5>
                    <div>
                        <div>
                            <h6 style="display:inline-block; width:30%;">Wallet Address:</h6>
                            <p style="display:inline-block;">4338984023898404</p>
                        </div>
                        <div>
                            <h6 style="display:inline-block; width:30%;">Phone Number:</h6>
                            <p style="display:inline-block;">5858475</p>
                        </div>
                        <div>
                            <h6 style="display:inline-block; width:30%;">Email Address:</h6>
                            <p style="display:inline-block;">hello@gmail.com</p>
                        </div>
                    </div>

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

@media screen and (max-width: 765px) {
    .col11 {
        border-radius: 1rem 1rem 0rem 0rem !important;
    }

    .col22 {
        border-radius: 0rem 0rem 1rem 1rem !important;
    }
}
</style>
