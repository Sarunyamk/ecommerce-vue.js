<script setup>
import { ref, onMounted } from "vue";
import UserLayout from "@/layouts/UserLayout.vue";

const profileImage = ref("https://via.placeholder.com/150");
const email = ref("");
const name = ref("");

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const updateProfile = () => {
  const profileData = {
    imageUrl: profileImage.value,
    name: name.value,
    email: email.value,
  };
  localStorage.setItem("profile-data", JSON.stringify(profileData));
  alert("Profile updated successfully");
};

onMounted(() => {
  let profileData = localStorage.getItem("profile-data");
  if (profileData) {
    profileData = JSON.parse(profileData);
    profileImage.value = profileData.imageUrl;
    name.value = profileData.name;
    email.value = profileData.email;
  }
});
</script>

<template>
  <UserLayout>
    <div
      class="container bg-slate-100 p-8 max-w-2xl mx-auto my-4 border border-slate-200 shadow-xl"
    >
      <h1 class="text-2xl font-bold">Your Profile</h1>
      <div class="flex flex-col justify-center items-center">
        <img :src="profileImage" class="rounded-full w-40 h-40" />
        <input type="file" @change="handleFileUpload" />

        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="text-lg font-bold">Email : </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            v-model="email"
          />
        </label>

        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="text-lg font-bold">Name : </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            v-model="name"
          />
        </label>

        <button
          @click="updateProfile"
          class="btn btn-neutral w-full max-w-xs mt-6"
        >
          Update Profile
        </button>
      </div>
    </div>
  </UserLayout>
</template>
