import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const assignees = [
  { name: "Unassigned", value: null },
  {
    name: "Wade Cooper",
    value: "wade-cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
  // More items...
];
const labels = [
  { name: "Unlabelled", value: null },
  { name: "Engineering", value: "engineering" }
  // More items...
];
const dueDates = [
  { name: "No due date", value: null },
  { name: "Today", value: "today" }
  // More items...
];

const PostPublishComponent = ({ publishPost }: any) => {
  const [assigned, setAssigned] = useState(assignees[0]);
  const [labelled, setLabelled] = useState(labels[0]);
  const [dated, setDated] = useState(dueDates[0]);
  const [titleInput, setTitleInput] = useState();
  const [descriptionInput, setDescriptionInput] = useState();

  const handlePublishPost = async (e) => {
    e.preventDefault();
    const data = {
      title: titleInput,
      content: descriptionInput,
      plainText: descriptionInput
    };
    await publishPost(data);
  };

  return (
    <form action="#" className="relative">
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={titleInput}
          onChange={(e: any) => setTitleInput(e.target.value)}
          id="title"
          className="block w-full border-0 pt-2.5 text-base font-normal placeholder:text-gray-400 focus:ring-0"
          placeholder="Post Title"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          value={descriptionInput}
          onChange={(e: any) => setDescriptionInput(e.target.value)}
          name="description"
          id="description"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Whats happening?"
          defaultValue={""}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex"></div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              onClick={handlePublishPost}
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PostPublishComponent;
