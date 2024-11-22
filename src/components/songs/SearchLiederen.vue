<script setup lang="ts">
import type { Liederen } from "../../lib/interface";
import { ref } from "vue";
const props = defineProps<{
  liederenList: Liederen[];
}>();

const searchQuery = ref("");
const liederenToon = ref(props.liederenList);


const inputChange = () => {
  liederenToon.value = props.liederenList
    .map((kring) => ({
      ...kring,
      songs: kring.songs
        ? kring.songs.filter((song) =>
            song.titel.toLowerCase().includes(searchQuery.value.toLowerCase())
          )
        : [],
    }))
    .filter((kring) => kring.songs.length > 0); // Ensure songs is not undefined
  console.log(searchQuery.value);
};
</script>

<template>
  <div class="space-y-4">
    <!-- Search Input -->
    <label class="input input-bordered flex items-center gap-2">
      <input
        type="text"
        class="grow"
        placeholder="Search"
        v-model="searchQuery"
        :oninput="inputChange"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </label>

    <ul id="songs-list" class="menu bg-base-200 rounded-box">
      <li
        v-for="kring in liederenToon"
        :key="kring.kring"
        :data-kring="kring.kring"
      >
        <a class="flex w-full justify-between">
          <span>{{ kring.kring }}</span>
          <span>p. {{ kring.pagina }}</span>
        </a>
        <ul>
          <li
            v-for="song in kring.songs"
            :key="song.titel.toLowerCase()"
            :data-title="song.titel.toLowerCase()"
          >
            <a class="flex w-full justify-between">
              <span>{{ song.titel }}</span>
              <span>p. {{ song.pagina }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
