'use client'

import { useState } from 'react'
import Link from 'next/link'
import { mockContracts, getContractStatusInfo, getContractTypeInfo } from '@/lib/mock-data'

export default function ContractsCenter() {
  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedContracts, setSelectedContracts] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)

  // 根据选项卡筛选合同
  const filteredContracts = mockContracts.filter(contract => {
    if (selectedTab === 'all') return true
    if (selectedTab === 'pending') return contract.status === 'pending_approval'
    if (selectedTab === 'completed') return contract.status === 'signed'
    if (selectedTab === 'draft') return contract.status === 'draft'
    return true
  })

  // 处理全选
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedContracts([])
    } else {
      setSelectedContracts(filteredContracts.map(contract => contract.id))
    }
    setSelectAll(!selectAll)
  }

  // 处理单个选择
  const handleSelectContract = (id: string) => {
    if (selectedContracts.includes(id)) {
      setSelectedContracts(selectedContracts.filter(contractId => contractId !== id))
    } else {
      setSelectedContracts([...selectedContracts, id])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-white w-full">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#2C4A6B] flex justify-center items-center w-8 h-8 text-white">
                <i className="fa fa-file-contract"></i>
              </div>
              <span className="text-lg font-medium text-gray-900">合同管理系统</span>
            </div>

            <div className="bg-gray-50 flex items-center w-80 px-4 py-2">
              <div className="flex justify-center items-center w-4 h-4 mr-2">
                <i className="fa fa-search text-gray-500"></i>
              </div>
              <input 
                className="bg-transparent flex-1 outline-none text-sm text-gray-700" 
                type="text" 
                placeholder="搜索合同..."
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/contracts/create" 
              className="bg-[#2C4A6B] flex items-center px-4 py-2 text-white font-medium"
            >
              <div className="flex justify-center items-center w-4 h-4 mr-2">
                <i className="fa fa-plus"></i>
              </div>
              <span>新建合同</span>
            </Link>

            <div className="flex relative justify-center items-center w-8 h-8">
              <i className="fa fa-bell-o text-xl text-gray-600"></i>
              <div className="bg-red-500 flex absolute -top-1 -right-1 justify-center items-center w-4 h-4 text-xs text-white">
                <span>3</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="flex justify-center items-center w-4 h-4">
                <i className="fa fa-chevron-down text-gray-600"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <div className="flex w-full">
        {/* 侧边栏 */}
        <div className="bg-gray-50 w-64 flex-shrink-0">
          <nav className="p-6">
            <div className="flex flex-col gap-2">
              <div className="bg-[#2C4A6B] flex items-center gap-3 px-4 py-3 text-white">
                <div className="flex justify-center items-center w-4 h-4">
                  <i className="fa fa-home"></i>
                </div>
                <span className="text-sm font-medium">合同中心</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
                <div className="flex justify-center items-center w-4 h-4">
                  <i className="fa fa-file-text-o"></i>
                </div>
                <span className="text-sm">合同模板管理</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
                <div className="flex justify-center items-center w-4 h-4">
                  <i className="fa fa-sitemap"></i>
                </div>
                <span className="text-sm">审批流程管理</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
                <div className="flex justify-center items-center w-4 h-4">
                  <i className="fa fa-cog"></i>
                </div>
                <span className="text-sm">系统设置</span>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 text-gray-600">
                <div className="flex justify-center items-center w-4 h-4">
                  <i className="fa fa-line-chart"></i>
                </div>
                <span className="text-sm">数据统计</span>
              </div>
            </div>
          </nav>
        </div>

        {/* 主内容区 */}
        <div className="bg-white flex-1 overflow-x-hidden">
          <div className="p-6">
            {/* 选项卡 */}
            <div className="flex items-center gap-8 mb-6">
              <div 
                className={`flex items-center cursor-pointer ${selectedTab === 'all' ? 'border-b-2 border-[#2C4A6B] text-[#2C4A6B] font-medium' : 'text-gray-600'}`}
                onClick={() => setSelectedTab('all')}
              >
                <span className="pb-2">全部合同</span>
              </div>
              <div 
                className={`flex items-center cursor-pointer ${selectedTab === 'pending' ? 'border-b-2 border-[#2C4A6B] text-[#2C4A6B] font-medium' : 'text-gray-600'}`}
                onClick={() => setSelectedTab('pending')}
              >
                <span className="pb-2">待审批合同</span>
              </div>
              <div 
                className={`flex items-center cursor-pointer ${selectedTab === 'completed' ? 'border-b-2 border-[#2C4A6B] text-[#2C4A6B] font-medium' : 'text-gray-600'}`}
                onClick={() => setSelectedTab('completed')}
              >
                <span className="pb-2">已完成合同</span>
              </div>
              <div 
                className={`flex items-center cursor-pointer ${selectedTab === 'draft' ? 'border-b-2 border-[#2C4A6B] text-[#2C4A6B] font-medium' : 'text-gray-600'}`}
                onClick={() => setSelectedTab('draft')}
              >
                <span className="pb-2">草稿合同</span>
              </div>
            </div>

            {/* 筛选工具栏 */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-50 flex items-center px-4 py-2">
                  <span className="mr-2 text-sm text-gray-600">合同状态</span>
                  <div className="flex justify-center items-center w-4 h-4">
                    <i className="fa fa-chevron-down text-gray-500"></i>
                  </div>
                </div>

                <div className="bg-gray-50 flex items-center px-4 py-2">
                  <div className="flex justify-center items-center w-4 h-4 mr-2">
                    <i className="fa fa-calendar text-gray-500"></i>
                  </div>
                  <span className="mr-2 text-sm text-gray-600">选择日期</span>
                  <div className="flex justify-center items-center w-4 h-4">
                    <i className="fa fa-chevron-down text-gray-500"></i>
                  </div>
                </div>

                <button className="flex items-center px-4 py-2 text-[#2C4A6B]">
                  <div className="flex justify-center items-center w-4 h-4 mr-2">
                    <i className="fa fa-filter"></i>
                  </div>
                  <span className="text-sm">高级搜索</span>
                </button>
              </div>

              <button className="bg-gray-50 flex items-center px-4 py-2 text-gray-600">
                <div className="flex justify-center items-center w-4 h-4 mr-2">
                  <i className="fa fa-check-square-o"></i>
                </div>
                <span className="text-sm">批量操作</span>
              </button>
            </div>

            {/* 合同表格 */}
            <div className="bg-gray-50">
              {/* 表头 */}
              <div className="bg-gray-100 flex items-center px-6 py-4 text-sm text-gray-600 font-medium">
                <div className="w-8">
                  <input 
                    type="checkbox" 
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="bg-gray-50"
                  />
                </div>
                <div className="flex-1 min-w-0 px-4">合同名称</div>
                <div className="w-32 px-4">合同状态</div>
                <div className="w-32 px-4">合同类型</div>
                <div className="w-32 px-4">创建时间</div>
                <div className="w-32 px-4">负责人</div>
                <div className="w-40 px-4">操作</div>
              </div>

              {/* 表格内容 */}
              {filteredContracts.map(contract => {
                const statusInfo = getContractStatusInfo(contract.status)
                const typeInfo = getContractTypeInfo(contract.type)
                
                return (
                  <div 
                    key={contract.id}
                    className="bg-white flex items-center px-6 py-5 border-b border-gray-100"
                  >
                    <div className="w-8">
                      <input 
                        type="checkbox" 
                        checked={selectedContracts.includes(contract.id)}
                        onChange={() => handleSelectContract(contract.id)}
                        className="bg-gray-50"
                      />
                    </div>
                    <div className="flex-1 min-w-0 px-4">
                      <div className="mb-1 text-gray-900 font-medium">
                        <Link href={`/contracts/${contract.id}`}>
                          {contract.name}
                        </Link>
                      </div>
                      <div className="text-sm text-gray-500">合同编号: {contract.contractNumber}</div>
                    </div>
                    <div className="w-32 px-4">
                      <div className={`${statusInfo.color} inline-flex items-center px-3 py-1 text-sm`}>
                        <span>{statusInfo.label}</span>
                      </div>
                    </div>
                    <div className="w-32 px-4">
                      <div className={`${typeInfo.color} inline-flex items-center px-3 py-1 text-sm`}>
                        <span>{typeInfo.label}</span>
                      </div>
                    </div>
                    <div className="w-32 px-4">
                      <div className="text-sm text-gray-600">{contract.createdAt}</div>
                    </div>
                    <div className="w-32 px-4">
                      <div className="text-sm text-gray-600">{contract.manager}</div>
                    </div>
                    <div className="w-40 px-4">
                      <div className="flex items-center gap-2">
                        <Link 
                          href={`/contracts/${contract.id}`}
                          className="flex justify-center items-center w-8 h-8 text-[#2C4A6B]"
                        >
                          <i className="fa fa-eye"></i>
                        </Link>
                        <Link 
                          href={`/contracts/${contract.id}/edit`}
                          className="flex justify-center items-center w-8 h-8 text-[#2C4A6B]"
                        >
                          <i className="fa fa-edit"></i>
                        </Link>
                        <button className="flex justify-center items-center w-8 h-8 text-red-500">
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* 空状态 */}
              {filteredContracts.length === 0 && (
                <div className="bg-white p-8 text-center text-gray-500">
                  没有找到符合条件的合同
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}