<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @update-data="updUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Evgeniy Pashko',
        age: 28
      }
    }
  },
  methods: {
    updUserData(name, age) {
      this.user = {
        name: name,
        age: +age
      }
    }
  }
}
</script>