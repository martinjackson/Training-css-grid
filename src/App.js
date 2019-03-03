
// App.js created @ 34:01
// paused at @ 01:02:06

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

import './styles.css';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=> fetchImages(), []);   // only run once since [] never changes

  function fetchImages(page=1,take=20) {
    fetch(`/api/photos?page=${page}&take=${take}`)
      .then( resp => resp.json())
      .then(data => {
        const newImages = [ ...images, ...data];
        setImages(newImages)
      });
  }

  return <StyledApp>
    <InfiniteScroll
      dataLength={images.length}
      next={() => {
        fetchImages(page+1, 5);
        setPage(page+1);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      >
      <ImageGrid className='image-grid'>
      {images.map((image, index) => (
          <div className='image-item' key={index} >
            <img src={image.urls.regular} />
          </div>
        ))}
      </ImageGrid>
    </InfiniteScroll>
  </StyledApp>;

}

const StyledApp = styled.div`
  background: #4DDDFF;
  padding: 30px;
`;

const ImageGrid = styled.div`

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);

  .image-item:nth-child(5n) {
      grid-column-end: span 2;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default App;