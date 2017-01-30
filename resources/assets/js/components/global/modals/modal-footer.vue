<template>
    <div class="modal-footer">
        <slot></slot>
    </div>
</template>

<script>
    /**
     * modal footer
     * @module modals/modal-footer
     * @author Jack Yang
     * @description a component for modal-footer
     */
    module.exports = {
        mounted: function () {
            let self = this;
            this.$nextTick(function () {
                $(self.$el).find('a').addClass('modal-action');
            })
        }
    };
</script>