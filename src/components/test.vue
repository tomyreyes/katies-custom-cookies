<template>
<div>
    <h1>{{title}}</h1>
    <ul>
        <li v-for="(item, index) in items" v-bind:key="index"> {{item.title}} </li>
        </ul>
    <button v-on:click="greet">Greeting</button>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data(){
            return {
                title: 'Katie\'s Custom Cookies',
                items: [
                    {title: 'royal icing'},
                    {title: 'cream cheese icing'},
                    {title: 'potato icing'}
                ]
            }
        },
        methods: {
            greet: function() {
                alert('hello there')
            }
        } 
    }
</script>
