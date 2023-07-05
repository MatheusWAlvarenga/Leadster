interface PrimaryButtonProps {
  title: string
}

export function PrimaryButton({ title }: PrimaryButtonProps) {
  return (
    <button
      type='button'
      className='flex w-full justify-center items-center text-sm uppercase rounded-full bg-blue-dark text-white font-primary font-semibold p-4 hover:bg-blue-standard transition duration-200'
    >
      {title}
    </button>
  )
}
