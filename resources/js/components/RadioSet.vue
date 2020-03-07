<template>
  <div>
    <label>{{labelName}}:</label>
    <button
      type="button"
      v-for="(val, idx) in options"
      :key="idx"
      @click="clicked(val)"
    >{{ val.value }}</button>
  </div>
</template>

<script>
export default {
  props: ["value", "options", "labelName"],
  methods: {
    clicked(val) {
      this.$emit("input", val);
    }
  }
};
</script>