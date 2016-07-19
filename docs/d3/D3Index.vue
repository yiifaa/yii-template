<template>
    <div class="row">
        <div class="col-xs-10">
            <component :is="currentView"></component>
        </div>
        <div class="col-xs-2">
            <div class="list-group">
                <a class="list-group-item active" href="javascript:;">选择器</a>
            </div>
        </div>
    </div>
</template>
<script>
    import selection from "./Selection.vue"
    export default {

        data () {
            return {
                currentView: 'selection',
                menus: {
                    'select': '选择器'
                }
            }
        },

        components: {
            selection
        },

        methods: {

        }
    }
</script>