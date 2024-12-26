<script setup>
import { defineProps } from "vue";

defineProps({
  products: Array,
  addToCart: Function,
});
</script>

<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4"
  >
    <div v-for="item in products" class="card bg-base-100 w-full shadow-xl">
      <figure>
        <img :src="item.imageUrl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ item.name }}</h2>
        <p>{{ item.about }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="addToCart(item)">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
