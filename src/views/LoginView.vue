<template>
    <div>
        <p>login view</p>
        <button @click="login">login</button>
    </div>
</template>


<script>
import { mapActions } from 'vuex'


export default {
    name: 'LoginView',

    data () {
        return {

        };
    },

    mounted () {

    },

    methods: {
        ...mapActions([
            'update_token',
            'update_user'
        ]),

        async login () {
            // get & store token
            const response = await this.$api.auth.login({
                name: 'long',
                password: '12345678'
            })
            this.update_token(response.data.access_token)

            // get & store user
            const user = await this.$api.user.info()
            this.update_user(user.data)

            // todo jump 
            this.$router.push({ name: 'home' })


        }
    },
};
</script>


<style></style>