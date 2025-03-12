import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './Editor.scss';

const Editor = () => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
Inline \`code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`;
        setMarkdown(defaultMarkdown);
    }, []);

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div className="editor">
            <textarea
                id="editor"
                className="editor__textarea"
                value={markdown}
                onChange={handleChange}
            />
        </div>
    );
};

export default Editor;