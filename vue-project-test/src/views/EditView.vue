<template>
    <div>
        <template v-if="!isEditing">
      <button @click="startEditing">Edit</button>
    </template>
    <template v-else>
      <button @click="saveRow">Save</button>
      <button @click="cancelEditing">Cancel</button>
    </template>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isEditing = ref(false);
  
  function startEditing() {
    isEditing.value = true;
  }
  
  function saveRow() {
    // Ici, vous pouvez inclure la logique pour sauvegarder les modifications.
    isEditing.value = false;
  }
  
  function cancelEditing() {
    isEditing.value = false;
  }
  </script>
  
  <style scoped>
  button {
    margin-right: 8px;
  }
  </style>
  