'use client'
// vendors
import { CSSProperties, useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'

// components
import { PrimaryButton } from '@/components/buttons/primary'

// types
type SelectType = {
  value: string
  label: string
}

type ButtonsBarOptionsType = {
  id: number
  name: string
  selected: boolean
}

interface ButtonsBarProps {
  selections: (
    sortedBy: SelectType,
    itemType: ButtonsBarOptionsType | undefined,
  ) => void
}

//  Select Options
const options = [
  { value: 'created_at', label: 'Data de Publicação' },
  { value: 'title', label: 'Título' },
]

// Buttons
const buttonsBarOptions = [
  {
    id: 1,
    name: 'Agências',
    selected: false,
  },
  {
    id: 2,
    name: 'Chatbot',
    selected: false,
  },
  {
    id: 3,
    name: 'Marketing Digital',
    selected: false,
  },
  {
    id: 4,
    name: 'Geração de Leads',
    selected: true,
  },
  {
    id: 5,
    name: 'Mídia Paga',
    selected: false,
  },
]

const customControlStyles: CSSProperties = {
  flex: 1,
  color: 'white',
  borderColor: '#1C3C50',
  borderRadius: 10,
  height: 30,
  width: 200,
}

type IsMulti = false

const selectStyle: StylesConfig<SelectType, IsMulti> = {
  control: (provided) => {
    return {
      ...provided,
      ...customControlStyles,
    }
  },
}

export function ButtonsBar({ selections }: ButtonsBarProps) {
  const [selected, setSelected] = useState<SelectType>(options[0])
  const [buttonsBar, setButtonsBar] =
    useState<ButtonsBarOptionsType[]>(buttonsBarOptions)

  function handleSelection(item: SelectType | null) {
    if (!item) return
    setSelected(item)
  }

  function handleButtonsBar(id: number | null) {
    if (!id) return

    const newButtonBar = buttonsBar.map((button) => {
      if (button.id === id) {
        button.selected = true
      }
      if (button.id !== id) {
        button.selected = false
      }

      return button
    })
    setButtonsBar(newButtonBar)
  }

  useEffect(() => {
    const buttonSelected = buttonsBar.find((e) => e.selected === true)
    selections(selected, buttonSelected)
  }, [selected, buttonsBar])

  return (
    <div className='flex   justify-between items-center w-[50%] lg:w-[80%] border-b-2 border-line-dark py-8'>
      <div className='flex w-full gap-2 justify-center items-center'>
        {buttonsBar &&
          buttonsBar.map((button) => {
            return (
              <PrimaryButton
                key={button.id}
                title={button.name}
                selected={button.selected}
                onClick={() => handleButtonsBar(button.id)}
              />
            )
          })}
      </div>
      <div className='flex w-full gap-2 justify-end items-center'>
        <span className='flex items-center font-primary font-normal text-sm'>
          Ordenar por:
        </span>
        <Select
          styles={selectStyle}
          className='flex z-30 min-w-20rem'
          options={options}
          value={selected}
          onChange={(e) => handleSelection(e)}
        />
      </div>
    </div>
  )
}
