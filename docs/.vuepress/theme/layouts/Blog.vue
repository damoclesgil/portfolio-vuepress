<template>
  <div class="flex flex-col h-full">
    <Nav/>
    <Content class="flex-1 container mx-auto leading-normal"/>
    <Footer class="pin-b"/>
  </div>
</template>

<script>
import Nav from '@theme/components/Nav';
import Footer from '@theme/components/Footer';
export default {
  components: { Nav, Footer },
  name: 'Blog'
};
</script>

<style lang="stylus"></style>