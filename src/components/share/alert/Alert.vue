<template>
    <div role="alert" class="inline-alert mt-3 alert alert-danger">
    <div class="row">
        <div class="pr-0 col-height col-auto">
        <div class="col">
            <p>{{message}}</p>
        </div>

        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "AlertComponent",
    props: {
        message: String,
    }
}
</script>
<style lang="scss" scoped>
    @import './Alert.scss'
</style>