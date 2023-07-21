<script>
export default {
    name: 'HeaderTitle',

    props: {
      msg: String,
    },

    data() {
        return {
            navItems: [
                {
                    name: "Home",
                    path: "/",
                },
                {
                    name: "Projects",
                    path: "/projects",
                },
                {
                    name: "Contact",
                    path: "/contact",
                },
            ],
        };
    },

}
</script>

<template>
  <h1>Vue Api: {{ msg }}</h1>
  <nav>
    <ul>
      <li v-for="item in navItems" :key="item.name">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

h1 {
  font-size: 2rem;
  text-align: center;
  margin: 1rem 0;
}

nav {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 1rem;

    a {
      text-decoration: none;
      color: var(--color-text-dark);
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }
}
</style>
