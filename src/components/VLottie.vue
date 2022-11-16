<template>
  <div ref="animation"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import lottie from "lottie-web"

const props = defineProps({
  lottie: {
    type: String,
    required: true,
  },
})

let animation = $ref(null)

onMounted(async () => {
  let res = await import(`../assets/lottie/${props.lottie}.json`)

  lottie.loadAnimation({
    container: animation!,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: { ...res },
  })
})
</script>
