<template>
    <div style="textAlign:center;marginTop:10%;">显示成功1  {{pageTitle}}</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['pageTitle'])
    },
}
</script>
