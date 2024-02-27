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

  <div v-if="isSubmitted">
    <p>Bienvenue</p>
    <router-link :to="{ name: 'Dashboard' }">Accéder au Dashboard</router-link>
  </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.isSubmitted = true;
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
    }
    label {
        display: block;
        margin-bottom: 10px;
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