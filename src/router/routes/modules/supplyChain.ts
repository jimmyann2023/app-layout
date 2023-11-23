import { t } from '@/hooks/web/useI18n';
import { getParentLayout, LAYOUT } from '@/router/constant';
import type { AppRouteModule } from '@/router/types';

// 防止路由组件重名导致失效
const sellingModule = 'selling-';
const purchasingModule = 'purchasing-';
const orderModule = 'order-';
const receiptGoodModule = 'receiptGood-';
const returnGoodsModule = 'returnGoods-';
const supplierModule = 'supplier-';
const settingsModule = 'settings-';
const shipModule = 'ship-';
const restockGoodsModule = 'restockGoods-';
const SreconciliationModule = ' Sreconciliation-';
const customerModule = 'customer-';
const microAppCompoent = () => import('@/views/supplyChain/index.vue');
/**
 * 四级路由
 */

// 销售中心 --> 订单管理
const SorderRoute: AppRouteModule[] = [
  {
    path: 'list',
    name: sellingModule + 'List',
    component: getParentLayout(sellingModule + 'List'),
    meta: {
      title: t('routes.supplychain.selling.list'),
    },
  },
  {
    path: 'applyClosed',
    name: sellingModule + 'applyClosed',
    component: getParentLayout(sellingModule + 'List'),
    meta: {
      title: t('routes.supplychain.selling.applyClosed'),
    },
  },
];
// 销售中心 --> 发货管理
const shipRoute: AppRouteModule[] = [
  {
    path: 'toBeDeliveredList',
    name: sellingModule + shipModule + 'toBeDeliveredList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.shipGoods.toBeDeliveredList'),
    },
  },
  {
    path: 'toBeDelivered-records',
    name: sellingModule + shipModule + 'Records',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.shipGoods.toBeDeliveredRecords'),
    },
  },
  {
    path: 'demandSide-aq-records',
    name: sellingModule + shipModule + 'DemandSideAQ',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.shipGoods.DemandSideAQ'),
    },
  },
  {
    path: 'demandSide-wh-records',
    name: sellingModule + shipModule + 'DemandSideWH',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.shipGoods.DemandSideWH'),
    },
  },
];
// 销售中心 --> 补货管理
const restockGoodsRoute: AppRouteModule[] = [
  {
    path: 'return-list',
    name: sellingModule + restockGoodsModule + 'returnList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.restockGoods.returnList'),
    },
  },
  {
    path: 'closed-records',
    name: sellingModule + restockGoodsModule + 'closedRecords',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.restockGoods.closedRecords'),
    },
  },
  {
    path: 'restock-records',
    name: sellingModule + restockGoodsModule + 'restockRecords',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.restockGoods.restockRecords'),
    },
  },
];
// 销售中心 --> 对账管理
const SreconciliationRoute: AppRouteModule[] = [
  {
    path: 'list',
    name: sellingModule + SreconciliationModule + 'List',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.Reconciliation.list'),
    },
  },
];

// 销售中心 --> 客户管理
const customerRoute: AppRouteModule[] = [
  {
    path: 'isMy',
    name: sellingModule + customerModule + 'IsMy',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.selling.customer.IsMy'),
    },
  },
];

// 采购中心 --> 订单管理
const orderRoute: AppRouteModule[] = [
  {
    path: 'add',
    name: purchasingModule + orderModule + 'NewOrder',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.order.add'),
    },
  },
  {
    path: 'draf',
    name: purchasingModule + orderModule + 'Draf',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.order.draf'),
    },
  },
  {
    path: 'list',
    name: purchasingModule + orderModule + 'OrderList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.order.list'),
    },
  },
  {
    path: 'confim',
    name: purchasingModule + orderModule + 'Confim',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.order.confim'),
    },
  },
];
// 采购中心 --> 收货管理
const receiptGoodsRoute: AppRouteModule[] = [
  {
    path: 'list',
    name: purchasingModule + receiptGoodModule + 'receiptGoodsList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReceiptGoods.list'),
    },
  },
  {
    path: 'aq-await',
    name: purchasingModule + receiptGoodModule + 'QualityInspectionAwaiting',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReceiptGoods.AwaitingQualityInspection'),
    },
  },
  {
    path: 'aq-records',
    name: purchasingModule + receiptGoodModule + 'QualityInspectionRecords',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReceiptGoods.QualityInspectionRecords'),
    },
  },
  {
    path: 'to-be-stocked-list',
    name: purchasingModule + receiptGoodModule + 'ToBeStockedList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReceiptGoods.ToBeStockedList'),
    },
  },
];
// 采购中心 --> 退货管理
const returnGoodsRoute: AppRouteModule[] = [
  {
    path: 'add',
    name: purchasingModule + returnGoodsModule + 'AddReturnGood',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReturnGoods.add'),
    },
  },
  {
    path: 'records',
    name: purchasingModule + returnGoodsModule + 'ReturnGoodRecords',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReturnGoods.records'),
    },
  },
];
// 采购中心 --> 供应商管理
const supplierRoute: AppRouteModule[] = [
  {
    path: 'isMy',
    name: purchasingModule + supplierModule + 'IsMySupplier',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.supplier.IsMy'),
    },
  },
  {
    path: 'list',
    name: purchasingModule + supplierModule + 'SupplierList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.supplier.list'),
    },
  },
];
// 采购中心 --> 对账管理
const reconciliationRoute: AppRouteModule[] = [
  {
    path: 'settings',
    name: purchasingModule + 'settingDate',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.Reconciliation.settings'),
    },
  },
  {
    path: 'list',
    name: purchasingModule + 'reconciliationList',
    component: microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.Reconciliation.list'),
    },
  },
];
// 采购中心 --> 设置
const settingsRoute: AppRouteModule[] = [
  {
    path: 'tt',
    name: purchasingModule + settingsModule + 'TermsTransaction',
    component: () => microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.settings.TermsTransaction'),
    },
  },
  {
    path: 'orderProcess',
    name: purchasingModule + settingsModule + 'OrderProcess',
    component: () => microAppCompoent,
    meta: {
      title: t('routes.supplychain.purchasingCenter.settings.OrderProcess'),
    },
  },
];

/**
 * 三级路由
 * 采购中心:[订单管理,收货管理,退货管理,供应商管理,对账管理,设置]
 * 销售中心:[订单管理,发货管理,补货管理,对账管理,客户管理]
 */

// 采购中心
const purchasingChildRoute: AppRouteModule[] = [
  {
    path: 'order',
    name: purchasingModule + 'Order',
    component: getParentLayout(purchasingModule + 'Order'),
    meta: {
      title: t('routes.supplychain.purchasingCenter.order.order'),
    },
    children: [...orderRoute],
  },
  {
    path: 'receiptGoods',
    name: purchasingModule + 'ReceiptGoods',
    component: getParentLayout(purchasingModule + 'ReceiptGoods'),
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReceiptGoods.Goods'),
    },
    children: [...receiptGoodsRoute],
  },
  {
    path: 'returnGoods',
    name: purchasingModule + 'ReturnGoods',
    component: getParentLayout(purchasingModule + 'ReturnGoods'),
    meta: {
      title: t('routes.supplychain.purchasingCenter.ReturnGoods.Goods'),
    },
    children: [...returnGoodsRoute],
  },
  {
    path: 'supplier',
    name: purchasingModule + 'Supplier',
    component: getParentLayout(purchasingModule + 'Supplier'),
    meta: {
      title: t('routes.supplychain.purchasingCenter.supplier.supplier'),
    },
    children: [...supplierRoute],
  },
  {
    path: 'reconciliation',
    name: purchasingModule + 'Reconciliation',
    component: getParentLayout(purchasingModule + 'Reconciliation'),
    meta: {
      title: t('routes.supplychain.purchasingCenter.Reconciliation.Reconciliation'),
    },
    children: [...reconciliationRoute],
  },
  {
    path: 'settings',
    name: purchasingModule + 'Settings',
    component: getParentLayout(purchasingModule + 'Settings'),
    meta: {
      title: t('routes.supplychain.purchasingCenter.settings.settings'),
    },
    children: [...settingsRoute],
  },
];

// 销售中心
const sellingChildRoute: AppRouteModule[] = [
  {
    path: 'order',
    name: sellingModule + 'Order',
    component: getParentLayout(sellingModule + 'Order'),
    meta: {
      title: t('routes.supplychain.selling.order'),
    },
    children: [...SorderRoute],
  },
  {
    path: 'shipGoods',
    name: sellingModule + 'shipGoods',
    component: getParentLayout(sellingModule + 'shipGoods'),
    meta: {
      title: t('routes.supplychain.selling.shipGoods.shipGoods'),
    },
    children: [...shipRoute],
  },

  {
    path: 'restockGoods',
    name: sellingModule + 'restockGoods',
    component: getParentLayout(sellingModule + 'restockGoods'),
    meta: {
      title: t('routes.supplychain.selling.restockGoods.restockGoods'),
    },
    children: [...restockGoodsRoute],
  },
  {
    path: 'reconciliation',
    name: sellingModule + 'Reconciliation',
    component: getParentLayout(sellingModule + 'Reconciliation'),
    meta: {
      title: t('routes.supplychain.selling.Reconciliation.Reconciliation'),
    },
    children: [...SreconciliationRoute],
  },
  {
    path: 'customer',
    name: sellingModule + 'customer',
    component: getParentLayout(sellingModule + 'customer'),
    meta: {
      title: t('routes.supplychain.selling.customer.customer'),
    },
    children: [...customerRoute],
  },
];

/**
 * 二级路由
 */
// 销售中心
const sellingRoute: AppRouteModule[] = [
  {
    path: 'sellingcentre',
    name: 'SellingCentre',
    component: getParentLayout('SellingCentre'),
    meta: {
      icon: 'ic:baseline-point-of-sale',
      // icon: 'sourcing|svg',
      title: t('routes.supplychain.sellingcentre'),
    },
    redirect: '/app-supplyChain/sellingcentre/order',
    children: [...sellingChildRoute],
  },
];

// 采购中心 二级路由
const purchasingRoute: AppRouteModule[] = [
  {
    path: 'purchasingCenter',
    name: 'PurchasingCenter',
    component: getParentLayout('PurchasingCenter'),
    meta: {
      // icon: 'icons8:buy',
      icon: 'mdi:cart-sale',
      // icon: 'purchasingCenter|svg',
      title: t('routes.supplychain.purchasingCenter.purchasingCenter'),
    },
    redirect: '/app-supplyChain/purchasingCenter/order',
    children: [...purchasingChildRoute],
  },
];

// 供应链
const supplyChain: AppRouteModule = {
  path: '/app-supplyChain',
  name: 'SupplyChain',
  component: LAYOUT,
  redirect: '/app-supplyChain/purchasingCenter',
  meta: {
    orderNo: 100,
    // https://icon-sets.iconify.design/icon-park-outline/blockchain/
    icon: 'icon-park-outline:blockchain',
    // icon: 'supplyChain|svg', // 路径在 assets/icons
    title: t('routes.supplychain.supplychian'),
  },

  children: [...purchasingRoute, ...sellingRoute],
};

export default supplyChain;
