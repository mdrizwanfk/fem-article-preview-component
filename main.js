const avatarView = document.getElementById("avatar-view");
const shareView = document.getElementById("share-view");

function showShare() {
  avatarView.classList.add("hide");
  shareView.classList.remove("hide");
}

function closeShare() {
  shareView.classList.add("hide");
  avatarView.classList.remove("hide");
}
