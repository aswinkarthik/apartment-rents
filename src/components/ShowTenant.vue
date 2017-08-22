<template>
  <div>
    <div class="row primary-text">
      <div class="col s12 m12">
        <div class="card hoverable secondary-color">
          <div class="card-content">
            <h4>{{ tenant.id }} - {{ tenant.name }}</h4>
          </div>
        </div>
      </div>
    </div>
    <ul class="collection with-header">
      <li class="collection-header secondary-color">
        <h4>Payments</h4>
      </li>
      <li class="collection-item hoverable secondary-color" v-for="(p, i) in payments" v-bind:key="p">
        <div>
          {{ i + 1 }}.
          <i class="fa fa-calendar" aria-hidden="true"></i> &nbsp; {{ p.date }}
          <span class="secondary-content primary-text">
            {{ p.amount }}
          </span>
        </div>
      </li>
    </ul>
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
li.hoverable:hover {
  transition: background-color 0.5s linear;
  cursor: pointer;
}
</style>
