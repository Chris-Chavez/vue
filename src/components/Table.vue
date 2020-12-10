<template>
    <div>
        <b-table 
            striped 
            bordered 
            :items="items"
            :fields="fields"
             :busy="busy"
        >
            <template #table-busy>
                <div class="text-center text-danger my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Cargando...</strong>
                </div>
            </template>

            <template #cell(actions)="data">
                <slot name="actions" :item="data"></slot>
            </template>

        </b-table>
  </div>
</template>
<script>
export default {
    name: 'Table',
    props: {
        items: {
            type: Array
        },
        fields: Array,
        busy: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style>
</style>