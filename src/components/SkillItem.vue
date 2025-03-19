<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  link: string
}>()
</script>
<template>
  <section class="u4 skill">
    <span class="pennant">
      <slot></slot>
    </span>
    <h3>{{ title }}</h3>
    <p style="min-height: 80px">
      {{ description }}
    </p>
    <a :href="link" class="button button-style1">Read More</a>
  </section>
</template>
<style lang="css">
.skill {
  padding-top: 1em;
  max-width: 350px;
}
</style>
