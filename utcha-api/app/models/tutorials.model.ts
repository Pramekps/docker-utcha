import mongoose from "mongoose";

const Tutorials = mongoose.model(
  "Tutorials",
  new mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  )
  // .method("toJSON", function () {
  //   const { __v, _id, ...object } = this.toObject();
  //   object.id = _id;
  //   return object;
  // })
);

export default Tutorials;
