import React, { useState } from 'react';

const Editor = ({ onChange }) => {
    const [input, setInput] = useState('# Welcome to the Markdown Previewer!');

    const handleChange = (event) => {
        setInput(event.target.value);
        onChange(event.target.value);
    };

    return (
        <div>
            <h2>Editor</h2>
            <textarea
                id="editor"
                value={input}
                onChange={handleChange}
                rows="10"
                cols="50"
            />
        </div>
    );
};

export default Editor;