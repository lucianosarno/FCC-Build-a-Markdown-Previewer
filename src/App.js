import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './styles/App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('# Welcome to the Markdown Previewer\n\nType some *markdown* here!');

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="app">
      <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default App;