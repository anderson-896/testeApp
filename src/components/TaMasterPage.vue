<template>
    <div class="container-fluid">
        <ta-header/>
        <div class="row">
            <ta-sidebar class="col-12 col-md-2"/>
            <router-view class="col-12 col-md-10"/>
        </div>
    </div>
</template>
<script>
import TaHeader from '@/components/TaHeader'
import TaSidebar from '@/components/TaSidebar'
export default {
    components: {TaHeader, TaSidebar}
}
</script>
<style>

</style>


