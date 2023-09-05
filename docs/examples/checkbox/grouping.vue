<template>
  <el-checkbox-group v-model="checkList" @change="checkedChange($event)">
    <el-checkbox label="Option A" />
    <el-checkbox label="Option B" />
    <el-checkbox label="Option C" />
    <el-checkbox label="disabled" disabled />
    <el-checkbox label="selected and disabled" disabled />
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkedChange =(e) =>{
  console.log(e)
}
const checkList = ref(['selected and disabled', 'Option A'])
</script>
