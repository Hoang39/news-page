import { Avatar } from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";

const Comments = ({ comments }) => {
  const [status, setStatus] = useState(false);

  return status ? (
    <>
      {comments?.map((value, index) => (
        <div
          key={index}
          className="flex px-3 py-2 gap-x-2 border-l border-gray-200 my-1"
          onClick={() => setStatus(!status)}
        >
          <Avatar src={value.user.avatar} size="sm" />
          <div className="w-[90%] space-y-1">
            <div className="flex justify-between items-center">
              <p className="text-xs font-medium">{value.user.name}</p>
              <p className="text-xs text-gray-500">
                {moment(value.createdAt).fromNow(false)}
              </p>
            </div>
            <p className="text-xs text-justify">{value.content}</p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <>
      <p
        className="text-sm text-gray-300 py-1 cursor-pointer"
        onClick={() => {
          if (comments.length) setStatus(!status);
        }}
      >
        {comments.length} {comments.length === 1 ? "reply" : "replies"}
      </p>
    </>
  );
};

export default Comments;
