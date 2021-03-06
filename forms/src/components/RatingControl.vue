<template>
  <ul>
    <li :class="{active: activeOption === 'poor'}">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{active: activeOption === 'average'}">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{active: activeOption === 'great'}">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeOption: null,
    }
  },
  methods: {
    activate(option) {
      this.activeOption = option;
    }
  }
};
</script>

<style scoped>
.active {
  border-color: #00a3a3;
}

.active button {
  color: #00a3a3;
}

ul {
  display: flex;
  margin: 0.5rem 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>