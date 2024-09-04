import React from 'react'

export const Chip = ({ children }) => {
    return (
        <div className='rounded-full border-gray-200 border-2 py-1 px-3'>
            { children }
        </div>
    )
}
