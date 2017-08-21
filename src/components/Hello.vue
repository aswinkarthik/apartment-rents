<template>
  <div class="wrap">
    <br>
    <template v-for="tenant in tenants">
      <div class="row" v-bind:key='tenant.id'>
        <div class="col s12 m12">
          <div class="card primary-color-dim hoverable">
            <div class="card-content white-text">
              <span class="card-title">{{ tenant.name }}</span>
              <p>{{ tenant.description }}</p>
            </div>
            <div class="card-action">
              <a :href="url(tenant.id)">View</a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="fixed-action-btn">
      <a id="scale-demo" href="#!" class="btn-floating btn-large primary-color scale-transition">
        <i class="fa fa-plus"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data: () => {
    return {
      msg: 'Welcome to Your Vue.js App',
      tenants: [
        { id: 1, name: 'Tenant1', description: 'Details of tenant 1' },
        { id: 2, name: 'Tenant2', description: 'Details of tenant 2' }
      ]
    }
  },
  methods: {
    openTenant: function (id) {
      this.$router.push({ name: 'Tenant', params: { id } })
    },
    url: id => `#/tenants/${id}`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/vars.less";

.card-action a {
  color: @secondary !important;
}
</style>
