<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="h-screen flex items-center">
    <div class="flex-1 max-w-2xl shadow-xl mx-auto p-8">
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-2xl font-bold">Login</h1>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Email : </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">Password :</span>
          </div>
          <input
            type="password"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </label>
        <RouterLink
          :to="{ name: 'admin-dashboard' }"
          class="btn btn-primary w-full"
          >Login</RouterLink
        >
      </div>
    </div>
  </div>
</template>
