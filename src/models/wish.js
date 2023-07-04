import mongoose from "mongoose";

const wishSchema = new mongoose.Schema(
    {
      heading: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    { collection: 'Birthday_Wishes' } // Specify the collection name here
  );

const Wish = mongoose.models.Wish || mongoose.model('Wish', wishSchema)

export default  Wish;