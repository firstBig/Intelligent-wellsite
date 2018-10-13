<template>
  <div class="box">
    <!-- 远程技术支持 -->
    <p class="title">远程技术支持</p>
    <el-table border style="width: 95%; text-align: center;" :data="tableData3">
      <el-table-column prop="date" label="实钻信息" align="center">
        <el-table-column prop="name" label="发布时间" align="center">
        </el-table-column>
        <el-table-column prop="address" align="center">
        </el-table-column>
        <el-table-column prop="date" align="center">
        </el-table-column>
        <el-table-column prop="name" label="专家" align="center">
        </el-table-column>
        <el-table-column prop="address" align="center">
        </el-table-column>
        <el-table-column prop="date" align="center">
        </el-table-column>
        <el-table-column prop="name" label="联系方式" align="center">
        </el-table-column>
        <el-table-column prop="name" align="center">
        </el-table-column>
        <el-table-column prop="address" align="center">
        </el-table-column>
        <el-table-column align="center">
        </el-table-column>
        <!-- <el-table-column prop="date" label="钻头数量（只）" align="center">
        </el-table-column>
        <el-table-column prop="name" label="螺杆数量(根)" align="center">
        </el-table-column>
        <el-table-column prop="address" label="纯钻时间（h）" align="center">
        </el-table-column>
        <el-table-column label="入井工作时间（d）" align="center">
        </el-table-column>
        <el-table-column prop="date" label="机械钻速（m/h）" align="center">
        </el-table-column>
        <el-table-column prop="name" label="行程速度（m/d）" align="center">
        </el-table-column> -->

      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100">
    </el-pagination>
  </div>
</template>
