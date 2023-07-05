// types
interface PrimaryButtonProps {
  title: string
  selected?: boolean
  onClick: () => void
}

export function PrimaryButton({
  title,
  selected = false,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`flex w-full min-w-[10rem] justify-center items-center text-sm rounded-full font-semibold font-primary py-2  border transition duration-100 hover:text-blue-dark ${
        !selected
          ? 'bg-white text-base-title border-base-title hover:border-blue-dark '
          : 'bg-blue-dark text-white  hover:bg-white  border-blue-dark '
      }  `}
    >
      {title}
    </button>
  )
}
