<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import AdminLayout from "@/layouts/AdminLayout.vue";
import { useAdminProductStore } from "@/stores/admin/product.js";

const adminProductStore = useAdminProductStore();
const router = useRouter();
const route = useRoute();

const formData = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Image",
    field: "image",
  },
  {
    name: "Price",
    field: "price",
  },
  {
    name: "Quantity",
    field: "quantity",
  },
  {
    name: "About",
    field: "about",
  },
];
const productIndex = ref(-1);
const mode = ref("ADD");

const productData = reactive({
  name: "",
  image: "",
  price: 0,
  quantity: 0,
  about: "",
  status: "",
});

onMounted(() => {
  if (route.params.id) {
    productIndex.value = parseInt(route.params.id);
    mode.value = "EDIT";
    const selected = adminProductStore.getProduct(productIndex.value);
    productData.name = selected.name;
    productData.image = selected.image;
    productData.price = selected.price;
    productData.quantity = selected.quantity;
    productData.about = selected.about;
    productData.status = selected.status;
  }
});

const updateProduct = () => {
  if (mode.value === "EDIT") {
    adminProductStore.updateProduct(productIndex.value, productData);
    router.push({ name: "admin-products-list" });
  } else {
    adminProductStore.addProduct(productData);
  }

  router.push({ name: "admin-products-list" });
};
</script>
<template>
  <AdminLayout>
    <div class="border-2 shadow-lg p-8 rounded-lg">
      <div class="text-3xl font-bold">{{ mode }}</div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="form in formData">
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text font-bold">{{ form.name }}</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full"
              v-model="productData[form.field]"
            />
          </label>
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-4">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Status</span>
          </div>
          <select v-model="productData.status" class="select select-bordered">
            <option disabled selected>Choose Status</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </label>
      </div>
      <div class="flex justify-end mt-5 gap-2">
        <button class="btn btn-primary">Back</button>
        <button class="btn btn-success" @click="updateProduct">
          {{ mode }}
        </button>
      </div>
    </div>
  </AdminLayout>
</template>
