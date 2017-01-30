export default {
    methods: {
        slugify(value) {
            return value.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        }
    }
}

