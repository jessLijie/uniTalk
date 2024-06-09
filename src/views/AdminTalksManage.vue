<!-- <script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

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

</script> -->

<style>
.nav-btn:not(.active) {
    color: gray !important;
    /* Change the color to gray */
}

.nav-btn.active {
    color: #344767 !important;
    /* Change the color to gray */
    font-weight: 600 !important;
}
</style>
<template>
    <div class="card m-4">
        <ul class="nav nav-tabs mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-btn nav-link active" id="pills-approved-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-approve" type="button" role="tab" aria-controls="pills-approve"
                    aria-selected="true">Approved ({{ approvedTalks.length }})</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-btn nav-link" id="pills-pending-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-pending"
                    aria-selected="false">Pending ({{ pendingTalks.length }})</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <!-- Approved -->
            <div class="tab-pane fade show active" id="pills-approve" role="tabpanel"
                aria-labelledby="pills-approved-tab" tabindex="0">
                <div class="card-header py-0 d-flex justify-content-between align-items-center">
                    <h5>Approved Talks</h5>

                    <div class="d-flex">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control rounded-start rounded-0"
                                placeholder="Search" />
                        </div>
                        <button id="search-button" type="button" class="btn btn-success rounded-0 rounded-end">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center justify-content-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        <div class="d-flex align-items-center" @click="sortData('title')"
                                            style="cursor: pointer">
                                            Talks Title
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'title' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'title' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>

                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('category')"
                                            style="cursor: pointer">
                                            Topic
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('author')"
                                            style="cursor: pointer">
                                            Author
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'author' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'author' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('posted_datetime')"
                                            style="cursor: pointer">
                                            Posted Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'posted_datetime' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'posted_datetime' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('like')"
                                            style="cursor: pointer">
                                            Like(s)
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'like' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'like' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('comment')"
                                            style="cursor: pointer">
                                            Comment(s)
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'comment' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'comment' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                                        style="text-align: center;">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="approvedTalks.length > 0">
                                    <tr v-for="(item, index) in approvedTalks" :key="index">
                                        <td>
                                            <h6 class="item ps-3">{{ truncatedTitle(item.title) }}</h6>
                                        </td>

                                        <td>
                                            <h6 class="item">{{ item.category }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ getUsername(item.user_id) }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ item.posted_datetime }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ item.likes }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ item.comment_count }}</h6>
                                        </td>
                                        <td>
                                            <router-link class="btn mb-0" to="/campaign-detail"><i
                                                    class="fas fa-info-circle"></i></router-link>

                                            <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                                :data-bs-target="'#rowDelete' + index"><i
                                                    class="fas fa-trash-alt"></i></button>



                                            <!-- Delete Modal -->
                                            <div class="modal fade" :id="'rowDelete' + index" tabindex="-1"
                                                aria-labelledby="ModalLabelD" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="ModalLabelD"><i
                                                                    class="fas fa-trash-alt"></i> Delete</h1>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Confirm to delete <strong>"{{ item.title }}"</strong> ?
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="button"
                                                                class="btn btn-primary" @click="deleteTalk(item.id)">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else>
                                    <td colspan="7">
                                        <h6 class="text-center">No talks available</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="8">
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
            <!-- Pending -->
            <div class="tab-pane fade" id="pills-pending" role="tabpanel" aria-labelledby="pills-pending-tab"
                tabindex="0">
                <div class="card-header py-0 d-flex justify-content-between align-items-center">
                    <h5>Pending Talks</h5>

                    <div class="d-flex">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control rounded-start rounded-0"
                                placeholder="Search" />
                        </div>
                        <button id="search-button" type="button" class="btn btn-success rounded-0 rounded-end">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center justify-content-center mb-0">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        <div class="d-flex align-items-center" @click="sortData2('title')"
                                            style="cursor: pointer">
                                            Talks Title
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'title' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'title' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>

                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('category')"
                                            style="cursor: pointer">
                                            Topic
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'category' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'category' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('author')"
                                            style="cursor: pointer">
                                            Author
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'author' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'author' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>

                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData2('posted_datetime')"
                                            style="cursor: pointer">
                                            Posted Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'posted_datetime' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'posted_datetime' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                                        style="text-align: center;">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-if="pendingTalks.length > 0">
                                    <tr v-for="(item, index) in pendingTalks" :key="index">
                                        <td>
                                            <h6 class="item ps-3"> {{ truncatedTitle(item.title) }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ item.category }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ getUsername(item.user_id) }}</h6>
                                        </td>
                                        <td>
                                            <h6 class="item">{{ item.posted_datetime }}</h6>
                                        </td>
                                        <td>
                                            <center>
                                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                                    :data-bs-target="'#rowPending' + index">
                                                    <i class="fas fa-info-circle"></i>
                                                </button>
                                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                                    :data-bs-target="'#rowApprove' + index">
                                                    <i class="fas fa-check"></i>
                                                </button>
                                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                                    :data-bs-target="'#rowReject' + index">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </center>
                                            <!-- View Modal -->
                                            <div class="modal fade" :id="'rowPending' + index" tabindex="-1"
                                                aria-labelledby="ModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" style="max-width: 600px !important">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="ModalLabel"><i
                                                                    class="fas fa-info-circle"></i>
                                                                View</h1>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <form>
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <label for="investmentPoster"
                                                                            class="form-label">Images (.png .jpg.
                                                                            jpeg)</label>
                                                                        <br>
                                                                        <img src="../assets/img/signin.png" width="260"
                                                                            style="max-height: 220px" />
                                                                    </div>
                                                                    <div class="col">
                                                                        <div class="col">
                                                                            <label for="author"
                                                                                class="form-label">Author</label>
                                                                            <input type="text" class="form-control"
                                                                                placeholder="Enter investment name"
                                                                                :value="getUsername(item.user_id)"
                                                                                disabled />
                                                                        </div>
                                                                        <div class="col">
                                                                            <label for="investmentName"
                                                                                class="form-label">Title</label>
                                                                            <input type="text" class="form-control"
                                                                                placeholder="Enter investment name"
                                                                                :value="item.title" disabled />
                                                                        </div>
                                                                        <div class="col">
                                                                            <label for="investmentOrganization"
                                                                                class="form-label">Category</label>
                                                                            <input type="text" class="form-control"
                                                                                placeholder="Talks topic"
                                                                                :value="item.category" disabled />
                                                                        </div>
                                                                        <div class="col">
                                                                            <label for="investmentPurpose"
                                                                                class="form-label">
                                                                                Content</label>
                                                                            <textarea type="text" class="form-control"
                                                                                placeholder="Enter investment description"
                                                                                :value="item.content" disabled />

                                                                        </div>
                                                                        <div class="col">
                                                                            <label for="datetime" class="form-label">
                                                                                Posted by</label>
                                                                            <textarea type="text" class="form-control"
                                                                                placeholder="Enter investment description"
                                                                                :value="item.posted_datetime"
                                                                                disabled />

                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <hr class="horizontal dark" />

                                                            </form>

                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Approve Modal -->
                                            <div class="modal fade" :id="'rowApprove' + index" tabindex="-1"
                                                aria-labelledby="ModalLabelD" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="ModalLabelD"><i
                                                                    class="fas fa-check"></i> Approve</h1>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Confirm to publish <strong>"{{ item.title }}"</strong> ?
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="button" class="btn btn-primary"
                                                                @click="approveTalk(item.id)">Confirm</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Reject Modal -->
                                            <div class="modal fade" :id="'rowReject' + index" tabindex="-1"
                                                aria-labelledby="ModalLabelD" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h1 class="modal-title fs-5" id="ModalLabelD"><i
                                                                    class="fas fa-times"></i> Reject</h1>
                                                            <button type="button" class="btn-close"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            Confirm to reject the publish of "{{ item.title }}" ?
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-bs-dismiss="modal">Close</button>
                                                            <button type="button"
                                                                class="btn btn-primary" @click="deleteTalk(item.id)">Confirm</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else>
                                    <td colspan="7">
                                        <h6 class="text-center">No talks available</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="7">
                                        <div class="d-flex justify-content-end me-4">
                                            <button class="btn my-0 me-2" @click="goToPreviousPage2()"> <i
                                                    class="fas fa-chevron-left"></i> </button>
                                            <span
                                                class="pageNum border rounded d-flex align-items-center justify-content-center"
                                                style="min-width: 30px">{{ currentPage2 }}</span>
                                            <button class="btn my-0 ms-2" @click="goToNextPage2()"> <i
                                                    class="fas fa-chevron-right"></i> </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Swal from 'sweetalert2';
// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default ({
    data() {
        return {
            approvedTalks: [],
            pendingTalks: [],
            sortBy: '',
            sortOrder: 'asc',
            currentPage: 1,
            maxPageSize: null,
            sortBy2: '',
            sortOrder2: 'asc',
            currentPage2: 1,
            maxPageSize2: null,
            userMap: {}
        }
    },
    methods: {
        async fetchTalks(status) {
            try {
                const response = await fetch(`http://localhost:8080/talkList?status=${status}`);
                const talks = await response.json();
                if (status === 'approved') {
                    this.approvedTalks = talks;
                } else if (status === 'pending') {
                    this.pendingTalks = talks;
                }

                const userResponse = await fetch(`http://localhost:8080/userList`);
                const users = await userResponse.json();

                // Create userMap using reduce
                this.userMap = users.reduce((map, user) => {
                    map[user.id] = user.username;
                    return map;
                }, {});

                console.log(this.userMap);


                console.log(`Fetched ${status} talks:`, talks);
            } catch (error) {
                console.error(`Error fetching ${status} talks:`, error);
            }
        },

        async approveTalk(talkId) {
            try {
                // Assuming the API endpoint to update talk status
                const response = await fetch(`http://localhost:8080/talks/${talkId}/approve`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.ok) {
                    // this.pendingTalks = this.pendingTalks.filter(talk => talk.id !== talkId);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Talk approved successfully!',
                        timer: 2000,
                        showConfirmButton: false
                    }).then(() => {
                        window.location.reload();

                    });

                } else {
                    console.error('Failed to approve talk');
                }
            } catch (error) {
                console.error('Error approving talk:', error);
            }
        },
        async deleteTalk(talkId) {
            try {
                const response = await fetch(`http://localhost:8080/talks/${talkId}/delete`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const responseData = await response.json();
                    // Show success message using SweetAlert2
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: responseData.message
                    }).then(() => {
                        window.location.reload();
                    })
                } else {
                    const errorData = await response.json();
                    console.error(errorData.message); // Log the error message
                }
            } catch (error) {
                console.error('An error occurred while deleting the talk:', error);
            }
        },

        fetchApprovedTalks() {
            this.fetchTalks('approved');
        },
        fetchPendingTalks() {
            this.fetchTalks('pending');
        },
        truncatedTitle(title) {
            return title.length > 25 ? title.substring(0, 25) + '...' : title;
        },
        sortData(criteria) {
            if (this.sortBy === criteria) {
                this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortBy = criteria;
                this.sortOrder = 'asc';
            }

            this.approvedTalks.sort((a, b) => {
                const factor = this.sortOrder === 'asc' ? 1 : -1;
                if (a[criteria] < b[criteria]) return -1 * factor;
                if (a[criteria] > b[criteria]) return 1 * factor;
                return 0;
            });
        },
        sortData2(criteria) {
            if (this.sortBy2 === criteria) {
                this.sortOrder2 = this.sortOrder2 === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortBy2 = criteria;
                this.sortOrder2 = 'asc';
            }

            this.pendingTalks.sort((a, b) => {
                const factor = this.sortOrder2 === 'asc' ? 1 : -1;
                if (a[criteria] < b[criteria]) return -1 * factor;
                if (a[criteria] > b[criteria]) return 1 * factor;
                return 0;
            });
        },
        sliceTempArray() {
            const startIndex = (this.currentPage - 1) * 6;
            const endIndex = startIndex + 6;
            this.approvedTalks = this.approvedTalks.slice(startIndex, endIndex);
        },
        sliceTempArray2() {
            const startIndex = (this.currentPage2 - 1) * 6;
            const endIndex = startIndex + 6;
            this.pendingTalks = this.pendingTalks.slice(startIndex, endIndex);
        },
        setMaxPageSize() {
            this.maxPageSize = Math.ceil(this.approvedTalks.length / 6);
        },
        setMaxPageSize2() {
            this.maxPageSize2 = Math.ceil(this.pendingTalks.length / 6);
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
        goToPreviousPage2() {
            if (this.currentPage2 > 1) {
                this.currentPage2--;
            }
            this.sliceTempArray2();
        },

        goToNextPage2() {
            if (this.currentPage2 < this.maxPageSize2) {
                this.currentPage2++;
            }
            this.sliceTempArray2();
        },
        closeModal() {
            document.body.classList.remove('modal-open');
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.parentNode.removeChild(modalBackdrop);
            }
        },
        getUsername(userId) {
            return this.userMap[userId];
        }
    },
    mounted() {
        this.fetchApprovedTalks();
        this.fetchPendingTalks();
        this.setMaxPageSize();
        this.sliceTempArray();
        this.setMaxPageSize2();
        this.sliceTempArray2();
    }
})
</script>



<style>
.item {
    margin-bottom: 0;
    font-size: small;
}
</style>
