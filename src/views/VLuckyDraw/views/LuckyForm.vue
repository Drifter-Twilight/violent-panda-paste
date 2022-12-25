<template>
  <lucky-container title="表单填写">
    <el-form
      ref="luckyFormRulesRef"
      :model="luckyForm"
      label-position="top"
      class="h-92vh pt-3 pr-3 pl-3">
      <el-form-item
        label="概率模式"
        prop="proType"
        :rules="{
          required: true,
          message: '请选择一种模式',
          trigger: 'blur',
        }">
        <el-radio-group v-model="luckyForm.proType">
          <el-radio-button
            v-for="item in luckyFormRadio"
            :key="item"
            :label="item" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="内容 / 概率">
        <el-scrollbar
          height="46vh"
          class="pr-3">
          <el-form-item
            v-for="(item, index) in luckyForm.iptList"
            :key="item.id"
            class="mt-3">
            <el-col
              :span="2"
              class="flex-evenly text-[#615da4]"
              >◈</el-col
            >

            <el-col :span="9">
              <el-form-item
                :prop="`iptList[${index}].name`"
                :rules="{
                  required: true,
                  message: '内容不能为空',
                  trigger: 'blur',
                }">
                <el-input
                  v-model="item.name"
                  placeholder="内容" />
              </el-form-item>
            </el-col>

            <el-col
              :span="2"
              class="flex-center"
              >-</el-col
            >

            <el-col :span="9">
              <el-form-item
                :prop="`iptList[${index}].value`"
                :rules="{
                  required: true,
                  message: '概率不能为空',
                  trigger: 'blur',
                }">
                <el-input-number
                  v-model="item.value"
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
            v-for="item in luckyDrawModel"
            :key="`${item}model`"
            :label="item.name" />
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
  </lucky-container>
  <lucky-img img-path="lucky-draw-form.jpg" />
</template>

<script setup lang="ts">
import { reactive, computed } from "vue"
import { useRouter } from "vue-router"
import { ElMessage, type FormInstance } from "element-plus"
import { CirclePlus, CircleClose } from "@element-plus/icons-vue"
import { useLuckyStore } from "@/stores/useLuckyStore/"
import LuckyContainer from "../components/LuckyContainer.vue"
import LuckyImg from "../components/LuckyImg.vue"
import { luckyFormRadio, luckyDrawModel } from "@/constants/luckyDraw"

const luckyFormRulesRef = $ref<FormInstance>()
const luckyForm = reactive({
  proType: luckyFormRadio.PROEQUAL,
  iptList: [
    {
      id: 0,
      name: "",
      value: 0.5,
    },
    {
      id: 1,
      name: "",
      value: 0.5,
    },
  ],
  playMethods: luckyDrawModel[0].name,
})

let newPro: number = 0
function calcPro(isAdd: boolean) {
  if (luckyForm.proType == luckyFormRadio.PROEQUAL && isAdd) {
    newPro = 1 / (luckyForm.iptList.length + 1)
    luckyForm.iptList.map(item => (item.value = +newPro))
  } else if (luckyForm.proType == luckyFormRadio.PROEQUAL && isAdd == false) {
    newPro = 1 / luckyForm.iptList.length
    luckyForm.iptList.map(item => (item.value = +newPro))
  }

  return newPro
}

function addItem() {
  luckyForm.iptList.push({
    id: luckyForm.iptList.length,
    name: "",
    value: +calcPro(true),
  })
}

function subItem(id: number) {
  luckyForm.iptList.splice(id, 1)
  calcPro(false)
}

const formRouter = useRouter()
const { setProType, setLuckyData } = useLuckyStore()
async function getLuckyData(formEl: FormInstance | undefined) {
  if (!formEl) return

  let sum = luckyForm.iptList.reduce((pre, cur) => pre + cur.value, 0)
  await formEl.validate(valid => {
    if (!valid) {
      ElMessage({
        type: "warning",
        message: "表单项填写有误",
        showClose: true,
      })
    } else if (+sum.toFixed(2) != 1) {
      ElMessage({
        type: "warning",
        message: "概率总和不为1",
        showClose: true,
      })
    } else {
      setProType(luckyForm.proType)
      setLuckyData(luckyForm.iptList)
      let targetPath = computed(() =>
        luckyDrawModel.findIndex(item => item.name === luckyForm.playMethods)
      )
      formRouter.push(luckyDrawModel[targetPath.value].path)
    }
  })
}
</script>
