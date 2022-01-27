import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        cakeCount: 100,
    },
    actions: {
        setCakeCountIncrement(context, payload){
            context.commit('SET_CAKE_INCREMENT', payload);
        },
        setCakeCountDecrement(context, payload){
            context.commit('SET_CAKE_DECREMENT', payload);
        }
    },
    mutations: {
        SET_CAKE_INCREMENT(state, payload){
            state.cakeCount = state.cakeCount + payload;
        },
        SET_CAKE_DECREMENT(state, payload){
            state.cakeCount = state.cakeCount - payload;
        }
    }
});