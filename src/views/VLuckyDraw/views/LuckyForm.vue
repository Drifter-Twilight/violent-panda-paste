<template>
  <el-form
    ref="luckyFormRulesRef"
    :model="luckyForm"
    label-position="top"
    class="h-92vh pl-2 pr-2 pb-5 pt-2">
    <el-form-item
      label="概率模式"
      prop="proType"
      :rules="{
        required: true,
        message: '请选择一种模式',
        trigger: 'blur',
      }">
      <el-radio-group
        v-model="luckyForm.proType"
        size="default">
        <el-radio-button
          v-for="item in luckyFormRadio"
          :key="item"
          :label="item" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="内容 / 概率">
      <el-scrollbar
        height="48vh"
        class="pr-3">
        <el-form-item
          v-for="(item, index) in luckyForm.iptList"
          :key="item.id"
          class="mt-3">
          <el-col
            :span="2"
            class="flex-center text-[#615da4]"
            >◈</el-col
          >

          <el-col :span="9">
            <el-form-item
              :prop="`iptList[${index}].text`"
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
            :span="2"
            class="flex-center"
            >-</el-col
          >

          <el-col :span="9">
            <el-form-item
              :prop="`iptList[${index}].pro`"
              :rules="{
                required: true,
                message: '概率不能为空',
                trigger: 'blur',
              }">
              <el-input-number
                v-model="item.pro"
                :min="0"
                :max="1"
                :step="0.1"
                :precision="2"
                placeholder="概率"
                :disabled="luckyForm.proType == luckyFormRadio.PROEQUAL"
                clearable />
            </el-form-item>
          </el-col>

          <el-col
            :span="2"
            class="flex-center w-[10%]">
            <el-icon
              v-if="index == luckyForm.iptList.length - 1"
              size="20px"
              @click="addItem"
              ><CirclePlus
            /></el-icon>
            <el-icon
              v-else-if="
                index != luckyForm.iptList.length - 1 &&
                luckyForm.iptList.length > 2
              "
              @click="subItem(index)"
              size="20px"
              ><CircleClose
            /></el-icon>
          </el-col>
        </el-form-item>
      </el-scrollbar>
    </el-form-item>

    <el-form-item
      label="玩法"
      prop="playMethods"
      :rules="{
        required: true,
        message: '请选择一种玩法',
        trigger: 'blur',
      }">
      <el-radio-group v-model="luckyForm.playMethods">
        <el-radio
          v-for="item in luckyFormPlayMethods"
          :key="item"
          :label="item" />
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        round
        size="large"
        class="w-full"
        @click="getLuckyData(luckyFormRulesRef)"
        >提交</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"
import type { FormInstance } from "element-plus"
import { CirclePlus, CircleClose } from "@element-plus/icons-vue"
import { luckyFormRadio, luckyFormPlayMethods } from "@/constants/lucky-draw"

const luckyFormRulesRef = $ref<FormInstance>()
const luckyForm = reactive({
  proType: luckyFormRadio.PROEQUAL,
  iptList: [
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
  playMethods: luckyFormPlayMethods.REDPACKET,
})

function calcPro(isAdd: boolean) {
  let newPro: number = 0
  if (luckyForm.proType == luckyFormRadio.PROEQUAL && isAdd) {
    newPro = 1 / (luckyForm.iptList.length + 1)
    luckyForm.iptList.map(item => (item.pro = +newPro.toFixed(2)))
  } else if (luckyForm.proType == luckyFormRadio.PROEQUAL && isAdd == false) {
    newPro = 1 / luckyForm.iptList.length
    luckyForm.iptList.map(item => (item.pro = +newPro.toFixed(2)))
  }

  return newPro
}

function addItem() {
  luckyForm.iptList.push({
    id: luckyForm.iptList.length,
    text: "",
    pro: +calcPro(true),
  })
}

function subItem(id: number) {
  luckyForm.iptList.splice(id, 1)
  calcPro(false)
}

const formRouter = useRouter()
async function getLuckyData(formEl: FormInstance | undefined) {
  if (!formEl) return

  let sum = luckyForm.iptList.reduce((pre, cur) => pre + cur.pro, 0)
  await formEl.validate(valid => {
    if (!valid) {
      ElMessage({
        type: "warning",
        message: "表单项填写有误",
        showClose: true,
      })
    } else if (sum !== 1) {
      ElMessage({
        type: "warning",
        message: "概率总和不为1",
        showClose: true,
      })
    } else {
      formRouter.push("/lucky-draw/redpacket")
    }
  })
}
</script>

<style scoped></style>
