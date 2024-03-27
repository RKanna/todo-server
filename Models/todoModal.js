import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      minLength: [2, "Title must be of atleast 5 characters"],
    },
    status: {
      type: String,
      trim: true,
      required: true,
      minLength: [2, "Content must be of atleast 5 characters"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

TodoSchema.virtual("shortDescription").get(function () {
  return this.content.slice(0, 200) + "...";
});

const TodoTestModal = mongoose.model("todos", TodoSchema);

export default TodoTestModal;
