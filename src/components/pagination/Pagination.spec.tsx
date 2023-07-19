// vendors
import { render } from '@testing-library/react'

// components
import { Pagination } from './'

describe('Pagination Component', () => {
  it('should render the start and end summarized', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const { getAllByText } = render(
      <Pagination
        totalPages={list}
        currentPage={8}
        handleCurrentPage={(item: number, scroll: boolean) => {}}
      />,
    )

    expect(getAllByText('...')[0]).toBeInTheDocument()
    expect(getAllByText('...')[1]).toBeInTheDocument()
  })

  it('should render the end summarized', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const { getByText } = render(
      <Pagination
        totalPages={list}
        currentPage={1}
        handleCurrentPage={(item: number, scroll: boolean) => {}}
      />,
    )

    expect(getByText('...')).toBeInTheDocument()
  })

  it('should render the start summarized', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const { getByText } = render(
      <Pagination
        totalPages={list}
        currentPage={14}
        handleCurrentPage={(item: number, scroll: boolean) => {}}
      />,
    )

    expect(getByText('...')).toBeInTheDocument()
  })
})
