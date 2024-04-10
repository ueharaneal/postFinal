import React from "react";
import { useDispatch } from "react-redux";
import { UserState } from "@/store/reducers/users";
import { Link } from "react-router-dom";
import { AppDispatch } from "@/store";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@ui/navigation-menu";

import HeaderDropDown from "./HeaderDropDown";
import { ModeToggle } from "../theme/mode-toggle";
import { signOut } from "@/store/actions/users";
import { Button } from "../ui/button";
 export function AuthenticatedMenu({ users }: { users: UserState }) {
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  const signUserOut: VoidFunction = () => {
    dispatch(signOut() as any).then(() => navigate("/"));
  };

  return (
    <div className="">
      <NavigationMenu orientation="vertical" className="">
        <NavigationMenuList className="gap-x-3">
          <NavigationMenuItem>
            <Link to="/about">How it Works</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button>
            <Link to="/Dashboard/overview">Dashboard</Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
          </NavigationMenuItem>
          {users.auth && (
            <NavigationMenuItem>
              <HeaderDropDown signUserOut={signUserOut} />
            </NavigationMenuItem>
          )}
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  );
}

export default AuthenticatedMenu;
