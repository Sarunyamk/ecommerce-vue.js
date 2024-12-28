<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import Footer from "../components/user/Footer.vue";
import Navbar from "../components/user/Navbar.vue";

const isLogin = ref(false);
const router = useRouter();

const login = () => {
  isLogin.value = true;
  localStorage.setItem("isLogin", true);
};
const logout = () => {
  isLogin.value = false;
  localStorage.removeItem("isLogin");
  localStorage.removeItem("cart-data");
  localStorage.removeItem("order-data");
  router.push({ name: "home" });
};

onMounted(() => {
  if (localStorage.getItem("isLogin")) {
    isLogin.value = true;
  }
});
</script>
<template>
  <div class="container mx-auto">
    <Navbar :isLogin="isLogin" :login="login" :logout="logout" />
    <slot></slot>
    <Footer />
  </div>
</template>
