<template>
  <div style="margin: 2%;">
    <el-button type="primary" @click="showAddDialog" style="margin-bottom: 20px">新增项目</el-button>
    <el-row :gutter="20" >
      <el-col :span="8" v-for="(project, index) in projects" :key="index">
        <el-card>
          <div slot="header">
            <span>{{ project.name }}</span>
          </div>
          <div>
            <el-tag type="primary" v-for="tag in project.tags" :key="tag">{{ tag }}</el-tag>
          </div>
          <el-progress :percentage="project.progress"></el-progress>
          <div style="margin-top: 10px;">
            <el-button type="primary" size="mini" @click="editProject(index)">编辑</el-button>
            <el-button type="danger" size="mini" @click="confirmDeleteProject(index)">删除</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 新增/编辑项目的弹出框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
      <el-form :model="currentProject">
        <el-form-item label="项目名称">
          <el-input v-model="currentProject.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="标签">
          <el-input v-model="tagInput" placeholder="添加标签后按Enter"></el-input>
          <el-tag type="primary" v-for="(tag, index) in currentProject.tags" :key="index" closable @close="removeTag(index)">{{ tag }}</el-tag>
        </el-form-item> -->
        <!-- <el-form-item label="进度">
          <el-slider v-model="currentProject.progress"></el-slider>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveProject">保存</el-button>
      </span>
    </el-dialog>

    <!-- 删除确认对话框 -->
    <el-dialog title="确认删除" :visible.sync="deleteDialogVisible">
      <span>确定要删除该项目吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button type="danger" @click="deleteProject">删除</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'PGSQL_test',
          tags: ['schema', '映射', 'mapping', 'nt生成'],
          progress: 80
        },
        {
          name: 'SQLServer_test',
          tags: ['schema', '映射', 'mapping', 'nt生成'],
          progress: 20
        },
        {
          name: 'oracle_test',
          tags: ['schema', '映射', 'mapping', 'nt生成'],
          progress: 30
        },
        {
          name: 'mapping_test',
          tags: ['schema', '映射', 'nt生成'],
          progress: 88
        },
        {
          name: 'no_schema',
          tags: ['schema', '映射', 'mapping', 'nt生成'],
          progress: 50
        }
      ],
      dialogVisible: false,
      deleteDialogVisible: false,
      dialogTitle: '',
      currentProject: {
        name: '',
        tags: [],
        progress: 0
      },
      tagInput: '',
      editIndex: -1,
      deleteIndex: -1
    };
  },
  methods: {
    showAddDialog() {
      this.dialogTitle = '新增项目';
      this.currentProject = { name: '', tags: ['判据提取', 'schema', '映射', 'mapping', 'nt生成'], progress: 0 };
      this.tagInput = '';
      this.dialogVisible = true;
      this.editIndex = -1;
    },
    editProject(index) {
      this.dialogTitle = '编辑项目';
      this.currentProject = { ...this.projects[index] };
      this.dialogVisible = true;
      this.editIndex = index;
    },
    confirmDeleteProject(index) {
      this.deleteIndex = index;
      this.deleteDialogVisible = true;
    },
    deleteProject() {
      this.projects.splice(this.deleteIndex, 1);
      this.deleteDialogVisible = false;
      this.deleteIndex = -1;
    },
    saveProject() {
      if (this.editIndex === -1) {
        // 新增项目
        this.projects.push({ ...this.currentProject });
      } else {
        // 编辑项目
        this.projects.splice(this.editIndex, 1, { ...this.currentProject });
      }
      this.dialogVisible = false;
    },
    removeTag(index) {
      this.currentProject.tags.splice(index, 1);
    }
  },
  watch: {
    tagInput(val) {
      if (val.includes(',')) {
        this.currentProject.tags.push(val.replace(',', ''));
        this.tagInput = '';
      }
    }
  }
};
</script>

<style>
.el-card {
  margin-bottom: 20px;
}
</style>

