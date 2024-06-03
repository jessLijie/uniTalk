<script setup>
// import ArgonButton from "@/components/ArgonButton.vue";
// import ArgonInput from "@/components/ArgonInput.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import { onBeforeMount, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
const body = document.getElementsByTagName("body")[0];
// import FundsTransaction from "./components/FundsTransaction.vue";

const store = useStore();
onBeforeMount(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");
});
onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.add("bg-gray-100");
});
const getEmbedUrl = (url) => {
  const videoId = url.split('v=')[1];
  return `https://www.youtube.com/embed/${videoId}`;
};
const videos = [
  {
    title: "Introduction to Blockchain",
    description: "Learn the basics of blockchain technology.",
    videoUrl: "https://www.youtube.com/watch?v=yubzJw0uiE4",
  },
  {
    title: "Smart Contracts Explained",
    description: "Understand the concept of smart contracts and their applications.",
    videoUrl: "https://www.youtube.com/watch?v=ZE2HxTmxfrI",
  },
  {
    title: "Blockchain Technology Explained",
    description: "An in-depth explanation of blockchain technology and its key features.",
    videoUrl: "https://www.youtube.com/watch?v=yubzJw0uiE4",
  },
  {
    title: "Bitcoin: A Beginner's Guide",
    description: "A beginner-friendly guide to understanding Bitcoin and its significance.",
    videoUrl: "https://www.youtube.com/watch?v=IQHLpdWvyK4",
  },
  {
    title: "Ethereum: The Future of Smart Contracts",
    description: "Discover how Ethereum is revolutionizing smart contracts and decentralized applications.",
    videoUrl: "https://www.youtube.com/watch?v=v-ZyoD2NAIQ",
  },
  {
    title: "Decentralized Finance (DeFi) Explained",
    description: "Learn about the principles and applications of decentralized finance (DeFi).",
    videoUrl: "https://www.youtube.com/watch?v=SZXwDhcx9uY",
  },

];

const blogPosts = [
  {
    title: "The Impact of Blockchain on Supply Chain Management",
    description: "Explore how blockchain is transforming supply chain processes.",
    link: "https://www.researchgate.net/publication/363274016_The_Impact_of_Blockchain_on_Supply_Chains_A_systematic_Review",
  },
  {
    title: "Decentralized Finance (DeFi) Explained",
    description: "Learn about decentralized finance and its potential impact.",
    link: "https://www.investopedia.com/decentralized-finance-defi-5113835",
  },
  {
    title: "The Impact of Blockchain on Supply Chain Management",
    description: "Explore how blockchain is transforming supply chain processes and enhancing transparency.",
    link: "https://link.springer.com/article/10.1007/s11356-021-13094-3",
  },
  {
    title: "Decentralized Identity: The Future of Digital Identity",
    description: "Learn about the concept of decentralized identity and its implications for privacy and security.",
    link: "https://medium.com/spherity/decentralized-identity-how-10-mega-trends-are-driving-adoption-and-shaping-the-future-c8144a51de1b",
  },
  {
    title: "NFTs: Exploring the World of Non-Fungible Tokens",
    description: "Discover the growing popularity of non-fungible tokens (NFTs) and their role in digital ownership.",
    link: "https://blog.spheron.network/understanding-nfts-exploring-the-world-of-non-fungible-tokens",
  },
  {
    title: "Blockchain and Healthcare: Opportunities and Challenges",
    description: "Understand how blockchain technology can revolutionize healthcare data management and patient care.",
    link: "https://www.researchgate.net/publication/342602958_Blockchain_in_Healthcare_Opportunities_Challenges_and_Possible_Solutions",
  },

];

</script>
<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div>
  <div class="page-header align-items-start min-vh-50 pt-5 pb-11 position-absolute top-0 w-100" style="
        background-image: url(&quot;https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg&quot;);
        background-position: top;
      "></div>
  <main class="mt-0 main-content">
    <div class="px-6 mt-6 container-fluid">
      <div class="mt-8 row">

        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Videos related to Blockchain</p>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div v-for="(video, index) in videos" :key="index" class="col-md-6 mb-4">
                  <div class="card h-100 d-flex flex-column justify-content-between">
                    <div class="card-body">
                      <h5 class="card-title">{{ video.title }}</h5>
                      <p class="card-text">{{ video.description }}</p>
                    </div>
                    <div class="embed-responsive embed-responsive-16by9" >
                      <center>
                        <iframe class="embed-responsive-item mb-3 rounded" :src="getEmbedUrl(video.videoUrl)"
                        allowfullscreen></iframe>
                      </center>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
        <div class="col-md-4">
          <!-- <CreditCard /> -->
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Blog Posts about Blockchain</p>
              </div>
            </div>
            <div class="card-body">
              <!-- Display blog posts -->
              <div v-for="(post, index) in blogPosts" :key="index" class="mb-4">
                <h5>{{ post.title }}</h5>
                <p>{{ post.description }}</p>
                <p><a :href="post.link" target="_blank">Read More → </a></p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </main>
  <app-footer />
</template>
