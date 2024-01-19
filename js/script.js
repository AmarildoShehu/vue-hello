// collegamento js
console.log('js ok');
// collegamento Vue js
console.log('Vue ok', Vue);

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello!'
      }
    }
  }).mount('#root')