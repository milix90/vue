<template>
    <div class="col-md-4">
        <div class="card bg-light m-2" style="max-width: 18rem;">
            <div class="card-header">
                <slot name="header">Step :</slot>
                {{value.step}}
            </div>
            <div class="card-body">
                <h1 class="card-title text-center">{{sumResult}}</h1>
                <button class="btn btn-primary btn-block" @click.prevent="stepHolder">RUN</button>
                <a class="btn-block badge badge-warning" v-text="'Step Counts : '+increment"></a>
                <a href="#" class="badge badge-danger btn-block" @click.prevent="removeStep">Remove Step</a>
                <div class="mt-3" v-if="steps.length > 1">
                    <a class="m-1 badge badge-success" href="#"
                       @click.prevent="toggleDisplay" v-text="displayBtnText"></a>
                    <a class="m-1 badge badge-danger" href="#"
                       @click.prevent="resetSteps" v-text="'Reset Step'"></a>
                    <br>
                    <template v-if="display">
                        <ul class="bullet">
                            <li v-for="(step,i) in steps" :key="i" v-text="'step '+(i+1)+' - '+ step"></li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Numerics from "../helper/NumHelper";

    export default {
        name: "Card",
        props: {
            index: Number,
            value: Object,
        },
        data() {
            return {
                sumResult: 0,
                steps: [0],
                increment: 1,
                display: false,
                displayBtnText: 'Show Steps',
            }
        },
        methods: {
            stepHolder() {
                this.sumResult = Numerics.stepHolder(this.value.step, this.sumResult);
                this.steps.push(this.sumResult);
                this.increment++;
            },
            toggleDisplay() {
                if (this.steps.length > 1)
                    this.display = !this.display;

                this.displayBtnText = this.display ? 'Hide Steps' : 'Show Steps';
            },
            resetSteps() {
                this.sumResult = 0;
                this.steps = [0];
                this.increment = 1;
            },
            removeStep() {
                this.$emit('remove', this.index);
            }
        }
    }
</script>

<style scoped>
    .bullet {
        list-style: none;
        text-align: left;
    }
</style>