<template>
  <div class="app">
    <div id="viz"></div>
    Cypher query: <textarea rows="4" cols="50" v-model="cypher"></textarea><br>
    <input type="button" value="Submit" @click="reload" id="reload">
    <input type="button" value="Stabilize" @click="stabilize" id="stabilize">
      <el-button type="primary" icon="el-icon-check" @click="draw">获取样图</el-button>
  </div>
</template>

<script src="https://unpkg.com/neovis.js@2.0.2"></script>

<script
            src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous"></script>

<!--    <script src="https://cdn.neo4jlabs.com/neovis.js/master/neovis.js"></script>-->
<script>
// import NeoVis from '@/static/neovis.js';
export default {
  data() {
    return {
      viz: null,
      cypher: '',
    };
  },
  mounted() {
       // this.draw();
       // this.$nextTick(() => { this.draw(); })
     },
  methods: {
    draw(){
      const config = {
        containerId: "viz",
        neo4j: {
          serverUrl: "bolt://202.114.205.44:7687",
          serverUser: "neo4j",
          serverPassword: "12345678"
        },
        labels: {
          "历史滑坡": {
            label: "name",
            value: "pagerank",
            group: "community"
          },
        },
        relationships: {
          INTERACTS: {
            value: "weight"
          }
        },
        initialCypher: "MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 300"
      };

      this.viz = new NeoVis.default(config);
      this.viz.render();
      console.log(this.viz);
    },
    reload() {
      if (this.cypher.length > 3) {
        this.viz.renderWithCypher(this.cypher);
      } else {
        console.log("reload");
        this.viz.reload();
      }
    },
    stabilize() {
      this.viz.stabilize();
    }
  }
};
</script>

<style scoped>
html, body {
  font: 16pt arial;
}

#viz {
  width: 900px;
  height: 700px;
  border: 1px solid lightgray;
  font: 22pt arial;
}
</style>
