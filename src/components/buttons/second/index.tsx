interface SecondButtonProps {
  title: string
}

export function SecondButton({ title }: SecondButtonProps) {
  return (
    <button
      type='button'
      className='flex w-full justify-center items-center text-[.75rem] desktop:text-[.875rem]  uppercase rounded-full  font-primary font-semibold py-2 px-0 desktop:p-4  transition duration-200 bg-blue-dark text-white border hover:bg-white border-blue-dark hover:text-blue-dark '
    >
      {title}
    </button>
  )
}
