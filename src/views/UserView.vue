<template>
    <div>
        <p>user info:</p>
        <p>id {{ user.id }}</p>
        <p>name {{ user.name }}</p>   
    </div>
</template>


<script>
import store from '@/store';


export default {
    name: 'VueUserView',

    data() {
        return {
            user: store.state.user
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>



<style lang="" scoped>
    
</style>
