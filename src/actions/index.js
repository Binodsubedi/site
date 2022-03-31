import SiteBackend from '../apis/SiteBackend';

const fetchPosts = () => async (dispatch) => {
  const response = await SiteBackend.get('/api/v1/post');

  console.log(response.data);

  dispatch({
    type: 'FETCH_POST',
    payload: response.data.post,
  });
};

export default fetchPosts;
