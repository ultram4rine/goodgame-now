export const countInterval = () => {
  const time = localStorage.getItem("ggnowtimeupdate");
  if (time == null) {
    time = "5";
  }
  return parseInt(time) * 60 * 1000;
};
