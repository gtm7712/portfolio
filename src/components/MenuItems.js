import React from 'react'
import { Link } from 'react-router-dom'

function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item) => {
                    return <div className="portfolioItem" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                {
                                    item.links.map((linkGroup) => {
                                        return <li key={linkGroup.id}>
                                            <div className="icons">
                                                <Link className="icon-link" onClick={() => window.open(linkGroup.link, "_blank")}>
                                                    {linkGroup.icon}
                                                </Link>
                                            </div>
                                            {/*<img src={linkGroup.icon} alt="" onClick={() => window.open(linkGroup.link, "_blank")} />*/}
                                        </li>
                                    })
                                }
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
