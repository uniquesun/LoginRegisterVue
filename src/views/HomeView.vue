<template>
    <div class="home">
        home page
        <template v-if="isLogged">
            <div>
                <br>
                <button @click="logout">logout</button>
            </div>
        </template>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'HomeView',

    data () {
        return {

        };
    },

    computed: {
        ...mapGetters([
            'isLogged'
        ])
    },

    methods: {
        ...mapActions([
            'update_token',
            'update_user'
        ]),

        async logout () {
            await this.$api.auth.logout()
            // delete token & user
            this.update_token('')
            this.update_user({})
            // todo junp else ...
        }
    }

}
</script>
