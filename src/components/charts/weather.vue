<template>
  <div id="weather" class="weather">
    charts
  </div>
</template>

<script>
  var echarts = require('echarts');
  export default {
    data() {
      return {
  
      }
    },
    props: {
      id: String
    },
    mounted() {
      this.drawLine('weather');
    },
    methods: {
      drawLine(id) {
        const weatherChart = echarts.init(document.getElementById(id));
        weatherChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          legend: {
            data: ['最高温', '最低温', '平均温度']
          },
          xAxis: [{
            type: 'category',
            data: ['今天', '明天', '后天'],
            axisPointer: {
              type: 'shadow'
            }
          }],
          yAxis: [{
              type: 'value',
              name: '温度',
              min: 0,
              max: 50,
              interval: 10,
              axisLabel: {
                formatter: '{value} °C'
              }
            },
            {
              type: 'value',
              name: '平均温度',
              min: 0,
              max: 50,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [{
              name: '最高温',
              type: 'bar',
              data: [20, 25, 32]
            },
            {
              name: '最低温',
              type: 'bar',
              data: [14, 20, 22]
            },
            {
              name: '平均温度',
              type: 'line',
              yAxisIndex: 1,
              data: [17, 22.5, 22]
            }
          ]
        });
      }
    }
  }
</script>

<style scoped>
  .weather {
    width: 100%;
    height: 400px;
    border: 1px solid #f00;
  }
</style>