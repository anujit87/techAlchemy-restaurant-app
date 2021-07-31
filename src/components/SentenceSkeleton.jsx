import React from 'react';

const SentenceSkeleton = ({ height, className, width }) => {
    return (
        <div>
            <div className={`inner-card animate-pulse ${className}`} style={{ height, width }}> </div>
        </div>
    );
};

export default SentenceSkeleton;
