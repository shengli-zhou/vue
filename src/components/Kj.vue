<template>
<div>
  <input v-model="num1">+
  <input v-model="num2">=<span>{{parseInt(num1)+parseInt(num2)}}</span>
  <button v-on:onclick="getmessage">获取</button>
  <p>原始字符串: {{ message }}</p>
  <p>计算后反转字符串: {{ reversedMessage }}</p>
</div>
</template>
<script>
  export default {
    name: 'Kj',
    data () {
      return {
        num1:2,
        num2:3,
        message: 'Runoob!'
      }
    },
    methods: {
      getmessage: function () {
        alert(this.getmessage)
      }
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
  }
</script>

