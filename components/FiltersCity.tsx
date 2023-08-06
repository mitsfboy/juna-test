import React from 'react'
import { Select, Option } from '@material-tailwind/react'
import { regiones, comunasMetropolitanas } from '@/mocks/regionesYComunas'

const FiltersCity = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 my-20">
      <div className="w-full px-8 md:px-0 md:w-1/3">
        <Select label="Selecciona una región " color="brown">
          {regiones.map((region, index) => (
            <Option key={index} value={region}>
              {region}
            </Option>
          ))}
        </Select>
      </div>
      <div className="w-full px-8 md:px-0 md:w-1/3">
        <Select label="Selecciona una comuna" color="brown">
          {comunasMetropolitanas.map((comuna, index) => (
            <Option key={index} value={comuna}>
              {comuna}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  )
}

export default FiltersCity
