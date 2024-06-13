<template>
    <b-container class="align-items-center">
        <slot name="header">
            <h2 class="text-primary">Please Fill Out the Form</h2>
        </slot>
        <b-form @submit.prevent="onSubmit">
            <div class="row d-flex justify-content-center" style="column-gap: 3rem;">
                <b-form-group id="input-group-1" label="First Name :" label-for="input-1"
                    class="h4 text-primary col-md-5 my-4">
                    <b-form-input v-model="firstName" class="mt-3 py-2"
                        :style="{ backgroundColor: '#a8d5e5', color: '#134b5f' }" id="input-1" required
                        placeholder="Enter your first name"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Last Name :" label-for="input-2"
                    class="h4 text-primary col-md-5 my-4">
                    <b-form-input v-model="lastName" class="mt-3 py-2"
                        :style="{ backgroundColor: '#a8d5e5', color: '#134b5f' }" id="input-2" required
                        placeholder="Enter your last name"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Email :" label-for="input-3"
                    class="h4 text-primary col-md-5 my-4">
                    <b-form-input v-model="email" class="mt-3 py-2"
                        :style="{ backgroundColor: '#a8d5e5', color: '#134b5f' }" id="input-3" type="email" required
                        placeholder="Enter your email"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4" label="Phone :" label-for="input-4"
                    class="h4 text-primary col-md-5 my-4">
                    <b-form-input v-model="phone" class="mt-3 py-2"
                        :style="{ backgroundColor: '#a8d5e5', color: '#134b5f' }" id="input-4" type="tel" required
                        placeholder="Enter your phone number"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-5" label="Address :" label-for="input-5"
                    class="h4 text-primary col-md-5 my-4">
                    <b-form-textarea v-model="address" class="mt-3 py-2"
                        :style="{ backgroundColor: '#a8d5e5', color: '#134b5f' }" id="input-5" required
                        placeholder="Enter your address" rows="3"></b-form-textarea>
                </b-form-group>

                <b-form-group id="input-group-6" label="Places Visited :" label-for="input-6"
                    class="h4 text-primary col-md-5 my-4">
                    <checkbox-dropdown class="mt-3" v-model="selectedPlaces"
                        @places-selected="updateSelectedPlaces"></checkbox-dropdown>
                </b-form-group>
            </div>
            <b-row align-h="end">
                <b-col class="col-md-2">
                    <b-button :disabled="!isFormValid" type="submit" variant="primary" class="mt-2">Submit</b-button>
                </b-col>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
import CheckboxDropdown from './CheckboxDropdown.vue';

export default {
    components: {
        CheckboxDropdown
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            selectedPlaces: [],
        };
    },
    computed: {
        isFormValid() {
            return this.firstName && this.lastName && this.email && this.phone && this.address;
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                phone: this.phone,
                address: this.address,
                selectedPlaces: this.selectedPlaces
            };
            console.log(formData);
            this.$router.push({ name: 'confirmation', params: { formData: formData } });
        },
        updateSelectedPlaces(selectedPlaces) {
            this.selectedPlaces = selectedPlaces;
            console.log(this.selectedPlaces);
        }
    }
};
</script>