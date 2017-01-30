<template>
    <div class="modal-header">
        <h4 class="modal-title">{{title}}</h4>
    </div>
</template>

<script>
    /**
     * modal content
     * @module modals/modal-content
     * @author Jack Yang
     * @description a component for modal-content
     */
    module.exports = {

        props: {
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            close(){

            }
        }
    };
</script>