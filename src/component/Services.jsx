import React from 'react'
import ServicesCard from '../Cards/ServicesCard'
import {services}from '../Utils/Services'

const Services = ({type}) => {
  const filteredServices = services.filter(service => service.type === type);
  console.log(filteredServices)
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-16">
      <div className="w-full bg-zinc-700 text-white py-6">
        <h1 className="font-display text-4xl font-bold text-center">{type === 1 ? 'Men Services' : 'Women Services'}</h1>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-center">
          {filteredServices.map((i) => (
            <div key={i.id} className="w-full lg:w-1/3 xl:w-1/4 p-2">
              <ServicesCard {...i} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services