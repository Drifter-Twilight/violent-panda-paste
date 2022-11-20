<template>
  <lucky-type title="表单填写">
    <el-form
      ref="luckyFormRulesRef"
      :model="luckyForm"
      label-position="top"
      class="h-92vh pl-5 pr-5 pb-5 pt-3">
      <el-form-item
        label="概率模式"
        prop="proType"
        :rules="{ required: true, message: '请选择一种模式', trigger: 'blur' }">
        <el-radio-group
          v-model="luckyForm.proType"
          @change="selectPro"
          size="default">
          <el-radio-button
            v-for="item in luckyRadio"
            :key="item"
            :label="item" />
        </el-radio-group>
      </el-form-item>

      <div class="h-[75%] overflow-auto box">
        <el-form-item
          v-for="(item, index) in luckyForm.luckyIpt"
          :key="item.id"
          :label="index == 0 ? '内容 / 概率' : ''">
          <el-col
            :span="2"
            class="flex-center text-[#7028e4]"
            >◈</el-col
          >

          <el-col :span="9">
            <el-form-item
              :prop="`luckyIpt[${index}].text`"
              :rules="{
                required: true,
                message: '内容不能为空',
                trigger: 'blur',
              }">
              <el-input
                v-model="item.text"
                placeholder="内容"
                clearable />
            </el-form-item>
          </el-col>

          <el-col
            :span="1"
            class="flex-center"
            >-</el-col
          >

          <el-col :span="9">
            <el-form-item
              :prop="`luckyIpt[${index}].pro`"
              :rules="{
                required: true,
                message: '概率不能为空',
                trigger: 'blur',
              }">
              <el-input-number
                v-model="item.pro"
                :min="0"
                :max="0.5"
                :step="0.1"
                :precision="2"
                placeholder="概率"
                :disabled="luckyForm.proType == luckyRadio.PROEQUAL"
                clearable />
            </el-form-item>
          </el-col>

          <el-col
            :span="3"
            class="flex-center w-[10%]">
            <el-icon
              v-if="index == luckyForm.luckyIpt.length - 1"
              size="20px"
              @click="addItem"
              ><CirclePlus
            /></el-icon>
            <el-icon
              v-else-if="
                index != luckyForm.luckyIpt.length - 1 &&
                luckyForm.luckyIpt.length > 2
              "
              @click="subItem(index)"
              size="20px"
              ><CircleClose
            /></el-icon>
          </el-col>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          round
          size="large"
          class="w-full mt-3"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </lucky-type>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import type { FormInstance } from "element-plus"
import { CirclePlus, CircleClose } from "@element-plus/icons-vue"
import LuckyType from "../components/LuckyType.vue"
import { luckyRadio } from "@/constants/lucky-draw"

const luckyFormRulesRef = $ref<FormInstance>()
const luckyForm = reactive({
  proType: luckyRadio.PROEQUAL,
  luckyIpt: [
    {
      id: 0,
      text: "",
      pro: 0.5,
    },
    {
      id: 1,
      text: "",
      pro: 0.5,
    },
  ],
})

function selectPro(target: luckyRadio) {
  luckyForm.proType = target
}

function calcPro(isAdd: boolean) {
  let newPro: number = 0
  if (luckyForm.proType == luckyRadio.PROEQUAL) {
    if (isAdd) {
      newPro = 1 / (luckyForm.luckyIpt.length + 1)
    } else {
      newPro = 1 / luckyForm.luckyIpt.length
    }
    luckyForm.luckyIpt.map(item => (item.pro = +newPro.toFixed(2)))
  } else {
    newPro = +(1 - luckyForm.luckyIpt.reduce((pre, cur) => pre + cur.pro, 0))
  }
  return newPro
}

function addItem() {
  luckyForm.luckyIpt.push({
    id: luckyForm.luckyIpt.length,
    text: "",
    pro: +calcPro(true),
  })
}

function subItem(id: number) {
  luckyForm.luckyIpt.splice(id, 1)
  calcPro(false)
}
</script>

<style scoped></style>
