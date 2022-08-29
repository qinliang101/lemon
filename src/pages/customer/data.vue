<template>
    <NormalHeader title="客户趋势图"></NormalHeader>
    <div>
        <vue-echarts :option="option" style="height: 500px" ref="chart" />
    </div>
</template>

<script>
import { VueEcharts } from 'vue3-echarts'
export default {
    components: { VueEcharts },
    data() {
        return {
            option: {
                xAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150],
                        type: 'line'
                    }
                ]
            }
        }
    }
}
</script>