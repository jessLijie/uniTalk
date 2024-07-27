<script>
import axios from 'axios';
import CrowdFundCard from './components/CrowdfundCard.vue';

export default {
    components: {
        CrowdFundCard
    },
    data() {
        return {
            talks: [],
            userMap: {},
            selectedCategory: '',
            filteredTalkList: []
        };
    },
    mounted() {
        this.fetchMostRecentTalks();
    },
    methods: {
        async fetchMostRecentTalks() {
            try {
                const response = await axios.get('http://localhost:8080/talks');
                this.talks = response.data;
                this.filteredTalkList = this.talks;

                const userResponse = await fetch('http://localhost:8080/userList');
                const users = await userResponse.json();

                this.userMap = users.reduce((map, user) => {
                    map[user.id] = user.username;
                    return map;
                }, {});
            } catch (error) {
                console.error('Error fetching most recent talks:', error);
            }
        },
        formatTimeAgo(postedDatetime) {
            const postedDate = new Date(postedDatetime);
            const timeDifference = Date.now() - postedDate.getTime();

            const seconds = Math.floor(timeDifference / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            const weeks = Math.floor(days / 7);
            const months = Math.floor(weeks / 4);
            const years = Math.floor(months / 12);

            if (years > 0) {
                return years + (years === 1 ? ' year' : ' years') + ' ago';
            } else if (months > 0) {
                return months + (months === 1 ? ' month' : ' months') + ' ago';
            } else if (weeks > 0) {
                return weeks + (weeks === 1 ? ' week' : ' weeks') + ' ago';
            } else if (days > 0) {
                return days + (days === 1 ? ' day' : ' days') + ' ago';
            } else if (hours > 0) {
                return hours + (hours === 1 ? ' hour' : ' hours') + ' ago';
            } else if (minutes > 0) {
                return minutes + (minutes === 1 ? ' minute' : ' minutes') + ' ago';
            } else {
                return 'Just now';
            }
        },
        getUsername(userId) {
            return this.userMap[userId];
        },
        filterTalk(category) {
            if (this.selectedCategory === category) {
                this.filteredTalkList = this.talks;
                this.selectedCategory = '';
            } else {
                this.selectedCategory = category;
                this.filteredTalkList = this.talks.filter(talk => talk.category === category);
            }
        }
    }
};
</script>
<template>
    <div class="card m-4 px-4 pt-1">
        <h1 class="m-0 mx-auto pt-5">Let's UniTalk</h1>
        <div class="d-flex justify-content-center align-items-center w-100 mt-4"
            :class="`${darkMode ? 'bg-transparent' : ''}`">
            <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Food' }"
                @click="filterTalk('Food')">
                Food
            </button>
            <button type="button" class="btn mx-3" :class="{ 'btn-success': selectedCategory === 'Technology' }"
                @click="filterTalk('Technology')">
                Technology
            </button>
            <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Fashion' }"
                @click="filterTalk('Fashion')">
                Fashion
            </button>
            <button type="button" class="btn mx-3" :class="{ 'btn-success': selectedCategory === 'Sport' }"
                @click="filterTalk('Sport')">
                Sport
            </button>
            <button type="button" class="btn" :class="{ 'btn-success': selectedCategory === 'Transport' }"
                @click="filterTalk('Transport')">
                Transport
            </button>
        </div>
        <div class="container">
            <div class="row">
                <div class="px-3 py-2" v-for="(talk, index) in filteredTalkList" :key="index">
                    <CrowdFundCard :id="talk.id" :user="getUsername(talk.user_id)"
                        :time="formatTimeAgo(talk.posted_datetime)" :title="talk.title" :content="talk.content"
                        :comment="talk.comment" :like="talk.likes" :img="talk.image" />
                </div>
            </div>

        </div>
    </div>
</template>

<style></style>
