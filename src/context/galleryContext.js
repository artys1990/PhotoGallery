import React, { Component, createContext } from 'react';

export const GalleryContext = createContext();
export default class GalleryProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            galleries: [{
                id: "1",
                title: "My Test",
                pictures:["https://images.unsplash.com/photo-1564414872027-5ae7dac9a76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
                    "https://images.unsplash.com/photo-1564504358774-0b889fbd6252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1564496448875-9a73a6e81bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565377024937-5e947136c50c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1562184552-11a7e638b6f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565378435217-e4a764b19d0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565460833118-dfaf15aa2b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                ]
            }, {
                id: "2",
                title: "Galerija",
                pictures:["https://images.unsplash.com/flagged/photo-1564373020761-b9e8ab5c03b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                    "https://images.unsplash.com/photo-1565476599063-a9b93037c7f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565443492615-7e3d2324d925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565450430875-a3246c07caaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565450989532-eb59f3fb156a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                ]
                
            },{
                id:"3",
                title: "Dažādi",
                pictures:["https://images.unsplash.com/photo-1565450685829-e4b8308e3ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565450644852-abf707167960?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
                    "https://images.unsplash.com/photo-1565462900119-a16b91dead9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                ]
            },{
            id: "4",
                title: "Citi",
                pictures:["https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"]   
            }
        ]
        }
        this.addGallery = this.addGallery.bind(this)
        this.deleteGallery = this.deleteGallery.bind(this);
    }

    addGallery = (title, urls) => {
        this.setState(prevState => ({
            galleries: [...prevState.galleries, {id: new Date().getTime(), 
                title:title,
                pictures:urls
            }]
        }))
    }
    deleteGallery = (id) => {
        const removeIndex = this.state.galleries.map((gallery) => { 
            return gallery.id}).indexOf(id);
         
        const updated = [...this.state.galleries]
            updated.splice(removeIndex,1)
        this.setState({
            galleries: updated
        })
    }

    deletePicture = (delPic) => {
        const getGallery = this.state.galleries.map((gallery) => { 
            if (gallery.id === delPic["galleryId"]) {
                gallery.pictures.splice(delPic["picIndex"], 1)
            }
            return gallery;
        })
        this.setState({
            galleries: getGallery
        })
    }

    render() {
        return (
            <GalleryContext.Provider value={{...this.state, 
                                    addGallery:this.addGallery,
                                    deleteGallery: this.deleteGallery,
                                    deletePicture: this.deletePicture
                            }}>
                {this.props.children}
            </GalleryContext.Provider>
        );
    }
}