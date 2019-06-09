<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add A New Smoothie Recipe</h2>
    <form @submit.prevent="addSmoothie">
      <div class="field title">
        <label for="title">Smoothie name:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div v-for="(ingredient, index) in ingredients" :key="index">
        <label for="ingredient">Ingredients:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>

        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie Recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      ingredients: [],
      feedback: null,
      slug: null
    };
  },
  methods: {
    addSmoothie() {
      if (this.title) {
        this.feedback = null;
        this.slug = this.title
          .toLowerCase()
          .replace(/[$_*+~.()'"!\-:@#%]/g, "")
          .replace(/\s/g, "-");
        db.collection("smoothies")
          .add({
            title: this.title,
            slug: this.slug,
            ingredients: this.ingredients
          })
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter a name for your smoothie";
      }
    },
    addIngredient(event) {
      if (event.target.value !== "") {
        this.feedback = null;
        this.ingredients.push(event.target.value);
        event.target.value = "";
      } else {
        this.feedback = "You need to enter an ingredient first";
      }
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 20px;
  padding: 20px;
  max-width: 500px;
}

.add-smoothie h2 {
  font-size: 1.9rem;
  margin: 20px auto;
}

.add-smoothie .field {
  margin: 20px auto;
}

.add-ingredient label {
  display: block;
}
</style>


