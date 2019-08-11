import React, { Component } from 'react'
import { GalleryContext } from '../context/galleryContext';
import MyCard from './MyCard';
export default class GalleryList extends Component {
    static contextType = GalleryContext;

    openGalleryHandler = (id) => {
        this.props.history.push('/pictureList', {id});
    }

    render() {
        return (
            <div className="row">
                {this.context.galleries.map((gallery, index) => {
                    return (
                        <div className="col-md-4" key={index}>
                            <MyCard url={gallery.pictures[0]} click={()=>this.openGalleryHandler(gallery.id)} isGallery title={gallery.title}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
