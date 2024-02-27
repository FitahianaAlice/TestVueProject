<template>
    <div>
        <table>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          <template v-if="!isEditing(rowIndex)">
            {{ cell }}
          </template>
          <template v-else>
            <input type="text" v-model="editedRows[rowIndex][cellIndex]">
          </template>
        </td>
        <td>
          <template v-if="!isEditing(rowIndex)">
            <button @click="editRow(rowIndex)">Edit</button>
          </template>
          <template v-else>
            <button @click="saveRow(rowIndex)">Save</button>
            <button @click="cancelEditRow(rowIndex)">Cancel</button>
          </template>
          <button @click="deleteRow(rowIndex)">Delete</button>
        </td>
      </tr>
    </table>
    <button @click="addRow">Add Row</button>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const columns = ref(['Titre', 'Description', 'Etat']);
const rows = ref([
  [' ', ' ', ' '],
]);
const editedRows = ref(new Array(rows.value.length).fill(null).map(() => new Array(columns.value.length).fill(null)));

function addRow() {
  rows.value.push(new Array(columns.value.length).fill(null));
  editedRows.value.push(new Array(columns.value.length).fill(null));
}

function isEditing(rowIndex) {
  return editedRows.value[rowIndex] !== null;
}

function editRow(rowIndex) {
  editedRows.value[rowIndex] = [...rows.value[rowIndex]];
}

function saveRow(rowIndex) {
  rows.value[rowIndex] = [...editedRows.value[rowIndex]];
  editedRows.value[rowIndex] = null;
}

function cancelEditRow(rowIndex) {
  editedRows.value[rowIndex] = null;
}

function deleteRow(rowIndex) {
  rows.value.splice(rowIndex, 1);
  editedRows.value.splice(rowIndex, 1);
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>
