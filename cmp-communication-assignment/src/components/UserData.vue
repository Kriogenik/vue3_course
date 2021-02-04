<template>
  <section>
    <form @submit.prevent="updateData">
      <input type="text" placeholder="Your name" v-model="enteredName">
      <input type="text" placeholder="Your age" v-model="enteredAge">
      <button>Update User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['update-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  methods: {
    updateData() {
      this.$emit('update-data', this.enteredName, this.enteredAge);
    }
  }
}
</script>