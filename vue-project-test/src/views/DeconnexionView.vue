<template>
    <div class="center-content">
      <h1>Voulez-vous vraiment vous déconnecter ?</h1>
      <button @click="logout">Oui</button>
      <button @click="notlogout">Non</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nom: ''
      };
    },
    mounted() {
      // Récupérer le nom d'utilisateur à partir d'une API ou d'une session
      this.nom = 'Utilisateur';
    },
    methods: {
      logout() {
        // Code pour déconnecter l'utilisateur, par exemple :
        // Effacer les cookies, effacer les données de session, etc.
        // Rediriger l'utilisateur vers la page de connexion
        this.$router.push({ name: 'authentification' });
      },
      notlogout() {
        // Code pour déconnecter l'utilisateur, par exemple :
        // Effacer les cookies, effacer les données de session, etc.
        // Rediriger l'utilisateur vers la page de connexion
        this.$router.push({ name: 'Dashboard' });
      }
    }
  };
  </script>
  
  <style scoped>
  body {
      font-family: Arial, sans-serif;
  }
  h1 {
      color: #333; 
      font-size: 24px; 
      margin-bottom: 20px; 
  }
  button {
      background-color: #007bff; 
      color: white;
      margin: 1%; 
      padding: 10px 20px; 
      border: none; 
      cursor: pointer; 
    }
  button:hover {
      background-color: #0056b3;
  }
  .center-content {
    display: flex; 
    justify-content: center;
    align-items: center; 
    min-height: 100vh; 
    text-align: center; 
    flex-direction: column;
  }
</style>