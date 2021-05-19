<template>
  <v-container>
    {{msg}}
  </v-container>
</template>

<script>
export default {
  name: 'LayerPop',
  props: {
    msg: String,
  }
}
</script>