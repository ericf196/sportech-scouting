<template>
    <div>
        <img :src="defaultImage" alt="athlete profile image" width="110px" v-if="!imageFile">
        <img :src="imageFile" alt="athlete profile image" width="110px" v-if="imageFile">

        <br><br>
        <input type="file" name="file" id="image-uploader" class="inputfile" @change="onFileChange"
               ref="fileinput"/>
        <label for="image-uploader" class="btn btn-primary"><i class="fa fa-cloud"></i>
            <span>{{btnText}}</span></label>
    </div>
</template>
<style>
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .inputfile + label {
        width: auto !important;
    }
</style>
<script type="text/babel">

    export default{
        props: {
            value: {},
            acceptedFiles: {
                type: String,
                default: 'image/*'
            },
            btnText: {},
            errorValidationMsg: {},
            width: {
                type: Number,
                default: 110
            },
            image: {},
            defaultImage: {}
        },
        watch: {
            image: function (val) {
                this.imageFile = val;
            }
        },
        data(){
            return {
                imageFile: null
            }
        },
        methods: {
            onFileChange(e){
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                if (!file.type.match(this.acceptedFiles)) {
                    document.getElementById("image-uploader").value = "";
                    this.$root.warningToast(this.errorValidationMsg);
                    this.imageFile = this.defaultImage
                    return;
                }
                var reader = new FileReader();
                var vm = this;
                reader.onload = (e) => {
                    vm.imageFile = e.target.result;
                };
                reader.readAsDataURL(file)
            },
            getFile(){
                return this.$refs.fileinput.files[0];
            }
        }
    }
</script>
