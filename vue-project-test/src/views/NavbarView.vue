<script>
  export default {
    // Composant de la barre de navigation
  }
  </script>

<template>
    <nav>
      <ul>
        <li><router-link to="/home">A propos</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/deconnexion">Deconnexion</router-link></li>
      </ul>
    </nav>
</template>
  
  
  
  <style scoped>
  nav {
    background: #333;
    color: #fff;
    padding: 1rem;
  }
  
  ul {
    list-style-type: none;
    float: right;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 1rem;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  </style>
  