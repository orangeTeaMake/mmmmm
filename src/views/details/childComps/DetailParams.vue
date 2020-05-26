<template>
  <div class="detailParams" v-if="Object.keys(detailParams).length > 0">
      <div class="rule">
        <div v-for="(item,index) in removeEmpty(detailParams.rule.tables[0])"
             class="row"
             :key="index">
          <div v-if="item.length > 1" v-for="(child,i) in item"
              :key="i">
            {{child}}
          </div>
        </div>
      </div>
    <table>
      <tr v-for="(item,index) in detailParams.info.set" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      detailParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      removeEmpty(value) {
        /*let arr = []
        arr.map()*/
        return value.map(item => {
          return  item.filter(child => {
            return child;
          })
        });
      }
    }
  }
</script>

<style scoped>
  .detailParams{
    padding: 35px 5px 20px;

    border-bottom: 5px solid #f2f5f8;
  }
  .rule .row{
    border-bottom: 1px solid #efefef;
    font-size: 14px;

    display: flex;
    align-items: center;
  }

  .rule .row div:first-child{
    font-size: 16px;
    width: 100px;
  }
  .rule .row div:not(:first-child){
    flex: 1;
    padding: 8px 5px 8px 0;
  }
  .detailParams table{
    width: 100%;
    border-collapse: collapse;

    vertical-align: middle;
    font-size: 14px;
  }
  .detailParams table td{
    padding: 8px 5px 8px 0;
    border-bottom: 1px solid #efefef;
  }

  .detailParams td:first-child{
    width: 100px;
    font-size: 16px;
  }

  .detailParams table:last-child td:last-child{
    color: red;
  }
</style>
