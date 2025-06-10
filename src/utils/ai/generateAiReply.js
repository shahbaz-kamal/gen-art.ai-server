require("dotenv").config();
const { GoogleGenAI }=require("@google/genai")


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });
const chat = ai.chats.create({
  model: "gemini-2.0-flash",
  history: [
    {
      role: "user",
      parts: [
        {
          text: "I’ll give you an image prompt and a user comment. Your task is to reply to the user with a funny response based on the image prompt.",
        },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Okay sir" }],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A powerful, bioluminescent lion, with glowing fur, roaring atop a floating, crystalline rock formation in a vast, golden savanna at sunset.
            comment: Wow, Thats nice`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Nice? That lion just unlocked Super Saiyan Safari mode and you're giving it a ‘nice’? Bro, it’s literally glowing like it pays the electricity bill! 🦁⚡🌅",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A robotic elephant stomping through a futuristic jungle with glowing vines and cybernetic monkeys.
            comment: That looks pretty cool`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Pretty cool? That elephant just installed Wi-Fi in the jungle and scared off three viruses. Give it some respect! 🐘💻🌿",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A dragon made of molten lava flying over an erupting volcano during a lightning storm.
            comment: Intense`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Intense? That dragon's just out here doing yoga in a volcano while Thor’s throwing tantrums. 🔥⚡🧘",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A cat wearing a wizard hat, floating mid-air while casting spells inside a magical library.
            comment: Cute cat!`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Cute? That cat just summoned a thunderstorm because you skipped dinner time. It’s Professor Flufflebang to you! 🧙‍♂️🐱📚",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A jellyfish spaceship hovering above a neon-lit ocean city at night.
            comment: That’s wild!`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Wild? That’s a deep-sea Uber arriving from the Andromeda Galaxy. Tip your tentacle driver! 🪼🚀🌃",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A panda in a samurai outfit slicing bamboo with perfect precision in a misty forest.
            comment: He’s got skills`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Skills? That panda just made sushi out of bamboo mid-air. You’re witnessing black-and-white excellence! 🐼🥷🎍",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A whale floating through space with galaxies on its back and stardust trailing its fins.
            comment: So peaceful`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Peaceful? That whale just clocked out of its 9-to-5 job as the Milky Way’s janitor. Respect the cosmic chill! 🐋🌌🛸",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A knight riding a flaming motorcycle across the rings of Saturn.
            comment: Looks epic!`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Epic? That’s Sir Blazington doing intergalactic wheelies while defending planetary honor. 🔥🏍🪐",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A dancing robot in a disco made of holograms and floating speakers.
            comment: Cool moves!`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Cool moves? That bot just won the Interstellar Shuffle Championship without even charging. 🕺🤖🔊",
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: `prompt: A squirrel in a jetpack stealing acorns from a futuristic vending machine.
            comment: That’s funny lol`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Funny? That squirrel just hacked the snack system and dipped like a nutty 007. 🐿️💨💼",
        },
      ],
    },
  ],
});

const generateAiReply = async (prompt, comment) => {
  const finalPrompt = `prompt : ${prompt}
  comment: ${comment}`;

  const response = await chat.sendMessage({
    message: finalPrompt,
  });
  console.log(response.text);
  return response.text;
};

module.exports = generateAiReply;
