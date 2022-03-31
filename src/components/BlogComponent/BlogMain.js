import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import fetchPost from './../../actions';
// import image from './../../img/posts';

const BlogMain = ({ fetchPost, posts }) => {
  //   const [name, setName] = useState('');

  useEffect(() => {
    fetchPost();
  }, []);

  const singleComp = () => {
    // console.log(posts);
    return posts.map((el) => {
      return (
        <div className="BlogMain__inner" key={el._id}>
          <img
            // src={`./../../img/posts/${el.imageName}`}
            // src="StarShip.png"
            style={{
              backgroundImage: `url(./img/posts/${el.imageName})`,
            }}
            // onLoad={(e) =>
            //   (e.target.style.backgroundImage =
            //     "url('./../../img/posts/Starship.png')")
            // }
            className="BlogMain__inner--img"
          />
          <h2 className="BlogMain__inner--title">{el.title}</h2>
          <p className="BlogMain__inner--para">{el.bodyText}</p>
        </div>
      );
    });
  };

  return <div className="BlogMain">{singleComp()}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPost,
})(BlogMain);
