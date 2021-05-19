<template>
  <div>
    Hello world {{msg}}
  </div>
</template>

<script>
export default{
  name: 'hello-component',
  props: {
    msg: String,
  },
}
</script>