<template>
  <el-drawer
    v-model="detailDialog"
    append-to-body
    :with-header="false"
    :size="isLargeScreen ? '40%' : '100%'"
    :close-on-click-modal="false">
    <el-scrollbar>
      <el-row class="content-start pl-2 pr-2">
        <el-col :span="24">
          <el-descriptions
            title="文件信息"
            :column="1"
            border
            :size="isLargeScreen ? 'large' : 'small'">
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
              :disabled="
                file.fileName.slice(file.fileName.indexOf('.')) == '.txt'
              "
              :min="0" />
          </el-form-item>

          <el-form-item label="模式">
            <el-radio-group v-model="fileForm.fileModel">
              <el-radio
                v-for="(item, index) in radioList"
                :key="index"
                :label="item.name" />
            </el-radio-group>
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
          @click="detailDialog = false"
          >取消</el-button
        >
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from "vue"
import { useRouter } from "vue-router"
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core"
import { bus } from "@/eventBus/"

const fileDetailProps = defineProps<{
  radioList: Global.TargetModel[]
  callback: (rawData: ArrayBuffer, type: string, th: number) => void
}>()

let detailDialog = $ref(false)
let { greaterOrEqual } = useBreakpoints(breakpointsTailwind)
let isLargeScreen = greaterOrEqual("md")
let file = $ref<File.FileInfo>({
  fileName: "",
  data: new ArrayBuffer(0),
  fileSize: 0,
  fileMIME: "",
  lastModified: 0,
})
onMounted(() => {
  bus.on("getFileDetail", ({ showDrawer, fileInfo }) => {
    detailDialog = showDrawer
    file = fileInfo
  })
})

const fileForm = reactive({
  theadLevel: 1,
  fileModel: fileDetailProps.radioList[0].name,
})

const fileRouter = useRouter()
let targetPath = computed(() =>
  fileDetailProps.radioList.findIndex(item => item.name === fileForm.fileModel)
)
function submit() {
  fileDetailProps.callback(file.data, file.fileMIME, fileForm.theadLevel)
  fileRouter.push(fileDetailProps.radioList[targetPath.value].path)
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
