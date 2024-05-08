<template>
  <PageWrapper dense contentFullHeight fixedHeight>
    <div style="width: 100%; height: calc(100vh - 80px)">
      <workbook :data="[cell]" />
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import cell from './data/cell';
</script>

<style lang="less" scoped></style>
