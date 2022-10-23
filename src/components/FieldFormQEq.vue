<template>
  <div class="basis-5/12 m-2">
    <form action="" class="mx-auto w-full">
      <div class="my-5 flex flex-col">
        <div class="w-full">
          <p class="text-gray-700 font-bold m-3 text-center">
            Enter the coefficients
          </p>
        </div>
        <div class="w-full flex justify-center">
          <input
            class="w-10 p-1 text-center outline-none border-b border-indigo-500 focus:border-indigo-800 md:w-11 lg:w-14"
            type="number"
            v-model="a"
          />
          <label class="text-gray-700 font-bold m-1" for="">
            X
            <sup class="text-gray-700 font-bold">2</sup>
          </label>
          <p v-show="b >= 0" class="text-gray-700 font-bold m-1">+</p>
          <input
            class="w-11 p-1 text-center outline-none border-b border-indigo-500 focus:border-indigo-800 md:w-11 lg:w-14"
            type="number"
            v-model="b"
          />
          <label class="text-gray-700 font-bold m-1" for="">X</label>
          <p v-show="c >= 0" class="text-gray-700 font-bold m-1">+</p>
          <input
            class="w-10 p-1 text-center outline-none border-b border-indigo-500 focus:border-indigo-800 md:w-11 lg:w-14"
            type="number"
            v-model="c"
          />
          <p class="text-gray-700 font-bold m-1">=</p>
          <p class="text-gray-700 font-bold m-1">0</p>
        </div>
      </div>
    </form>
    <section>
      <table class="mx-auto my-5 border-collapse border border-slate-400 w-36">
        <thead>
          <tr class="text-center bg-gray-100">
            <th class="head-table-text">X1</th>
            <th class="head-table-text">X2</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border border-slate-300">{{ generalFormula["X1"] }}</td>
            <td class="border border-slate-300">{{ generalFormula["X2"] }}</td>
          </tr>
        </tbody>
      </table>
      <div class="md:flex md:m-auto md:w-[30rem] md:items-center lg:flex-col">
        <p class="text-gray-700 font-bold w-fit mx-auto">- Comment</p>
        <section
          class="border border-slate-300 rounded p-3 w-72 mx-auto my-4 lg:w-80"
        >
          <em>
            <p v-show="a != 0" class="text-gray-700">
              "{{ generalFormula["comments"] }}"
            </p>
          </em>
        </section>
      </div>
    </section>
  </div>
  <div
    class="w-10/12 lg:w-7/12 lg:h-3/4 basis-7/12 border border-indigo-200 shadow-lg mx-auto p-2 rounded-md"
  >
    <LineChartQEq
      :equiation="equiation"
      :root1="generalFormula['X1']"
      :root2="generalFormula['X2']"
      :labels="labels"
      cssClasses=""
    />
  </div>
</template>
<script>
import LineChartQEq from "./LineChartQEq.vue";
export default {
  name: "FieldFormQEq",
  components: { LineChartQEq },
  data() {
    return {
      a: 0,
      b: 0,
      c: 0,
    };
  },
  computed: {
    generalFormula() {
      /* 
        El discriminante puede ser positivo, cero o negativo y esto determina cuántas soluciones (o raíces) existen para la ecuación     cuadrática dada.
        1. Un discriminante positivo indica que la cuadrática tiene dos soluciones reales distintas.
        2. Un discriminante de cero indica que la cuadrática tiene una solución real repetida.
        3. Un discriminante negativo indica que ninguna de las soluciones son números reales.

        Formula general
        X1 = (-b + (b^2 -4ac) ^1/2)/2a
        X2 = (-b - (b^2 -4ac) ^1/2)/2a

      */

      let discrimiant = this.b ** 2 - 4 * this.a * this.c;

      if (discrimiant >= 0) {
        const X1 = this.a ? (-this.b + discrimiant ** 0.5) / (2 * this.a) : 0;
        const X2 = this.a ? (-this.b - discrimiant ** 0.5) / (2 * this.a) : 0;

        let root1 = X1.toFixed(2);
        let root2 = X2.toFixed(2);
        return {
          X1: root1,
          X2: root2,
          comments:
            discrimiant > 0
              ? "Quadratic equation has two different real solutions (or roots)"
              : "Quadratic equation has a repeated real solution (or root).",
        };
      } else {
        const X1 = Number(0).toFixed(2);
        const X2 = Number(0).toFixed(2);
        return {
          X1,
          X2,
          comments:
            "For the given coefficient none of the solutions are real numbers in this case; complex numbers are the solution.",
        };
      }
    },
    labels() {
      const start = Number(this.generalFormula["X1"]);
      const end = Number(this.generalFormula["X2"]);
      const labels = this.range(start - 10, end + 10);
      return labels;
    },
    equiation() {
      let xValues = this.labels;
      let data = xValues.map((e) => this.yValues(e));
      return data;
    },
    vertice() {
      return this.b / (2 * this.a);
    },
  },
  methods: {
    range(start, end) {
      let ans = [];
      if (start > end) [start, end] = [end, start];
      for (let i = start; i <= end; i++) {
        ans.push(Number(i).toFixed(2));
      }
      return ans;
    },
    yValues(xValue) {
      return Number(this.a * xValue ** 2 + this.b * xValue + this.c).toFixed(2);
    },
  },
};
</script>
