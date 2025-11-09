import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5oAMPGg8I6N1c5W8jlDkZUVltChk1Y8A",
  authDomain: "gamesite-9850d.firebaseapp.com",
  projectId: "gamesite-9850d",
  storageBucket: "gamesite-9850d.firebasestorage.app",
  messagingSenderId: "757972868175",
  appId: "1:757972868175:web:043b2969258cf0bdfdde3a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Make currentUser accessible everywhere
let currentUser = null;

// Auth listener
onAuthStateChanged(auth, async (user) => {
    if (!user) return window.location.href = "login.html";
    currentUser = user;
    loadUserScore();
    loadLeaderboard();
});

// Profile dropdown logic
const profilePic = document.getElementById("profilePic");
const dropdownMenu = document.getElementById("dropdownMenu");

// Toggle profile menu when profile picture is clicked
profilePic.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// Close the dropdown if clicked outside of it
document.addEventListener("click", (e) => {
  if (!profilePic.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

// Handle logout
document.getElementById("logoutBtn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "login.html";
  } catch (error) {
    console.error("Logout error:", error);
  }
});

// Load user data and score
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const userDocRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    document.getElementById("userScore").textContent = Math.ceil(userData.score ?? 0);
  } else {
    window.location.href = "create_username.html";
  }
});

// Listen for score updates from GameMaker game
window.addEventListener("message", async (event) => {
  if (event.data.type === "updateScore") {
    const newScore = event.data.newScore;
    const user = auth.currentUser;
    if (!user) return;

    // Update Firestore with the new score
    const userDocRef = doc(db, "users", user.uid);
    try {
      await setDoc(userDocRef, { score: newScore }, { merge: true });
      document.getElementById("userScore").textContent = newScore; // Update the displayed score
    } catch (error) {
      console.error("Error updating score:", error);
    }
  }
});

// Story Mode Open Button
document.getElementById("storyModeBtn").addEventListener("click", async () => {
  document.getElementById("storyModal").classList.remove("hidden");

  // Get latest user progress
  const userDoc = await getDoc(doc(db, "users", currentUser.uid));
  const progress = userDoc.data().progress || 1;

  const continueBtn = document.getElementById("continueBtn");

  // If progress > 1, allow Continue
  if (progress > 1) {
    continueBtn.classList.remove("hidden");
  } else {
    continueBtn.classList.add("hidden");
  }
});

// New Game Button
document.getElementById("newGameBtn").addEventListener("click", async () => {
  await updateDoc(doc(db, "users", currentUser.uid), { progress: 1 });
  window.location.href = "story.html?scene=1";
});

// Continue Button
document.getElementById("continueBtn").addEventListener("click", async () => {
  const userDoc = await getDoc(doc(db, "users", currentUser.uid));
  const progress = userDoc.data().progress || 1;
  window.location.href = `story.html?scene=${progress}`;
});

// Close modal
document.getElementById("closeStoryModal").addEventListener("click", () => {
  document.getElementById("storyModal").classList.add("hidden");
});

// Open Level Select Modal
document.getElementById("levelSelectBtn").addEventListener("click", () => {
  document.getElementById("levelSelectModal").classList.remove("hidden");
});

// Close Level Select Modal
document.getElementById("closeLevelSelectModal").addEventListener("click", () => {
  document.getElementById("levelSelectModal").classList.add("hidden");
});

// =============================
// LEVEL UNLOCK LOGIC
// =============================

async function updateLevelUnlocks() {
  if (!currentUser) return;

  const userDoc = await getDoc(doc(db, "users", currentUser.uid));
  const userData = userDoc.data();
  const progress = userData.progress || 1;

  // Optional: use booleans as fallback
  const levelBooleans = {
    gear_up: userData.gear_up || false,
    toolbox_challenge: userData.toolbox_challenge || false,
    mission_planning: userData.mission_planning || false,
    clean_sweep: userData.clean_sweep || false,
    cable_fix: userData.cable_fix || false,
    system_defender: userData.system_defender || false,
    diagnosis_quest: userData.diagnosis_quest || false,
    repair_rush: userData.repair_rush || false,
    final_boss: userData.final_boss || false
  };

  document.querySelectorAll(".level-btn").forEach(btn => {
    const requiredProgress = parseInt(btn.dataset.level, 10);

    if (progress >= requiredProgress) {
      btn.disabled = false;
      btn.classList.remove("locked");
    } else {
      btn.disabled = true;
      btn.classList.add("locked");
    }
  });
}

// =============================
// LEVEL BUTTON NAVIGATION
// =============================
document.querySelectorAll(".level-btn").forEach(button => {
  button.addEventListener("click", () => {
    const scene = button.dataset.scene;
    if (button.disabled) return; // prevent locked levels

    // ✅ Go directly to story.html with that scene number
    window.location.href = `story.html?scene=${scene}`;
  });
});

// Run whenever Level Select opens
document.getElementById("levelSelectBtn").addEventListener("click", async () => {
  document.getElementById("levelSelectModal").classList.remove("hidden");
  await updateLevelUnlocks();
});
// =============================
// CREDITS MODAL
// =============================
const creditsBtn = document.getElementById("creditsBtn");
const creditsModal = document.getElementById("creditsModal");
const closeCreditsModal = document.getElementById("closeCreditsModal");

creditsBtn.addEventListener("click", () => {
  creditsModal.classList.remove("hidden");
  dropdownMenu.classList.remove("show"); // close dropdown when opened
});

closeCreditsModal.addEventListener("click", () => {
  creditsModal.classList.add("hidden");
});

// Optional: close when clicking outside
creditsModal.addEventListener("click", (e) => {
  if (e.target === creditsModal) creditsModal.classList.add("hidden");
});


// =============================
// LOAD LEADERBOARD
// =============================
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

async function loadLeaderboard() {
  const leaderboardBody = document.getElementById("leaderboardBody");
  leaderboardBody.innerHTML = `<tr><td colspan="4">Loading...</td></tr>`;

  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    let users = [];
    leaderboardBody.innerHTML = ""; // clear existing rows
    querySnapshot.forEach((docSnap) => {
      const data = docSnap.data();
      users.push({
        name: data.username || data.email || "Unknown User",
        score: data.score || 0,
        badges: {
          safety_first: !!data.safety_first,
          maintenance_planner: !!data.maintenance_planner,
          system_guardian: !!data.system_guardian,
          elite_technician: !!data.elite_technician,
        },
      });
    });

    // Sort by score (descending)
    users.sort((a, b) => b.score - a.score);

    leaderboardBody.innerHTML = "";

users.forEach((player, index) => {
  const roundedScore = Math.ceil(player.score); // ✅ round up any decimal score
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${player.name}</td>
    <td>
      ${renderBadges(player.badges)}
    </td>
    <td>${roundedScore}</td>
  `;
  leaderboardBody.appendChild(row);
});

  } catch (error) {
    console.error("Error loading leaderboard:", error);
    leaderboardBody.innerHTML = `<tr><td colspan="4">Failed to load leaderboard.</td></tr>`;
  }
}

function renderBadges(badges) {
  const badgeInfo = {
    safety_first: {
      img: "Images/Badges/safety_first.png",
      text: "Safety First!",
      desc: "Get your kit and form up!"
    },
    maintenance_planner: {
      img: "Images/Badges/maintenance_planner.png",
      text: "Maintenance Planner!",
      desc: "Know the steps in preventative maintenance."
    },
    system_guardian: {
      img: "Images/Badges/system_guardian.png",
      text: "System Guardian",
      desc: "Defend against a malware attack."
    },
    elite_technician: {
      img: "Images/Badges/elite_technician.png",
      text: "Elite Technician",
      desc: "Beat the Final Boss."
    },
  };

  const keys = Object.keys(badgeInfo);

  return keys.map(key => `
    <img src="${badgeInfo[key].img}" 
         class="badge ${badges[key] ? "unlocked" : ""}" 
         data-title="${badgeInfo[key].text}"
         data-desc="${badgeInfo[key].desc}"
         data-unlocked="${badges[key]}"
         alt="${key}">
  `).join("");
}

document.addEventListener("mousemove", (e) => {
  const tooltip = document.getElementById("badgeTooltip");
  const target = e.target;

  if (target.classList.contains("badge")) {
    const name = target.getAttribute("data-title");
    const desc = target.getAttribute("data-desc");
    const unlocked = target.getAttribute("data-unlocked") === "true";

    tooltip.innerHTML = `
      <strong>${name}</strong><br>
      ${desc}<br>
      Status: ${unlocked ? "✅ Unlocked" : "❌ Locked"}
    `;

    tooltip.style.left = (e.pageX + 1) + "px";
    tooltip.style.top = (e.pageY + 1) + "px";
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
});

// Run leaderboard loader once user is authenticated
onAuthStateChanged(auth, async (user) => {
  if (user) {
    await loadLeaderboard();
  }
});


console.log("Loading leaderboard..."); 
