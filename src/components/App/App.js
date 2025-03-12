import React, { useState } from 'react';
import { marked } from 'marked';

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[Link](https://www.example.com)
Inline \`code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        style={{ width: '100%', height: '200px' }}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}
      />
    </div>
  );
};

export default App;