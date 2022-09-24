<template>
  <div class="basis-5/12">
    <form action="" class="mx-auto w-full">
      <div class="my-5 flex justify-center">
        <p class="m-2 text-gray-700 font-bold">EQ 1</p>
        <input class="number-input-field" type="number" v-model="a" />
        <label class="m-2 text-gray-700 font-bold" for="">X</label>
        <input class="number-input-field" type="number" v-model="b" />
        <label class="m-2 text-gray-700 font-bold" for="">Y</label>
        <p class="mt-2 text-gray-700 font-bold">=</p>
        <input class="number-input-field" type="number" v-model="c" />
      </div>
      <div class="my-5 flex justify-center">
        <p class="m-2 text-gray-700 font-bold">EQ 2</p>
        <input class="number-input-field" type="number" v-model="a1" />
        <label class="m-2 text-gray-700 font-bold" for="">X</label>
        <input class="number-input-field" type="number" v-model="b1" />
        <label class="m-2 text-gray-700 font-bold" for="">Y</label>
        <p class="mt-2 text-gray-700 font-bold">=</p>
        <input class="number-input-field" type="number" v-model="c1" />
      </div>
      <table
        class="mx-auto my-5 md:w-fit border-collapse border border-slate-400"
      >
        <thead>
          <tr class="text-center bg-gray-100">
            <th class="border border-slate-300 p-3 text-gray-700">Variables</th>
            <th class="border border-slate-300 p-3 text-gray-700">
              Result Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border border-slate-300 text-gray-700 font-bold">X</td>
            <td class="border border-slate-300">{{ xValue }}</td>
          </tr>
          <tr class="text-center">
            <td class="border border-slate-300 text-gray-700 font-bold">Y</td>
            <td class="border border-slate-300">{{ yValue }}</td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  <div
    class="w-10/12 lg:w-7/12 lg:h-3/4 basis-7/12 border border-indigo-200 shadow-lg mx-auto p-2 rounded-md"
  >
    <LineChart
      :equiationOne="equiationOne"
      :equiationTwo="equiationTwo"
      :xPoint="xValue"
      :yPoint="yValue"
      :labels="labels"
      height="270"
      cssClasses=""
    />
  </div>
</template>
<script>
import LineChart from "./LineChartView.vue";
export default {
  name: "FieldForm",
  components: { LineChart },
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
      a1: 0,
      b1: 0,
      c1: 0,
    };
  },
  methods: {
    Y(x, a, b, c) {
      const numerator = c - a * x;
      const denominator = b;
      return denominator != 0 ? numerator / denominator : 0;
    },
    range(start, end) {
      var ans = [];
      if (start > end) [start, end] = [end, start];
      for (let i = start; i <= end; i++) {
        ans.push(Number(i).toFixed(2));
      }
      return ans;
    },
  },
  computed: {
    xValue() {
      const numerator = this.c1 * this.b - this.b1 * this.c;
      const denominator = this.a1 * this.b - this.a * this.b1;
      const result = numerator / denominator;
      return denominator != 0 ? result.toFixed(2) : Number(0).toFixed(2);
    },
    yValue() {
      const numerator = this.c1 * this.a - this.a1 * this.c;
      const denominator = this.a * this.b1 - this.a1 * this.b;
      const result = numerator / denominator;
      return denominator != 0 ? result.toFixed(2) : Number(0).toFixed(2);
    },
    labels() {
      if (
        (this.a === 0 && this.b === 0 && this.c === 0) ||
        (this.a1 === 0 && this.b1 === 0 && this.c1 === 0)
      ) {
        return [];
      }
      const xVariable = Number(this.xValue);
      const maxX = xVariable + 10;
      const minX = xVariable - 10;
      const labels = this.range(minX, maxX);
      console.log(labels);
      return labels;
    },
    equiationOne() {
      const labels = this.labels;
      const data = labels.map((el) => this.Y(el, this.a, this.b, this.c));

      return data;
    },
    equiationTwo() {
      const labels = this.labels;
      const data2 = labels.map((el) => this.Y(el, this.a1, this.b1, this.c1));

      return data2;
    },
  },
};
</script>
