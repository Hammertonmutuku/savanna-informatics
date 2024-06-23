// src/components/PhotoList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../../Redux/Actions/Unsplash/action";

const PhotoList = () => {
  const dispatch = useDispatch();
  const photosState = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  return (
    <div>
      {photosState.loading ? (
        <h2>Loading...</h2>
      ) : photosState.error ? (
        <h2>{photosState.error}</h2>
      ) : (
        <div>
          {photosState.photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.small}
              alt={photo.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoList;
