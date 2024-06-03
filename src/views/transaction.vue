<script setup>
import { useRouter } from 'vue-router';
import { ref } from "vue";
const router = useRouter();
const TransactionList = [
    {
        hash: "0x3142Osdad1231nwe12414312",
        receiver: "Educate360",
        timestamp: "1/4/2024",
        amount: 8000,
        share: 100,
        status: "Completed"
    }]

const redirectToCertificate = () => {

    router.push('/certificate');
};

const redirectToBill = () => {

    router.push('/campaign-detail');
};

const refund = ref(false);

const togglerefund = () => {
    refund.value = !refund.value;
};
</script>
<template>

    <main class="mt-0 main-content">
        <section>

            <div class="px-6 container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-4">
                            <div class="card-header pb-0">
                                <h3>Investment List</h3>
                            </div>
                            <div class="card-body px-0 pt-0 pb-2">
                                <div class="table-responsive p-0">
                                    <table class="table align-items-center justify-content-center mb-0">

                                        <thead>
                                            <tr>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                    Campagin name
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Share
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Amount
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Date
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Transaction ID
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Status
                                                </th>
                                                <th
                                                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                    Action
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in TransactionList" :key="index">
                                                <td>

                                                    <p class="text-sm font-weight-bold mb-0 t-xxs"
                                                        style="margin-left:20px!important;"> {{
                                                item.receiver }}</p>


                                                </td>
                                                <td>
                                                    <p class="text-sm font-weight-bold mb-0">{{ item.share }}</p>
                                                </td>

                                                <td>
                                                    <h6 class="text-sm font-weight-bold mb-0">RM{{ item.amount }}</h6>
                                                </td>
                                                <td>
                                                    <span class="text-sm font-weight-bold">{{ item.timestamp
                                                        }}</span>
                                                </td>
                                                <td>
                                                    <span class="text-sm font-weight-bold">{{ item.hash
                                                        }}</span>
                                                </td>
                                                <td>
                                                    <span class="text-sm font-weight-bold">{{ item.status
                                                        }}</span>
                                                </td>
                                                <td>
                                                    <span>
                                                        <button @click="redirectToBill" class="btn mb-0 p-2.1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                class="bi bi-info-circle-fill " viewBox="0 0 16 16">
                                                                <path
                                                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                                                            </svg></button>
                                                        <button @click="redirectToCertificate"
                                                            class="btn mb-0 ms-3 p-2.1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                fill="currentColor" height="16" viewBox="0 0 512 512">
                                                                <path
                                                                    d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
                                                            </svg></button><button @click="togglerefund"
                                                            class="btn mb-0 ms-3 p-2.1"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="16"
                                                                fill="currentColor" height="16" viewBox="0 0 576 512">
                                                                <path
                                                                    d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z" />
                                                            </svg></button></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <app-footer />
    <div v-if="refund" class="donation-pop-out border rounded-lg shadow relative max-w-sm">

        <div class="d-flex justify-content-end p-2">
            <button type="button" style="padding:10px;border:none" @click="togglerefund"
                class="bg-transparent rounded-lg text-sm align-items-center">
                <svg width="30" heihgt="30" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>

        <div class="p-6 pt-0 text-center">
            <svg class="text-danger mx-auto" fill="none" stroke="#DC2626" viewBox="0 0 24 24" width="80" heihgt="80"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h5 class="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to sell the shares?</h5>
            <div class="d-flex flex-row align-items-center justify-content-center">
                <div style="background-color:#DC2626;margin-right:40px;padding:10px 20px;" @click="togglerefund"
                    class="text-white font-medium rounded-lg text-base inline-flex align-items-center justify-content-center mr-2 cursor-pointer">
                    Yes, I'm sure
                </div>
                <div style="padding:10px 20px;" @click="togglerefund"
                    class="text-gray-900 bg-white border border-gray-200 font-medium inline-flex align-items-center rounded-lg text-base justify-content-center cursor-pointer">
                    No, cancel
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>
.donation-pop-out {
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
    border-radius: 10px;
}

svg:hover {
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
}

td {
    padding: 15px 15px 15px 0 !important;
}


table {
    width: 100%;
}
</style>