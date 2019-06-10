<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie name:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ingredient, index) in smoothie.ingredients" :key="index" class="field">
        <label for="ingredient">Ingredients:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ingredient)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>

        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie Recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: null,
      feedback: null
    };
  },
  methods: {
    editSmoothie() {
      if (this.smoothie.title) {
        this.feedback = null;
        this.smoothie.slug = this.smoothie.title
          .toLowerCase()
          .replace(/[$_*+~.()'"!\-:@#%]/g, "")
          .replace(/\s/g, "-");
        db.collection("smoothies")
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            slug: this.smoothie.slug,
            ingredients: this.smoothie.ingredients
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
        this.smoothie.ingredients.push(event.target.value);
        event.target.value = "";
      } else {
        this.feedback = "You need to enter an ingredient first";
      }
    },
    deleteIng(ingredient) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(
        el => el !== ingredient
      );
    }
  },
  created() {
    let ref = db
      .collection("smoothies")
      .where("slug", "==", this.$route.params.smoothie_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data();
        this.smoothie.id = doc.id;
      });
    });
  }
};
</script>

<style>
.edit-smoothie {
  margin-top: 20px;
  padding: 20px;
  max-width: 500px;
}

.edit-smoothie h2 {
  font-size: 1.9rem;
  margin: 20px auto;
}

.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}

.add-ingredient label {
  display: block;
}

.edit-smoothie .delete {
  position: absolute;
  bottom: 16px;
  right: 0;
  color: #aaa;
  cursor: pointer;
  font-size: 1.4rem;
}
</style>

