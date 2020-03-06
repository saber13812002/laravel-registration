<template>
  <section class="banner" :style="cssProps" role="banner">
    <header id="header">
      <div class="header-content clearfix">
        <a class="logo" href="#contact">
          <img :src="siteLogo" alt />
        </a>
        <nav class="navigation" role="navigation">
          <ul class="primary-nav">
            <li>
              <a class="login" href="/reg">{{loginText}}</a>
            </li>
          </ul>
        </nav>
        <a href="#contact" class="nav-toggle">
          منو
          <span></span>
        </a>
      </div>
      <!-- header content -->
    </header>
    <!-- header -->

    <div class="container">
      <div class="col-md-10 col-md-offset-1">
        <div class="banner-text text-center">
          <h1>{{siteTitle}}</h1>
        </div>
        <!-- banner text -->
      </div>
    </div>
  </section>
</template>
 
<script>
export default {
  data() {
    return {
      url: "",
      siteTitle: "",
      siteLogo: "",
      cssProps: {
        backgroundImage: ""
      },
      loginText: "",
      isLoad: false,
      pageValues: {}
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
        : "https://jjj.liara.run";
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
      let uri = `${this.url}/api/v1/init`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          this.pageValues = response.data;
          console.log(this.pageValues);
          this.siteTitle = this.pageValues[3].text;
          this.siteLogo = this.pageValues[4].text;
          this.cssProps.backgroundImage = `url(${this.pageValues[5].text})`;
          this.isLoad = true;
        })
        .catch(error => {
          console.log("Error pageValues");
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