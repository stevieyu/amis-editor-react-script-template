
export default function messageEventListener(type) {
  const el = window;
  let cbTmp;

  const bc = new BroadcastChannel(type);

  const cbFn = (event) => {
    if (typeof cbTmp !== 'function') return;
    const {data} = event;
    if (typeof data !== 'object' || data.type !== type) return;
    cbTmp(data.data);
  };

  return {
    in: window.self !== window.top,
    on(listener) {
      cbTmp = listener;
      el.addEventListener('message', cbFn);
      bc.addEventListener ('message', cbFn);
    },
    off() {
      el.removeEventListener('message', cbFn);
      bc.close();
    },
    emit(data, emitEl = null) {
      const message = {
        type,
        data,
      }
      bc.postMessage(message);
      if (!emitEl) {
        el.parent.postMessage(message, '*');
      }else{
        emitEl.contentWindow.postMessage(message, '*');
      }
    },
  };
};
