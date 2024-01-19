// collegamento js
console.log('js ok');
// collegamento Vue js
console.log('Vue ok', Vue);

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello!',
        myImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShf69xYOdjnbgCMbEitVBhMbwuJkgaO-aIKg&usqp=CAU'
      }
    }
}).mount('#root')
