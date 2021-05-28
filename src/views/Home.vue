<template>
 <div>
     <h1>Home</h1>
    <p>Welcome {{ user }}</p>
 </div>
</template>

<script>
import db from '../config/db.js'

export default {
    name: 'home',
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
