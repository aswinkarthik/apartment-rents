<template>
  <div>
    <div class="row">
      <div class="col s12 m12">
        <div class="card hoverable">
          <div class="card-content">
            {{ tenant.name }}
          </div>
        </div>
      </div>
    </div>
    <table>
      <thead class="table-header z-depth-1">
        <tr>
          <th>Sl. no</th>
          <th>Date of payment</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in payments" v-bind:key="p" class="hoverable">
          <td>{{ i + 1 }}</td>
          <td><i class="fa fa-calendar black-text" aria-hidden="true"></i> &nbsp; {{ p.date }}</td>
          <td>{{ p.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tenant',
  data: function () {
    return {
      tenant: {
        id: this.$route.params.id,
        name: 'Aswin Karthik',
        status: true
      },
      payments: [
        { date: '2017-08-07', amount: 120 },
        { date: '2017-08-06', amount: 115 },
        { date: '2017-08-05', amount: 110 },
        { date: '2017-08-04', amount: 125 },
        { date: '2017-08-03', amount: 123.5 }
      ]
    }
  },
  methods: {
  },
  filters: {
    uppercase: v => {
      return v.toUpperCase()
    }
  }
}
</script>

<style scoped lang="less">
@import "../assets/css/vars.less";
.table-header {
  background: @primary;
  color: white;
}
</style>
