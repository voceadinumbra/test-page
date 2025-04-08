import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'

const skipOptions = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:31.302',
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:31.481',
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 375,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:31.65',
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 400,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:31.829',
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 439,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:32.003',
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:32.185',
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:46.897146',
    updated_at: '2025-04-07T14:29:32.364',
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:40.344435',
    updated_at: '2025-04-07T14:29:30.95',
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: 'NR32',
    area: '',
    forbidden: false,
    created_at: '2025-04-03T13:51:40.344435',
    updated_at: '2025-04-07T14:29:31.137',
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
]

export default function Home() {
  
  const [selectedId, setSelectedId] = useState(null);
  const selectedSkip = skipOptions.find((skip) => skip.id === selectedId);
  

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pb-32 pt-16">
        <h2 className="text-2xl font-bold text-center mb-4">
          Choose Your Skip Size
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Select the skip size that best suits your needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skipOptions.map((skip) => {



            const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);
            const isSelected = selectedId === skip.id;

            return (
              <div
                key={skip.id}
                onClick={() => setSelectedId(skip.id)}
                className={`group relative rounded-lg border-2 p-4 md:p-6 transition-all
        border-[#2A2A2A] hover:border-[#0037C1]/50
        bg-[#1C1C1C] text-white cursor-pointer cursor-pointer transition-transform ${
                  isSelected ? 'border-[#0037C1]' : 'border-transparent'
                }`}
              >
                <Card className={`hover:shadow-lg transition`}>
                  <CardContent className="p-6">


                  
                  
                  
                  
                  
          
                <div className="relative">

                  <img src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&amp;w=800" alt="4 Yard Skip" className="w-full h-36 md:h-48 object-cover rounded-md mb-4" />

                  <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">{skip.size} Yards</div>

                  <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>

                </div>

                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{skip.size}  Yard Skip</h3>

                <p className="text-sm text-gray-400 mb-4 md:mb-6">{skip.hire_period_days} day hire period</p>

                <div className="flex justify-between items-center mb-4">

                  <div>

                    <span className="text-xl md:text-2xl font-bold text-[#0037C1]">{totalPrice / (skip.hire_period_days/7)}£</span>

                    <span className="text-sm text-gray-400 ml-2">per week</span>

                  </div>

                </div>        
              
          




                    
                    
                    <button
                      className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
          bg-[#0037C1] text-white hover:bg-[#0037C1] hover:border-[#0037C1]
          false ${isSelected ? 'bg-[#0037C1] text-white cursor-default' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                      onClick={() => {
                        if (!isSelected) setSelectedId(skip.id)
                      }}
                    >
                      {isSelected ? 'Selected' : 'Select This Skip'}
                    </button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>


      {selectedSkip && (
      <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:hidden">            
            <div className="grid grid-cols-2 gap-3">
              <button className="btn-secondary w-full">Back</button>
              <button className="btn-primary w-full">Continue</button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-6">              
              <div>
                <span className="text-2xl font-bold text-[#0037C1]">{(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2)}£</span>
                <span className="text-sm text-gray-400 ml-2">{selectedSkip.hire_period_days} day hire</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary">Back</button>
              <button className="btn-primary flex items-center gap-2">
                Continue
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      )}

    </div>
  )
}
