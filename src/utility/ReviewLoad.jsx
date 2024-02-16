import React from 'react';
import ContentLoader from 'react-content-loader';

const ReviewSkeleton = () => (
  <ContentLoader
    speed={2}
    width={600}
    height={100}
    viewBox="0 0 600 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="70" height="70" />
    <rect x="80" y="17" rx="3" ry="3" width="250" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="400" height="10" />
    <rect x="80" y="55" rx="3" ry="3" width="200" height="10" />
  </ContentLoader>
);

export default ReviewSkeleton;
