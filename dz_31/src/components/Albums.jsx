import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Albums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error('Error fetching albums: ', error));
  }, [userId]);

  return (
    <div>
      <h2>Альбоми користувача</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <Link to={`/album/${album.id}/photos`}>
              <button>Photos</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;