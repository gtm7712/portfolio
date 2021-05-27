import React from 'react'
import Categories from '../components/Categories'
import MenuItems from '../components/MenuItems';
import Title from '../components/Title';
import portfolios from '../components/AllPortfolios';
import { useState } from 'react';


const allCategories = ['All', ...Array.from(new Set(portfolios.map(item => item.category))).sort()];

function PortfolioPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios);
        } else {
            const filteredData  = portfolios.filter((item)=>{
                return item.category === category;
            })
            setMenuItems(filteredData);
        }
    }
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'Portfolio'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfolioPage;
