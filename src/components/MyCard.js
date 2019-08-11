import React from 'react'
export default function MyCard(props) {
    // galerijām
    let hasFooter = props.isGallery ? <div className="card-footer"><h4>{props.title}</h4></div>: '';
   
    return (
        <div className="card mb-3" style={{width: "19rem", cursor:"pointer"}} onClick={props.click}>
            <img src={props.url} className="card-img-top" alt="..."></img>
            {hasFooter}
        </div>
    )
}
