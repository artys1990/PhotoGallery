import React, { Component } from 'react'
import MyCard from './MyCard';
import { GalleryContext } from '../context/galleryContext';
import MyCarousel from './MyCarousel';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import deleteIcon from '../icons/delete.svg';

export default class PictureList extends Component {
    static contextType = GalleryContext;
    state = {
        showCarousel: false,
        deleteModal: false,
        deletePictureModal: false,
        imgForDel:{
            galleryId:'',
            picIndex:''
        },
        startIndex:null
    }

    openCarouselHandler= () => { //atver modal
        this.setState({
            showCarousel: !this.state.showCarousel,
        })
    }

    askDeleteHandler = () => { //atver modal galeriju dzēšanai
        this.setState({
            deleteModal: !this.state.deleteModal
        })
    }
    deleteGalleryHandler = (id) => { //dzēš galeriju
        if (id){
            this.context.deleteGallery(id);
            this.props.history.push('/');
        }

    }
    askPictureDeleteHandler= () => { //atver nodal priekš attēla dzēšanas
        this.setState({
            deletePictureModal: !this.state.deletePictureModal
        })
    }

    deletePictureHandler = () => { //dzēš attēlu no galerijas
        this.context.deletePicture(this.state.imgForDel);
        this.askPictureDeleteHandler();
    }
    

    render() {
        const gallery = this.context.galleries.find( gallery => gallery.id ===  this.props.location.state.id);
        const carousel = <MyCarousel images={gallery.pictures} startIndex={this.state.startIndex}/>;
        return (
            <div style={{textAlign:"center"}}>
                <h1>{gallery.title}</h1>
                <button className="btn btn-danger" onClick={this.askDeleteHandler}>Dzēst galeriju</button>
                <div className="row mt-3">
                    {gallery.pictures.map((picture, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div>
                                    <img src={deleteIcon} className="deleteIcon" alt="delete" onClick={() => {this.askPictureDeleteHandler(); this.setState({imgForDel:{galleryId:gallery.id, picIndex: index}})}} />
                                    <MyCard url={picture} isPicture click={() => {this.setState({startIndex:index}); this.openCarouselHandler()}}/>
                                </div>
                            </div>
                        )
                    })}
                    {/* skatīt bildi */}
                    <Modal isOpen={this.state.showCarousel} fade={false} toggle={this.openCarouselHandler} className={this.props.className}>
                        {carousel}
                    </Modal>
                    {/* dzēst galeriju */}
                    <Modal isOpen={this.state.deleteModal} fade={false} toggle={this.askDeleteHandler}>
                        <ModalHeader>{gallery.title} dzēšana</ModalHeader>
                        <ModalBody>Vai tiešām vēlaties dzēst galeriju?</ModalBody>
                        <ModalFooter>
                            <button className="btn btn-danger" onClick={() => this.deleteGalleryHandler(this.props.location.state.id)}>Apstiprināt</button>
                            <button className="btn btn-secondary" onClick={this.askDeleteHandler}>Atcelt</button>
                        </ModalFooter>
                    </Modal>
                    {/* Dzēst bildi */}
                    <Modal isOpen={this.state.deletePictureModal} fade={false} toggle={this.askPictureDeleteHandler}>
                        <ModalHeader>Attēla dzēšana</ModalHeader>
                        <ModalBody>Vai tiešām vēlaties dzēst attēlu?</ModalBody>
                        <ModalFooter>
                            <button className="btn btn-danger" onClick={this.deletePictureHandler}>Apstiprināt</button>
                            <button className="btn btn-secondary" onClick={this.askPictureDeleteHandler}>Atcelt</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
