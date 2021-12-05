import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    }
  }, []);
  console.log('RELATED POSTS: ', relatedPosts);
  return <div>Post widget</div>;
};

export default PostWidget;
