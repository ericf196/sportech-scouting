export default{
    methods: {
        showError(response) {
            if (response.validation) {
                for (var error in response.errors) {
                    if (response.errors.hasOwnProperty(error)) {
                        response.errors[error].forEach((validationError)=> {
                            self.$root.errorToast(validationError)
                        })
                    }
                }
            } else {
                self.$root.errorToast(response.errors)
            }
        }
    }
}