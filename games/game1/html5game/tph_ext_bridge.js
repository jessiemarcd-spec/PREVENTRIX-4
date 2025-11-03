function SendScore(v) {
    window.parent.postMessage({
        type: "scoreUpdate",
        value: Number(v)
    }, "*");
}

function UnlockBadge(badge) {
    window.parent.postMessage({
        type: "badgeUnlock",
        badge: badge // ✅ matches game.js
    }, "*");
}

function CompleteGame(nextScene) {
    window.parent.postMessage({ type: "completed" }, "*");

    window.parent.postMessage({
        type: "end",
        resumeScene: Number(nextScene)  // ✅ correct field name
    }, "*");
}

