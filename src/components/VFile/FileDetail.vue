<template>
  <el-drawer
    v-model="drawer"
    title="文件配置"
    direction="rtl"
    size="40%"
    append-to-body
    lock-scroll
    :with-header="false"
    :close-on-click-modal="false">
    <el-scrollbar>
      <el-row class="content-start pl-2 pr-2">
        <el-col :span="24">
          <el-descriptions
            title="文件信息"
            :column="1"
            border>
            <el-descriptions-item
              label-align="center"
              label="文件名">
              {{ file.fileName }}
            </el-descriptions-item>

            <el-descriptions-item
              label-align="center"
              label="文件大小">
              {{ file.fileSize }}字节
            </el-descriptions-item>

            <el-descriptions-item
              label-align="center"
              label="MIME类型">
              {{ file.fileMIME }}
            </el-descriptions-item>

            <el-descriptions-item
              label-align="center"
              label="最新修改时间">
              {{ file.lastModified }}
            </el-descriptions-item>
          </el-descriptions>
        </el-col>

        <el-form
          :model="fileForm"
          label-position="top"
          class="mt-3 w-full">
          <el-form-item
            prop="theadLevel"
            label="表头级数">
            <el-input-number
              v-model="fileForm.theadLevel"
              :min="0" />
          </el-form-item>

          <el-form-item label="模式">
            <v-radio
              :radio-list="radioList"
              v-model:model-val="modelVal" />
          </el-form-item>
        </el-form>
      </el-row>
    </el-scrollbar>

    <template #footer>
      <div style="flex: auto">
        <el-button
          type="primary"
          size="large"
          round
          @click="submit"
          >提交</el-button
        >
        <el-button
          size="large"
          round
          @click="drawer = false"
          >取消</el-button
        >
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue"
import { useRouter } from "vue-router"
import VRadio from "@/components/VRadio.vue"
import { bus } from "@/eventBus/"

const FileDetail = defineProps<{
  radioList: object
  toTarget: string
}>()
let modelVal = computed(() => FileDetail.toTarget)

let drawer = $ref(false)
let file = $ref<EventBus.FileInfo>({
  fileName: "",
  data: new ArrayBuffer(0),
  fileSize: 0,
  fileMIME: "",
  lastModified: 0,
})
onMounted(() => {
  bus.on("getFileDetail", ({ showDrawer, fileInfo }) => {
    drawer = showDrawer
    file = fileInfo
  })
})

const fileForm = reactive({
  theadLevel: 1,
})

const fileRouter = useRouter()
function submit() {
  fileRouter.push('/random-roll-call/roll-call')
}
</script>

<style scoped>
:deep(.el-input__inner) {
  background-color: transparent;
  font-size: small;
}

:deep(.el-input__inner:focus) {
  box-shadow: none !important;
}
</style>
