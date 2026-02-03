function analyzeWallet() {
  const wallet = document.getElementById("walletInput").value;
  const output = document.getElementById("output");

  if (!wallet) {
    output.innerText = "❌ Please enter a wallet address.";
    return;
  }

  output.innerText = "🔍 Analyzing wallet vibe...";

  // ---- VIBE DATA (mock for now) ----
  const avgHoldDays = Math.floor(Math.random() * 7);
  const tokenCount = Math.floor(Math.random() * 10) + 1;
  const memeExposure = Math.floor(Math.random() * 100);

  let vibe = "Balanced 😎";
  let risk = "Medium";

  if (avgHoldDays < 2 && memeExposure > 60) {
    vibe = "Degen 🎰";
    risk = "High";
  } else if (tokenCount <= 2) {
    vibe = "Holder 🧘";
    risk = "Low";
  } else if (avgHoldDays < 4) {
    vibe = "Active Trader ⚡";
    risk = "Medium";
  }

  output.innerText = `
Wallet Vibe: ${vibe}

Stats:
• Average Holding Days: ${avgHoldDays}
• Token Count: ${tokenCount}
• Meme Exposure: ${memeExposure}%

Risk Level: ${risk}

Advice:
${risk === "High" ? "Not recommended for copy trading." : "Relatively stable wallet behavior."}
`;
}

