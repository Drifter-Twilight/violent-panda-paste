<template>
  <a-layout-header class="bg-transparent pl-[2vw] pr-[2vw]">
    <a-row
      justify="space-between"
      align="center">
      <a-col
        :xs="10"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="3"
        class="h-[64px]">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="h-[64px]" />
      </a-col>
      <a-col
        :xs="10"
        :sm="7"
        :md="5"
        :lg="4"
        :xl="3"
        class="flex justify-center items-center">
        白天<a-switch
          v-model:checked="theme"
          class="ml-2 mr-2" />夜晚
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script setup lang="ts">
let theme = $ref(false)
</script>

<style scoped>
.ant-switch {
  background-color: gold;
}

.ant-switch-checked {
  background-color: #7028e4;
}
</style>
