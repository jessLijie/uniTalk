<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
import { ref } from 'vue';

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

    temp.value.sort((a, b) => {
        const factor = sortOrder.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}
</script>

<template>
    <div class="card m-4">
        <div class="card-header pb-0 d-flex justify-content-between align-items-center">
            <h5>Talk List</h5>

            <div class="d-flex">
                <a href="/createCampaign">
                    <argon-button size="sm" class="ms-auto">Create Talk</argon-button>
                </a>
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
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                <div class="d-flex align-items-center" @click="sortData('purp')"
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
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
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
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
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
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
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
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
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
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in temp" :key="index">
                            <td>
                                <h6 class="item ps-3">{{ truncatedTitle(item.title) }}</h6>
                            </td>
                            <td>
                                <h6 class="item ps-3">{{ item.topic }}</h6>
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
                                <h6 class="item">{{ item.comment }}</h6>
                            </td>
                            <td>
                                <router-link class="btn mb-0" to="/campaign-detail"><i
                                        class="fas fa-info-circle"></i></router-link>
                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                    :data-bs-target="'#row' + index"><i class="fas fa-edit"></i></button>
                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                    :data-bs-target="'#rowDelete' + index"><i class="fas fa-trash-alt"></i></button>

                                <!-- Edit Modal -->
                                <div class="modal fade" :id="'row' + index" tabindex="-1" aria-labelledby="ModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog" style="max-width: 600px !important">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="ModalLabel"><i class="fas fa-edit"></i>
                                                    Edit</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <!-- <div class="mb-3">
                                                        <label for="campaignName" class="form-label">Campaign Name:</label>
                                                        <input type="text" class="form-control" id="campaignName"
                                                            placeholder="Enter campaign name" :value="item.campaignName">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="purpose" class="form-label">Purpose:</label>
                                                        <select class="form-select" id="purpose">
                                                            <option :selected="item.purpose === 'Charity'">Charity</option>
                                                            <option :selected="item.purpose === 'Business'">Business</option>
                                                            <option :selected="item.purpose === 'Education'">Education</option>
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="description" class="form-label">Description:</label>
                                                        <input type="text" class="form-control" id="description"
                                                            placeholder="Enter name" :value="item.description">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="poster" class="form-label">Poster:</label>
                                                        <input type="file" class="form-control" id="poster">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="organizationName" class="form-label">Organization Name:</label>
                                                        <input type="text" class="form-control" id="organizationName"
                                                            placeholder="Enter organization name" :value="item.name">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="startDate" class="form-label">Start Date:</label>
                                                        <input type="date" class="form-control" id="startDate"
                                                            :value="item.startDate">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="endDate" class="form-label">End Date:</label>
                                                        <input type="date" class="form-control" id="endDate"
                                                            :value="item.endDate">
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="target" class="form-label">Target:</label>
                                                        <input type="text" class="form-control" id="target"
                                                            placeholder="Enter target" :value="item.target">
                                                    </div> -->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="investmentName" class="form-label">Investment
                                                                Name</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter investment name"
                                                                :value="item.campaignName" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="investmentPoster" class="form-label">Investment
                                                                Poster (Image File Format)</label>
                                                            <br>
                                                            <input type="file" class="form-control"
                                                                id="investmentPoster" accept="image/*" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="investmentPurpose" class="form-label">Investment
                                                                Purpose</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter investment description"
                                                                :value="item.purpose" />

                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="investmentOrganization"
                                                                class="form-label">Investment Organization
                                                                Name</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter organization name" />
                                                        </div>
                                                    </div>

                                                    <hr class="horizontal dark" />

                                                    <p class="text-uppercase text-sm">Investment Details</p>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="investmentPricePerShare"
                                                                class="form-label">Investment Price Per Share
                                                                (ETH)</label>
                                                            <input type="number" step="0.01" class="form-control"
                                                                placeholder="0.00" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="investmentTargetAmount"
                                                                class="form-label">Investment Target Amount
                                                                (ETH)</label>
                                                            <input type="number" step="0.01" class="form-control"
                                                                placeholder="0.00" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="investmentDeadline"
                                                                class="form-label">Investment Deadline (dd/mm/yy
                                                                hh:mm)</label>
                                                            <input type="datetime-local" class="form-control"
                                                                placeholder="Select deadline" :value="item.endDate" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="investmentValuation"
                                                                class="form-label">Investment Valuation</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter valuation" />
                                                        </div>
                                                    </div>

                                                    <hr class="horizontal dark" />

                                                    <p class="text-uppercase text-sm">Investment Breakdown</p>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="minInvestment" class="form-label">Minimum
                                                                Investment
                                                                (ETH)</label>
                                                            <input type="number" step="0.01" class="form-control"
                                                                placeholder="0.00" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="maxInvestment" class="form-label">Maximum
                                                                Investment
                                                                (ETH)</label>
                                                            <input type="number" step="0.01" class="form-control"
                                                                placeholder="0.00" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="minSharesOffered" class="form-label">Minimum
                                                                Number of Shares
                                                                Offered</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Enter minimum shares" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="maxSharesOffered" class="form-label">Maximum
                                                                Number of Shares
                                                                Offered</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Enter maximum shares" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="offeringType" class="form-label">Offering
                                                                Type</label>
                                                            <select class="form-control" id="offeringType">
                                                                <option value="---Select offering type---" selected
                                                                    disabled>--Select offering type--</option>
                                                                <option value="public">Public</option>
                                                                <option value="private">Private</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="assetType" class="form-label">Asset
                                                                Type</label>
                                                            <select class="form-control" id="assetType">
                                                                <option value="---Select asset type---" selected
                                                                    disabled>--Select asset type--</option>
                                                                <option value="equity">Equity</option>
                                                                <option value="debt">Debt</option>
                                                                <option value="real estate">Real Estate</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="sharesOffered" class="form-label">Shares
                                                                Offered</label>
                                                            <select class="form-control" id="sharesOffered">
                                                                <option value="---Select shares offered---" selected
                                                                    disabled>--Select shares offered--</option>
                                                                <option value="common">Common</option>
                                                                <option value="preferred">Preferred</option>
                                                            </select>
                                                        </div>
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
                    </tbody>
                </table>
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
