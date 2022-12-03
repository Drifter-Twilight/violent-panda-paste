<template>
  <div
    class="redpacket flex-center box p-5 h-50vh w-25vw"
    @click="setContent">
    <Transition
      appear
      enter-active-class="animate__animated animate__flip">
      <div
        v-if="showContent"
        class="redpacket_content flex-center text-black write-vertical-left w-[70%] h-[95%] rounded-lg shadow-2xl">
        {{ content }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const redpacketProps = defineProps({
  content: {
    type: String,
    default: "zs",
  },
})

let showContent = $ref(false)
function setContent() {
  showContent = true
}
</script>

<style scoped>
.redpacket {
  background-image: url("@/assets/images/redpacket.svg");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
}

.redpacket_content {
  background-image: url("@/assets/images/redpacket-textbg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
