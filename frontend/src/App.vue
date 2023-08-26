<template>
  <v-app>
    <v-main>      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import { useRouter } from 'vue-router'

export default { 
  name: 'App',
  setup(){
 const router = useRouter()

    return {
      login() {
        router.push('/')
      },
    }
  },
  data: () => ({
    
  }),
  
}
</script>
