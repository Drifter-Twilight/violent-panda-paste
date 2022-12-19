<template>
  <div class="redpacket box p-5 h-50vh w-25vw">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.redpacket {
  background-image: url("@/assets/images/redpacket.svg");
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
