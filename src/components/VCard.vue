<template>
  <el-col
    :xs="12"
    :sm="8"
    :md="6"
    :lg="6"
    :xl="4"
    class="p-1 sm:p-5 md:p-3 2xl:p-5 mt-2">
    <div
      class="h-20 sm:h-24 lg:h-28 2xl:h-32 flex justify-between items-center box overflow-hidden rounded-2xl transition-all hover:shadow-md hover:shadow-gray-600">
      <div
        class="flex justify-between items-center flex-col w-[60%] h-full bg-green-600 pt-2">
        <h1
          class="font-bold card_title text-sm sm:text-lg md:text-lg xl:text-2xl 2xl:text-3xl">
          {{ cardProps.cardTitle }}
        </h1>
        <p
          class="overflow-hidden card_desc w-full text-xs text-ellipsis whitespace-nowrap mb-3">
          {{ cardProps.cardDesc }}
        </p>
      </div>
      <div class="flex-center box w-[40%] p-2 h-full bg-blue-600">
        <slot name="lottie">
          <img
            src="@/assets/images/logo.png"
            alt="lottie" />
        </slot>
      </div>
    </div>
  </el-col>
</template>

<script setup lang="ts">
const cardProps = defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  cardDesc: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.card_title {
  transform: scale(1.1);
}

.card_desc {
  transform: scale(0.8);
}
</style>
