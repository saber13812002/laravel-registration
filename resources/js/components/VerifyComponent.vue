<template>
  <div class="wrapper">
    <form
      :inline="true"
      :model="formInline1"
      :rules="rules1"
      @submit.prevent="requestOtp"
      class="form"
    >
      <h1>تایید موبایل</h1>

      <div label="12345" prop="pin">
        <input
          maxlength="5"
          v-model="formInline1.pin"
          placeholder="کد تاییدیه"
          class="form-control"
        />
        <div v-if="success != ''" class="alert alert-success" role="alert">{{success}}</div>
        <div v-if="output != ''" class="alert alert-danger" role="alert">{{output}}</div>
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
      success: "",
      output: "",
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
        : "";
    },
    requestOtp() {
      if (this.$route.params.phone) {
        if (this.formInline1.pin.length > 4) {
          let uri = `/api/v1/otp22/${this.$route.params.phone}/${this.formInline1.pin}`;
          console.log(uri);
          this.axios
            .get(uri)
            .then(response => {
              console.log(response);
              if (response.status < 330) {
                let data = response.data;
                console.log(data);
                if (data.status < 300) {
                  localStorage.setItem("jwt", data.token);
                  this.$router.push({
                    name: "dashboardProfile",
                    params: { id: data.usr.id, jwt: data.token }
                  });
                } else {
                  // this.$router.push({ name: "dashboardProfile" });
                  if (data.status == 310) {
                    this.output = "توکن اشتباه است لطفا مجدد تلاش کنید.";
                  }
                }
              } else {
                // this.$router.push({ name: "dashboardProfile" });
                if (response.status == 310) {
                  this.output = "توکن اشتباه است لطفا مجدد تلاش کنید.";
                }
              }
            })
            .catch(error => {
              console.log("Error counties");
              console.log(error);
              if (error.status == 310) {
                this.output = error.msg;
              }
            });
        } else {
          this.output = "توکن باید 5 رقمی باشد";
        }
      } else {
        this.$router.push({ name: "dashboardProfile" });
      }
    }
  }
};
</script>
