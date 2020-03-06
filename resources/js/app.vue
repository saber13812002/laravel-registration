

<template>
  <div>
    <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
@media only screen and (max-width: 500px) {
  .form {
    width: 100vw !important;
  }
}
body {
  background: #ddeefc;
}
.form-photo {
  margin: 0 auto;
  width: 192px;
  border-radius: 50%;
  border: 6px solid blue;
}
.img {
  width: 180px;
  padding: 14px;
  height: 180px;
  border-radius: 50%;
  border: 2px dashed #171c23;
}
select {
  height: 40px !important;
}
h1 {
  text-align: center;
  width: 100%;
  position: relative;
  top: -78px;
  color: white;
  margin: 0px;
}
.form {
  width: 500px;
  background: #fff;
  -webkit-box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  border-radius: 10px;
  padding: 35px;
  border-top: 78px solid rgb(65, 125, 244);
  padding-top: 0%;
}
.wrapper {
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  /* padding: 50px 15px; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

<script>
import MenuComponent from "./components/MenuComponent.vue";
export default {
  components: { MenuComponent }
};
</script>