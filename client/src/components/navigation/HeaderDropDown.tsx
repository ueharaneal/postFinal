import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { Link } from "react-router-dom";
function HeaderDropDown({ signUserOut }) {
  const { toast } = useToast();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-accent p-4 rounded-md ">
        <User size={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <button
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              });
            }}
          >
            My Account
          </button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/dashboard/profile">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/dashboard/overview">Upcoming Sessions</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/dashboard/schedulesession">Schedule Sessions</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <Button size="sm" variant="destructive" onClick={() => signUserOut()}>
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderDropDown;
