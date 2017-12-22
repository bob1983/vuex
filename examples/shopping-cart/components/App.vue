<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <get-all-button></get-all-button>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
import GetAllButton from './GetAllButton.vue'

export default {
  components: { ProductList, Cart, GetAllButton }
}
</script>
