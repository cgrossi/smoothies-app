<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add A New Smoothie Recipe</h2>
    <form>
      <div class="field title">
        <label for="title">Smoothie name:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smoothie Recipe</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null
    };
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
</style>


