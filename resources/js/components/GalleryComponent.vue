<template>
  <!-- testimonials -->

  <section id="works" class="works section no-padding">
    <div class="container-fluid">
      <div class="row no-gutter">
        <div class="headingsyle">
          <h1>
            <span>اخبار</span>
          </h1>
        </div>
        <!-- @foreach ($games as $game) -->
        <div
          v-for="p in pics"
          :value="p.id"
          v-bind:key="p.id"
          class="col-lg-3 col-md-6 col-sm-6 work"
        >
          <a :href="p" class="work-box">
            <img :src="p" alt />
            <div class="overlay">
              <div class="overlay-caption">
                <h5>{{p.id}}</h5>
                <p>{{p.id}}</p>
              </div>
            </div>
            <!-- overlay -->
          </a>
        </div>
        <!-- @foreach ($games as $game) -->
      </div>
    </div>
  </section>
</template>
 
<script>
export default {
  data() {
    return {
      url: "",
      pics: [],
      isLoad: false
    };
  },
  created() {
    this.urlInit();
    this.getInit();
    this.isLoggedIn();
  },
  methods: {
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "";
    },
    isLoggedIn() {
      if (localStorage.getItem("jwt")) {
        this.loginText = "پروفایل";
        //setValue('reg','محیط کاربری');
      } else {
        //setValue('reg','ثبت نام');
        this.loginText = "ورود/ثبت نام";
      }
    },
    getInit() {
      this.isLoad = false;
      let uri = `${this.url}/api/v1/gallery`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          let g = response.data[0].pictures;
          g.forEach(function(part, index) {
            this[index] = "uploads/" + this[index];
          }, g); // use arr as this
          this.pics = g;
          console.log(this.gallery);
          this.isLoad = true;
        })
        .catch(error => {
          console.log("Error pageValues get init galleryComponent");
          console.log(error);
        });
    }
  }
};
</script>
 
<style>
</style>

<style lang="scss">
</style>