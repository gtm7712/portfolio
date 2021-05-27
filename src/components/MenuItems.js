import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item) => {
                    return <div className="portfolioItem" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <img src={item.icon1} alt="" onClick={() => window.open(item.link1, "_blank")} />
                                </li>
                                <li>
                                    <img src={item.icon2} alt="" onClick={() => window.open(item.link2, "_blank")} />
                                </li>
                            </ul>
                        </div>
                        <h5>{item.title}</h5>
                        <p>{item.shortdesc}</p>
                    </div>

                })
            }
        </div>
    )
}

export default MenuItems;
