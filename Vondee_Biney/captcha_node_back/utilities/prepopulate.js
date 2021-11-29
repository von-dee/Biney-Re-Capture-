const validation = require("../models/validations");

const populateDb = async (req, res) => {
  const seed = [
    {
      instruction: "swap two reds with two blues",
      validation: [
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg"
      ]
    },
    {
      instruction: "swap two blues with two reds",
      validation: [
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg"
      ]
    },
    {
      instruction: "swap two reds with two greens",
      validation: [
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg"
      ]
    },
    {
      instruction: "swap two greens with two reds",
      validation: [
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/1_qeyfu4.jpg"
      ]
    },
    {
      instruction: "swap two greens with two blues",
      validation: [
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg"
      ]
    },
    {
      instruction: "swap two blues with two greens",
      validation: [
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/2.jpg_spyr2a.jpg",
        "https://res.cloudinary.com/devlesscloud/image/upload/v1554849953/3_dl88uz.jpg"
      ]
    }
  ];

  validation
    .insertMany(seed)
    .then(docs => {
      console.log(docs);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = populateDb;
