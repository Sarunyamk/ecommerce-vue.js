<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";
import Edit from "@/components/icons/Edit.vue";
import Trash from "@/components/icons/Trash.vue";

import { useAdminProductStore } from "@/stores/admin/product.js";

const adminProductStore = useAdminProductStore();

onMounted(() => {
  adminProductStore.loadProduct();
});
</script>
<template>
  <AdminLayout>
    <div class="flex justify-between items-center my-4">
      <div class="text-3xl font-bold">Product</div>
      <div>
        <RouterLink
          :to="{ name: 'admin-products-create' }"
          class="btn btn-neutral"
          >Add New</RouterLink
        >
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Updated At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in adminProductStore.lists">
            <th>{{ item.name }}</th>
            <td>
              <img :src="item.image" class="w-12 rounded-md" />
            </td>
            <td>{{ item.price }}</td>
            <td>{{ item.remainQuantity }} / {{ item.quantity }}</td>
            <td>
              <div
                class="badge p-2"
                :class="
                  item.status === 'open' ? 'badge-success' : 'badge-error'
                "
              >
                {{ item.status }}
              </div>
            </td>
            <td>{{ item.updatedAt }}</td>
            <td>
              <div class="flex justify-center gap-1">
                <RouterLink
                  class="btn btn-ghost"
                  :to="{ name: 'admin-products-update', params: { id: index } }"
                >
                  <Edit class="h-5 w-5 text-gray-500 hover:text-gray-700" />
                </RouterLink>
                <button
                  class="btn btn-ghost"
                  @click="adminProductStore.removeProduct(index)"
                >
                  <Trash class="h-5 w-5 text-red-500 hover:text-red-700" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table></div
  ></AdminLayout>
</template>
