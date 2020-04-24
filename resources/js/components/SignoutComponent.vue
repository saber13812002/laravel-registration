<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Signout</div>

          <div class="card-body">Signout</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      show: false
    };
  },
  mounted() {
    console.log("Component mounted.");
    this.logout();
    this.$router.push({ path: "/reg" });
  },
  methods: {
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "/";
    },
    logout() {
      localStorage.removeItem("jwt");
      //   localStorage.removeItem("expiration");
    }
  }
};
</script>
