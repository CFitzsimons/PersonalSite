'use strict';

/*
* Content is the main text of the article.  It should control formatting where
* appropreate.
*/


import React from 'react';

import {Card, CardHeader} from 'material-ui/Card';

import ContentComponent from './postComponents/content';

class BlogPost extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Card style={{margin: '5px'}}>
        <CardHeader
          title={this.props.title}
        />
        <ContentComponent content={this.props.content}/>
      </Card>
    );
  }
}

BlogPost.displayName = 'BlogPostComponent';

// Uncomment properties you need
// BlogIndexComponent.propTypes = {};
// BlogIndexComponent.defaultProps = {};

export default BlogPost;
