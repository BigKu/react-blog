import React, { Component } from 'react';

import { PageTemplate } from 'components/common';
import { Post } from 'components/post';

class Postpage extends Component {
    render() {
        return (
            <PageTemplate>
                <Post title="제목1" date="2018-02-14" body="본문 내용" />
            </PageTemplate>
        );
    }
}

export default Postpage;