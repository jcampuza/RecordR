<template>
  <div id="app">
    <section
    class="sidebar"
    :class="{'closed': sidebarIsOpen}">
      <h2>Menu</h2>
      <ul class="sidebar-icons">
        <li>Home</li>
        <li>Your Snips</li>
        <li>Public Snips</li>
      </ul>
    </section>
    <section class="content">
      <app-header title="Dashboard"></app-header>
      <main>
        <router-view></router-view>
      </main>
    </section>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  components: { AppHeader },
  name: 'app',
  data() {
    return {
      sidebarIsOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  background-color: #ac2001;
}
body {
  min-height: 100vh;
  position: relative;
  margin: 0;
  font-size: 14px;
  background-color: #2c3e50;
}
#app {
  font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fefefe;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100vw;
  max-width: 100vw;
}

.sidebar {
  background-color: #333333;
  color: #ffffff;
  z-index: 9;
  height: 100vh;
  padding: 1em;
  position: absolute;
  transform: translateX(-300px);
  transition: transform ease-out .3s;
}

.sidebar.closed {
  transform: translateX(0);
}

.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}

main {
  text-align: center;
  padding-top: 1em;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #1a8655;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
