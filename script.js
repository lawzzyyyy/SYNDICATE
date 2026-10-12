// Member 01 links to the five winnings images already in your GitHub folder.
// Add each member's screenshot paths in that member's winningsImages array.

const members = [
  {
    number: "01",
    ign: "SYNDCT・xenzui.",
    realName: "[Add real name]",
    playerId: "[Add player ID]",
    favoriteWeapon: "[Add favorite weapon]",
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
  { number: "02", ign: "Member 02", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "03", ign: "Member 03", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "04", ign: "Member 04", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "05", ign: "Member 05", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "06", ign: "Member 06", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "07", ign: "Member 07", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "08", ign: "Member 08", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "09", ign: "Member 09", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "10", ign: "Member 10", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "11", ign: "Member 11", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "12", ign: "Member 12", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "13", ign: "Member 13", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "14", ign: "Member 14", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "15", ign: "Member 15", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "16", ign: "Member 16", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "17", ign: "Member 17", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "18", ign: "Member 18", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "19", ign: "Member 19", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] },
  { number: "20", ign: "Member 20", realName: "[Add real name]", playerId: "[Add player ID]", favoriteWeapon: "[Add favorite weapon]", role: "Squad Member", winningsImages: [] }
];

/* Render roster */
const memberGrid = document.getElementById("memberGrid");

function createMemberCard(member) {
  const card = document.createElement("article");
  card.className = member.leader ? "member leader" : "member";

  const images = member.winningsImages || [];

  const winningsButton = images.length
    ? `<button class="winnings-link" type="button"
         data-winnings='${JSON.stringify(images)}'
         data-member="${member.ign}">
         VIEW WINNINGS (${images.length}) <span aria-hidden="true">↗</span>
       </button>`
    : `<button class="winnings-link winnings-placeholder" type="button"
         data-member="${member.ign}">
         WINNINGS SCREENSHOTS COMING SOON
       </button>`;

  card.innerHTML = `
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

    ${winningsButton}
  `;

  return card;
}

members.forEach((member) => {
  memberGrid.appendChild(createMemberCard(member));
});

/* Winnings screenshot gallery */
const winningsModal = document.getElementById("winningsModal");
const winningsGallery = document.getElementById("winningsGallery");
const winningsTitle = document.getElementById("winningsTitle");

function openGallery(memberName, images) {
  winningsTitle.textContent = `${memberName} — WINNINGS`;

  winningsGallery.innerHTML = images.map((src, index) => `
    <a class="winnings-image-link"
      href="${src}" target="_blank" rel="noopener noreferrer">
      <img src="${src}"
        alt="${memberName} winnings screenshot ${index + 1}"
        loading="lazy">
    </a>
  `).join("");

  winningsModal.classList.add("is-open");
  winningsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeGallery() {
  winningsModal.classList.remove("is-open");
  winningsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const winningsButton = event.target.closest("[data-winnings]");

  if (winningsButton) {
    openGallery(
      winningsButton.dataset.member,
      JSON.parse(winningsButton.dataset.winnings)
    );
  }

  const emptyButton = event.target.closest(".winnings-placeholder");

  if (emptyButton) {
    alert(`No winnings screenshots have been added yet for ${emptyButton.dataset.member}.`);
  }

  if (event.target.closest("[data-close-winnings]")) {
    closeGallery();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && winningsModal.classList.contains("is-open")) {
    closeGallery();
  }
});

/* Copy required IGN format */
const copyIgnButton = document.getElementById("copyIgnButton");
const copyStatus = document.getElementById("copyStatus");

copyIgnButton.addEventListener("click", async () => {
  const tag = "SYNDCT・(your IGN)";

  try {
    await navigator.clipboard.writeText(tag);
    copyIgnButton.classList.add("copied");
    copyIgnButton.querySelector(".copy-button-text").textContent = "COPIED!";
    copyStatus.textContent = `Copied to clipboard: ${tag}`;
    copyStatus.classList.add("success");

    setTimeout(() => {
      copyIgnButton.classList.remove("copied");
      copyIgnButton.querySelector(".copy-button-text").textContent = "COPY TAG";
      copyStatus.textContent =
        "Copy this format, then replace “(your IGN)” with your in-game name.";
      copyStatus.classList.remove("success");
    }, 2200);
  } catch {
    copyStatus.textContent =
      "Copy failed. Select the tag manually: SYNDCT・(your IGN)";
  }
});

/* Application qualification flow */
const canChangeName = document.getElementById("canChangeName");
const notQualifiedMessage = document.getElementById("notQualifiedMessage");
const changeNameNotice = document.getElementById("changeNameNotice");
const applicationForm = document.getElementById("applicationForm");

canChangeName.addEventListener("change", () => {
  const answer = canChangeName.value;
  const qualified = answer === "yes";

  notQualifiedMessage.hidden = answer !== "no";
  changeNameNotice.hidden = !qualified;
  applicationForm.hidden = !qualified;
});

/* Enforce the required SYNDCT・ prefix */
applicationForm.addEventListener("submit", (event) => {
  const ignInput = document.getElementById("newIgn");
  const currentIgn = ignInput.value.trim();

  if (!currentIgn.startsWith("SYNDCT・")) {
    event.preventDefault();
    ignInput.setCustomValidity("Your current IGN must begin with SYNDCT・");
    ignInput.reportValidity();

    ignInput.addEventListener(
      "input",
      () => ignInput.setCustomValidity(""),
      { once: true }
    );
  }
});

/* Mobile navigation */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* Attempt video playback; poster remains as fallback if unavailable */
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  heroVideo.play().catch(() => {});
}
