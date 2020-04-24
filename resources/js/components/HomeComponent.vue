<template>
  <form id="form1" runat="server">
    <!-- header -->
    <HeaderComponent></HeaderComponent>

    <!-- Contact -->
    <section id="contact" class="space100">
      <div class="container">
        <div class="row">
          <div class="headingsyle">
            <h1>
              <span>ثبت نام</span>
            </h1>
          </div>
          <div class="text-center">
            <h1>سامانه ... ایران</h1>
            <h3>{{inviteText}}</h3>
            <a href="/reg" class="btn btn-large login">{{loginText}}</a>
          </div>
        </div>
        <!-- ./end row -->
        <div class="row">
          <div class="col-md-12">
            <div id="main-contact-form" class="contact-form">
              <!-- form  بخش ثبت نام رو در این قسمت کپی کن-->

              <!-- ./form -->
            </div>
          </div>
        </div>
        <!-- ./end row -->
      </div>
    </section>

    <GalleryComponent></GalleryComponent>
    <SokhanranComponent></SokhanranComponent>
    <!-- End Contact -->
  </form>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import GalleryComponent from "../components/GalleryComponent.vue";
import SokhanranComponent from "../components/SokhanranComponent.vue";

export default {
  data() {
    return {
      url: "",
      loginText: "ورود/ثبت نام",
      inviteText: "شما میتوانید از طریق دکمه های زیر ثبت نام کنید"
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
  created() {
    this.isLoggedIn();
  },
  methods: {
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "/";
    },
    isLoggedIn() {
      if (localStorage.getItem("jwt")) {
        this.inviteText =
          "خوش آمدید با کلیک روی دکمه ی زیر به کارتابل خود بروید";
        this.loginText = "پروفایل";
      }
    }
  },
  components: {
    HeaderComponent: HeaderComponent,
    GalleryComponent: GalleryComponent,
    SokhanranComponent: SokhanranComponent
  }
};
</script>
