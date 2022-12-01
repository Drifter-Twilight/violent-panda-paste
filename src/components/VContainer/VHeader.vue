<template>
  <el-header height="64px">
    <el-row
      justify="space-between"
      align="middle">
      <el-col
        :xs="12"
        :sm="5"
        :md="4"
        :lg="3"
        :xl="3"
        class="h-[64px]">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="h-[60px]" />
      </el-col>
      <el-col
        :xs="10"
        :sm="5"
        :md="4"
        :lg="3"
        :xl="3"
        class="flex justify-end items-center">
        <el-switch
          v-model="theme"
          size="large"
          :active-icon="Moon"
          :inactive-icon="Sunny"
          class="header_switch"
          @change="toggleDark()" />
      </el-col>
    </el-row>
  </el-header>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useDark, useToggle, useStorage } from "@vueuse/core"
import { Sunny, Moon } from "@element-plus/icons-vue"

let theme = $ref(false)
onMounted(() => {
  let themeMode = useStorage("theme-mode", "auto")
  themeMode.value === "auto" ? (theme = false) : (theme = true)
})

const isDark = useDark({
  storageKey: "theme-mode",
})
const toggleDark = useToggle(isDark)
</script>

<style scoped>
.header_switch {
  --el-switch-on-color: #615da4;
  --el-switch-off-color: #ffd700;
}

:deep(.el-switch__label *) {
  font-size: 20px;
}
</style>
