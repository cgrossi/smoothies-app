<template>
  <div class="home container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ingredient }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      smoothies: [
        {
          title: "Da Bomb",
          slug: "da-bomb",
          ingredients: ["Milk", "Jalapeno Pepper", "Chocolate"],
          id: "1"
        },
        {
          title: "Banana Bananza",
          slug: "banana-bananza",
          ingredients: ["Banana", "Ice Cream"],
          id: "2"
        }
      ]
    };
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(el => el.id !== id);
    }
  }
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 60px;
}

.home h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-top: 0;
}

.home .ingredients {
  margin: 30px auto;
}

.home .ingredients li {
  display: inline-block;
}

.home .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4rem;
}
</style>

