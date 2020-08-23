<template>
  <div>
    <div 
      v-if="user"
      class="text-center"
    >
    <h1>Ranked Blogs Vue</h1>

    <p>User name: <strong><span class="text-secondary">{{user.displayName}}</span></strong></p>
    
    <a href="#" 
       role="button" 
       class="text-primary" 
       @click="$emit('logout')" 
    >log out</a>
    <br>
    <br>

    <router-link
      class="btn btn-outline-primary mr-2"
      to="/register"
      v-if="!user"
    >Register</router-link>
    <router-link
      class="btn btn-outline-primary mr-2"
      to="/login"
      v-if="!user"
    >Log In</router-link>
    <router-link
      class="btn btn-primary"
      to="/meetings"
      v-if="user"
    >Meetings</router-link>
    <br>
    <br>
    <router-link
      class="btn btn-primary"
      to="/baking"
      v-if="user"
    >Baking</router-link>
    

    </div>

  </div>
</template>

<script>
export default {
  name: "home",
  props: ["user"]
};
</script>
