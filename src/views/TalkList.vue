<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const sortBy = ref(null);
const sortOrder = ref('asc');
const router = useRouter();

const userId = ref(sessionStorage.getItem("userid"));
const talks = ref([]);
const selectedTalk = ref({
  id: null,
  title: '',
  content: '',
  category: '',
  image: null
});

function truncatedTitle(title) {
    if (!title) return ''; 
    return title.length > 25 ? title.substring(0, 25) + '...' : title;
}

function sortData(criteria) {
    if (sortBy.value === criteria) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortBy.value = criteria;
        sortOrder.value = 'asc';
    }

    talks.value.sort((a, b) => {
        const factor = sortOrder.value === 'asc' ? 1 : -1;
        if (a[criteria] < b[criteria]) return -1 * factor;
        if (a[criteria] > b[criteria]) return 1 * factor;
        return 0;
    });
}

async function fetchTalks(userId){
    try{
        const response = await axios.get(`http://localhost:8080//talklist/${userId}`);
        talks.value = response.data;
    }catch(error){
        console.error('Error fetching talks:', error);
    }
}

async function deleteTalk(talkId){
    try{
        await axios.delete(`http://localhost:8080/talks/${talkId}/delete`);
        talks.value = talks.value.filter(talk => talk.id !== talkId);
    }catch(error){
        console.error('Error deleting talk:', error);
    }
}

async function updateTalk(userId,talkId){

    const updatedData = new FormData();
    updatedData.append('userId', userId.value);
    updatedData.append('title', selectedTalk.value.title);
    updatedData.append('content', selectedTalk.value.content);
    updatedData.append('category', selectedTalk.value.category); 

    if (selectedTalk.value.image) {
    updatedData.append('image', selectedTalk.value.image);
  }

    try {
        await axios.put(`http://localhost:8080/talks/${userId}/${talkId}`, updatedData);
        alert('Talk updated successfully');
    } catch (error) {
        console.error('Error updating talk:', error);
        alert('Failed to update talk');
    }
}

function gotopage (id){
    router.push(`/talks/${id}`);
}

function editTalk(talk) {
    selectedTalk.value = { ...talk };
    if (talk.image) {
        selectedTalk.value.image = `http://localhost:8080/uploads/${talk.image}`;
    }
    console.log('Selected Talk:', selectedTalk.value); // Ensure topic is as expected
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Assuming you have a method to get a URL for the file
        const imageUrl = URL.createObjectURL(file);
        selectedTalk.value.image = imageUrl;

        selectedTalk.value.file = file; // Store the file for later use in the updateTalk function
    }
}

onMounted(() => {
    fetchTalks(userId.value);
});
</script>

<template>
    <div class="card m-4">
        <div class="card-header pb-0 d-flex justify-content-between align-items-center">
            <h5>Talk List</h5>

            <div class="d-flex">
                <a href="/createTalk">
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
                                    style="cursor: pointer" >
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
                                <div class="d-flex align-items-center" @click="sortData('Content')"
                                    style="cursor: pointer">
                                    Topic
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'content' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'content' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('category')"
                                    style="cursor: pointer">
                                    Category
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('category')"
                                    style="cursor: pointer">
                                    Category
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('likes')"
                                    style="cursor: pointer">
                                    Like(s)
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'likes' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'likes' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                <div class="d-flex align-items-center" @click="sortData('category')"
                                    style="cursor: pointer">
                                    Comment(s)
                                    <div class="d-flex flex-column ms-3">
                                        <i class="fas fa-caret-up text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'asc' }"></i>
                                        <i class="fas fa-caret-down text-sm lh-1"
                                            :class="{ 'text-dark': sortBy === 'category' && sortOrder === 'desc' }"></i>
                                    </div>
                                </div>
                            </th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in talks" :key="index">
                            <td>
                                <h6 class="item ps-3">{{ truncatedTitle(item.title) }}</h6>
                            </td>
                            <td>
                                <h6 class="item ps-3">{{ item.content}}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.category }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.category }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.likes }}</h6>
                            </td>
                            <td>
                                <h6 class="item">{{ item.category}}</h6>
                            </td>
                            <td>
                                <button type="button" class="btn mb-0 ms-3" @click="gotopage(item.id)">
                                    <i class="fas fa-info-circle"></i>
                                </button>
                                <!-- <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"  :data-bs-target="#editTalkModal" @click="editTalk(item)">
                                    <i class="fas fa-edit"></i>
                                </button> -->
                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                    :data-bs-target="'#editTalkModal' + index" @click="editTalk(item)">
                                    <i class="fas fa-edit"></i>
                                </button>

                                <button type="button" class="btn mb-0 ms-3" data-bs-toggle="modal"
                                    :data-bs-target="'#rowDelete' + index"><i class="fas fa-trash-alt"></i></button>

                                <!-- Edit Modal -->
                                <div class="modal fade" :id="'editTalkModal' + index" tabindex="-1" aria-labelledby="editTalkModalLabel" aria-hidden="true">
                                <div class="modal-dialog" style="max-width: 600px !important">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="editTalkModalLabel"><i class="fas fa-edit"></i> Edit</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                            <div class="modal-body">
                                                <form id="talk_form">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <label for="talkTitle" class="form-label">Talk Title</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter talk title"
                                                                id="talkTitle" v-model="selectedTalk.title"/>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label for="talkContent" class="form-label">Talk Content</label>
                                                            <br>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter talk content"
                                                                id="talkContent" v-model="selectedTalk.content"/>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label for="talkImage" class="form-label">Image</label>
                                                            <div v-if="selectedTalk.image">
                                                                <img :src="selectedTalk.image" alt="Image preview" class="img-fluid" style="max-height: 180px; object-fit: cover; padding-bottom: 15px;" />
                                                            </div>
                                                            <input type="file" class="form-control" id="talkImage" accept="image/*" @change="handleFileUpload" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for="talkTopic" class="form-control-label">Topic</label>
                                                            <select class="form-control" id="talkCategory" v-model="selectedTalk.category">
                                                            <option value="" disabled>--Select topic--</option>
                                                            <option value="Food">Food</option>
                                                            <option value="Technology">Technology</option>
                                                            <option value="Fashion">Fashion</option>
                                                            <option value="Sports">Sports</option>
                                                            <option value="Transport">Transport</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" @click="updateTalk(userId, item.id)">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Delete Modal -->
                                <div v-for="(item, index) in talks" :key="index" class="modal fade" :id="'rowDelete' + index" tabindex="-1"
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
                                                Confirm to delete this talk ?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" @click="deleteTalk(item.id)">Delete</button>
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
