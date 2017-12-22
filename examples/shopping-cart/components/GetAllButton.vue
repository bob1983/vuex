<template>
  <button class="get-all-button"
    @click="getAllProducts()"
    >
    Get more
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['getAllProducts'])
  }
}
</script>
