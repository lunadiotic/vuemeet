<template>
 <div class="mt-3">
     <div class="text-center">
         Welcome <span class="font-weight-bold text-info">{{ user }}</span>
     </div>
     <div class="container text-center">
         <div class="row justify-content-center">
             <div class="col-10 col-md-10 col-lg-8 col-xl-7">
                 <h4 class="display-4 text-primary mb-2">Vue Meet</h4>
                 <p class="lead">
                     This app use firebase and webRTC for real time communication and create multiple video chat between users.
                 </p>
                 <router-link class="btn btn-outline-primary mr-2" to="/login">
                     Login
                 </router-link>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
export default {
    props: [
        'user'
    ],
    name: 'Home'
}

</script>
