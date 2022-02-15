export const MakedId = (state) => {
  if (!state.length) return 1;
  return state[state.length - 1].id + 1;
};

export const isImgLink = (url) => {
  if (typeof url !== "string") {
    return false;
  }
  return (
    url.match(/^http[^?]*.(jpg|jpeg|svg|png|tiff|bmp)(\?(.*))?$/gim) !== null
  );
};

export const isVideoLink = (url) => {
  if (typeof url !== "string") {
    return false;
  }
  return url.match("http://[a-zA-Z0-9._-]+.[a-z]/[a-zA-Z0-9._-].mp4");
};

export const isYoutubeUrl = (url) => {
  const p =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url.match(p)) {
    return true;
  }
  return false;
};
