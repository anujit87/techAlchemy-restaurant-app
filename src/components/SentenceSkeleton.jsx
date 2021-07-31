import React from 'react';

const SentenceSkeleton = ({ height, className }) => {
    return (
        <div>
            <div className={`inner-card animate-pulse ${className}`} style={{ height }}> </div>
        </div>
    );
};

export default SentenceSkeleton;
