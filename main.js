const avatarView = document.getElementById("avatar-view");
const shareView = document.getElementById("share-view");
const shareViewLg = document.getElementById("share-view-lg");

function showShare() {
  if (window.innerWidth < 992) {
    avatarView.classList.add("hide");
    shareView.classList.remove("hide");
  } else shareViewLg.classList.remove("hide");
}

function closeShare() {
  shareView.classList.add("hide");
  avatarView.classList.remove("hide");
}
