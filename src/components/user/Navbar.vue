<script setup>
import { RouterLink, useRouter } from "vue-router";
import { defineProps, ref, onMounted } from "vue";
import { useCartStore } from "@/stores/user/cart";

const router = useRouter();
const cartStore = useCartStore();

const searchText = ref("");
const profileImage = ref("");

defineProps({
  isLogin: Boolean,
  login: Function,
  logout: Function,
});
onMounted(() => {
  const storedImage = localStorage.getItem("profile-image");
  if (storedImage) {
    profileImage.value = storedImage;
  }
});
const handleSearch = (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    router.push({
      name: "search",
      query: {
        q: searchText.value,
      },
    });
  }
};
</script>
<template>
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl"
        >Ecommerce</RouterLink
      >
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-24 md:w-auto"
          v-model="searchText"
          @keyup="handleSearch"
        />
      </div>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item text-black">{{
              cartStore.summaryQuantity
            }}</span>
          </div>
        </div>

        <div
          tabindex="0"
          class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        >
          <div class="card-body">
            <span class="text-lg font-bold text-black"
              >{{ cartStore.summaryQuantity }} Items</span
            >
            <span class="text-info"
              >Subtotal: ${{ cartStore.summaryPrice }}</span
            >
            <div class="card-actions">
              <RouterLink
                :to="{ name: 'cart' }"
                class="btn btn-primary btn-block"
                >View cart</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
      <div @click="login" v-if="!isLogin">
        <button class="btn btn-ghost">LOGIN</button>
      </div>
      <div v-else class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img alt="User Profile" :src="profileImage" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <RouterLink :to="{ name: 'profile' }" class="justify-between">
              Profile
            </RouterLink>
          </li>
          <li @click="logout"><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
