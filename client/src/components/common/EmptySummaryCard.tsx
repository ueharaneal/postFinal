import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";
function EmptySummaryCard() {
  return (
    <Card className="px-24 py-4 rounded-2xl flex flex-col items-start justify-center gap-y-2">
      <CardHeader className="flex flex-row items-center ">
        <CardTitle className="text-2xl">No Upcoming Sessions...</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-x-20">
        <Button>
          <Link to="/dashboard/schedulesession">
            Click here to schedule a session
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default EmptySummaryCard;
