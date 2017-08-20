<template>
  <div class="table">
    <div class="row">
      <div class="cell header"> Tenant name </div>
      <div class="cell header"> Payment status </div>
    </div>
    <template v-for="tenant in tenants">
      <div class="row hoverable" v-bind:key='tenant.id' v-on:click="openTenant(tenant.id)">
        <div class="cell"> {{ tenant.name }} </div>
        <div class="cell" v-if="tenant.status">
          <i class="fa fa-check-square-o"></i>
        </div>
        <div class="cell red" v-if="!tenant.status">
          <i class="fa fa-times"></i>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tenants: [
        { id: 1, name: 'Tenant1', status: true },
        { id: 2, name: 'Tenant2', status: false }
      ]
    }
  },
  methods: {
    openTenant: function (id) {
      this.$router.push({ name: 'Tenant', params: { id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/vars.less";

.table {
  display: table;
  border: 2px solid @primary;
}

.row {
  display: table-row;
  width: auto;
  clear: both;
  border: 1px solid @primary;
}

.hoverable:hover {
  color: white;
  background: @color5;
  cursor: pointer;
  transition: background-color 250ms linear;
}

.cell {
  float: left;
  display: table-column;
  width: 200px;
  padding: 20px;
  border-bottom: 1px solid @primary;
}

.header {
  background: @primary;
  color: white;
}

.red {
  color: red;
}

a {
  text-decoration: none;
}
</style>
