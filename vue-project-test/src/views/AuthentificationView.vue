<template>
  <div>
      <form @submit.prevent="handleSubmit">
<div>
  <label for="nom">Nom:</label>
  <input type="text" id="nom" name="nom" required>
</div>
<div>
  <label for="prenom">Prénom:</label>
  <input type="text" id="prenom" name="prenom" required>
</div>
<div>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
</div>
<div>
  <label for="motdepasse">Mot de passe:</label>
  <input type="password" id="motdepasse" name="motdepasse" required>
</div>
<div>
  <button type="submit">Envoyer</button>
</div>
</form>

<div v-if="isSubmitted" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border: 1px solid #ccc; border-radius: 10px; z-index: 9999;">
  <h3>Bienvenue</h3>
  <router-link :to="{ name: 'Dashboard' }">Accéder au Dashboard</router-link>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmitted: false,
      nom: '',
      prenom: '',
      email: '',
      motdepasse: ''
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
      // Stocker les données dans le localStorage
      const userData = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        motdepasse: this.motdepasse
      };
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }
};
</script>

<style scoped>
  /* Add your custom CSS here */
  body {
      font-family: Arial, sans-serif;
  }
  form {
      border: 1px solid #ccc;
      padding: 20px;
      border-radius: 10px;
      background-color: #f9f9f9;
      margin-left : 20%;
      margin-right: 20%;
  }
  label {
      display: block;
      margin-bottom: 10px;
  }
  /* style pour input */
input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* pour que la largeur inclue la bordure et le padding */
    transition: border-color 0.3s ease; /* effet de transition */
}

/* style pour input en focus */
input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* effet de focus */
}
  input, button {
      padding: 10px;
      margin-bottom: 20px;
      width: 100%;
  }
  button {
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
  }
  button:hover {
      background-color: #0056b3;
  }
  .error {
      color: red;
  }
</style>