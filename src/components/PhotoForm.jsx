import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Photo from './Photo';
import './PhotoForm.css'
import PhotoListPhoto from './Styles';

class PhotoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoArray: [],
            photoID: 0,
        }
    }

    _loadPhotos = async () => {
        const photoData = await fetch('https://picsum.photos/v2/list?limit=100').then(response => response.json());
        return photoData;
    }

    async componentDidMount() {
        const apiData = await this._loadPhotos();
        this.setState({
            photoArray: apiData,
        });
    }

    _handleClick = (photoId) => {
        this.setState({
            photoID: photoId,
        });
    }

    render () {
        const { photoArray } = this.state;
        const photos = photoArray.sort(() => Math.random() - 0.5);
        return(
            <>
                <Route exact path='/'>
                    <ul>
                        {!!photos ? (
                            photos.map( photo => {
                                return (
                                    <div key={photo.id}>
                                        <li >
                                            <Link to={`/photo/${photo.id}`}>
                                                <PhotoListPhoto src={photo.download_url} alt={photo.author}></PhotoListPhoto>
                                            </Link>
                                        </li>
                                    </div>
                                )
                            })
                        ) : (
                            <p>Loading photos...</p>
                            )}
                    </ul>
                </Route>
                <Route path='/photo/:photoid'>
                    <Photo >
                    </Photo>
                </Route>
            </>
        )
    }

}

export default PhotoForm;