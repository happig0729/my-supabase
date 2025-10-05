// 合同状态类型
export type ContractStatus = 'draft' | 'pending_approval' | 'signed' | 'expired' | 'terminated';

// 合同类型
export type ContractType = 'sales' | 'purchase' | 'employment' | 'service' | 'other';

// 合同相关类型定义
export type ContractParty = {
  name: string;
  role: string;
  contact?: string;
};

export type ContractTerm = {
  title: string;
  content: string;
};

export type ContractAttachment = {
  name: string;
  url: string;
  uploadedAt: string;
};

export type HistoryItem = {
  action: string;
  date: string;
  user: string;
  comment?: string;
};

// 合同模型
export interface Contract {
  id: string;
  name: string;
  contractNumber: string;
  status: ContractStatus;
  type: ContractType;
  createdAt: string;
  manager: string;
  company: string;
  amount?: number;
  startDate?: string;
  endDate?: string;
  description?: string;
  parties?: ContractParty[];
  terms?: ContractTerm[];
  attachments?: ContractAttachment[];
  history?: HistoryItem[];
}

// 模拟合同数据
export const mockContracts: Contract[] = [
  {
    id: '1',
    name: '销售合同-北京科技有限公司',
    contractNumber: 'CT2024001',
    status: 'signed',
    type: 'sales',
    createdAt: '2024-01-15',
    manager: '张经理',
    company: '北京科技有限公司',
    amount: 150000,
    startDate: '2024-01-20',
    endDate: '2025-01-19',
    description: '年度软件销售合同',
    parties: [
      { name: '我方公司', role: '销售方', contact: 'sales@ourcompany.com' },
      { name: '北京科技有限公司', role: '购买方', contact: 'purchase@bjtech.com' }
    ],
    terms: [
      { title: '付款条款', content: '合同签订后7日内支付50%，交付后支付剩余50%' },
      { title: '交付时间', content: '合同签订后30日内完成交付' },
      { title: '售后服务', content: '提供一年免费技术支持和维护' }
    ],
    attachments: [
      { name: '合同原件.pdf', url: '/attachments/contract1.pdf', uploadedAt: '2024-01-15' },
      { name: '技术方案.docx', url: '/attachments/tech_spec1.docx', uploadedAt: '2024-01-15' }
    ],
    history: [
      { action: '创建合同', date: '2024-01-10', user: '李销售' },
      { action: '审批通过', date: '2024-01-12', user: '王经理', comment: '条款已确认' },
      { action: '签署完成', date: '2024-01-15', user: '张经理' }
    ]
  },
  {
    id: '2',
    name: '采购合同-上海供应商',
    contractNumber: 'CT2024002',
    status: 'pending_approval',
    type: 'purchase',
    createdAt: '2024-02-05',
    manager: '李采购',
    company: '上海供应商有限公司',
    amount: 75000,
    startDate: '2024-02-15',
    endDate: '2024-08-14',
    description: '办公设备采购合同',
    parties: [
      { name: '我方公司', role: '购买方', contact: 'purchase@ourcompany.com' },
      { name: '上海供应商有限公司', role: '供应方', contact: 'sales@shsupplier.com' }
    ],
    history: [
      { action: '创建合同', date: '2024-02-05', user: '李采购' },
      { action: '提交审批', date: '2024-02-06', user: '李采购' }
    ]
  },
  {
    id: '3',
    name: '服务合同-广州咨询公司',
    contractNumber: 'CT2024003',
    status: 'draft',
    type: 'service',
    createdAt: '2024-02-10',
    manager: '赵项目',
    company: '广州咨询服务有限公司',
    amount: 50000,
    description: '市场调研服务合同',
    parties: [
      { name: '我方公司', role: '委托方', contact: 'project@ourcompany.com' },
      { name: '广州咨询服务有限公司', role: '服务方', contact: 'service@gzconsult.com' }
    ]
  },
  {
    id: '4',
    name: '员工劳动合同-张工程师',
    contractNumber: 'CT2024004',
    status: 'signed',
    type: 'employment',
    createdAt: '2024-01-05',
    manager: '周人事',
    company: '内部',
    startDate: '2024-01-10',
    endDate: '2027-01-09',
    description: '技术部门工程师劳动合同',
    parties: [
      { name: '我方公司', role: '雇主', contact: 'hr@ourcompany.com' },
      { name: '张工程师', role: '员工', contact: 'zhang@email.com' }
    ],
    history: [
      { action: '创建合同', date: '2024-01-03', user: '周人事' },
      { action: '审批通过', date: '2024-01-04', user: '技术总监' },
      { action: '签署完成', date: '2024-01-05', user: '张工程师' }
    ]
  },
  {
    id: '5',
    name: '合作协议-深圳合作伙伴',
    contractNumber: 'CT2024005',
    status: 'expired',
    type: 'other',
    createdAt: '2023-03-15',
    manager: '刘总监',
    company: '深圳合作伙伴有限公司',
    startDate: '2023-04-01',
    endDate: '2024-01-31',
    description: '战略合作协议',
    history: [
      { action: '创建合同', date: '2023-03-15', user: '刘总监' },
      { action: '签署完成', date: '2023-03-25', user: '双方代表' },
      { action: '合同到期', date: '2024-01-31', user: '系统' }
    ]
  },
  {
    id: '6',
    name: '销售合同-杭州客户',
    contractNumber: 'CT2024006',
    status: 'signed',
    type: 'sales',
    createdAt: '2024-02-20',
    manager: '张销售',
    company: '杭州互联网科技有限公司',
    amount: 200000,
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    description: '软件服务年度合同',
    parties: [
      { name: '我方公司', role: '服务提供方', contact: 'sales@ourcompany.com' },
      { name: '杭州互联网科技有限公司', role: '客户', contact: 'it@hztech.com' }
    ]
  },
  {
    id: '7',
    name: '租赁合同-办公场地',
    contractNumber: 'CT2024007',
    status: 'pending_approval',
    type: 'other',
    createdAt: '2024-02-25',
    manager: '孙行政',
    company: '商业地产管理有限公司',
    amount: 500000,
    startDate: '2024-04-01',
    endDate: '2026-03-31',
    description: '新办公场地两年租赁合同',
    parties: [
      { name: '我方公司', role: '承租方', contact: 'admin@ourcompany.com' },
      { name: '商业地产管理有限公司', role: '出租方', contact: 'leasing@property.com' }
    ]
  }
];

// 获取合同状态显示信息
export const getContractStatusInfo = (status: ContractStatus) => {
  switch (status) {
    case 'draft':
      return { label: '草稿', color: 'bg-gray-100 text-gray-700' };
    case 'pending_approval':
      return { label: '待审批', color: 'bg-yellow-100 text-yellow-700' };
    case 'signed':
      return { label: '已签署', color: 'bg-green-100 text-green-700' };
    case 'expired':
      return { label: '已到期', color: 'bg-red-100 text-red-700' };
    case 'terminated':
      return { label: '已终止', color: 'bg-red-100 text-red-700' };
    default:
      return { label: '未知', color: 'bg-gray-100 text-gray-700' };
  }
};

// 获取合同类型显示信息
export const getContractTypeInfo = (type: ContractType) => {
  switch (type) {
    case 'sales':
      return { label: '销售合同', color: 'bg-blue-100 text-blue-700' };
    case 'purchase':
      return { label: '采购合同', color: 'bg-purple-100 text-purple-700' };
    case 'employment':
      return { label: '劳动合同', color: 'bg-indigo-100 text-indigo-700' };
    case 'service':
      return { label: '服务合同', color: 'bg-teal-100 text-teal-700' };
    case 'other':
      return { label: '其他合同', color: 'bg-gray-100 text-gray-700' };
    default:
      return { label: '未知类型', color: 'bg-gray-100 text-gray-700' };
  }
};