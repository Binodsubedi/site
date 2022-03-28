import React from 'react';

const Extras = () => {
  return (
    <div className="AbExtras">
      <h3 className="AbExtras__title">Extras</h3>
      <div className="AbExtras__Books">
        <h4 className="AbExtras__Books--title">Books</h4>
        <div className="AbExtras__Books--content">
          <div className="AbExtras__Books--content__card AbExtras__Books-1">
            <div className="AbExtras__Book-1__front AbExtras__Book-front"></div>
            <div className="AbExtras__Book-1__back AbExtras__Book-back">
              <a href="https://www.amazon.com/VISUALIZATION-REALITY-RELATIVISTIC-Binod-subedi-ebook/dp/B07Z5RQ9X3/ref=sr_1_1?crid=RQLBUD7802E1&keywords=visualization+of+reality+relativistic&qid=1648462565&sprefix=visualization+of+reality+relativistic%2Caps%2C512&sr=8-1">
                <p>Visualization of Reality:</p>
                <p>Click to redirect</p>
              </a>
            </div>
          </div>
          <div className="AbExtras__Books--content__card AbExtras__Books-2">
            <div className="AbExtras__Book-2__front AbExtras__Book-front"></div>
            <div className="AbExtras__Book-2__back AbExtras__Book-back">
              <p>Comming Soon!!</p>
              <p>A Book on Time</p>
            </div>
          </div>
          <div className="AbExtras__Books--content__card AbExtras__Books-3">
            <div className="AbExtras__Book-3__front AbExtras__Book-front"></div>
            <div className="AbExtras__Book-3__back AbExtras__Book-back">
              <p>Comming Soon!!</p>
              <p>A Sci-fi Book</p>
            </div>
          </div>
        </div>
      </div>
      <div className="AbExtras__Interests">
        <h4 className="AbExtras__Interests--title">Interests</h4>
        <div className="AbExtras__Interests--content">
          <img className="AbExtras__Interests--content__circle AbExtras__Interests--img-1" />
          <img className="AbExtras__Interests--content__circle AbExtras__Interests--img-2" />
          <img className="AbExtras__Interests--content__circle AbExtras__Interests--img-3" />
        </div>
      </div>
    </div>
  );
};

export default Extras;
