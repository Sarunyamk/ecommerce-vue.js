<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import { ref } from "vue";
import Edit from "@/components/icons/Edit.vue";
import Trash from "@/components/icons/Trash.vue";

const products = ref([
  {
    name: "Product 1",
    image: "https://picsum.photos/id/237/200/300",
    price: 100000,
    quantity: 10,
    remainQuantity: 5,
    status: "open",
    updatedAt: new Date().toISOString(),
  },
]);
</script>
<template>
  <AdminLayout>
    <div class="flex justify-between items-center my-4">
      <div class="text-3xl font-bold">Product</div>
      <div>
        <button class="btn btn-neutral">Add New</button>
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
          <tr v-for="item in products">
            <th>{{ item.name }}</th>
            <td>
              <img :src="item.image" class="w-12 rounded-md" />
            </td>
            <td>{{ item.price }}</td>
            <td>{{ item.remainQuantity }} / {{ item.quantity }}</td>
            <td>
              <div class="badge badge-success">
                {{ item.status }}
              </div>
            </td>
            <td>{{ item.updatedAt }}</td>
            <td>
              <div class="flex justify-center gap-1">
                <button class="btn btn-ghost">
                  <Edit class="h-5 w-5 text-gray-500 hover:text-gray-700" />
                </button>
                <button class="btn btn-ghost">
                  <Trash class="h-5 w-5 text-red-500 hover:text-red-700" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table></div
  ></AdminLayout>
</template>
