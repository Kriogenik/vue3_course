// Первый экземпляр Vue
const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
});

app.mount('#app');

// Второй эксземпляр Vue
const app2 = Vue.createApp({
  template: `
    <h2>Second App</h2>
    <p>{{ favoriteFruit }}</p>
  `,
  data() {
    return {
      favoriteFruit: 'Banana'
    }
  }
});

app2.mount('#app2');

/* Погружение в реактивность Vue */

// Объект с некоторыми свойствами
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

// Объект-обработчик
const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
};

// Объект Proxy
const proxy = new Proxy(data, handler);

// Результат до изменений
console.log(proxy.longMessage);

/* Новое значение для свойства message
и вывод результата в консоль */
proxy.message = 'Hello!!!!';
console.log(proxy.longMessage);