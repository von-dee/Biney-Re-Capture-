const validation = require("../models/validations");

const images = [
  "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
  "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
  "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg"
];

const loadImages = async (req, res) => {
  const payloadImages = generateRandomImages();
  let randomNumberDb = Math.floor(Math.random() * 6);

  try {
    const vals = await validation.find({});
    res.json({
      images: payloadImages,
      instruction: vals[randomNumberDb].instruction
    });
  } catch (err) {
    res.json({
      message: "Failed to load images"
    });
  }
};

module.exports.Load = loadImages;

const validateUserSubmission = async (req, res) => {
  const { userSelection, instruction, userSelectionIds } = req.body;
  const instructionValidation = await validation.findOne({ instruction });
  let userCorrectness = 0;
  if (userSelection.length === 4) {
    for (let i = 0; i < 4; i++) {
      if (
        userSelection[i] === instructionValidation.validation[i] &&
        userSelectionIds[i] !== userSelectionIds[i + 2]
      )
        userCorrectness++;
    }
    if (userCorrectness === 4)
      return res.json({ success: true, message: "Successful operation" });
  }
  res.json({ success: false, message: "failed operation" });
};

module.exports.Validate = validateUserSubmission;

const findInstructionIndex = instruction => {
  let instructionIndex;

  for (let i = 0; i < database.length; i++) {
    if (database[i].instruction === instruction) {
      instructionIndex = i;
      break;
    }
  }
  return instructionIndex;
};

const generateRandomImages = () => {
  const randomImages = [];
  const randomImagesCount = {
    "0": 0,
    "1": 0,
    "2": 0
  };

  for (let i = 0; i < 16; i++) {
    if (i >= 6) {
      const randomImagesCountValues = Object.values(randomImagesCount);
      let minimumValue = Math.min(...randomImagesCountValues);
      if (minimumValue < 2) {
        let minimumIndex = randomImagesCountValues.indexOf(minimumValue);
        randomImages.push(images[minimumIndex]);
        randomImagesCount[String(minimumIndex)]++;
      } else {
        let randomNumber = Math.floor(Math.random(i) * 3);
        randomImages.push(images[randomNumber]);
        randomImagesCount[String(randomNumber)]++;
      }
    } else {
      let randomNumber = Math.floor(Math.random(i) * 3);
      randomImages.push(images[randomNumber]);
      randomImagesCount[String(randomNumber)]++;
    }
  }

  return randomImages;
};
