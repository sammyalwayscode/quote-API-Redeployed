const quoteModel = require("../Model/Model");

const getQuote = async (req, res) => {
  try {
    const getFunc = await quoteModel.find();
    res.status(200).json({
      message: "quote Gotten Sucessfully",
      data: getFunc,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed to Get Quote",
      data: error.message,
    });
  }
};

const postQuote = async (req, res) => {
  try {
    const postFunc = await quoteModel.create({
      quote: req.body.quote,
      autor: req.body.autor,
      createdAt: Date.now(),
    });
    res.status(200).json({
      message: "Quote Posted Sucessfully",
      data: postFunc,
    });
  } catch (error) {
    res.status(404).json({
      message: "Unable to Post Quote",
      data: error.data,
    });
  }
};

const editQuote = async (req, res) => {
  try {
    const editFunc = await quoteModel.findByIdAndUpdate(
      req.params.id,
      {
        quote: req.body.quote,
        autor: req.body.autor,
        createdAt: Date.now(),
      },
      { new: true }
    );
    res.status(200).json({
      message: "Data Edited Sucessfully",
      data: editFunc,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed TO Edit Data",
      data: error.message,
    });
  }
};

const deleteQuote = async (req, res) => {
  try {
    const deleteFunc = await quoteModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Quote Deleted Sucessfully",
      data: deleteFunc,
    });
  } catch (error) {
    res.status(404).json({
      message: "Unable TO Delete Data",
      data: error.message,
    });
  }
};

const getOneQuote = async (req, res) => {
  try {
    const getOneFunc = await quoteModel.findById(req.params.id);
    res.status(200).json({
      message: `${req.params.id} Gotten Sucessfully`,
      data: getOneFunc,
    });
  } catch (error) {
    res.status(404).json({
      message: `Unable to get ${req.params.id}`,
      data: error.message,
    });
  }
};

module.exports = { getQuote, postQuote, editQuote, deleteQuote, getOneQuote };
