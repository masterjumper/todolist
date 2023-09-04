import axios from 'axios';
import router from '@/router';

export default {    
    namespaced: true,
    state: {      
        authUser: null,        
        authToken:null,
        authIsReady: false,        
    },
    getters: {
        user:(state) =>state.authUser,
        token:(state) =>state.authToken,
        authIsReady:(state) =>state.authIsReady,        
    },
    actions: {
          async login(context, { email, password }) {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/auth/login', {email, password }).then(
              (res)=>{
                        context.commit('setUser', res.data)
                        context.commit('setAuthIsReady', true) 
                        router.push({ name: 'Home' })                                             
                      }
                    
            ).catch(
              (errors) => {                
                /* let desc = ''                
                errors.response.data.map(
                  (e)=>{desc = desc + ' ' + e}
                ) */
                
                router.push({ name: 'Home' })
              }
              )
            
          },
          
          async logout({commit}) {
            await axios.get('/api/auth/logout', this.authToken)
            const payload = {
              data: null,
              token:null
            }       
            commit('setUser', payload)
            commit('setAuthIsReady', false)  
            router.push('/')          
          }
    },
    mutations: {
          setUser(state, payload) {          
            state.authUser = payload.data,
            state.authToken = payload.token            
          },

          setAuthIsReady(state, payload) {
            state.authIsReady = payload            
          },
    }
    
}