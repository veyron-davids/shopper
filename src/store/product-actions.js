export const transform = (items) => {
  const arrayBufferToBase64 = (buffer) => {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  };

  items.map((item) => {
    let base64Flag = "data:image/jpeg;base64,";
    let str = item.images.data.data;
    let imageStr = arrayBufferToBase64(str);
    item.images = base64Flag + imageStr;
  });
};
