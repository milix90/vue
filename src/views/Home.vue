<template>
    <div>
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <form class="col-10">
                    <SearchBox @numeric="getResult"></SearchBox>
                    <div class="row">
                        <template v-if="cards.length > 0">
                            <Card v-for="(card, i) in cards" :key="i"
                                  @remove="removeStep" :index="i" :value="card"></Card>
                        </template>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBox from '../components/SearchBox';
    import Card from '../components/Card';

    export default {
        name: 'Home',
        components: {
            SearchBox,
            Card,
        },
        data() {
            return {
                cards: [],
            }
        },
        methods: {
            getResult(result) {
                this.cards.push({'step': Number(result)});
            },
            removeStep(index) {
                this.cards.splice(index, 1);
                this.$forceUpdate();
            }
        }
    }
</script>
