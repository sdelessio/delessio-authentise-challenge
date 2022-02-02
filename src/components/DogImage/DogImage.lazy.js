import React, { lazy, Suspense } from 'react';

const LazyDogImage = lazy(() => import('./DogImage'));

const DogImage = props => (
  <Suspense fallback={null}>
    <LazyDogImage {...props} />
  </Suspense>
);

export default DogImage;
