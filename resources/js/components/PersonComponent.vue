<template>
  <div id="app">
    <header class="header">
      <MenuComponent></MenuComponent>
    </header>
    <div class="container">
      <div class="row">
        <h1></h1>
        <p></p>
        <!-- code start -->
        <div class="twPc-div">
          <a class="twPc-bg twPc-block"></a>

          <div>
            <div class="twPc-button">
              <!-- Twitter Button | you can get from: https://about.twitter.com/tr/resources/buttons#follow -->
              <a
                href="https://twitter.com/mertskaplan"
                class="twitter-follow-button"
                data-show-count="false"
                data-size="large"
                data-show-screen-name="false"
                data-dnt="true"
              ></a>

              <!-- Twitter Button -->
            </div>

            <a title="Mert S. Kaplan" href="/blog" class="twPc-avatarLink">
              <img
                alt="Mert S. Kaplan"
                src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg"
                class="twPc-avatarImg"
              />
            </a>

            <div class="twPc-divUser">
              <div class="twPc-divName">
                <a href="/blog">Mert S. Kaplan</a>
              </div>
              <span>
                <a href="/blog">
                  @
                  <span>mertskaplan</span>
                </a>
              </span>
            </div>

            <div class="twPc-divStats">
              <ul class="twPc-Arrange">
                <li class="twPc-ArrangeSizeFit">
                  <a href="/blog" title="9.840 Tweet">
                    <span class="twPc-StatLabel twPc-block">سخنرانی ها</span>
                    <span class="twPc-StatValue">40</span>
                  </a>
                </li>
                <li class="twPc-ArrangeSizeFit">
                  <a href="/blog" title="9.840 Tweet">
                    <span class="twPc-StatLabel twPc-block">پادکست ها</span>
                    <span class="twPc-StatValue">10</span>
                  </a>
                </li>
                <li class="twPc-ArrangeSizeFit">
                  <a href="/blog" title="9.840 Tweet">
                    <span class="twPc-StatLabel twPc-block">احادیث</span>
                    <span class="twPc-StatValue">40</span>
                  </a>
                </li>
                <li class="twPc-ArrangeSizeFit">
                  <a href="/blog" title="885 Following">
                    <span class="twPc-StatLabel twPc-block">دنبال کنندگان</span>
                    <span class="twPc-StatValue">885</span>
                  </a>
                </li>
                <li class="twPc-ArrangeSizeFit">
                  <a href="/blog" title="1.810 Followers">
                    <span class="twPc-StatLabel twPc-block">نوشته ها</span>
                    <span class="twPc-StatValue">110</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- code end -->
      </div>
      <div class="box">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Instagram</h4>
                </div>

                <div class="text">
                  <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                </div>

                <a href="/blog">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Twitter</h4>
                </div>

                <div class="text">
                  <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                </div>

                <a href="/blog">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Facebook</h4>
                </div>

                <div class="text">
                  <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                </div>

                <a href="/blog">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Pinterest</h4>
                </div>

                <div class="text">
                  <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                </div>

                <a href="/blog">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-google-plus fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Google</h4>
                </div>

                <div class="text">
                  <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                </div>

                <a href="/blog">Learn More</a>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="box-part text-center">
                <i class="fa fa-github fa-3x" aria-hidden="true"></i>

                <div class="title">
                  <h4>Github</h4>
                </div>

                <div class="text">
                  <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
                </div>

                <a href="/blog">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <BlogComponent></BlogComponent> -->
    </div>
  </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue";
// import BlogComponent from "../components/BlogComponent.vue";

import { mdbTbl, mdbTblHead, mdbTblBody } from "mdbvue";

import RadioSet from "./RadioSet";

export default {
  name: "TableAdditionalPage",
  data() {
    return {
      url: "",
      infoss: {},
      periods: {},
      tsheetLoad: false,
      loading: true,
      periodLoad: false,
      save: false,
      success: "",
      output: "",
      editedButNotSaved: false,
      bakhshes: [],
      weekday: [],
      shifts: [],
      selected: null,
      lastitem: {},
      tsheet: {},
      doorOptions: [
        { key: 1, value: "رزرو ظرفیت اصلی" },
        { key: 2, value: "رزرو ظرفیت مازاد" },
        { key: 3, value: "لغو رزرو" },
        { key: 4, value: "25" },
        { key: 5, value: "5" }
      ]
    };
  },
  created() {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) this.$router.push({ name: "reg" });
    this.infoss.token = jwt;
    this.urlInit();
    this.init();
  },
  mounted: function() {
    this.id = this.$el.getAttribute("data-id");
    console.log("mounted");
  },
  components: {
    MenuComponent: MenuComponent,
    // BlogComponent: BlogComponent,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    RadioSet
  },
  updated() {
    console.log("updated");
  },
  methods: {
    clicked(val) {
      this.$emit("input", val);
    },
    init() {},
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "/";
    },
    initUI() {
      for (let i = 0; i < this.tsheet.length; i++) {
        let element = this.tsheet[i];
        this.$refs.myref;
        console.log(element);
        console.log(this.$refs.myref);
        if (element.extra)
          this.$refs.myref
            .querySelector("#_" + element.day_of_week + "_" + element.shift_id)
            .classList.add("selected-item");
        else
          this.$refs.myref
            .querySelector("#_" + element.day_of_week + "_" + element.shift_id)
            .classList.add("selected-item");
      }
      this.loading = true;
    },
    getColor() {}
  }
};
</script>

<style>
.twPc-div {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
}
.twPc-bg {
  background-image: url("https://pbs.twimg.com/profile_banners/50988711/1384539792/600x200");
  background-position: 0 50%;
  background-size: 100% auto;
  border-bottom: 1px solid #e1e8ed;
  border-radius: 4px 4px 0 0;
  height: 95px;
  width: 100%;
}
.twPc-block {
  display: block !important;
}
.twPc-button {
  margin: -35px -10px 0;
  text-align: right;
  width: 100%;
}
.twPc-avatarLink {
  background-color: #fff;
  border-radius: 6px;
  display: inline-block !important;
  margin: -30px 5px 0 8px;
  max-width: 100%;
  padding: 1px;
  vertical-align: bottom;
}
.twPc-avatarImg {
  border: 2px solid #fff;
  border-radius: 7px;
  box-sizing: border-box;
  color: #fff;
  height: 170px;
  width: 170px;
}
.twPc-divUser {
  margin: 5px 0 0;
}
.twPc-divName {
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
}
.twPc-divName a {
  color: inherit !important;
}
.twPc-divStats {
  margin-left: 11px;
  padding: 50px 0;
}
.twPc-Arrange {
  box-sizing: border-box;
  display: table;
  margin: 0;
  min-width: 100%;
  padding: 0;
  table-layout: auto;
}
ul.twPc-Arrange {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.twPc-ArrangeSizeFit {
  display: table-cell;
  padding: 0;
  vertical-align: top;
  height: 50px;
}
.twPc-ArrangeSizeFit a:hover {
  text-decoration: none;
}
.twPc-StatValue {
  display: block;
  font-size: 55px;
  font-weight: 500;
  transition: color 0.15s ease-in-out 0s;
}
.twPc-StatLabel {
  color: #8899a6;
  font-size: 30px;
  letter-spacing: 0.02em;
  overflow: hidden;
  text-transform: uppercase;
  transition: color 0.15s ease-in-out 0s;
}

body {
  background: #eee;
}
span {
  font-size: 15px;
}
a {
  text-decoration: none;
  color: #0062cc;
  border-bottom: 2px solid #0062cc;
}
.box {
  padding: 60px 0px;
}

.box-part {
  background: #fff;
  border-radius: 0;
  padding: 60px 10px;
  margin: 30px 0px;
}
.text {
  margin: 20px 0px;
}

.fa {
  color: #4183d7;
}

.twPc-Arrange > li {
  border: 6px solid blue;
  border-radius: 11%;
  padding: 5px;
  margin: 5px;
}
</style>