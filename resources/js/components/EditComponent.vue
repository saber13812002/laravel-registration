<template>
  <div id="app">
    <header class="header">
      <MenuComponent></MenuComponent>
    </header>

    <div class="wrapper">
      <form :model="infoss" @submit.prevent="updateInfoss" v-if="loading" class="form">
        <h1>اطلاعات شما</h1>
        <div v-if="hasPic" class="form-photo">
          <img class="img" v-bind:src="profile_picture" />
        </div>

        <div class="panel-body">
          <div class="row">
            <div class="card-body">
              <div v-if="success != ''" class="alert alert-success" role="alert">{{success}}</div>
              <form @submit="formSubmit" enctype="multipart/form-data">
                <strong>عکس پروفایل:</strong>
                <input type="file" class="form-control" v-on:change="onImageChange" />

                <button class="btn btn-success">آپلود</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>نام</label>
              <input type="text" class="form-control" v-model="infoss.name" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>نام خانوادگی</label>
              <input type="text" class="form-control" v-model="infoss.family" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>موبایل</label>
              <input :disabled="true" type="text" class="form-control" v-model="infoss.mobile" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>ایمیل</label>
              <input type="text" class="form-control" v-model="infoss.email" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                v-model="infoss.national_code"
                v-on:input="validation(`NationalCode`)"
              />
              <div
                v-if="validNationalCode == false"
                class="alert alert-danger"
                role="alert"
              >کد ملی صحیح نیست</div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>شماره شناسنامه</label>
              <input type="number" class="form-control" v-model="infoss.shomshenas" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>نام پدر</label>
              <input type="text" class="form-control" v-model="infoss.fathername" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>تاریخ تولد</label>
              <date-picker v-model="infoss.birthdate"></date-picker>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>تحصیلات</label>
              <input type="text" class="form-control" v-model="infoss.tahsilat" />
            </div>
          </div>
        </div>

        <div class="form-group" v-if="provLoad">
          <label>انتخاب استان</label>
          <select class="form-control" v-model="infoss.province" @change="getCounty()">
            <option value="0">انتخاب استان</option>
            <option v-for="item in provinces" :value="item.id" v-bind:key="item.id">{{ item.name }}</option>
          </select>
        </div>

        <div class="form-group" v-if="!provLoad" :disabled="false">
          <label>انتخاب استان</label>
          <select class="form-control">
            <option value="0">صبر کنید</option>
          </select>
        </div>

        <div class="form-group" v-if="counLoad">
          <label>انتخاب ناحیه</label>
          <select class="form-control" v-model="infoss.county" @change="getCity()">
            <option value="0">انتخاب ناحیه</option>
            <option v-for="item in counties" :value="item.id" v-bind:key="item.id">{{ item.name }}</option>
          </select>
        </div>

        <div class="form-group" v-if="!counLoad" :disabled="false">
          <label>انتخاب ناحیه</label>
          <select class="form-control">
            <option value="0">صبر کنید</option>
          </select>
        </div>

        <div class="form-group" v-if="cityLoad">
          <label>انتخاب شهر</label>
          <select class="form-control" v-model="infoss.city">
            <option value="0">انتخاب شهر</option>
            <option v-for="item in cities" :value="item.id" v-bind:key="item.id">{{ item.name }}</option>
          </select>
        </div>

        <div class="form-group" v-if="!cityLoad" :disabled="false">
          <label>انتخاب شهر</label>
          <select class="form-control">
            <option value="0">صبر کنید</option>
          </select>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>آدرس</label>
              <input type="text" class="form-control" v-model="infoss.address" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>کدپستی</label>
              <input type="text" class="form-control" v-model="infoss.postalcode" />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>تلفن تماس</label>
              <input type="text" class="form-control" v-model="infoss.phone" />
            </div>
          </div>
        </div>

        <br />
        <div class="form-group">
          <button class="btn btn-primary" v-if="save">ذخیره</button>
          <button class="btn btn-primary" v-if="!save" :disabled="!save">صبر کنید...</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue";

export default {
  data() {
    return {
      url: "",
      infoss: {},
      loading: false,
      save: false,
      hasPic: false,
      profile_picture: "",
      image: "",
      provinces: [],
      counties: [],
      cities: [],
      provLoad: false,
      counLoad: false,
      success: "",
      cityLoad: false,
      editedButNotSaved: false,
      validNationalCode: false
    };
  },
  // components: {
  //   DatePicker: VuePersianDatetimePicker
  // },
  created() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) this.$router.push({ name: "reg" });
    let uri = `${this.url}/api/v1/info/me`;
    console.log(uri);
    this.infoss.token = jwt;
    this.axios
      .post(uri, this.infoss)
      .then(response => {
        console.log(response);
        this.infoss = response.data.data[0];
        console.log(this.infoss);
        this.validation("NationalCode");

        if (this.infoss.profile_picture) {
          this.hasPic = true;
          this.profile_picture =
            `${this.url}/images/avatars/` +
            this.infoss.profile_picture;
        } else {
          this.hasPic = true;
          this.profile_picture = `${this.url}/images/noimage.png`;
        }

        this.loading = true;
        this.save = true;
        this.getProvince();
      })
      .catch(error => {
        console.log("Error login");
        console.log(error);
      });
  },
  components: {
    MenuComponent: MenuComponent
  },
  methods: {
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "https://jjj.liara.run";
    },
    onImageChange(e) {
      console.log(e.target.files[0]);
      this.image = e.target.files[0];
    },
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;

      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      const jwt = localStorage.getItem("jwt");
      if (!jwt) this.$router.push({ name: "reg" });

      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("token", jwt);

      console.log("image uploader start");

      axios
        .post(`${this.url}/api/v1/formSubmit`, formData, config)
        .then(function(response) {
          let res = response;
          currentObj.success = res.data.success;

          currentObj.profile_picture = `${this.url}/images/avatars/${res.data.imageName}`;
          console.log(res.data.imageName);
          currentObj.updateInfoss();
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    validation(param) {
      console.log("validation National Code")
      switch (param) {
        case "NationalCode":
          this.validNationalCode = this.checkCodeMeli(
            this.infoss.national_code
          );
          console.log(this.validNationalCode);
          break;

        default:
          break;
      }
    },
    checkCodeMeli(input) {
      if (
        !/^\d{10}$/.test(input) ||
        input == "0000000000" ||
        input == "1111111111" ||
        input == "2222222222" ||
        input == "3333333333" ||
        input == "4444444444" ||
        input == "5555555555" ||
        input == "6666666666" ||
        input == "7777777777" ||
        input == "8888888888" ||
        input == "9999999999"
      )
        return false;
      var check = parseInt(input[9]);
      var sum = 0;
      var i;
      for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i);
      }
      sum %= 11;
      return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
    },
    updateInfoss() {
      this.save = false;
      let uri = `${this.url}/api/v1/info/me`;
      this.axios
        .post(uri, this.infoss)
        .then(response => {
          console.log(response);
          this.validation("NationalCode");

          this.save = true;
        })
        .catch(error => {
          console.log("Error login");
          console.log(error);
        });
    },
    getProvince() {
      this.provLoad = false;
      let uri = `${this.url}/api/v1/province`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          this.provinces = response.data;
          console.log(this.provinces);

          this.provLoad = true;
          this.getCounty();
        })
        .catch(error => {
          console.log("Error provinces");
          console.log(error);
        });
    },
    getCounty() {
      this.counLoad = false;
      let uri = `${this.url}/api/v1/county/${this.infoss.province}`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          this.counties = response.data;
          console.log(this.counties);
          this.counLoad = true;
          this.getCity();
        })
        .catch(error => {
          console.log("Error counties");
          console.log(error);
        });
    },
    getCity() {
      this.cityLoad = false;
      let uri = `${this.url}/api/v1/city/${this.infoss.county}`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          this.cities = response.data;
          console.log(this.cities);
          this.cityLoad = true;
        })
        .catch(error => {
          console.log("Error cities");
          console.log(error);
        });
    }
  }
};
</script>
