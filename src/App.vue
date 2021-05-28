<template>
  <div id="app">
    <Navigation :user="user"/>
    <router-view :user="user"/>
  </div>
</template>

<script>
import db from './config/db.js'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data: function() {
        return {
            user: null
        }
    },
    mounted() {
        db.collection('users')
        .doc('05ZRQklzKJRCZImrZ7tL')
        .get()
        .then(snapshot => {
            this.user = snapshot.data().name
        })
    }
}
</script>

<style lang="scss">
// https://coolors.co/1a535c-2e8670-4ecdc4-cdf3eb-f7fff7-ff6b6b-ffe66d-a0cf78

$primary: #1a535c; 
$secondary: #2E8670; 
$info: #4ECDC4; 
$success: #A0CF78; 
$warning: #FFE66D; 
$danger: #FF6B6B; 
$light: #F7FFF7; 

@import 'node_modules/bootstrap/scss/bootstrap';
</style>
