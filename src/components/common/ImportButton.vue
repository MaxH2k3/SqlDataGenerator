<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { dataField } from '@/store/commonData.js'
import { useFieldStore } from '@/store/counter'
import { useToast } from 'vue-toastification'

const toast = useToast()
const store = useFieldStore()
const selectedTypeImport = ref(null)
const selectedFile = ref(null)
// state open of dropdown
const isDropdownOpen = ref(false)

// handle click import button
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// ref of import button
const dropdown = ref(null)

// handle when click outside dropdown
const closeDropdownOnOutsideClick = (event) => {
  if (!dropdown.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}

// set click action when component is mounted
onMounted(() => {
  window.addEventListener('click', closeDropdownOnOutsideClick)
})

// remove click action when component is mounted
onUnmounted(() => {
  window.removeEventListener('click', closeDropdownOnOutsideClick)
})

function handleChooseType(type) {
  selectedTypeImport.value = type
  const file = selectedFile.value
  file.click()
}

function handleFileInputChange(event, type) {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = () => {
    const data = reader.result
    const parseData = parseDataByType(data, type)
    store.importFile(parseData)
  }
  reader.readAsText(file)
}

function parseDataByType(data, type) {
  switch (type) {
    case 'csv': {
      // split data by delimiter ','
      var splitData = data.trim().split(',')
      return splitData
    }
    case 'text': {
      // split data by '\r\n'
      var splitData = data.trim().split('\r\n')
      return splitData
    }
    case 'json': {
      try {
        var jsonData = JSON.parse(data)
        // get key from json
        var keys = Object.keys(jsonData)
        return keys
      } catch (err) {
        toast.error('Fail to import data from json file', {
          timeout: 2000
        })
        return
      }
    }
    case 'sql': {
      // find create table function
      var position = data.indexOf('(')
      // get field in script
      var fieldData = data.slice(position + 1, data.length - 1)
      // split field by ','
      var splitDataFirst = fieldData.trim().split(',')

      var splitDataSecond = []
      // split field by ' '
      splitDataFirst.map((item) => {
        var splitData = item.trim().split(' ')
        splitDataSecond = [...splitDataSecond, splitData[0]]
      })
      return splitDataSecond
    }
  }
}
</script>

<template>
  <div class="container-import">
    <div class="button-import" @click="toggleDropdown" ref="dropdown">
      <span><i class="fa-solid fa-square-caret-down mr-1"></i></span>
      Import
    </div>
    <div v-if="isDropdownOpen" class="dropdown-menu">
      <ul>
        <li v-for="field in dataField" :key="field.type" @click="handleChooseType(field.type)">
          {{ field.name }}
        </li>
      </ul>
      <input
        type="file"
        hidden
        ref="selectedFile"
        @change="(event) => handleFileInputChange(event, selectedTypeImport)"
      />
    </div>
  </div>
</template>

<style scoped>
.container-import {
  position: relative;
}

.button-import {
  padding: 8px;
  width: 6em;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  color: black;
  width: 10em;
  text-align: center;
}

.button-import:hover {
  background-color: rgb(63, 114, 138);
  color: white;
  border: 1px thick black;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #b6afaf;
}
</style>
