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
  followersTotal.className = "followers-total-count"
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

function createOverviewCards() {
    const overViewCardsData = [
        {
            attr: "Page Views",
            imgSrc: "./images/icon-facebook.svg",
            data: 87,
            change: 3,
            isUp: true,
        },
        {
            attr: "Likes",
            imgSrc: "./images/icon-facebook.svg",
            data: 52,
            change: 2,
            isUp: false,
        },
        {
            attr: "Likes",
            imgSrc: "./images/icon-instagram.svg",
            data: 5462,
            change: 2257,
            isUp: true,
        },
        {
            attr: "Profile Views",
            imgSrc: "./images/icon-instagram.svg",
            data: 52000,
            change: 1375,
            isUp: true,
        },
        {
            attr: "Retweets",
            imgSrc: "./images/icon-twitter.svg",
            data: 117,
            change: 303,
            isUp: true,
        },
        {
            attr: "Likes",
            imgSrc: "./images/icon-twitter.svg",
            data: 507,
            change: 553,
            isUp: true,
        },
        {
            attr: "Likes",
            imgSrc: "./images/icon-youtube.svg",
            data: 107,
            change: 19,
            isUp: false,
        },
        {
            attr: "Total Views",
            imgSrc: "./images/icon-youtube.svg",
            data: 1407,
            change: 12,
            isUp: false,
        },
    ]
    const gridcontaineroverview = document.getElementById("grid-container-overview")

    overViewCardsData.forEach((card) => {
        const overviewcard = document.createElement("div")
        overviewcard.className = "card-overview"

        const pageviewslabel = document.createElement("p")
        pageviewslabel.innerText = card.attr 

        overviewcard.appendChild(pageviewslabel)

        const socialimg = document.createElement("img")
        socialimg.src = card.imgSrc
        overviewcard.appendChild(socialimg)

        const dataNos = document.createElement("p")

        if(card.data > 10000) {
            dataNos.innerText = card.data/1000 + "k"
            dataNos.className = "overview-views-today"
        } else {
            dataNos.innerText = card.data
            dataNos.className = "overview-views-today"
        }

        overviewcard.appendChild(dataNos)

        const changeData = document.createElement("p")
        changeData.innerText = card.change + "%"

        const changeDataContainer = document.createElement("div")
        changeDataContainer.appendChild(changeData)
        changeDataContainer.className = "changes"

        if(!card.isUp) {
            changeDataContainer.id = "down"
        }

        overviewcard.appendChild(changeDataContainer)

        gridcontaineroverview.appendChild(overviewcard)
    })

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

const themeSwitcher = document.getElementById("theme-switcher-input")

let dark = false

themeSwitcher.addEventListener("click", () => {
    const body = document.getElementById("body")
    const r = getComputedStyle(document.body)
    const socialMainTitle = document.getElementById("social-main-title")
    const overviewTitle = document.getElementById("overview-title")
    const totalFollowers = document.getElementById("total-followers")
    const cards = Array.from(document.getElementsByClassName("card"))
    const followersTotalCount = Array.from(document.getElementsByClassName("followers-total-count"))
    const overviewCards = Array.from(document.getElementsByClassName("card-overview"))
    const overviewViewsToday = Array.from(document.getElementsByClassName("overview-views-today"))

    if(!dark) {
        dark = !dark
        body.style.background = r.getPropertyValue("--very-dark-blue-bg")
        socialMainTitle.style.color = r.getPropertyValue("--white-text")
        overviewTitle.style.color = r.getPropertyValue("--white-text")
        totalFollowers.style.color = r.getPropertyValue("--desaturated-blue-text")

        cards.forEach(card => {
            card.style.background = r.getPropertyValue("--dark-desaturated-blue-card-bg") 
        });

        followersTotalCount.forEach(count => {
            count.style.color = r.getPropertyValue("--white-text")
        })

        overviewCards.forEach(card => {
            card.style.background = r.getPropertyValue("--dark-desaturated-blue-card-bg") 
        });
        overviewViewsToday.forEach(count => {
            count.style.color = r.getPropertyValue("--white-text")
        })
    } else {
        dark = !dark
        body.style.background = r.getPropertyValue("--white-bg")
        socialMainTitle.style.color = r.getPropertyValue("--very-dark-blue-text")
        overviewTitle.style.color = r.getPropertyValue("--very-dark-blue-text")
        totalFollowers.style.color = r.getPropertyValue("--dark-grayish-blue-text")


        cards.forEach(card => {
            card.style.background = r.getPropertyValue("--light-grayish-blue-card-bg");
        });
        followersTotalCount.forEach(count => {
            count.style.color = r.getPropertyValue("--very-dark-blue-text")
        })
        overviewCards.forEach(card => {
            card.style.background = r.getPropertyValue("--light-grayish-blue-card-bg");
        });

        overviewViewsToday.forEach(count => {
            count.style.color = r.getPropertyValue("--very-dark-blue-text")
        })
    }

})


renderCards();
createOverviewCards();