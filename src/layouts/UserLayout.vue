<script setup>
import { ref, onMounted } from "vue";

import Footer from "../components/user/Footer.vue";
import Navbar from "../components/user/Navbar.vue";

const isLogin = ref(false);

const login = () => {
  isLogin.value = true;
  localStorage.setItem("isLogin", true);
};
const logout = () => {
  isLogin.value = false;
  localStorage.removeItem("isLogin");
  localStorage.removeItem("cart-data");
  localStorage.removeItem("order-data");
  window.location.reload();
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
