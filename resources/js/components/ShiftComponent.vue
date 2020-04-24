<template>
  <div id="app">
    <header class="header">
      <MenuComponent></MenuComponent>
    </header>
    <!-- <button v-if="!loading" @click="load($event)">شروع ورود اطلاعات</button> -->
    <table v-if="loading" ref="myref">
      <thead>
        <tr>
          <th></th>
          <th>
            <span class="day">1</span>
            <span class="long">شنبه</span>
            <span class="short">ش</span>
          </th>
          <th>
            <span class="day">2</span>
            <span class="long">یکشنبه</span>
            <span class="short">ی</span>
          </th>
          <th>
            <span class="day">3</span>
            <span class="long">دوشنبه</span>
            <span class="short">د</span>
          </th>
          <th>
            <span class="day">4</span>
            <span class="long">سه شنبه</span>
            <span class="short">س</span>
          </th>
          <th>
            <span class="day active">5</span>
            <span class="long">چهارشنبه</span>
            <span class="short">چ</span>
          </th>
          <th>
            <span class="day">6</span>
            <span class="long">پنجشنبه</span>
            <span class="short">پ</span>
          </th>
          <th>
            <span class="day">7</span>
            <span class="long">جمعه</span>
            <span class="short">ج</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :id="'_' + sh.id" v-for="sh in shifts" :value="sh.id" v-bind:key="sh.id">
          <td class="hour" rowspan="1">
            <span>{{sh.name}}</span>
          </td>
          <td
            v-for="wd in weekday"
            :value="wd"
            v-bind:key="wd"
            @click="selectedShift($event,selected.key,sh.id,wd)"
          >
            <!-- <button @click="selected(sh,wd)">رزرو</button> -->
            <!-- <label>{{labelName}}:</label> -->
            <radio-set
              :id="'_' + wd + '_' + sh.id"
              :class="`cube--${getColor}`"
              v-model="selected"
              label-name="عملیات"
              :options="doorOptions"
            />
            <!-- .وضعیت : -->
            <!-- <span v-if="selected != null">{{selected.key}}-{{wd}}-{{sh.id}}</span> -->

            <!-- <button
              type="button"
              v-for="(val, idx) in bakhshes"
              :key="idx"
              @click="clicked(val)"
            >{{ val.key }}</button>-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MenuComponent from "../components/MenuComponent.vue";

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
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    RadioSet
  },
  updated() {
    console.log("updated");
    // this.initUI();
  },
  methods: {
    // load(e) {
    //   console.log($(e.target));
    //   this.initUI(e);
    // },
    clicked(val) {
      this.$emit("input", val);
    },
    init() {
      this.getPeriod();
      this.getMyTimesheet();
      this.initBakhsh();
      this.initWeekDays();
      this.initShifts();
    },
    getPeriod() {
      this.provLoad = false;
      let uri = `${this.url}/api/v1/period`;
      console.log(uri);
      this.axios
        .get(uri)
        .then(response => {
          console.log(response);
          this.periods = response.data;
          console.log(this.periods);

          this.periodLoad = true;
        })
        .catch(error => {
          console.log("Error period");
          console.log(error);
        });
    },
    getMyTimesheet() {
      this.provLoad = false;
      let uri = `${this.url}/api/v1/timesheet/mine`;
      console.log(uri);
      this.axios
        .post(uri, this.infoss)
        .then(response => {
          console.log(response);
          if (response.data) this.tsheet = response.data.data;
          console.log(this.tsheet);
          this.initUI();
          this.tsheetLoad = true;
        })
        .catch(error => {
          console.log("Error tsheet");
          console.log(error);
        });
    },
    initBakhsh() {
      for (let i = 0; i < 14; i++)
        this.bakhshes.push({ key: i + 1, value: i + 1 });
    },
    initWeekDays() {
      for (let i = 0; i < 7; i++) this.weekday.push(i + 1);
    },
    initShifts() {
      this.shifts.push({ id: 1, name: "7 الی 15" });
      this.shifts.push({ id: 2, name: "15 الی 23" });
      this.shifts.push({ id: 3, name: "23 الی 7" });
    },
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "";
    },
    initUI() {
      // console.log($(e.target));
      // this.tsheet.forEach(element => {
      for (let i = 0; i < this.tsheet.length; i++) {
        let element = this.tsheet[i];
        this.$refs.myref;
        console.log(element);
        console.log(this.$refs.myref);
        if (element.extra)
          // $(e["#_" + 1 + "_" + element.shift_id]).addClass("selected-item");
          // this.$refs.myref
          //   .querySelector("#_" + 1 + "_" + element.shift_id)
          //   .querySelector("button:nth-child(3)")
          //   .addClass("selected-item");
          this.$refs.myref
            .querySelector("#_" + element.day_of_week + "_" + element.shift_id)
            .classList.add("selected-item");
        // $(e["#_" + 1 + "_" + element.shift_id]).addClass("selected-item");
        // this.$refs.myref
        //   .querySelector("#_" + 1 + "_" + element.shift_id)
        //   .querySelector("button")
        //   .addClass("selected-item");
        else
          this.$refs.myref
            .querySelector("#_" + element.day_of_week + "_" + element.shift_id)
            .classList.add("selected-item");
      }
      this.loading = true;
    },
    selectedShift(e, option_key, shiftid, wd) {
      console.log(option_key);
      console.log(shiftid);
      console.log(wd);
      this.updateInfoss(e, option_key, shiftid, wd);
    },
    highlightCell(e, option_key, shiftid, wd) {
      console.log($(e.target));
      //this.$el.querySelector("#_1_1").querySelector("button").classList.remove('red')
      this.$el
        .querySelector("#_" + wd + "_1")
        .querySelector("button")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_1")
        .querySelector("button:nth-child(2)")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_1")
        .querySelector("button:nth-child(3)")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_1")
        .querySelector("button:nth-child(4)")
        .classList.remove("selected-item");
      this.$el
        .querySelector("#_" + wd + "_2")
        .querySelector("button")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_2")
        .querySelector("button:nth-child(2)")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_2")
        .querySelector("button:nth-child(3)")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_2")
        .querySelector("button:nth-child(4)")
        .classList.remove("selected-item");
      this.$el
        .querySelector("#_" + wd + "_3")
        .querySelector("button")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_3")
        .querySelector("button:nth-child(2)")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_3")
        .querySelector("button:nth-child(3)")
        .classList.remove("selected-item");

      this.$el
        .querySelector("#_" + wd + "_3")
        .querySelector("button:nth-child(4)")
        .classList.remove("selected-item");

      $(e.target).addClass("selected-item");

      // let idd = "_" + wd + "_" + shiftid;
      // this.lastitem = this.$refs[idd];
      console.log(this.lastitem);
      // this.$refs[idd].classList.add("my-class");
      this.getColor();
    },
    getColor() {},
    updateInfoss(e, option_key, shiftid, wd) {
      this.save = false;
      this.infoss.option_key = option_key;
      this.infoss.shift_id = shiftid;
      this.infoss.day_of_week = wd;
      this.infoss.req_date = this.periods.from_date
        ? this.addDays(wd - 1)
        : new Date();
      console.log(this.infoss);
      let uri = `${this.url}/api/v1/reserve`;
      this.axios
        .post(uri, this.infoss)
        .then(response => {
          console.log(response);
          this.highlightCell(e, option_key, shiftid, wd);
          this.save = true;
        })
        .catch(error => {
          console.log("Error ");
          console.log(error);
        });
    },
    addDays(days) {
      var date = new Date(this.periods.from_date);
      console.log(date);
      date.setDate(date.getDate() + days);
      console.log(date);
      return date;
    }
  }
};
</script>

<style>
table {
  font-family: sans-serif;
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  table-layout: fixed;
  margin-bottom: 50px;
}
table thead tr th {
  background: #626e7e;
  color: #d1d5db;
  padding: 0.5em;
  overflow: hidden;
}
table thead tr th:first-child {
  border-radius: 3px 0 0 0;
}
table thead tr th:last-child {
  border-radius: 0 3px 0 0;
}
table thead tr th .day {
  display: block;
  font-size: 1.2em;
  border-radius: 50%;
  width: 30px;
  height: 33px;
  padding: 7px;
  padding-left: 10px;
  padding-top: 0px;
  line-height: 1.8;
  background: #d1d5db;
  color: #626e7e;
}
table thead tr th .day.active {
  background: #000;
  color: #fff;
}
table thead tr th .short {
  display: none;
}
table thead tr th i {
  vertical-align: middle;
  font-size: 2em;
}
table tbody tr {
  background: #d1d5db;
}
table tbody tr:nth-child(odd) {
  background: #c8cdd4;
}
table tbody tr:nth-child(4n + 0) td {
  border-bottom: 1px solid #626e7e;
}
table tbody tr td {
  text-align: center;
  vertical-align: middle;
  border-left: 1px solid #626e7e;
  position: relative;
  height: 32px;
  cursor: pointer;

  border: 3px solid green;
  margin: 1px;
  padding: 1px;
}
table tbody tr td:last-child {
  border-right: 1px solid #626e7e;
}
.selected-item {
  color: black;
}
table tbody tr td.hour {
  font-size: 2em;
  padding: 0;
  color: #626e7e;
  background: #fff;
  border-bottom: 1px solid #626e7e;
  border-collapse: separate;
  min-width: 100px;
  cursor: default;
}
table tbody tr td.hour span {
  display: block;
}
@media (max-width: 60em) {
  table thead tr th .long {
    display: none;
  }
  table thead tr th .short {
    display: block;
  }
  table tbody tr td.hour span {
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
  }
}
@media (max-width: 27em) {
  table thead tr th {
    font-size: 65%;
  }
  table thead tr th .day {
    display: block;
    font-size: 1.2em;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0 auto 5px;
    padding: 5px;
  }
  table thead tr th .day.active {
    background: #d1d5db;
    color: #626e7e;
  }
  table tbody tr td.hour {
    font-size: 1.7em;
  }
  table tbody tr td.hour span {
    transform: translateY(16px) rotate(270deg);
    -webkit-transform: translateY(16px) rotate(270deg);
    -moz-transform: translateY(16px) rotate(270deg);
  }
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  font-family: BYekan;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  font-family: BYekan;
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>