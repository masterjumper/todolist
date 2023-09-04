
<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="justify-center">
            <!-- Log In -->
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="teal-darken-4" text="RESGISTRARSE"></v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { ref } from 'vue'

export default {
  setup() {    
    const error = ref(null)
    const form = ref(null)
    return { error, form }
  },
  data() {
        return {            
            email: '',
            password: '',            
        }
    },
  methods:{

   login(){ 
      if (this.email.trim().length == 0 || this.password.trim().length == 0) {
         return
      }     
      this.$store.dispatch('auth/login', {
          email: this.email,
          password:this.password
      })            
   }
  }
}
</script>

<style>

</style>