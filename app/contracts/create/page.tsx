'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ContractCreate() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    contractNumber: '',
    type: 'sales',
    company: '',
    amount: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里只是模拟提交，实际应该将数据保存到数据库
    console.log('提交的合同数据:', formData)
    // 提交后跳转到合同中心
    router.push('/contracts')
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
          </div>

          <div className="flex items-center gap-4">
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
              <Link href="/contracts" className="flex items-center gap-3 px-4 py-3 text-gray-600">
                <div className="flex justify-center items-center w-4 h-4">
                  <i className="fa fa-home"></i>
                </div>
                <span className="text-sm">合同中心</span>
              </Link>

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
            <div className="mb-6">
              <h1 className="text-2xl font-medium text-gray-900">创建新合同</h1>
              <p className="text-gray-500 mt-1">填写以下信息创建新的合同</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl">
              <div className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">合同名称 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">合同编号 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="contractNumber"
                      value={formData.contractNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">合同类型 <span className="text-red-500">*</span></label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="sales">销售合同</option>
                      <option value="purchase">采购合同</option>
                      <option value="employment">劳动合同</option>
                      <option value="service">服务合同</option>
                      <option value="other">其他合同</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">对方公司名称 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">合同金额</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">开始日期</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">结束日期</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">合同描述</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <button
                    type="submit"
                    className="bg-[#2C4A6B] px-6 py-2 text-white font-medium rounded-md"
                  >
                    创建合同
                  </button>
                  <Link
                    href="/contracts"
                    className="px-6 py-2 text-gray-600 font-medium border border-gray-300 rounded-md"
                  >
                    取消
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}