<template>
  <div class="panel panel-default" style="height : 480px;"></div>
</template>

<script>
  import $ from 'expose?$!jquery'
  import Highcharts from 'highcharts'
  /**
   *  @class Hello 提示欢迎信息
   *  @desc 输出欢迎功能
   */
  export default {
    props: {
      username: {
        type: String,
        default: ''
      }
    },

    ready () {
      $(this.$el).highcharts({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          data: [
            { name: 'Microsoft Internet Explorer', y: 56.33 },
            { name: 'Chrome', y: 24.03 },
            { name: 'Firefox', y: 10.38 },
            { name: 'Safari', y: 4.77 },
            { name: 'Opera', y: 0.91 },
            { name: 'Proprietary or Undetectable', y: 0.2 }
          ]
        }]
      })
    }
  }
</script>
