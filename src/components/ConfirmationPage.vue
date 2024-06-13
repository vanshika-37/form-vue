    <template>
        <div v-if="formData">
            <h1 class="text-primary">Confirmation Page</h1>
            <p>First Name: {{ formData.firstName }}</p>
            <p>Last Name: {{ formData.lastName }}</p>
            <p>Email: {{ formData.email }}</p>
            <p>Phone: {{ formData.phone }}</p>
            <p>Address: {{ formData.address }}</p>
            <p>Places Visited: {{ formData.selectedPlaces.join(', ') }}</p>
        </div>
        <div v-else>
            <p>No form data received.</p>
        </div>
    </template>
    
    <script>
    export default {
        props: {
            formData: {
                type: Object,
                required: true
            }
        },
        created() {
            console.log('formData received:', this.formData);
        }
    };
    </script>    <div v-if="formData">
            <h1 class="text-primary">Confirmation Page</h1>
            <p>First Name: {{ formData.firstName }}</p>
            <p>Last Name: {{ formData.lastName }}</p>
            <p>Email: {{ formData.email }}</p>
            <p>Phone: {{ formData.phone }}</p>
            <p>Address: {{ formData.address }}</p>
            <p>Places Visited: {{ formData.selectedPlaces.join(', ') }}</p>
        </div>
        <div v-else>
            <p>No form data received.</p>
        </div>
    </template>
    
    <script>
    export default {
        props: {
            formData: {
                type: Object,
                required: true
            }
        },
        created() {
            console.log('formData received:', this.formData);
        }
    };
    </script>