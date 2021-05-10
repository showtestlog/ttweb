<template>
  <div>
    <el-container style="min-height: 800px">
      <el-aside class="sidbar" width="200px">
        <el-table :data="tableData"
                  class="table"
                  highlight-current-row
                  style="width:180px"
                  @current-change="handleCurrentChange">
          <el-table-column
              prop="title"
              width="180">
          </el-table-column>
        </el-table>
      </el-aside>

      <vue-simple-markdown class="mark-text" source="">

      </vue-simple-markdown>
      <el-main class="main">
      </el-main>
    </el-container>
  </div>
</template>

<script>


export default {
  data() {
    return {
      tableData: [
        {
          title: '基础算法'
        },
        {
          title: '抽象结构'
        },
      ],
      contentURL: null,
      currentRow: null
    }
  },

  mounted() {
    this.readFile()
  },
  methods: {
    handleCurrentChange(currentrow) {
      this.currentRow = currentrow;
    },
    readFile() {
      this.$http.get('staitc/markdowndir/show.md').then(res => {
            console.log(res)
            // eslint-disable-next-line no-debugger
            debugger;
          }
      )
    }

  }
}
</script>

<style scoped>

.main {
}

.table {

}

.sidbar {
  min-height: 860px;
  background-color: #fff;
}

.mark-text {
  padding: 15px;
  width: 100%;
  background-color: #e9ecef;
  box-sizing: border-box;
}
</style>