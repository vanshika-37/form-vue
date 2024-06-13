<template>
    <div style="height: 100vh; width: 100%;background-color: #a3e7e8;"
        class=" d-flex align-items-center justify-content-center">
        <div style="width: 100vw;">
            <b-container class=" rounded-top d-block" style="height: 8vh;background-color: #33c5f4;">
            </b-container>
            <b-container id="app" class="bg-white rounded-bottom p-4 d-block">
                <router-view></router-view>
            </b-container>
        </div>
    </div>
</template>

<script>
import Form from './components/Form.vue';

export default {
    name: 'App',
    components: {
        Form
    }
}
</script>
