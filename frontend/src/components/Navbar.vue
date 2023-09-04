<template>
  <v-app-bar color="teal-darken-4">  
    <v-app-bar-title>TO-DO LIST</v-app-bar-title>   
    <v-spacer></v-spacer> 
    <template v-if="authIsReady">
      <div v-if="user">
        <span>Logged in as {{ user.name }}</span>
        <v-btn class="ma-2" @click="logout">Logout</v-btn>        
      </div>            
    </template>
    <div v-else>
        <v-btn class="ma-2" @click="login">Login</v-btn>        
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  computed: {                    
      ...mapGetters({user:"auth/user", authIsReady:"auth/authIsReady"}),      
  },  
  methods:{
    logout() {      
      this.$store.dispatch("auth/logout")
    },
    login() {
      this.$router.push('/')
    },
  } 
}
</script>