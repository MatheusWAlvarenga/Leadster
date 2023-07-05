interface SecondButtonProps {
  title: string
}

export function SecondButton({ title }: SecondButtonProps) {
  return (
    <button
      type='button'
      className='flex w-full justify-center items-center text-sm uppercase rounded-full  font-primary font-semibold p-4  transition duration-200 bg-blue-dark text-white border hover:bg-white border-blue-dark hover:text-blue-dark '
    >
      {title}
    </button>
  )
}
