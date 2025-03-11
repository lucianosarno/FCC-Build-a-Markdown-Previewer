import React from 'react';
import marked from 'marked';

const Preview = ({ markdownText }) => {
    const getMarkdownText = () => {
        const rawMarkup = marked(markdownText, { sanitize: true });
        return { __html: rawMarkup };
    };

    return (
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    );
};

export default Preview;