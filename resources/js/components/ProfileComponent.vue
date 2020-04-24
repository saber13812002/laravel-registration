<template>
  <div id="app">
    <header class="header">
      <MenuComponent></MenuComponent>
    </header>

    <div class="wrapper">
      <form :model="infoss" @submit.prevent="updateInfoss" v-if="loading" class="form">
        <h1>اطلاعات شما</h1>

        <div class="sau-select lg center" :class="{selected: selected === 'sokhanran'}">
          <label for="sokhanran">
            <input type="radio" id="sokhanran" value="sokhanran" v-model="selected" />
            سخنران هستم
          </label>
        </div>
        <div class="sau-select lg center" :class="{selected: selected === 'heyat'}">
          <label for="heyat">
            <input type="radio" id="heyat" value="heyat" v-model="selected" />
            بعنوان هیات ثبت نام میکنم
          </label>
        </div>

        <div class="sokhanran" v-if="selected=='sokhanran'">
          <div v-if="hasPic && !hasPic_cdn" class="form-photo">
            <img class="img" v-bind:src="profile_picture" />
          </div>
          <div v-if="hasPic_cdn" class="form-photo">
            <img class="img" v-bind:src="profile_picture_cdn" />
          </div>

          <div class="panel-body">
            <div class="row">
              <div class="card-body">
                <div v-if="success != ''" class="alert alert-success" role="alert">{{success}}</div>
                <div v-if="output != ''" class="alert alert-danger" role="alert">{{output}}</div>
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

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>آیا تمایل به سخنرانی خارج استان را دارید؟</label>
                <input type="text" class="form-control" v-model="infoss.isInOutProvince" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>آیا فقط مایل به سخنرانی در استان سکونت خود هستید</label>
                <input type="text" class="form-control" v-model="infoss.isInMyProvince" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>آیا فقط مایل به سخنرانی در محله سکونت خود هستید؟</label>
                <input type="text" class="form-control" v-model="infoss.isInMyLocal" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>حداقل حق القدم پیشنهادی شما برای سخنرانی خارج از استان برای یک جلسه چقدر است؟</label>
                <input type="text" class="form-control" v-model="infoss.minOutMyOstan" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>حداکثر حق القدم پیشنهادی شما برای سخنرانی خارج از استان برای یک جلسه چقدر است؟</label>
                <input type="text" class="form-control" v-model="infoss.maxOutMyOstan" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>حداقل حق القدم پیشنهادی شما برای سخنرانی در استان محل سکونت خود چقدر است ؟</label>
                <input type="text" class="form-control" v-model="infoss.minInMyProvince" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>حداکثر حق القدم پیشنهادی شما برای سخنرانی در استان محل سکونت خود چقدر است ؟</label>
                <input type="text" class="form-control" v-model="infoss.maxInMyProvince" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>حداقل حق القدم پیشنهادی شما برای سخنرانی در محله ی سکونت خود چقدر است ؟</label>
                <input type="text" class="form-control" v-model="infoss.minInMyLocal" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>حداکثر حق القدم پیشنهادی شما برای سخنرانی در محله ی سکونت خود چقدر است ؟</label>
                <input type="text" class="form-control" v-model="infoss.maxInMyLocal" />
              </div>
            </div>
          </div>

          <div class="sau-select lg center" :class="{selected: selectedExpert === 'traikh'}">
            <label for="traikh">
              <input type="radio" id="traikh" value="traikh" v-model="selectedExpert" />
              تاریخ اسلام
            </label>
          </div>
          <div class="sau-select lg center" :class="{selected: selectedExpert === 'sharhDoa'}">
            <label for="sharhDoa">
              <input type="radio" id="sharhDoa" value="sharhDoa" v-model="selectedExpert" />
              شرح دعا و زیارات
            </label>
          </div>
          <div
            class="sau-select lg center"
            :class="{selected: selectedExpert === 'menbarMonasebati'}"
          >
            <label for="menbarMonasebati">
              <input
                type="radio"
                id="menbarMonasebati"
                value="menbarMonasebati"
                v-model="selectedExpert"
              />
              منبر های مناسبتی
            </label>
          </div>
          <div class="sau-select lg center" :class="{selected: selectedExpert === 'sabkZendegi'}">
            <label for="sabkZendegi">
              <input type="radio" id="sabkZendegi" value="sabkZendegi" v-model="selectedExpert" />
              سبک زندگی اسلامی
            </label>
          </div>
          <div class="sau-select lg center" :class="{selected: selectedExpert === 'family'}">
            <label for="family">
              <input type="radio" id="family" value="family" v-model="selectedExpert" />
              خانواده
            </label>
          </div>
          <div
            class="sau-select lg center"
            :class="{selected: selectedExpert === 'tarbiatFarzand'}"
          >
            <label for="tarbiatFarzand">
              <input
                type="radio"
                id="tarbiatFarzand"
                value="tarbiatFarzand"
                v-model="selectedExpert"
              />
              تربیت فرزند
            </label>
          </div>
          <div class="sau-select lg center" :class="{selected: selectedExpert === 'all'}">
            <label for="all">
              <input type="radio" id="all" value="all" v-model="selectedExpert" />
              همه موارد
            </label>
          </div>
          <div class="sau-select lg center" :class="{selected: selectedExpert === 'other'}">
            <label for="other">
              <input type="radio" id="other" value="other" v-model="selectedExpert" />
              سایر
            </label>
          </div>
        </div>

        <div class="row" v-if="selectedExpert == 'other'">
          <div class="col-md-12">
            <div class="form-group">
              <label>تخصص خود را ذکر کنید</label>
              <input type="text" class="form-control" v-model="infoss.sayer" />
            </div>
          </div>
        </div>

        <div class="heyat" v-if="selected=='heyat'">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>نام هیات</label>
                <input type="text" class="form-control" v-model="infoss.heyat" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label>تاریخ تاسیس</label>
                <date-picker v-model="infoss.tasis"></date-picker>
              </div>
            </div>
          </div>
        </div>

        <div class="heyat" v-if="selected=='sokhanran' || selected=='heyat'">
          <div class="form-group" v-if="provLoad">
            <label>انتخاب استان</label>
            <select class="form-control" v-model="infoss.province" @change="getCounty()">
              <option value="0">انتخاب استان</option>
              <option
                v-for="item in provinces"
                :value="item.id"
                v-bind:key="item.id"
              >{{ item.name }}</option>
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
      hasPic_cdn: false,
      profile_picture: "",
      profile_picture_cdn: "",
      image: "",
      provinces: [],
      counties: [],
      cities: [],
      provLoad: false,
      counLoad: false,
      success: "",
      output: "",
      cityLoad: false,
      editedButNotSaved: false,
      validNationalCode: false,
      selected: "",
      selectedExpert: ""
    };
  },
  // components: {
  //   DatePicker: VuePersianDatetimePicker
  // },
  created() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) this.$router.push({ name: "reg" });
    this.urlInit();
    let uri = `${this.url}/api/v1/info/me`;
    console.log(uri);
    this.infoss.token = jwt;
    this.axios
      .post(uri, this.infoss)
      .then(response => {
        console.log(response);
        this.infoss = response.data.data[0];
        console.log("infoss");
        console.log(this.infoss);
        this.validation("NationalCode");
        // if (this.infoss.smsSent == 1) {
        //   localStorage.setItem("smsSent", 1);
        //   this.$router.push({ path: "/shift" });
        // }

        if (this.infoss.profile_picture) {
          this.hasPic = true;
          // this.hasPic_cdn =
          //   this.infoss.profile_picture_cdn == null ? false : true;
          // this.hasPic_cdn = false;
          this.profile_picture =
            `${this.url}/images/avatars/` + this.infoss.profile_picture;
          this.profile_picture_cdn = this.infoss.profile_picture_cdn;
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
        : "/";
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

          currentObj.profile_picture = `${currentObj.url}/images/avatars/${res.data.imageName}`;
          currentObj.profile_picture_cdn = `${res.data.cdn}`;

          // this.hasPic_cdn =
          //   currentObj.profile_picture_cdn == null ? false : true;

          // this.hasPic_cdn = false;
          console.log(res.data.imageName);
          currentObj.updateInfoss();
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    validation(param) {
      console.log("validation National Code");
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
          this.infoss = response.data.data[0];
          if (response.data.data[0].smsSent == 1) {
            localStorage.setItem("smsSent", 1);
            // this.$router.push({ path: "/dashboard" });
          }
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
    },
    radioClick1() {
      console.log(this.selected);
    },
    radioClick2() {
      console.log(this.selected);
    }
  }
};
</script>
<style>
.form-photo {
  margin: 0 auto;
  width: 192px;
  border-radius: 50%;
}
.img {
  width: 180px;
  padding: 15px;
  height: 180px;
  border-radius: 50%;
  border: 3px dashed #171c23;
}
</style>
