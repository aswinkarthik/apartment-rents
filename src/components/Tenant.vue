<template>
  <div>
    {{ id }}
    <div class="table">
      <div class="row">
        <div class="cell header"> Details </div>
        <div class="cell header"> &nbsp; </div>
      </div>
      <template v-for="each in Object.entries(tenant)">
        <div class="row hoverable" v-bind:key="each">
          <div class="cell">{{ each[0] | uppercase }}</div>
          <div class="cell">{{ each[1] }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tenant',
  data: function () {
    return {
      tenant: {
        id: this.$route.params.id,
        name: 'Tenant Name',
        status: true
      }
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
</style>
