<template>
    <Header title="方案管理"></Header>
    <div class="page_main_content">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column fixed prop="date" label="Date"/>
            <el-table-column prop="name" label="Name"/>
            <el-table-column prop="state" label="State"/>
            <el-table-column prop="city" label="City"/>
            <el-table-column prop="address" label="Address"/>
            <el-table-column prop="zip" label="Zip"/>
        </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    state: 'California',
                    city: 'Los Angeles',
                    address: 'No. 189, Grove St, Los Angeles',
                    zip: 'CA 90036',
                },
            ]
        }
    }
})
</script>