import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import notificationMessage from "../data/notficationMessage";

const NotificationBanner: React.FC = () => {
  return (
    <div className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-4 py-3 rounded-lg flex items-center justify-between">
      {/* Left: Icon + message */}
      <div className="flex items-center space-x-2">
        <span className="font-medium">{notificationMessage}</span>
      </div>
      <a
        href="https://aaai.org/about-aaai/aaai-awards/aaai-25-paper-awards/" // replace with your link
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-blue-600 hover:bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center transition"
        title="Learn more"
      >
        <ArrowRightIcon className="w-3 h-3" />
      </a>
    </div>
  );
};

export default NotificationBanner;
