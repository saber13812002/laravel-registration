<template>
  <div class="card">
    <header class="header">
      <MenuComponent></MenuComponent>
    </header>
    <div class="card-header">
      <i class="fas fa-code"></i> Example Vue Component
    </div>
    <div class="card-body">I'm an example Vue component!</div>
  </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue";
export default {
  components: {
    MenuComponent: MenuComponent
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
