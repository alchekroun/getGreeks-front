<template>
  <div id="app">
    <div id="nav">
      <div id="logo">
        <span>
          getGreeks
        </span>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  color: #2c3e50;
  width: 100%;
  height: 60px;
  margin-top: 30px;
  text-align: center;
}

#logo {
  position: absolute;
  text-align: left;
}

#nav a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 3px solid transparent;
  transition: 0.5s;
  position: relative;
}

#nav a:hover {
  border-bottom-color: #42b983;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
