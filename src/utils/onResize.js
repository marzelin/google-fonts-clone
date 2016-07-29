export default function(store, state, action, mediaQuery) {
  const mQ = window.matchMedia(mediaQuery);

  const onResize = (store, state, action, mQ) => {
    if (mQ.matches && store.getState()[state]) {
      store.dispatch(action());
    }
  };
  window.addEventListener(
    'resize',
    onResize.bind(null, store, state, action, mQ)
  );
}
