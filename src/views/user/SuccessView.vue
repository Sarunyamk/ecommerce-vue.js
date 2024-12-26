<script setup>
import { onMounted, ref } from "vue";
import { useCartStore } from "@/stores/user/cart";
import UserLayout from "@/layouts/UserLayout.vue";

const cartStore = useCartStore();
const orderData = ref({});

onMounted(() => {
  cartStore.loadCheckout();
  if (cartStore.checkout.orderNumber) {
    orderData.value = cartStore.checkout;
  }
});
</script>

<template>
  <UserLayout>
    <div
      class="container bg-slate-100 p-8 max-w-2xl mx-auto my-4 border border-slate-200 shadow-xl"
    >
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-2xl font-bold">
          Your order has been placed successfully!!.
        </h1>
        <h1>Hi {{ orderData.name }}!</h1>
        <h1>เตรียมรอรับสินค้าของคุณได้เลย</h1>
      </div>

      <div class="divider"></div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h1>Order date</h1>
          <h1>{{ orderData.createdDate }}</h1>
        </div>
        <div>
          <h1>Order number</h1>
          <h1>{{ orderData.orderNumber }}</h1>
        </div>
        <div>
          <h1>Payment method</h1>
          <h1>{{ orderData.paymentMethod }}</h1>
        </div>
        <div>
          <h1>Address</h1>
          <h1>{{ orderData.address }}</h1>
        </div>
      </div>

      <div class="divider"></div>

      <div
        v-for="product in orderData.products"
        class="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-3"
      >
        <div>
          <img :src="product.imageUrl" />
        </div>
        <div>
          <h1 class="text-2xl font-bold">{{ product.name }}</h1>
        </div>
        <div>
          <h1>จำนวน : {{ product.quantity }}</h1>
        </div>
        <div>
          <h1>ราคารวม : {{ product.price * product.quantity }} บาท</h1>
        </div>
      </div>

      <div class="divider"></div>

      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <h1>ราคาสินค้าทั้งหมด</h1>
          <h1>{{ orderData.totalPrice }} บาท</h1>
        </div>
        <div class="flex justify-between">
          <h1>ค่าส่ง</h1>
          <h1>0 บาท</h1>
        </div>
      </div>

      <div class="divider"></div>

      <div class="flex flex-col gap-4">
        <div class="flex justify-between">
          <h1>ราคารวมทั้งหมด</h1>
          <h1>
            <b>{{ orderData.totalPrice }}</b> บาท
          </h1>
        </div>
      </div>

      <div class="divider"></div>

      <div>
        <h1 class="text-3xl font-bold text-center">ขอบคุณที่มาใช้บริการ</h1>
      </div>
    </div>
  </UserLayout>
</template>
