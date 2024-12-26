<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import { useProductStore } from "@/stores/user/product";
import { useCartStore } from "@/stores/user/cart";
import Product from "@/components/user/Product.vue";

const route = useRoute();
const router = useRouter();

const cartStore = useCartStore();
const productStore = useProductStore();

const searchText = ref("");

// onMounted(() => {
//   console.log(route.query.q);
//   if (route.query.q) {
//     searchText.value = route.query.q;
//   }
// });

//จับการเปลี่ยนแปลง ถ้า search ข้อความใหม่ ให้ทําการเปลี่ยนแปลง
watch(
  () => route.query.q,
  (newValue) => {
    searchText.value = newValue;
  },
  { immediate: true }
);

//ถ้า searchtext มีการเปลี่ยน ให้ส่งคำไปที่ search
const filterProducts = computed(() => {
  return productStore.filterProducts(searchText.value);
});

const addToCart = (product) => {
  cartStore.addToCart(product);
  router.push("/cart");
};
</script>

<template>
  <UserLayout>
    <div class="text-2xl m-4">
      Search : <b class="capitalize">{{ searchText }}</b>
    </div>
    <Product :products="filterProducts" :addToCart="addToCart" />
  </UserLayout>
</template>
