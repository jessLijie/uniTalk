<template>
    <form @submit.prevent="submitComment()">
        <div v-if="isVisible" class="modal">
            <div class="modal-content">
                <div class="d-flex align-items-center justify-content-between m-2">
                    <h4 class="mb-0">Reply to Comment</h4>
                    <span class="close" @click="closeModal">&times;</span>
                </div>
                <textarea class="form-control" v-model="commentContent" type="text" placeholder="Write your reply..."
                    required></textarea>
                <button>Submit</button>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    userId: {
        type: String,
        required: true,
    },
    talkId: {
        type: String,
        required: true,
    },
    parentId: {
        type: Number,
        required: true,
    },
    commentValue: {
        type: Number,
        required: true,
    },
    isVisible: {
        type: Boolean,
        required: true,
    }
});

const emit = defineEmits(['close', 'submitted']);

const commentContent = ref('');


const submitComment = async () => {
    try {
        const response = await fetch('http://localhost:8080/talks/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: props.userId,
                talkId: props.talkId,
                comment: commentContent.value,
                commentValue: props.commentValue,
                parentId: props.parentId
            })
        });
        if (response.ok) {
            emit('submitted');
            closeModal();
            window.location.reload(); // Refresh the page
        }
    } catch (error) {
        console.error('Error submitting comment:', error);
    }
};

const closeModal = () => {
    emit('close');
};
</script>

<style scoped>
/* Modal container */
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    /* Black background with opacity */
}

/* Modal content */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    /* Could be more or less, depending on screen size */
    max-width: 600px;
    border-radius: 10px;
}

/* Close button */
.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

/* Modal textarea */
textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    resize: vertical;
    /* Allows the user to resize the textarea vertically */
}

/* Submit button */
button {
    background-color: #2dce89;
    color: white;
    padding: 10px 20px;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;
}

button:hover {
    background-color: #45a049;
}
</style>
