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
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


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