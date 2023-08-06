import { Fragment, useState } from "react"
import { filterOptions } from "@/mocks/filterOptions"
import { useStores } from "@/hooks/useStore"

const Filters = () => {
  const { obtenerEspecialidad } = useStores()
  const [active, setActive] = useState("todos")

  const handleButtonClick = (value: string) => {
    obtenerEspecialidad(value)
    setActive(value)
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 my-20 text-brown-700">
      {filterOptions.map((option) => (
        <Fragment key={option.value === "todos" ? "todos" : option.value}>
          <button
            key={option.value}
            onClick={() => handleButtonClick(option.value)}
            className={`flex-col items-center justify-center w-40 text-center rounded-lg flex space-y-1 bg-[#f8f8f8] shadow-md hover:bg-brown-600 hover:text-white transition-all mt-4 md:10 p-3 ${
              active === option.value ? "bg-brown-600 text-white" : ""
            }`}
          >
            <div className="mb-2 p-2">{option.icon}</div>
            <div className="font-semibold text-sm">{option.label}</div>
          </button>
        </Fragment>
      ))}
    </div>
  )
}

export default Filters
