<template>
  <el-col
    :xs="12"
    :sm="8"
    :md="6"
    :lg="6"
    :xl="4"
    class="p-1 sm:p-5 md:p-3 2xl:p-5 mt-2 cursor-pointer">
    <div
      class="flex justify-between items-center box h-20 sm:h-24 lg:h-28 2xl:h-32 overflow-hidden rounded-2xl transition-all hover:shadow-md hover:shadow-gray-400 bg-gradient-to-r text-white card_bg">
      <div
        class="relative flex justify-between items-start flex-col w-[55%] h-full pt-3 pb-4 ml-3 card_left-bg">
        <h1
          class="font-bold card_title text-sm sm:text-lg md:text-lg xl:text-2xl 2xl:text-3xl z-10">
          {{ cardProps.cardTitle }}
        </h1>
        <p
          class="overflow-hidden card_desc w-full text-sm text-ellipsis whitespace-nowrap z-10"
          :title="cardProps.cardDesc">
          {{ cardProps.cardDesc }}
        </p>
      </div>
      <div class="flex-center box w-[45%] p-2 h-full">
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
interface CardProps {
  cardTitle: string
  cardDesc: string
  cardColor: string[]
}

const cardProps = defineProps<CardProps>()
</script>

<style scoped>
.card_title {
  transform: scale(1.02);
}

.card_desc {
  transform: scale(0.8);
  transform-origin: 0 0;
}

.card_bg {
  background-image: linear-gradient(
    to right,
    v-bind("cardProps.cardColor[0]") 0,
    v-bind("cardProps.cardColor[1]") 50%
  );
  transition: all 0.15s ease-in;
}

.card_bg:hover {
  transform: scale(1.05);
}
</style>
