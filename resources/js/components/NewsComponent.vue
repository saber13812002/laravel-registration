<template>
  <div>
    <ul class="article-list-vertical">
      <li>
        <a href="#" style="background-image: url('assets/images/pictures/sands-of-life.jpg')"></a>
        <div>
          <h2>
            <a href="#">Interesting article title</a>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lacus mattis laoreet diam a volutpat magna.</p>
          <a href="#" class="read-more">Read more &rarr;</a>
        </div>
      </li>

      <li>
        <a href="#" style="background-image: url('assets/images/pictures/sahale-wa.jpg')"></a>
        <div>
          <h2>
            <a href="#">Interesting article title</a>
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lacus mattis laoreet diam a volutpat magna.</p>
          <a href="#" class="read-more">Read more &rarr;</a>
        </div>
      </li>
    </ul>

    <!-- <SokhanranComponent></SokhanranComponent> -->
    <!-- End Contact -->

    <ul class="article-list-large">
      <li>
        <a href="#">
          <img src="assets/images/pictures/sahale-wa.jpg" alt="Green Beach" />
        </a>

        <h2>
          <a href="#">Interesting article title</a>
        </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lacus mattis, laoreet diam a, volutpat magna. Donec eleifend laoreet elementum. Nulla dictum lacinia ut sodales libero. Etiam vestibulum ex in leo euismod.</p>

        <span>
          by
          <a href="#">Author Name</a> &middot; 22nd Aug 2015
        </span>

        <div>17</div>
      </li>

      <li>
        <a href="#">
          <img src="assets/images/pictures/sands-of-life.jpg" alt="Colosseum" />
        </a>

        <h2>
          <a href="#">Interesting article title</a>
        </h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu lacus mattis, laoreet diam a, volutpat magna. Donec eleifend laoreet elementum. Nulla dictum lacinia ut sodales libero. Etiam vestibulum ex in leo euismod.</p>

        <span>
          by
          <a href="#">Author Name</a> &middot; 15th Nov 2014
        </span>

        <div>32</div>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      url: "",
      pics: [],
      sokhanrans: [],
      isLoad: false
    };
  },
  created() {
    this.urlInit();
    this.getSokhanran();
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
      let uri = `${this.url}/api/v1/sokhanran`;
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
          console.log("Error pageValues get init sokhanranComponent");
          console.log(error);
        });
    },
    getSokhanran() {
      this.isLoad = false;
      let uri = `${this.url}/api/v1/sokhanran`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          this.sokhanrans = response.data.data;

          this.sokhanrans.forEach(function(part, index) {
            if (this[index].profile_picture)
              this[index].img =
                "/images/avatars/" + this[index].profile_picture;
            else this[index].img = "/images/noimage.png";

            this[index].link = "/p/" + this[index].id;
          }, this.sokhanrans);

          console.log("sokhanran");
          console.log(this.sokhanrans);

          this.isLoad = true;
        })
        .catch(error => {
          console.log("Error sokhanrans");
          console.log(error);
        });
    }
  }
};
</script>
 
<style scoped>
.article-list-vertical {
  list-style: none;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  padding: 0;
}

.article-list-vertical li {
  display: block;
  box-sizing: border-box;
  border-radius: 3px;
  text-align: left;
  box-shadow: 1px 3px 1px 0 rgba(0, 0, 0, 0.08);
  border: 1px solid #cfcfcf;
  overflow: hidden;
  background-color: #fff;

  font: normal 13px sans-serif;

  margin-bottom: 40px;
  max-width: 575px;
}

/* Article photo */

.article-list-vertical li > a {
  float: left;
  width: 200px;
  height: 200px;
  display: block;

  background-size: cover;
}

.article-list-vertical li div {
  float: left;
  box-sizing: border-box;

  max-width: 350px;
  padding: 30px;
}

/* Article title */

.article-list-vertical li div h2 {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

.article-list-vertical li div h2 a {
  color: #2b2b2b;
  text-decoration: none;
}

/* Article excerpt */

.article-list-vertical li div p {
  line-height: 20px;
  color: #5d5d5d;

  margin: 20px 0;
}

.article-list-vertical li a.read-more {
  background-color: #87bcd7;
  cursor: pointer;
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 2px;
  margin: 20px 0;
  font-weight: bold;
}

@media (max-width: 600px) {
  .article-list-vertical {
    max-width: 350px;
  }

  .article-list-vertical li {
    max-width: 325px;
  }

  .article-list-vertical li > a {
    float: none;
    width: 100%;
  }

  .article-list-vertical li div {
    float: none;
    padding: 30px;
  }
}

.article-list-large {
  list-style: none;
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
  padding: 0;
}

.article-list-large li {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.08);
  border: 1px solid #cfcfcf;
  background-color: #fff;

  font: bold 14px sans-serif;
  text-align: left;

  margin: 12px;
  max-width: 500px;
  padding: 30px;
}

.article-list-large li > a {
  display: block;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.article-list-large li a img {
  width: 100%;
}

.article-list-large li h2 {
  display: block;

  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 400px;
  margin: 30px 0;
}

.article-list-large li h2 a {
  color: #4a5054;
  text-decoration: none;
}

.article-list-large li p {
  line-height: 1.45;
  color: #6b7277;
  font-weight: normal;
  margin: 0;
}

.article-list-large li span {
  display: block;

  font-size: 12px;
  font-weight: normal;
  color: #5b5e60;

  margin: 30px 0 10px 0;
}

.article-list-large li span a {
  text-decoration: none;
  color: #5b5e60;
  font-weight: bold;
}

.article-list-large li div {
  position: absolute;
  background-color: #7ba0c0;
  box-shadow: 1px 3px 1px rgba(0, 0, 0, 0.15);

  color: #ffffff;
  font-size: 16px;

  top: 17px;
  right: 20px;
  padding: 7px 13px;
}

.article-list-large li div:after {
  position: absolute;
  content: "";
  border: 8px solid transparent;
  border-top-color: #7ba0c0;
  bottom: -14px;
  left: 9px;
}

@media (max-width: 600px) {
  .article-list-large li {
    max-width: 325px;
    padding: 20px 15px;
  }

  .article-list-large li h2 {
    font-size: 16px;
    margin: 24px 0 18px;
  }

  .article-list-large li p {
    font-size: 13px;
  }

  .article-list-large li span {
    margin: 14px 0 0;
  }

  .article-list-large li > a {
    height: 175px;
  }

  .article-list-large li div {
    top: 8px;
    right: 8px;
    padding: 5px 10px;
  }
}
</style>

<style lang="scss">
</style>