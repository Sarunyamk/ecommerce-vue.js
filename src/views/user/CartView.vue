<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "@/stores/user/cart";
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";

const cartStore = useCartStore();

const changQuantity = (e, index) => {
  const newQuantity = parseInt(e.target.value);
  cartStore.updateQuantity(index, newQuantity);
};
</script>

<template>
  <UserLayout>
    <h1 class="text-3xl font-bold">Shopping Cart</h1>
    <div class="flex my-4">
      <div class="flex-auto w-64 bg-base-200 p-4">
        <div
          v-if="cartStore.items.length == 0"
          class="text-center text-xl font-bold"
        >
          Cart is Empty
        </div>
        <div
          v-else
          v-for="(item, index) in cartStore.items"
          class="flex relative"
        >
          <div class="flex-1">
            <img class="w-full p-4" :src="item.imageUrl" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="grid grid-cols-2">
                  <div>
                    <div>
                      <b>{{ item.name }}</b>
                    </div>
                    <div>{{ item.about }}</div>
                    <div>{{ item.price }} B.</div>
                  </div>
                  <div>
                    <select
                      class="select w-2/3"
                      @change="changQuantity($event, index)"
                      v-model="item.quantity"
                    >
                      <option v-for="quantity in [1, 2, 3, 4, 5]">
                        {{ quantity }}
                      </option>
                    </select>
                  </div>
                  <div
                    @click="cartStore.removeItemInCart(index)"
                    class="absolute w-3 h-3 top-0 right-2"
                  >
                    <Close class="cursor-pointer" />
                  </div>
                </div>
              </div>
              <div><b>In Stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-slate-200 p-4">
        <h1 class="text-xl font-bold text-center">Order Summery</h1>
        <div class="m-6 divide-y divide-blue-950">
          <div class="flex justify-between p-2">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
          <div class="flex justify-between p-2">
            <div>ค่าส่ง</div>
            <div>0</div>
          </div>
          <div class="flex justify-between p-2">
            <div>ราคาทั้งสิ้น</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
        </div>
        <RouterLink :to="{ name: 'checkout' }">
          <button class="btn btn-neutral w-full mt-4">ชำระเงิน</button>
        </RouterLink>
      </div>
    </div>
  </UserLayout>
</template>
