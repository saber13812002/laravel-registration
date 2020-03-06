<template>
  <div class="wrapper">
    <form :inline="true" :model="formInline1" :rules="rules1" @submit.prevent="requestOtp" class="form">
    <h1>تایید موبایل</h1>
    
      <div label="12345" prop="pin">
        <input maxlength="5" v-model="formInline1.pin" placeholder="کد تاییدیه" class="form-control"/>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">ارسال</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      formInline1: {
        pin: ""
      },
      rules1: {
        pin: [
          {
            required: true,
            message: "Please enter Mobile Number",
            trigger: "blur"
          },
          {
            min: 5,
            max: 5,
            message: "Length must be 10",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "https://jjj.liara.run";
    },
    requestOtp() {
      let uri = `${this.url}/api/v1/otp22/${this.$route.params.phone}/${this.formInline1.pin}`;
      console.log(uri);
      this.axios.get(uri).then(response => {
        if (response.data) {
          let data = response.data;
          console.log(data);
          if (data.token) {
            localStorage.setItem("jwt", data.token);
            this.$router.push({
              name: "profile",
              params: { id: data.usr.id, jwt: data.token }
            });
          } else this.$router.push({ name: "profile" });
        } else this.$router.push({ name: "profile" });
      });
    }
  }
};
</script>
