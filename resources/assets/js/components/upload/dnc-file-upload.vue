<template>
    <div class="file-upload">
        <h4>FileName: {{uploadFile.name}}</h4>
        <h4 v-if="uploadFile.type">Type: {{uploadFile.type}}</h4>
        <input type="file" name="file" id="image-uploader" class="inputfile" @change="onFileChange"
               ref="fileinput"/>
        <label for="image-uploader" class="btn btn-block btn-primary"><i class="fa fa-cloud"></i>
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

    .file-upload {
        margin-bottom: 10px;
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
                default: 'text/xml'
            },
            btnText: {},
            errorValidationMsg: {},
        },
        data(){
            return {
                uploadFile: {
                    name: 'No ha selecciona ningún archivo',
                    type: ''
                }
            }
        },
        methods: {
            onFileChange(e){
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createFile(files[0]);
            },
            createFile(file) {
                if (!file.type.match(this.acceptedFiles)) {
                    document.getElementById("image-uploader").value = "";
                    this.$root.warningToast(this.errorValidationMsg);
                    this.uploadFile = {
                        name: '',
                        type: ''
                    }
                    this.$emit('file-error');

                    return;
                }
                const fileInput = this.$refs.fileinput.files[0];
                this.$emit('file-selected');
                this.uploadFile = {
                    name: fileInput.name,
                    type: fileInput.type
                }
            },
            getFile(){
                return this.$refs.fileinput.files[0];
            },
            getFileName(){
                return this.$refs.fileinput.files[0].name;
            }
        }
    }
</script>
