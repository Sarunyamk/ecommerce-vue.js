<script setup>
import { useRouter } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import Hero from "@/components/user/Hero.vue";
import Product from "@/components/user/Product.vue";

import { useProductStore } from "@/stores/user/product";
import { useCartStore } from "@/stores/user/cart";

const router = useRouter();

const productStore = useProductStore();
const cartStore = useCartStore();

const addToCart = (product) => {
  cartStore.addToCart(product);
  router.push("/cart");
};
</script>

<template>
  <UserLayout>
    <Hero />
    <Product :products="productStore.list" :addToCart="addToCart" />
  </UserLayout>
</template>
