<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ type?: string }>(), {
  type: "normal"
})
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  gap:.5rem;
  align-items: center;
  width: fit-content;
  background-color: white;
  padding: .5rem .5rem;
  box-shadow: .1rem .1rem .2rem gainsboro;
  font-size: large;
  font-weight: bold;
  border-radius: .5rem;
}

.button:hover {
  border-color: rgba(0, 0, 0, 0.1);
}

.button:focus {
  border-color: rgba(0, 0, 0, 0.2);
  outline: none;
}
</style>