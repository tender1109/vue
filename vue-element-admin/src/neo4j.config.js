export default {
  containerId: 'viz',
  neo4j: {
    serverUrl: 'bolt://202.114.205.44:7687',
    serverUser: 'neo4j',
    serverPassword: '12345678'
  },
  labels: {
    // 可以配置样式 但是我设置无效，有知道怎么设置的小伙伴吗
    // 食物图数据节点
    "历史滑坡": {
						label: "name",
						value: "pagerank",
						group: "community"
					},
    relationships: {
					INTERACTS: {
						value: "weight"
					}
				},
				initialCypher: "MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 300"
  }
}
