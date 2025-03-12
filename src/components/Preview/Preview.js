import React from 'react';
import PropTypes from 'prop-types';
import './Preview.scss';

const Preview = ({ markdown }) => {
    return (
        <div className="preview">
            <div
                id="preview"
                className="preview__content"
                dangerouslySetInnerHTML={{ __html: markdown }}
            />
        </div>
    );
};

Preview.propTypes = {
    markdown: PropTypes.string.isRequired,
};

export default Preview;