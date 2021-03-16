<template>
    <div class="form-group">
        <div class="card my-4">
            <h5 class="card-header">Counter System</h5>
            <div class="card-body">
                <form action="#" @submit.prevent="checkCounter">
                    <div class="input-group">
                        <label for="step"></label>
                        <input id="step" v-model="formInput"
                               type="text" class="form-control mr-2" placeholder="Enter Step...">
                        <span class="input-group-append">
                      <button type="submit" class="btn btn-primary">Add Counter</button>
                    </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Numerics from "../helper/NumHelper";

    export default {
        name: "SearchBox",
        data() {
            return {
                formInput: '',
            }
        },
        methods: {
            setCounter(result) {
                this.$emit('numeric', result);
                this.formInput = '';
            },
            checkCounter() {
                if (this.formInput.length === 0) {
                    alert('Counter Warning : Please insert a Number.');
                    return;//to not run setCounter function.
                }

                let result = Numerics.isNumeric(this.formInput);

                result !== false
                    ? this.setCounter(result)
                    : alert('Counter Error : Wrong input type! Please insert a Number.');
            },
        }
    }
</script>

<style scoped>

</style>