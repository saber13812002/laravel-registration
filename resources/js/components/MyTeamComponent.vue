<template>
  <div id="app" class>
    <header class="header">
      <MenuComponent></MenuComponent>
    </header>
    <div class>Example Vue Component</div>
    <div class>I'm an example Vue component!</div>
  </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue";
export default {
  components: {
    MenuComponent: MenuComponent,
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
