import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos: ', error));
  }, [albumId]);

  return (
    <div>
      <h2>Фото альбому</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photos;