"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Createquestion } from "@/lib/actions/questions.action";
import { useRouter } from "next/navigation";

interface Props {
  mongoUserId: string;
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Question = ({ mongoUserId }: Props) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim()) {
      e.preventDefault(); // Prevent form submission
      setTags([...tags, e.currentTarget.value.trim()]);
      e.currentTarget.value = ""; // Clear the input field
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (tags.length === 0) {
      alert("Please add at least one tag.");
      return;
    }

    try {
      await Createquestion({
        title,
        content: editorContent,
        tags,
        author: mongoUserId,
        path: ""
      });
      router.push("/");
    } catch (error) {
      console.error("Question submission error:", error);
      alert("Failed to submit the question. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Ask a Question</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the question title"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Short Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly describe your question"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Detailed Content */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Content</label>
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            placeholder="Add detailed information about your question"
            className="bg-white rounded-lg border border-gray-300"
          />
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
          <input
            type="text"
            placeholder="Press Enter to add tags"
            onKeyDown={handleTagInput}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="ml-2 text-indigo-700 hover:text-indigo-900"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;
