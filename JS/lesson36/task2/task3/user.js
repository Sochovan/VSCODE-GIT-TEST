const userNameElem = document.querySelector('.user__name');
const userlocationElem = document.querySelector('.user__location');
const userAvatarElem = document.querySelector('.user__avatar');

export const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userlocationElem.textContent = location ? `from ${location}` : '';
};
