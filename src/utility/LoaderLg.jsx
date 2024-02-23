import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfileSkeleton1 = () => (
    <ContentLoader
        speed={2}
        width={1000}
        height={200}
        viewBox="0 0 600 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="20" y="20" rx="3" ry="3" width="560" height="20" />
        <rect x="20" y="50" rx="3" ry="3" width="560" height="10" />
        <rect x="20" y="70" rx="3" ry="3" width="560" height="10" />
        <rect x="20" y="90" rx="3" ry="3" width="560" height="10" />
        <rect x="20" y="120" rx="3" ry="3" width="560" height="10" />
        <rect x="20" y="140" rx="3" ry="3" width="560" height="10" />
        <rect x="20" y="160" rx="3" ry="3" width="560" height="10" />
    </ContentLoader>
);

export default ProfileSkeleton1;
