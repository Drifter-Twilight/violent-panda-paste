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
interface RadioProps {
  radioList: object
  modelVal: string | number | boolean
  radioBtn?: boolean
}
interface RadioEmits {
  (e: "update:modelVal", modelVal: string | number | boolean): void
}

const radioProps = defineProps<RadioProps>()
const radioEmits = defineEmits<RadioEmits>()

let radioVal = $ref(radioProps.modelVal)
function changeVal(currentVal: string | number | boolean) {
  radioEmits("update:modelVal", currentVal)
}
</script>

<style scoped></style>
