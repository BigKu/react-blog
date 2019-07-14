import React from 'react';
import './EditorPreview.scss';

const EditorPreview = ({ markdown, title }) => (
    <div className="editor-preview">
        <h1 className="title">제 목</h1>
        <div>내 용</div>
    </div>
);

export default EditorPreview;
