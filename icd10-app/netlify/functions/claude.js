exports.handler = async function(event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS"
      },
      body: ""
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: "GEMINI_API_KEY not configured" }) };
    }

    // Retry up to 3 times on 429
    let data, response;
    for (let attempt = 1; attempt <= 3; attempt++) {
      response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: body.prompt }] }],
            generationConfig: {
              temperature: 0.1,
              maxOutputTokens: 8192,
              responseMimeType: "application/json"
            }
          })
        }
      );

      data = await response.json();

      // If 429, wait and retry
      if (data.error && data.error.code === 429) {
        if (attempt < 3) {
          await new Promise(r => setTimeout(r, attempt * 3000)); // wait 3s, 6s
          continue;
        } else {
          return { statusCode: 429, body: JSON.stringify({ error: "Terlalu banyak permintaan. Tunggu 1 menit lalu coba lagi." }) };
        }
      }
      break; // success, exit loop
    }

    console.log("Gemini status:", response.status);

    if (data.error) {
      return { statusCode: 500, body: JSON.stringify({ error: `Gemini error: ${data.error.message}` }) };
    }

    if (!data.candidates || data.candidates.length === 0) {
      return { statusCode: 500, body: JSON.stringify({ error: `Gemini tidak menghasilkan respons. Alasan: ${data.promptFeedback?.blockReason || 'unknown'}` }) };
    }

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    text = text.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};

    // Extract text from Gemini response
    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Clean up markdown code blocks if present
    text = text.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
