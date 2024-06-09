<!-- <script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
const temp = ref([
    {
        "id":"1",
        "password":"abcde",
        "username": "Qian888",
        "email": "qianhui@example.com",
        "total_talk": "15"
    },
    {
        "id":"2",
        "password":"abcde",
        "username": "Jess666",
        "email": "jess@gmail.com",
        "total_talk": "20"
    },
    {
        "id":"3",
        "password":"abcde",
        "username": "Loy Chai",
        "email": "loyzc@gmail.com",
        "total_talk": "333"
    }
]
);


const currentPage = ref(1);
const maxPageSize = ref(null);
const listData = ref([]);
const sortBy = ref(null);
const sortOrder = ref('asc');

function sortData(criteria) {
    if (sortBy.value === criteria) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = criteria;
        sortOrder.value = 'asc';
    }

    listData.value.sort((a, b) => {
        const factor = sortOrder.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}


const router = useRouter();
const beforeEachGuard = (to, from, next) => {
    closeModal();
    next();
};

router.beforeEach(beforeEachGuard);

onBeforeUnmount(() => {
    router.beforeEach((to, from, next) => {

        if (beforeEachGuard === router.beforeEach) {
            router.beforeEach(null);
        }
        next();
    });
});

function closeModal() {
    document.body.classList.remove('modal-open');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    if (modalBackdrop) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
    }
}

const goToPreviousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
    sliceTempArray();
}

const goToNextPage = () => {
    if (currentPage.value < maxPageSize.value) {
        currentPage.value++;
    }
    sliceTempArray();
}

function setMaxPageSize() {
    maxPageSize.value = Math.ceil(temp.value.length / 6);
}

function sliceTempArray() {
    const startIndex = (currentPage.value - 1) * 6;
    const endIndex = startIndex + 6;
    listData.value = temp.value.slice(startIndex, endIndex);
}

onMounted(() => {
    setMaxPageSize();
    sliceTempArray();
})

const role = ref(localStorage.getItem('role'));
const store = useStore();
onBeforeMount(() => {
  role.value = localStorage.getItem('role');
  console.log(role.value);
  if (role.value !== 'null') {
    store.state.showNavbar = true;
    store.state.showFooter = true;
    store.state.hideConfigButton = true;
  } else {
    store.state.hideConfigButton = true;
    store.state.showNavbar = false;
    store.state.showSidenav = false;
    store.state.showFooter = false;
  }
})

onBeforeUnmount(() => {
  role.value = localStorage.getItem('role');
  if (role.value !== 'null') {
    store.state.layout = "default";
    store.state.isAbsolute = false;
    store.state.imageLayout = "default";
    store.state.showNavbar = true;
    store.state.showFooter = true;
    store.state.hideConfigButton = false;
  } else {
    store.state.hideConfigButton = false;
    store.state.isAbsolute = false;
    store.state.showNavbar = true;
    store.state.showSidenav = true;
    store.state.showFooter = true;
    // body.classList.add("bg-gray-100");
  }
})

</script> -->

<template>
    <div class="card m-4">
        <div class="card-header pb-0 d-flex justify-content-between align-items-center">
            <h5>User Management</h5>

            <div class="d-flex">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control rounded-start rounded-0" placeholder="name"
                    v-model="searchVal"/>
                </div>
                <button id="search-button" type="button" class="btn btn-success rounded-0 rounded-end" v-on:click="fetchUsers()">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center justify-content-center mb-0">
                    <thead>
                        <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">
                                ID
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('username')"
                                    style="cursor: pointer">
                                    UserName
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'username' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'username' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Email
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Total talks
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>
                                <h6 class="item ps-3">{{ user.id }}</h6>
                            </td>
                            <td>
                                <h6 class="item ps-3">{{ user.username }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ user.email }}</h6>
                            </td>
                            <td>
                                <h6 class="item">user.total_talk</h6>
                            </td>
                            <td>
                                <button type="button" class="btn mb-0" data-bs-toggle="modal"
                                    :data-bs-target="'#row' + user.id"><i class="fas fa-edit"></i></button>

                                <!-- Edit Modal -->
                                <div class="modal fade" :id="'row' + user.id" tabindex="-1" aria-labelledby="ModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="ModalLabel">Edit</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <label for="username" class="form-label">Username:</label>
                                                        <input type="text" class="form-control" id="username"
                                                            placeholder="Enter name" :value="user.username">
                                                    </div>
                                                    
                                                    <div class="mb-3">
                                                        <label for="email" class="form-label">Email:</label>
                                                        <input type="email" class="form-control" id="email"
                                                            :value="user.email">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="walletAddress" class="form-label">Password:</label>
                                                        <input type="text" class="form-control" id="password"
                                                            :value="user.password">
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td colspan="7">
                                <div class="d-flex justify-content-end me-4">
                                    <button class="btn my-0 me-2" @click="goToPreviousPage()"> <i
                                            class="fas fa-chevron-left"></i> </button>
                                    <span
                                        class="pageNum border rounded d-flex align-items-center justify-content-center"
                                        style="min-width: 30px">{{ currentPage }}</span>
                                    <button class="btn my-0 ms-2" @click="goToNextPage()"> <i
                                            class="fas fa-chevron-right"></i> </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    data(){
        return {
            users: [],
            sortBy: '',
            sortOrder: 'asc',
            currentPage: 1,
            searchVal: '',
        }
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await fetch(`http://localhost:8080/userList?search_val=${this.searchVal}`);
                this.users = await response.json();
                this.filteredUsers = this.users;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        sortData(criteria) {
            if (this.sortBy === criteria) {
                this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortBy = criteria;
                this.sortOrder = 'asc';
            }

            this.users.sort((a, b) => {
                const factor = this.sortOrder === 'asc' ? 1 : -1;
                if (a[criteria] < b[criteria]) return -1 * factor;
                if (a[criteria] > b[criteria]) return 1 * factor;
                return 0;
            });
        },
        goToPreviousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
            this.sliceTempArray();
        },
        goToNextPage() {
            if (this.currentPage < this.maxPageSize) {
                this.currentPage++;
            }
            this.sliceTempArray();
        },
        sliceTempArray() {
            const startIndex = (this.currentPage - 1) * 6;
            const endIndex = startIndex + 6;
            this.users = this.users.slice(startIndex, endIndex);
        },
        searchUsers() {
            this.filteredUsers = this.users.filter(user => {
                return user.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                       user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        },
    },
      
    mounted() {
        this.fetchUsers();
    },
})
</script>

<style>
.item {
    margin-bottom: 0;
    font-size: small;
}
</style>
