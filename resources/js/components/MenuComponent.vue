<template>
  <nav class="header__nav">
    <ul class="header__navbar">
      <li class="header__item">
        <a href="#" class="header__link">
          <transition name="slide-fade">
            <!-- Header Navigation Menu Icons -->
            <button class="header--button" v-if="show" key="on" @click="show = false">
              <svg viewBox="0 0 24 24" class="header--icon">
                <title>Close</title>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                />
              </svg>
            </button>
            <button class="header--button" v-else key="off" @click="show = true">
              <svg viewBox="0 0 24 24" class="header--icon">
                <title>Navigation Menu</title>
                <path
                  fill="currentColor"
                  d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
                />
              </svg>
            </button>
          </transition>
        </a>
        <!-- Dropdown Menu -->
        <transition name="dropdown">
          <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
            <ul class="dropdown__menu-nav">
              <li class="dropdown__menu-item">
                <a href="/shift" class="dropdown__menu-link" title="Account">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 496 512">
                      <path
                        fill="currentColor"
                        d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"
                      />
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">رزرو شیفت</div>
                </a>
              </li>
              <li class="dropdown__menu-item">
                <a href="/profile" class="dropdown__menu-link" title="Personal info">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 576 512">
                      <path
                        fill="currentColor"
                        d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z"
                      />
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">اطلاعات فردی</div>
                </a>
              </li>
              <li class="dropdown__menu-item">
                <a href="#" class="dropdown__menu-link" title="People &amp; sharing">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 640 512">
                      <path
                        fill="currentColor"
                        d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"
                      />
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">اشتراک برای دوستان</div>
                </a>
              </li>
              <li class="dropdown__menu-item">
                <a href="#" class="dropdown__menu-link" title="Subscriptions">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 576 512">
                      <path
                        fill="currentColor"
                        d="M528 31H48C21.5 31 0 52.5 0 79v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V79c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16v352zm-352-68v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">عضویت</div>
                </a>
              </li>
              <!-- Dropdown Menu Separator -->
              <hr />
              <li class="dropdown__menu-item">
                <a href="#" class="dropdown__menu-link" title="Help">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"
                      />
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">راهنما</div>
                </a>
              </li>
              <li class="dropdown__menu-item">
                <a href="#" class="dropdown__menu-link" title="Send feedback">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zm-224-88c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-8.5-24h17c4.2 0 7.7-3.3 8-7.5l7-112c.3-4.6-3.4-8.5-8-8.5h-31c-4.6 0-8.3 3.9-8 8.5l7 112c.3 4.2 3.8 7.5 8 7.5z"
                      />
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">ارسال بازخورد</div>
                </a>
              </li>

              <!-- Dropdown Menu Separator -->
              <hr />
              <li class="dropdown__menu-item">
                <a href="/signout" class="dropdown__menu-link" title="Send feedback">
                  <div class="dropdown__menu-svg">
                    <svg viewBox="0 0 512 512">
                      <g>
                        <g>
                          <path
                            d="M505.664,243.739l-54.783-38.622c-9.926-6.997-23.645,0.128-23.645,12.26v23.622H164.196
			c-8.284,0-15.001,6.716-15.001,15.001S155.912,271,164.196,271h263.038v23.621c0,12.212,13.792,19.204,23.644,12.26l54.783-38.622
			C514.027,262.365,514.196,249.767,505.664,243.739z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M430.471,352.317c-7.169-4.146-16.347-1.698-20.496,5.474c-35.236,60.916-101.103,101.811-176.372,101.811
			c-112.266,0-203.602-91.336-203.602-203.602S121.337,52.398,233.603,52.398c75.319,0,141.156,40.933,176.371,101.809
			c4.148,7.172,13.328,9.619,20.496,5.474c7.171-4.148,9.621-13.325,5.474-20.496C395.418,69.127,319.729,22.397,233.603,22.397
			C104.49,22.397,0,126.876,0,256c0,129.113,104.479,233.603,233.603,233.603c86.163,0,161.833-46.763,202.342-116.79
			C440.092,365.642,437.642,356.466,430.471,352.317z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="dropdown__menu-text">خروج</div>
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </nav>
</template>
 
<script>
export default {
  data() {
    return {
      url: "",
      show: false
    };
  },
  methods: {
    urlInit() {
      this.url = process.env.MIX_API_URL
        ? process.env.MIX_API_URL
        : "https://wiki.liara.run";
    }
  }
};
</script>
 
<style>
</style>

<style lang="scss">
:root {
  --font-primary: "BYekan", "Open Sans", sans-serif;
  --color-gray: #dadce0;
}

// Global

*,
::after,
::before {
  box-sizing: border-box;
}

body {
  font-size: 1rem;
  // -webkit-text-size-adjust: 100%;
  font-family: var(--font-primary);
  // overflow: hidden;
}
hr {
  border: 0;
  height: 0;
  margin: 1.5rem 0;
  border-top: 1px solid var(--color-gray);
}

// Header Menu

.header {
  padding: 2rem 5rem 2rem 5rem;
  &__nav {
    position: relative;
  }
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__item {
    padding: 1rem;
  }
  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }
  &--button {
    top: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  top: 100%;
  right: 0;
  position: absolute;
  z-index: 10;
  // height: 25rem;
  // min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 2rem 1rem 2rem 0rem;
  border-radius: 12px;
  background-color: white;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;
  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;
    &:hover {
      color: #17bf63;
      background-color: rgba(79, 192, 141, 0.1);
    }
  }
  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    font-weight: 300;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// Wrapper

.main {
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__subtitle {
    color: #4f5959;
    font-weight: 100;
    margin-bottom: 2rem;
  }
  &__link {
    margin-right: 1.5rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }
  &__svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.6;
    color: #94a2b0;
    &:hover {
      color: #ffad1f;
    }
  }
}
</style>