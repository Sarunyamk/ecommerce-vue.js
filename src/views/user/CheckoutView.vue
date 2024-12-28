<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";

const router = useRouter();

import UserLayout from "@/layouts/UserLayout.vue";
import { useCartStore } from "@/stores/user/cart";
const cartStore = useCartStore();

const formInputs = [
  {
    name: "Email Address",
    field: "email",
    placeHolder: "Email Address",
  },
  {
    name: "Name",
    field: "name",
    placeHolder: "Name",
  },
  {
    name: "Address",
    field: "address",
    placeHolder: "Address",
  },
  {
    name: "Note",
    field: "note",
    placeHolder: "Note",
  },
];

const userFormData = reactive({
  email: "",
  name: "",
  address: "",
  note: "",
});

const payment = () => {
  cartStore.placeOrder(userFormData);
  router.push({ name: "success" });
  cartStore.items = [];
};
</script>

<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-8">Checkout Cart</h1>
    <div class="flex my-4">
      <div class="flex-auto w-1/2 bg-base-200 p-4">
        <div v-for="form in formInputs" class="flex flex-col my-3">
          {{ form.name }}
          <input
            type="text"
            :name="form.name"
            :placeholder="form.placeHolder"
            v-model="userFormData[form.field]"
            class="p-3 rounded-md mt-2"
          />
        </div>
        <button @click="payment" class="btn btn-neutral w-full mt-4">
          ชำระเงิน
        </button>
      </div>
      <div class="flex-auto w-1/2 bg-slate-200 p-4">
        <div v-for="item in cartStore.items" class="flex bg-white my-2">
          <div class="flex-auto w-1/2">
            <img class="w-full p-2" :src="item.imageUrl" />
          </div>
          <div class="flex-auto w-1/2">
            <div class="flex flex-col justify-between h-full p-3">
              <div>
                <h1>
                  <b>{{ item.name }}</b>
                </h1>
                <h1>จำนวน : {{ item.quantity }}</h1>
              </div>
              <RouterLink :to="{ name: 'cart' }" class="btn btn-neutral w-full">
                Edit
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="p-3">
          <div>
            <h1 class="text-xl font-bold">Order Summary</h1>
          </div>
          <div class="flex justify-between">
            <h1>ราคาสินค้าทั้งหมด</h1>
            <h1>{{ cartStore.summaryPrice }}</h1>
          </div>
          <div class="flex justify-between">
            <h1>ค่าส่ง</h1>
            <h1>0</h1>
          </div>
        </div>
        <div class="divider"></div>
        <div class="p-3">
          <div class="flex justify-between">
            <h1>ราคารวมทั้งหมด</h1>
            <h1>
              <b>{{ cartStore.summaryPrice }}</b>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
