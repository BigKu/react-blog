import React, { Component } from 'react';

import { EditorTemplate, EditorHeader, EditorPane, EditorPreview } from 'components/editor';

class Editorpage extends Component {
    render() {
        return (
            <EditorTemplate
                header={<EditorHeader />}
                editor={<EditorPane />}
                preview={<EditorPreview />}
            />
        );
    }
}

export default Editorpage;