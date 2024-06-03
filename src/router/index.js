import { createRouter, createWebHistory } from "vue-router";
import AdminCrowdfundManage from "../views/AdminCrowdfundManage.vue";
import Billing from "../views/Billing.vue";
import createCampaign from "../views/CreateCampaign.vue";
import Dashboard from "../views/Dashboard.vue";
import Information from "../views/Information.vue";
import Notification from "../views/Notification.vue";
import Profile from "../views/Profile.vue";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import TransactionList from "../views/TransactionList.vue";
import CrowdfundList from "../views/CrowdfundList.vue";
import Transaction from "../views/transaction.vue";
import Certificate from "../views/Certificate.vue";
import GeneralList from "../views/GeneralList.vue";
import UserManage from "../views/UserManage.vue";
import issuerCrowdfundList from "../views/issuerCrowdfundList.vue";
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/campaign-detail",
    name: "campaigndetail",
    component: Billing,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/crowdfundmanage",
    name: "AdminCrowdfundManage",
    component: AdminCrowdfundManage,
  },
  {
    path: "/issuer/crowdfundmanage",
    name: "issuerCrowdfundList",
    component: issuerCrowdfundList,
  },
  {
    path: "/usermanage",
    name: "UserManage",
    component: UserManage,
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notification,
  },
  {
    path: "/transactionlist",
    name: "Transactions",
    component: TransactionList,
  },
  {
    path: "/createCampaign",
    name: "createCampaign",
    component: createCampaign,
  },
  {
    path: "/info",
    name: "Information",
    component: Information,
  },
  {
    path: "/crowdfundlist",
    name: "CrowdfundList",
    component: CrowdfundList,
  },
  {
    path: "/investment",
    name: "investment",
    component: Transaction,
  },
  {
    path: "/generallist",
    name: "generallist",
    component: GeneralList,
  },
  {
    path: "/certificate",
    name: "certificate",
    component: Certificate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
  next();
});

export default router;
