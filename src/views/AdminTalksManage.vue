<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

/* Approved page */
const temp = ref([
    {
        title: 'New trend is style: Wearing the black out of the blue ',
        content: 'Lately, the reporters from T...',
        topic: 'Fashion',
        author: 'Bella Hadid',
        posted_date: '22 Jan 2024',
        like: 5800,
        comment: 15

    },
    {
        title: 'The Rise of Plant-Based Diets: What You Need to Know',
        content: 'With the growing awareness of health...',
        topic: 'Food',
        author: 'Jamie Oliver',
        posted_date: '15 Feb 2024',
        like: 4200,
        comment: 37
    },
    {
        title: 'Revolutionizing Urban Mobility: The Future of E-Scooters',
        content: 'E-scooters have become increasingly popular...',
        topic: 'Transportation',
        author: 'Elon Musk',
        posted_date: '8 Mar 2024',
        like: 7600,
        comment: 54
    },
    {
        title: 'AI in 2024: What’s Next for Artificial Intelligence?',
        content: 'Artificial intelligence continues to advance...',
        topic: 'Technology',
        author: 'Sundar Pichai',
        posted_date: '20 Jan 2024',
        like: 9300,
        comment: 82
    },
    {
        title: 'Top 10 Streetwear Trends to Watch This Year',
        content: 'Streetwear has evolved significantly...',
        topic: 'Fashion',
        author: 'Virgil Abloh',
        posted_date: '5 Apr 2024',
        like: 6800,
        comment: 45
    },
    {
        title: 'The Best Foods to Boost Your Immune System',
        content: 'Incorporating these foods into your diet...',
        topic: 'Food',
        author: 'Gordon Ramsay',
        posted_date: '10 May 2024',
        like: 5200,
        comment: 23
    },
    {
        title: 'How Data Analytics is Changing the Game in Sports',
        content: 'Data analytics is revolutionizing the sports...',
        topic: 'Sports',
        author: 'Bill James',
        posted_date: '12 Feb 2024',
        like: 7800,
        comment: 67
    },
    {
        title: 'Exploring the Latest Innovations in Electric Vehicles',
        content: 'The electric vehicle market is expanding...',
        topic: 'Transportation',
        author: 'Mary Barra',
        posted_date: '30 Jan 2024',
        like: 6100,
        comment: 39
    },
    {
        title: '5G Technology: The Future of Connectivity',
        content: '5G technology promises to revolutionize...',
        topic: 'Technology',
        author: 'Tim Cook',
        posted_date: '2 Mar 2024',
        like: 8500,
        comment: 59
    },
    {
        title: 'The Impact of Sustainable Fashion on the Industry',
        content: 'Sustainable fashion is becoming a...',
        topic: 'Fashion',
        author: 'Stella McCartney',
        posted_date: '18 Apr 2024',
        like: 7100,
        comment: 32
    },
    {
        title: 'Healthy Eating on a Budget: Tips and Tricks',
        content: 'Eating healthy doesn’t have to be expensive...',
        topic: 'Food',
        author: 'Alice Waters',
        posted_date: '25 May 2024',
        like: 4800,
        comment: 20
    },
    {
        title: 'Analyzing the Latest Trends in Sports Technology',
        content: 'Sports technology is evolving rapidly...',
        topic: 'Sports',
        author: 'Mark Cuban',
        posted_date: '28 Feb 2024',
        like: 6700,
        comment: 50
    }

]);

const sortBy = ref(null);
const sortOrder = ref('asc');
const currentPage = ref(1);
const maxPageSize = ref(null);
const listData = ref([]);

function truncatedTitle(title) {
    return title.length > 25 ? title.substring(0, 25) + '...' : title;
}

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

/* Pending page */
const temp2 = ref([
    {
        title: 'Healthy Eating on a Budget: Tips and Tricks',
        content: 'Eating healthy doesn’t have to be expensive...',
        topic: 'Food',
        author: 'Alice Waters',
        posted_date: '25 May 2024'
    },
    {
        title: 'Analyzing the Latest Trends in Sports Technology',
        content: 'Sports technology is evolving rapidly...',
        topic: 'Sports',
        author: 'Mark Cuban',
        posted_date: '28 Feb 2024'
    }
]);

const sortBy2 = ref(null);
const sortOrder2 = ref('asc');
const currentPage2 = ref(1);
const maxPageSize2 = ref(null);
const listData2 = ref([]);

function sortData2(criteria) {
    if (sortBy2.value === criteria) {
        sortOrder2.value = sortOrder2.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy2.value = criteria;
        sortOrder2.value = 'asc';
    }

    listData2.value.sort((a, b) => {
        const factor = sortOrder2.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}

const goToPreviousPage2 = () => {
    if (currentPage2.value > 1) {
        currentPage2.value--;
    }
    sliceTempArray2();
}

const goToNextPage2 = () => {
    if (currentPage2.value < maxPageSize2.value) {
        currentPage2.value++;
    }
    sliceTempArray2();
}

function setMaxPageSize2() {
    maxPageSize2.value = Math.ceil(temp2.value.length / 6);
}

function sliceTempArray2() {
    const startIndex = (currentPage2.value - 1) * 6;
    const endIndex = startIndex + 6;
    listData2.value = temp2.value.slice(startIndex, endIndex);
}

onMounted(() => {
    setMaxPageSize2();
    sliceTempArray2();
})

</script>
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
                    aria-selected="true">Approved ({{ temp.length }})</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-btn nav-link" id="pills-pending-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-pending" type="button" role="tab" aria-controls="pills-pending"
                    aria-selected="false">Pending ({{ temp2.length }})</button>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
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
                                    <!-- <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                        <div class="d-flex align-items-center" @click="sortData('content')"
                                            style="cursor: pointer">
                                            Content
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'content' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'content' && sortOrder === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th> -->
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                        <div class="d-flex align-items-center" @click="sortData('topic')"
                                            style="cursor: pointer">
                                            Topic
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'topic' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'topic' && sortOrder === 'desc' }"></i>
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
                                        <div class="d-flex align-items-center" @click="sortData('posted_date')"
                                            style="cursor: pointer">
                                            Posted Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'posted_date' && sortOrder === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy === 'posted_date' && sortOrder === 'desc' }"></i>
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
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" style="text-align: center;"> 
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in listData" :key="index">
                                    <td>
                                        <h6 class="item ps-3">{{ truncatedTitle(item.title) }}</h6>
                                    </td>
                                    <!-- <td>
                                        <h6 class="item ps-3">{{ item.content }}</h6>
                                    </td> -->
                                    <td>
                                        <h6 class="item">{{ item.topic }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.author }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.posted_date }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.like }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item" >{{ item.comment }}</h6>
                                    </td>
                                    <td>
                                        <router-link class="btn mb-0" to="/campaign-detail"><i
                                                class="fas fa-info-circle"></i></router-link>
                                        <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                            :data-bs-target="'#row' + index"><i class="fas fa-edit"></i></button>
                                        <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                            :data-bs-target="'#rowDelete' + index"><i
                                                class="fas fa-trash-alt"></i></button>

                                        <!-- Edit Modal -->
                                        <div class="modal fade" :id="'row' + index" tabindex="-1"
                                            aria-labelledby="ModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" style="max-width: 600px !important">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ModalLabel"><i
                                                                class="fas fa-edit"></i>
                                                            Edit</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentName"
                                                                        class="form-label">Campaign
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter investment name"
                                                                        :value="item.title" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentPoster"
                                                                        class="form-label">Campaign
                                                                        Poster (Image File Format)</label>
                                                                    <br>
                                                                    <input type="file" class="form-control"
                                                                        id="investmentPoster" accept="image/*" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentPurpose" class="form-label">
                                                                        Purpose</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter investment description"
                                                                        :value="item.purpose" />

                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentOrganization"
                                                                        class="form-label">Campaign Issuer
                                                                        Name</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter issuer name"
                                                                        :value="item.name" />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Campaign Details</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentPricePerShare"
                                                                        class="form-label">Price Per Share
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.pricePerShare" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentTargetAmount"
                                                                        class="form-label">Target Amount
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.target" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentDeadline"
                                                                        class="form-label">Deadline
                                                                        (dd/mm/yy
                                                                        hh:mm)</label>
                                                                    <input type="datetime-local" class="form-control"
                                                                        placeholder="Select deadline"
                                                                        :value="item.deadline" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentValuation"
                                                                        class="form-label">Valuation</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter valuation"
                                                                        :value="item.valuation" />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Investment Breakdown</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="minInvestment"
                                                                        class="form-label">Minimum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.minInvestment" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxInvestment"
                                                                        class="form-label">Maximum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.maxInvestment" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="minSharesOffered"
                                                                        class="form-label">Minimum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter minimum shares"
                                                                        :value="item.minSharesOffered" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxSharesOffered"
                                                                        class="form-label">Maximum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter maximum shares"
                                                                        :value="item.maxSharesOffered" />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="offeringType"
                                                                        class="form-label">Offering
                                                                        Type</label>
                                                                    <select class="form-control" id="offeringType">
                                                                        <option value="---Select offering type---"
                                                                            disabled>
                                                                            --Select offering type--
                                                                        </option>
                                                                        <option value="public"
                                                                            :selected="item.offeringType === 'public'">
                                                                            Public
                                                                        </option>
                                                                        <option value="private"
                                                                            :selected="item.offeringType === 'private'">
                                                                            Private
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="assetType" class="form-label">Asset
                                                                        Type</label>
                                                                    <select class="form-control" id="assetType">
                                                                        <option value="---Select asset type---"
                                                                            disabled>
                                                                            --Select asset type--
                                                                        </option>
                                                                        <option value="equity"
                                                                            :selected="item.assetType === 'equity'">
                                                                            Equity
                                                                        </option>
                                                                        <option value="debt"
                                                                            :selected="item.assetType === 'debt'">
                                                                            Debt
                                                                        </option>
                                                                        <option value="real estate"
                                                                            :selected="item.assetType === 'real estate'">
                                                                            Real Estate
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="sharesOffered" class="form-label">Shares
                                                                        Offered</label>
                                                                    <select class="form-control" id="sharesOffered">
                                                                        <option value="---Select shares offered---"
                                                                            selected disabled>--Select shares offered--
                                                                        </option>
                                                                        <option value="common"
                                                                            :selected="item.sharesOffered === 'common'">
                                                                            Common</option>
                                                                        <option value="preferred"
                                                                            :selected="item.sharesOffered === 'preferred'">
                                                                            Preferred</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                        </form>

                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save
                                                            changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Delete Modal -->
                                        <div class="modal fade" :id="'rowDelete' + index" tabindex="-1"
                                            aria-labelledby="ModalLabelD" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ModalLabelD"><i
                                                                class="fas fa-trash-alt"></i> Delete</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Confirm to delete "{{ item.name }}" ?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                        <div class="d-flex align-items-center" @click="sortData2('topic')"
                                            style="cursor: pointer">
                                            Topic
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'topic' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'topic' && sortOrder2 === 'desc' }"></i>
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
                                        <div class="d-flex align-items-center" @click="sortData2('posted_date')"
                                            style="cursor: pointer">
                                            Posted Date
                                            <div class="d-flex flex-column ms-3">
                                                <i class="fas fa-caret-up text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'posted_date' && sortOrder2 === 'asc' }"></i>
                                                <i class="fas fa-caret-down text-sm lh-1"
                                                    :class="{ 'text-dark': sortBy2 === 'posted_date' && sortOrder2 === 'desc' }"></i>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" style="text-align: center;">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in listData2" :key="index">
                                    <td>
                                        <h6 class="item ps-3">{{ item.title }}</h6>
                                    </td>

                                    <td>
                                        <h6 class="item">{{ item.topic }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.author }}</h6>
                                    </td>
                                    <td>
                                        <h6 class="item">{{ item.posted_date }}</h6>
                                    </td>
                                    <td>
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

                                        <!-- View Modal -->
                                        <div class="modal fade" :id="'rowPending' + index" tabindex="-1"
                                            aria-labelledby="ModalLabel" aria-hidden="true">
                                            <div class="modal-dialog" style="max-width: 600px !important">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="ModalLabel"><i
                                                                class="fas fa-info-circle"></i>
                                                            View</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentPoster"
                                                                        class="form-label">Campaign
                                                                        Poster (Image File Format)</label>
                                                                    <br>
                                                                    <img src="../assets/img/signin.png" width="260"
                                                                        style="max-height: 220px" />
                                                                </div>
                                                                <div class="col">
                                                                    <div class="col">
                                                                        <label for="investmentName"
                                                                            class="form-label">Campaign
                                                                            Name</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Enter investment name"
                                                                            :value="item.title" disabled />
                                                                    </div>
                                                                    <div class="col">
                                                                        <label for="investmentPurpose"
                                                                            class="form-label">
                                                                            Purpose</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Enter investment description"
                                                                            :value="item.purpose" disabled />

                                                                    </div>
                                                                    <div class="col">
                                                                        <label for="investmentOrganization"
                                                                            class="form-label">Campaign Issuer
                                                                            Name</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Enter issuer name"
                                                                            :value="item.name" disabled />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Campaign Details</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="investmentPricePerShare"
                                                                        class="form-label">Price Per Share
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.pricePerShare" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentTargetAmount"
                                                                        class="form-label">Target Amount
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.target" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentDeadline"
                                                                        class="form-label">Deadline
                                                                        (dd/mm/yy
                                                                        hh:mm)</label>
                                                                    <input type="datetime-local" class="form-control"
                                                                        placeholder="Select deadline"
                                                                        :value="item.deadline" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="investmentValuation"
                                                                        class="form-label">Valuation</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Enter valuation"
                                                                        :value="item.valuation" disabled />
                                                                </div>
                                                            </div>

                                                            <hr class="horizontal dark" />

                                                            <p class="text-uppercase text-sm">Investment Breakdown</p>
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <label for="minInvestment"
                                                                        class="form-label">Minimum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.minInvestment" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxInvestment"
                                                                        class="form-label">Maximum
                                                                        Investment
                                                                        (ETH)</label>
                                                                    <input type="number" step="0.01"
                                                                        class="form-control" placeholder="0.00"
                                                                        :value="item.maxInvestment" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="minSharesOffered"
                                                                        class="form-label">Minimum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter minimum shares"
                                                                        :value="item.minSharesOffered" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="maxSharesOffered"
                                                                        class="form-label">Maximum
                                                                        Number of Shares
                                                                        Offered</label>
                                                                    <input type="number" class="form-control"
                                                                        placeholder="Enter maximum shares"
                                                                        :value="item.maxSharesOffered" disabled />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="offeringType"
                                                                        class="form-label">Offering
                                                                        Type</label>
                                                                    <select class="form-control" id="offeringType"
                                                                        disabled>
                                                                        <option value="---Select offering type---"
                                                                            disabled>
                                                                            --Select offering type--
                                                                        </option>
                                                                        <option value="public"
                                                                            :selected="item.offeringType === 'public'">
                                                                            Public
                                                                        </option>
                                                                        <option value="private"
                                                                            :selected="item.offeringType === 'private'">
                                                                            Private
                                                                        </option>
                                                                    </select>

                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="assetType" class="form-label">Asset
                                                                        Type</label>
                                                                    <select class="form-control" id="assetType"
                                                                        disabled>
                                                                        <option value="---Select asset type---"
                                                                            disabled>
                                                                            --Select asset type--
                                                                        </option>
                                                                        <option value="equity"
                                                                            :selected="item.assetType === 'equity'">
                                                                            Equity
                                                                        </option>
                                                                        <option value="debt"
                                                                            :selected="item.assetType === 'debt'">
                                                                            Debt
                                                                        </option>
                                                                        <option value="real estate"
                                                                            :selected="item.assetType === 'real estate'">
                                                                            Real Estate
                                                                        </option>
                                                                    </select>

                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label for="sharesOffered" class="form-label">Shares
                                                                        Offered</label>
                                                                    <select class="form-control" id="sharesOffered"
                                                                        disabled>
                                                                        <option value="---Select shares offered---"
                                                                            selected disabled>--Select shares offered--
                                                                        </option>
                                                                        <option value="common"
                                                                            :selected="item.sharesOffered === 'common'">
                                                                            Common</option>
                                                                        <option value="preferred"
                                                                            :selected="item.sharesOffered === 'preferred'">
                                                                            Preferred</option>
                                                                    </select>
                                                                </div>
                                                            </div>

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
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Confirm to approve the creation of "{{ item.title }}" ?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Confirm</button>
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
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        Confirm to reject the creation of "{{ item.title }}" ?
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Confirm</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

<style>
.item {
    margin-bottom: 0;
    font-size: small;
}
</style>
