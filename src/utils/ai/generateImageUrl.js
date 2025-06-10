require("dotenv").config();
const imgBBUploadApi = `https://api.imgbb.com/1/upload?key=${process.env.IMG_BB_API}`;


const generateImageUrl = async (buffer, prompt) => {
  const formData = new FormData();
  formData.append(
    "image",
    new Blob([buffer], { type: "image/jpeg" }),
    `${prompt}.jpeg`
  );
  const response = await fetch(imgBBUploadApi, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
module.exports = generateImageUrl;
