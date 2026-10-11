// Edit the roster information below.
//
// Every member has a placeholder number from 01 to 20.
// Each member has a separate winnings folder:
//
// images/winnings/member-01/
// images/winnings/member-02/
// ...
// images/winnings/member-20/
//
// Add one or more screenshot paths inside winningsImages.
// If a member has no screenshots yet, leave winningsImages empty: []

const members = [
  {
    number: "01",
    ign: "SYNDCT・xenzui.",
    realName: "LAWRENCE LABRA",
    playerId: "[Add player ID]",
    favoriteWeapon: "AWM + PP19",
    role: "Group Leader",
    leader: true,
    winningsImages: [
      "images/winnings/member-01/win-01.png",
      "images/winnings/member-01/win-02.png",
      "images/winnings/member-01/win-03.png",
      "images/winnings/member-01/win-04.png",
      "images/winnings/member-01/win-05.png"
    ]
  },

  {
    number: "02",
    ign: "Member 02",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: [
      "images/winnings/member-02/win-01.png"
    ]
  },

  /*{
    number: "03",
    ign: "Member 03",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "04",
    ign: "Member 04",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "05",
    ign: "Member 05",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "06",
    ign: "Member 06",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "07",
    ign: "Member 07",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "08",
    ign: "Member 08",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "09",
    ign: "Member 09",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "10",
    ign: "Member 10",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "11",
    ign: "Member 11",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "12",
    ign: "Member 12",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "13",
    ign: "Member 13",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "14",
    ign: "Member 14",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "15",
    ign: "Member 15",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "16",
    ign: "Member 16",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "17",
    ign: "Member 17",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "18",
    ign: "Member 18",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "19",
    ign: "Member 19",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  },

  {
    number: "20",
    ign: "Member 20",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
    role: "Squad Member",
    winningsImages: []
  }*/
];

/* Create member cards */

const memberGrid = document.getElementById("memberGrid");

function createMemberCard(member) {
  const memberCard = document.createElement("article");

  memberCard.className = member.leader
    ? "member leader"
    : "member";

  const screenshots = member.winningsImages || [];

  const winningsContent = screenshots.length > 0
    ? `
      <button
        class="winnings-link"
        type="button"
        data-winnings='${JSON.stringify(screenshots)}'
        data-member="${member.ign}"
      >
        VIEW WINNINGS (${screenshots.length})
        <span aria-hidden="true">↗</span>
      </button>
    `
    : `
      <button
        class="winnings-link winnings-placeholder"
        type="button"
        data-member="${member.ign}"
      >
        WINNINGS SCREENSHOTS COMING SOON
      </button>
    `;

  memberCard.innerHTML = `
    <div class="member-topline">
      <span class="number">#${member.number}</span>
      <span class="role">${member.role}</span>
    </div>

    <div class="member-main">
      <div class="member-label">IN-GAME NAME</div>
      <div class="member-name">${member.ign}</div>
    </div>

    <div class="member-details">
      <div class="detail-row">
        <span>REAL NAME</span>
        <strong>${member.realName}</strong>
      </div>

      <div class="detail-row">
        <span>PLAYER ID</span>
        <strong>${member.playerId}</strong>
      </div>

      <div class="detail-row weapon-row">
        <span>FAVORITE WEAPON</span>
        <strong>${member.favoriteWeapon}</strong>
      </div>
    </div>

    ${winningsContent}
  `;

  return memberCard;
}

members.forEach((member) => {
  memberGrid.appendChild(createMemberCard(member));
});

/* Winnings screenshot gallery */

const winningsModal = document.getElementById("winningsModal");
const winningsGallery = document.getElementById("winningsGallery");
const winningsTitle = document.getElementById("winningsTitle");

function openWinningsGallery(memberName, images) {
  winningsTitle.textContent = `${memberName} — WINNINGS`;

  winningsGallery.innerHTML = images
    .map((image, index) => {
      return `
        <a
          href="${image}"
          target="_blank"
          rel="noopener noreferrer"
          class="winnings-image-link"
          aria-label="Open winnings screenshot ${index + 1} for ${memberName}"
        >
          <img
            src="${image}"
            alt="${memberName} winnings screenshot ${index + 1}"
            loading="lazy"
          >
        </a>
      `;
    })
    .join("");

  winningsModal.classList.add("is-open");
  winningsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeWinningsGallery() {
  winningsModal.classList.remove("is-open");
  winningsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const winningsButton = event.target.closest("[data-winnings]");

  if (winningsButton) {
    const screenshots = JSON.parse(winningsButton.dataset.winnings);

    openWinningsGallery(
      winningsButton.dataset.member,
      screenshots
    );
  }

  const emptyWinningsButton = event.target.closest(
    ".winnings-placeholder"
  );

  if (emptyWinningsButton) {
    alert(
      `No winnings screenshots have been added yet for ${emptyWinningsButton.dataset.member}.`
    );
  }

  if (event.target.closest("[data-close-winnings]")) {
    closeWinningsGallery();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    winningsModal.classList.contains("is-open")
  ) {
    closeWinningsGallery();
  }
});

/* Copy IGN tag button */

const copyIgnButton = document.getElementById("copyIgnButton");
const copyStatus = document.getElementById("copyStatus");

const requiredIgn = "SYNDCT・(your IGN)";

copyIgnButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(requiredIgn);

    copyIgnButton.classList.add("copied");

    copyIgnButton.querySelector(".copy-button-text").textContent =
      "COPIED!";

    copyStatus.textContent =
      "Copied to clipboard: SYNDCT・(your IGN)";

    copyStatus.classList.add("success");

    setTimeout(() => {
      copyIgnButton.classList.remove("copied");

      copyIgnButton.querySelector(".copy-button-text").textContent =
        "COPY TAG";

      copyStatus.textContent =
        "Copy this format, then replace “(your IGN)” with your in-game name.";

      copyStatus.classList.remove("success");
    }, 2200);
  } catch (error) {
    copyStatus.textContent =
      "Copy failed. Select the tag manually: SYNDCT・(your IGN)";
  }
});