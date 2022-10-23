<template>
  <Line
    :ChartId="ChartId"
    :chart-data="chartData"
    :width="width"
    :height="height"
    :cssClasses="cssClasses"
    :styles="styles"
    :chartOptions="chartOptions"
  />
</template>
<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  name: "LineChartView",
  components: {
    Line,
  },
  data: () => {
    return {
      chartOptions: {
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              borderColor: "#999",
            },
            position: "center",
          },
          y: {
            beginAtZero: true,
            grid: {
              borderColor: "#999",
            },
            position: "center",
          },
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 10,
              boxHeight: 10,
              color: "#717171",
              font: {
                size: 14,
                weight: "bold",
              },
            },
          },
        },
      },
    };
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 270,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    xPoint: {
      type: Number,
      default: 0,
    },
    yPoint: {
      type: Number,
      default: 0,
    },
    labels: {
      type: Array,
      default: () => [],
    },
    equiationOne: {
      type: Array,
      default: () => [],
    },
    equiationTwo: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    chartData() {
      const labels = this.labels;
      const data = this.equiationOne;
      const data2 = this.equiationTwo;
      return {
        labels,
        datasets: [
          {
            type: "line",
            label: "EQ 1",
            data,
            fill: true,
            backgroundColor: "#8782ed",
            borderColor: "#8782ed",
          },
          {
            type: "line",
            label: "EQ 2",
            data: data2,
            fill: true,
            borderColor: "#4f46e5",
            backgroundColor: "#4f46e5",
          },
        ],
      };
    },
  },
};
</script>
