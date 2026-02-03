function analyzeWallet() {
  const wallet = document.getElementById("walletInput").value;
  const output = document.getElementById("output");

  if (!wallet) {
    output.innerText = "⚠️ Please enter a Solana wallet address.";
    return;
  }

  output.innerText = "🔍 Reading wallet behavior...\nPlease wait.";

  // Mock behavior signals (agent-style)
  const activity = Math.random();
  const diversity = Math.random();
  const patience = Math.random();

  let vibe, risk, verdict;

  if (activity > 0.7 && diversity > 0.6) {
    vibe = "High-Risk Degen 🎰";
    risk = "High";
    verdict = "Avoid copy-trading. This wallet shows aggressive behavior.";
  } else if (patience > 0.7) {
    vibe = "Long-Term Holder 🧘";
    risk = "Low";
    verdict = "Stable behavior. Suitable for conservative strategies.";
  } else {
    vibe = "Active Trader ⚡";
    risk = "Medium";
    verdict = "Moderate risk. Observe before taking action.";
  }

  output.innerText = `
Wallet Vibe: ${vibe}

Behavior Analysis:
• Trading Activity: ${activity.toFixed(2)}
• Token Diversity: ${diversity.toFixed(2)}
• Holding Patience: ${patience.toFixed(2)}

Risk Level: ${risk}

Agent Verdict:
${verdict}
`;
}
