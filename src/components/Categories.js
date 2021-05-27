import React from 'react';

function Categories({filter, categories}) {
    return (
        <div className="categoryButtons">
            {
                categories.map((cat, i) => {
                    return <button type="button" className='btn-category' key={i} onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories
