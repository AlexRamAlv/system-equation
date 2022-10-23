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
  name: "LineCharQEq",
  components: {
    Line,
  },
  data: function () {
    return {
      chartOptions: {
        plugins: {
          legend: {
            labels: {
              boxWidth: 5,
              boxHeight: 5,
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
    ChartId: {
      type: String,
      default: () => {
        return "line-chart-1";
      },
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
    labels: {
      type: Array,
      default: () => [],
    },
    equiation: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    chartData() {
      const labels = this.labels;
      const data = this.equiation;
      return {
        labels,
        datasets: [
          {
            type: "line",
            label: "Quadratic Equation Graph",
            data,
            borderColor: "#8782ed",
            pointBackgroundColor: "rgba(0, 0, 0, 0)",
            pointBorderColor: "rgba(0, 0, 0, 0)",
            backgroundColor: "#8782ed",
            tension: 0.4,
          },
        ],
      };
    },
  },
};
</script>
