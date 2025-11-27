// ✅ GameMaker → Website Communication Bridge
function SendScore(v) {
    window.parent.postMessage({
        type: "scoreUpdate",
        value: Number(v)
    }, "*");
}

function UnlockBadge(badge) {
    window.parent.postMessage({
        type: "badgeEarned",
        badge: badge // e.g. "safety_first"
    }, "*");
}

function CompleteGame(nextScene) {
    window.parent.postMessage({ type: "completed" }, "*");

    window.parent.postMessage({
        type: "end",
        nextScene: Number(nextScene)
    }, "*");
}

