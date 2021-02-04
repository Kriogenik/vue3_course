<template>
  <section>
    <h2>{{ username }}</h2>
    <h3>{{ userage }} Years</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    userage: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
html {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
section {
  margin: 1rem auto;
  padding: 1rem;
  max-width: 50rem;
  border-radius: 10px;
  border: 1px solid #bbb;
}
</style>