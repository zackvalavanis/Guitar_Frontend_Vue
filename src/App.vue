<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Content from "./components/content.vue";

export default { 
  name: "app", 
  components: { 
    Header, 
    Content, 
    Footer
  }
};
</script>

<template>
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<style></style>