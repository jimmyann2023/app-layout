// 开发环境地址
const config: Record<string, string> = {
  vite: 'http://localhost:5001',
  vue2: 'http://localhost:4008',
  vue3: 'http://localhost:4009',

  PM: 'http://localhost:5002', // 项目管理 project management
  CM: 'http://localhost:5003', // 工艺管理 craft management

  sale: 'http://localhost:6006', // 销售中心 sales center
  purchase: 'http://localhost:5007', // 采购管理 purchase managemen
  material: 'http://localhost:6008', // 物料管理 material managemen
  warehouse: 'http://localhost:5009', // 仓库管理 warehouse managemen
  mouldBook: 'http://localhost:5010', // 模具台账 mould book
  deviceBook: 'http://localhost:5011', // 设备台账 device book
  outsourcing: 'http://localhost:5005', // 外协中心 Outsourcing center
  // supplyChain: 'http://localhost:5011', // 供应链 supply chain
  supplyChain: 'http://localhost:4009', // 供应链 supply chain

  productionPlan: 'http://localhost:5012', // 生产排程 production plan
  executionCraft: 'http://localhost:5004', // 工艺执行 execution Craft
  accountManagement: 'http://localhost:5013', // 账户管理 account managemen
};

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin;
  });
}

export { config };
