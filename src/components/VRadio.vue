<template>
  <el-radio-group
    v-model="radioVal"
    @change="changeVal">
    <template v-if="!radioBtn">
      <el-radio
        v-for="item in radioList"
        :key="item"
        :label="item" />
    </template>

    <template v-else>
      <el-radio-button
        v-for="item in radioList"
        :key="item"
        :label="item" />
    </template>
  </el-radio-group>
</template>

<script setup lang="ts">
const radioProps = defineProps<{
  radioList: any[] | object
  modelVal: string | number | boolean
  radioBtn?: boolean
}>()

const radioEmits = defineEmits<{
  (e: "update:modelVal", modelVal: string | number | boolean): void
}>()

let radioVal = $ref(radioProps.modelVal)
function changeVal(currentVal: string | number | boolean) {
  radioEmits("update:modelVal", currentVal)
}
</script>

<style scoped></style>
