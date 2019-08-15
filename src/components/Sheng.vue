<template>
  <div>
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <p>使用方法后反转字符串: {{ reversedMessage2() }}</p>
    <p>使用方法后反转字符串: {{ reversedMessage2() }}</p>
  </div>
</template>
<script>
  var cnt=1;
  export default {
    name: 'Sheng',
    data () {
      return {
        message: 'Runoob!'
      }
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        cnt+=1;
        return cnt+this.message.split('').reverse().join('')
      }
    },
    methods: {
      reversedMessage2: function () {
        cnt+=1;
        return cnt+this.message.split('').reverse().join('')
      }
    }
  }
</script>

