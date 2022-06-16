import React from 'react'


const Pagination = (props) => {
    const { onRightClick, onLeftClick, page, totalPages } = props

  return (
    <div className='pagination'>
        <button className="pagination-arrow-left" onClick={onLeftClick}>
            <div>←</div>
        </button>
        <div>{page} - {totalPages}</div>
        <button className="pagination-arrow-right" onClick={onRightClick}>
            <div>→</div>
        </button>
    </div>
  )
}

export default Pagination