import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { Ellipsis } from "lucide-react";
import Comments from "../comments";
import moment from "moment";

const NewsItem = ({ item }) => {
  return (
    <div className="flex px-3 py-2 gap-x-2 border-b border-gray-200">
      <Avatar src={item.user.avatar} size="sm" />
      <div className="w-[90%]">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">{item.user.name}</p>

          <div className="flex items-center gap-x-2">
            <p className="text-xs text-gray-500">
              {moment(item.createdAt).fromNow(false)}
            </p>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  aria-label="options"
                >
                  <Ellipsis size={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="edit">Edit status</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete status
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <p className="text-sm text-justify">{item.content}</p>
        <Comments comments={item.comment} />
      </div>
    </div>
  );
};

export default NewsItem;
