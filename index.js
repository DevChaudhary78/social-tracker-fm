const gridContainer = document.getElementById("grid-container");

function createCard(logo, altText, name, followers, changes, isUp, topId) {
  // main card container
  const card = document.createElement("div");
  card.className = "card";
  card.id = topId

  // social id container
  const socialId = document.createElement("div");
  socialId.className = "social-id";

  const socialImg = document.createElement("img");
  socialImg.src = logo;
  socialImg.alt = altText;

  const socialName = document.createElement("p");
  socialName.innerText = name;

  socialId.appendChild(socialImg);
  socialId.appendChild(socialName);

  // followersContainer container
  const followersContainer = document.createElement("div");
  followersContainer.className = "followers";

  const followersTotal = document.createElement("h2");
  if(followers > 10000) {
    followers /= 1000;
    followersTotal.innerText = followers + "K"
  } else {
    followersTotal.innerText = followers;
  }

  const followersPara = document.createElement("p");
  followersPara.innerText = "Followers";

  followersContainer.appendChild(followersTotal);
  followersContainer.appendChild(followersPara);

  // changes container
  const changesContainer = document.createElement("div");
  changesContainer.className = "changes";

  if(!isUp) {
    changesContainer.id = "down"
  }

  const changesPara = document.createElement("p");
  changesPara.innerText = changes;

  changesContainer.appendChild(changesPara);

  card.appendChild(socialId);
  card.appendChild(followersContainer);
  card.appendChild(changesContainer);

  return card;
}

function renderCards() {
  const mainCards = [
    {
      socialLogo: "./images/icon-facebook.svg",
      altText: "Just the logo of Facebook",
      socialName: "@nathanf",
      socialFollowers: "1987",
      socialChanges: "12 Today",
      topId: "fb",
      isUp: true,
    },
    {
      socialLogo: "./images/icon-twitter.svg",
      altText: "Just the logo of Twitter",
      socialName: "@nathanf",
      socialFollowers: "1044",
      socialChanges: "99 Today",
      topId: "twitter",
      isUp: true,
    },
    {
      socialLogo: "./images/icon-instagram.svg",
      altText: "Just the logo of Instagram",
      socialName: "@realnathanf",
      socialFollowers: "11000",
      socialChanges: "1099 Today",
      topId: "insta",
      isUp: true,
    },
    {
      socialLogo: "./images/icon-youtube.svg",
      altText: "Just the logo of YouTube",
      socialName: "Nathan F.",
      socialFollowers: "8239",
      socialChanges: "144 Today",
      topId: "yt",
      isUp: false,
    },
  ];

  mainCards.forEach((card) => {
    const cardElement = createCard(
      card.socialLogo,
      card.altText,
      card.socialName,
      card.socialFollowers,
      card.socialChanges,
      card.isUp,
      card.topId
    );
    gridContainer.appendChild(cardElement);
  });
}

renderCards();
