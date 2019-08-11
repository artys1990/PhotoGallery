import React, { Component } from 'react'
import { GalleryContext } from '../context/galleryContext';

export default class AddGallery extends Component {
    state = {
        title:'',
        urls:[]
    }
    static contextType = GalleryContext;

    changeHandler = (event, index) => {
        if (event.target.name==="title"){
            this.setState({
                [event.target.name] : event.target.value
            })
        } else {
            const tempUrls = [...this.state.urls]
            tempUrls[index]= event.target.value;
            this.setState({
               urls:tempUrls
            })
        }
    }

    addPicFieldHandler = (event) => {
        event.preventDefault();
        this.setState({
            urls: [...this.state.urls, '']
        })
    }

    add = (event) => {
        event.preventDefault();
        const newUrls = this.state.urls.filter(Boolean) //izņem tukšās adreses
        this.context.addGallery(this.state.title, newUrls);
        this.props.history.push('/');
    }


    render() {
        return (
            <div>
                <form onSubmit={this.add}>
                    <div className="form-group">
                        <label htmlFor="galleryInput">Galerijas nosaukums:</label>
                        <input type="text" id="galleryInput" className="form-control form-control-lg mb-4" required name="title" 
                        value={this.state.name} onChange={this.changeHandler} 
                        placeholder="Galerijas nosaukums:" />
                    </div>
                    <div className="form-group"></div>
                        <label>Attēlu adreses: </label>
                        <br />
                    {
                        this.state.urls.map((url, index)=>{
                            return (
                                <div key={index}>
                                    <input className="form-control mb-2" name={index} onChange={(e)=>this.changeHandler(e, index)} value={url} placeholder="Attēla Adrese:"/>
                                </div>
                            )
                        })
                    }
                    <button className="btn btn-info"
                             onClick={this.addPicFieldHandler}
                             >Pievienot Attēlu...</button>
                    <hr/>
                    <button type="submit" className="btn btn-success">Izveidot galeriju</button>
             
                </form>
        
            </div>
        )
    }
}
