<template>
  <n-layout class="relative h-screen" :native-scrollbar="false">
    <div ref="headerRef">
      <Header logo-center :hideLogin="!!($route.query?.txHash && $route.query?.image)" />
    </div>
    <div class="container max-w-6xl py-8 flex flex-col justify-center box-border" :style="containerStyle">
      <slot />
    </div>
    <div ref="footerRef" class="justify-center">
      <Footer />
    </div>
  </n-layout>
</template>

<script lang="ts" setup>
const { width } = useWindowSize();

/** Heading height */
const height = ref<number>(0);
const headerRef = ref<HTMLElement>();
const footerRef = ref<HTMLElement>();

const containerStyle = computed(() => {
  return {
    minHeight: `calc(100vh - ${height.value}px)`,
  };
});

onMounted(() => {
  setHeight();
});

watch(
  () => width.value,
  _ => {
    setHeight();
  }
);
function setHeight() {
  height.value = (headerRef.value?.clientHeight || 0) + (footerRef.value?.clientHeight || 0) + 20;
}
</script>
