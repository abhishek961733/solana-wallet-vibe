async function fetchSolanaTransactions(walletAddress) {
  const response = await fetch("https://api.mainnet-beta.solana.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 1,
      method: "getSignaturesForAddress",
      params: [
        walletAddress,
        { limit: 20 }
      ]
    })
  });

  const data = await response.json();
  return data.result || [];
}
async function analyzeWallet() {
  const wallet = document.getElementById("walletInput").value;
  const output = document.getElementById("output");

  if (!wallet) {
    output.innerText = "⚠️ Please enter a Solana wallet address.";
    return;
  }

  output.innerText = "🔍 Fetching real on-chain data...\nPlease wait.";

  try {
    // STEP 1: Real Solana data
    const transactions = await fetchSolanaTransactions(wallet);

    // STEP 2: Simple behavior signals
    const txCount = transactions.length;
    const activityScore = txCount / 20; // 0 to 1

    let vibe = "Balanced 😎";
    let risk = "Medium";
    let advice = "Observe wallet behavior before acting.";

    if (activityScore > 0.7) {
      vibe = "High-Risk Degen 🎰";
      risk = "High";
      advice = "Avoid copy trading. Very aggressive activity.";
    } 
    else if (activityScore < 0.3) {
      vibe = "Long-Term Holder 🧘";
      risk = "Low";
      advice = "Stable behavior. Suitable for conservative strategies.";
    }

    // STEP 3: Show result
    output.innerText = `
Wallet Vibe: ${vibe}

On-chain Analysis:
• Recent Transactions: ${txCount}
• Activity Score: ${activityScore.toFixed(2)}

Risk Level: ${risk}

Agent Verdict:
${advice}
`;

  } catch (error) {
    output.innerText = "❌ Error fetching wallet data. Try another address.";
  }
}

${verdict}
`;
}
