<template>
  <div>
    <the-header></the-header>
    <!-- Альтернативный вызов компонента -->
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    'the-header': TheHeader,
    // Альтернативный способ объявления
    // TheHeader: TheHeader
    BadgeList,
    UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>