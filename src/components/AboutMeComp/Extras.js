import React from 'react';

const Extras = () => {
  return (
    <div className="AbExtras">
      <h3 className="AbExtras__title">Extras</h3>
      <div className="AbExtras__Books">
        <h4 className="AbExtras__Books--title">Books</h4>
        <div className="AbExtras__Books--content">
          <div className="AbExtras__Books--content__card AbExtras__Books-1"></div>
          <div className="AbExtras__Books--content__card AbExtras__Books-2"></div>
          <div className="AbExtras__Books--content__card AbExtras__Books-3"></div>
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
