'use strict';

import React from 'react';
import View from 'react';
import BlogPost from './BlogPost';
import Drawer from 'material-ui/Drawer';
import firebase from 'firebase';

require('styles//blog/BlogIndex.css');

class BlogIndexComponent extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    //Fetch the most recent post
    firebase.database().ref('/Blog/Post').on("value", (snapshot) => {
      console.log(snapshot.val()[Object.keys(snapshot.val())[0]]);
      this.setState({
        post: snapshot.val()[Object.keys(snapshot.val())[0]]
      });
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    if(!this.state){
      return (
        <div style={{width:'100%', height:'100%', textAlign:'center'}}>
          <h1>Fetching...</h1>
          <img src="images/gear.svg"/>

        </div>
      );
    }
    return (
      <div>

        <BlogPost content={this.state.post.content} title="Sample post" tags="one, two, three"/>
      </div>
    );
  }
}

BlogIndexComponent.displayName = 'BlogBlogIndexComponent';

// Uncomment properties you need
// BlogIndexComponent.propTypes = {};
// BlogIndexComponent.defaultProps = {};

export default BlogIndexComponent;
