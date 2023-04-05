<template>
    <div>
        <p>register view</p>
        <button @click="register">register</button>
    </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
    name: 'RegisterView',

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

        async register () {
            const response = await this.$api.auth.register({
                name: 'sssss',
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


<style scoped></style>