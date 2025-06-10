const getImageBuffer = async (prompt, category) => {
  const finalPrompt = `Generate an image in this category: ${category}. Prompt : ${prompt}`;

  const myForm = new FormData();
  myForm.append("prompt", finalPrompt);
  try {
    const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CD_API,
      },
      body: myForm,
    });

    const buffer = await response.arrayBuffer();
    return buffer;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};

module.exports = getImageBuffer;
