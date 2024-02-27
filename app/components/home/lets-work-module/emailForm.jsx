import React, {useState} from "react";
import Button from "../../ecyce/buttons";

const EmailForm = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = [
    "Workspace development",
    "Data analysis",
    "Google Sheets",
    "Webapps",
    "Software Development",
    "UX/UI Design",
    "Notion",
    "Add - Ons",
    "Integrations",
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="max-w-[650px]">
      <form className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col space-y-2 w-1/2">
            <label className="text-xl font-semibold">Name or Company</label>
            <input
              type="text"
              className="bg-transparent min-h-14 border border-sf-cream rounded-[20px] px-4"
            />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <label className="text-xl font-semibold">Email</label>
            <input
              type="text"
              className="bg-transparent min-h-14 border border-sf-cream rounded-[20px] px-4"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <label className="text-xl font-semibold">
            Brief description about your work
          </label>
          <span
            role="textbox"
            contentEditable
            className="text-base bg-transparent min-h-32 border border-sf-cream rounded-3xl placeholder:text-sf-cream/60 p-4 pb-16 resize-y"
          />
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <label className="text-xl font-semibold">
            I&apos;m interested in
          </label>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <div
                onClick={() => toggleTag(tag)}
                type="checkbox"
                className={`cursor-pointer transition-colors px-4 inline-flex bg-transparent min-h-14 border border-sf-cream rounded-[20px] items-center justify-center ${selectedTags.includes(tag) ? 'bg-[#fefce1] text-sf-dblue' : ''}`}
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <Button type="outline" text="Send!" className="max-w-44 mt-10" />
      </form>
    </div>
  );
};

export default EmailForm;
