<script setup>
import { ref, onMounted } from "vue";
</script>
<template>
  <div class="drawer drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li class="text-2xl font-bold"><a>Admin</a></li>
        <li><a>Dashboard</a></li>
        <li><a>Product</a></li>
        <li><a>Order</a></li>
        <li><a>User</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  <div>Footer</div>
</template>
