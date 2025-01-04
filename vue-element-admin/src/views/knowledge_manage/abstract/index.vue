<template>
  <div id="app" class="application-list-container">
    <div class="flex-between mb-16" style="justify-content: space-between;">
                <h4>抽取列表</h4>
    </div>
    <div class="all" >
                <div class="el-row" style="margin: -8px;">
                    <div class="el-col" style="padding: 8px;">
                        <div class="create-application-card" @click="openCreateDialog">
                            <div class="button-with-icon">
                                <span class="icon">+</span>
                            </div>
                                            <span class="create-text " style="font-weight: bold" >创建抽取</span>
                        </div>
                    </div>
                </div>
               <el-card class="app-card" v-for="app in apps" :key="app.id"  >
                        <div class="app-header"  >
                            <el-tag class="app-first" :style="{ backgroundColor: app.color,color: 'white' }">{{app.title.charAt(0)}}</el-tag>
                            <span class="app-title" >{{ app.title }}</span>
                            <span class="button">
                            <el-button class="settings-button" type="primary" size="small" plain>简单配置</el-button>
                            </span>
                        </div>
                        <div class="app-body">
                          <p>{{ app.description }}</p>
                        </div>
                        <div class="app-footer">
                            <el-button icon="el-icon-video-camera"   class="footer-button" type="text" title="观看视频"></el-button>
                            <el-button icon="el-icon-setting"   class="footer-button" type="text" title="设置"></el-button>
                            <el-button icon="el-icon-more"  class="footer-button" type="text" title="更多操作"></el-button>
                        </div>
               </el-card>
    </div>
  </div>
</template>

<style>
  .all{
       display: flex;
             flex-wrap: wrap;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 自动填充，最小宽度 200px */

  }
  .flex-between{
  /*  和其他容器间距 上右下左 */
      padding: 1px 30px 5px 20px;
  }
  .create-application-card {
            margin-bottom: 20px;
            margin-left: 25px;
            background-color: #f0f0f0; /* 设置浅灰色背景 */
            border: 2px solid #d3d3d3; /* 设置淡边框颜色 */
            border-radius: 12px; /* 圆角边框 */
            display: flex;
            justify-content: center;
            align-items: center;
            width: 360px; /* 增加宽度 */
            height: 180px; /* 增加高度 */
            cursor: pointer;
            transition: background-color 0.3s;
            border-radius: 8px;
            //padding: 16px; /* 适当的内边距 */
  }
  .button-with-icon{
            border: 2px solid #B0B0B0; /* 加号按钮的边框颜色 */
            background-color: #fbfbfb; /* 设置浅灰色背景 */
            border-radius: 4px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            color: #B0B0B0; /* 字体颜色设为灰色 */
  }
  .button-with-icon .icon {
            font-size: 20px; /* 加号的大小 */
            margin-right: 5px; /* 增加加号与文本的间距 */
  }
  .create-text{
    margin-left: 5px;
  }
  .app-card {
          display: flex;
          margin-left: 22px;
          height: 180px;
          width: 360px; /* 最大宽度 */
          border: 1px solid #ddd; /* 边框颜色 */
          border-radius: 12px; /* 圆角边框 */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
        }
  .settings-button {
          //position: relative;
          //top: -4px; /* 距离顶部的距离 */
          //right: -100px; /* 距离右边的距离 */
          margin-left: 120px;
          margin-top: 10px;
          background-color: lightblue; /* 按钮颜色 */
          padding: 5px  10px; /* 内边距 */
          border-radius: 5px; /* 圆角按钮 */
          border: none; /* 去掉边框 */
          cursor: pointer; /* 鼠标指针样式 */
      }
  .app-footer {
    margin-top: 46px; /* 调整按钮与上方内容的距离 */
    border-top: 1px solid #e0e0e0; /* 添加上边框作为分隔线 */
    padding-top: 5px; /* 内边距 */
  }
  .footer-button {
    margin: 0 5px; /* 按钮间距 */
    font-size: 20px; /* 增大按钮字体 */
    padding: 1px; /* 增大按钮内边距 */
  }

</style>

<script>
export default {
  data() {
    return {
      apps: [
        { id: 1, title: '基本信息抽取', description: '针对Excel进行信息抽取。', color: '#409EFF' },
        { id: 2, title: '详勘报告抽取', description: '利用Prodigy标注抽取', color: '#67C23A' },
        { id: 3, title: '单体判据抽取', description: '针对Excel进行判据抽取', color: '#E6A23C' },
        { id: 4, title: '单体判据抽取', description: '针对报告完成判据抽取', color: '#F56C6C' },
      ],
    };
  },
  methods: {
    openCreateDialog() {
      // 打开创建对话框的逻辑
    },
  },
};
</script>
