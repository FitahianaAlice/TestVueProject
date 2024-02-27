<template>
    <div>
      <h1>Merci et à bientôt !</h1>
      <button @click="logout">Déconnexion</button>
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
      }
    }
  };
  </script>
  