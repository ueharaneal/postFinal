import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";

function SessionSummaryCard() {
  return (
    <Card className="pl-12 pr-24 py-4 rounded-2xl flex flex-col items-start justify-start">
      <CardHeader className="flex flex-row items-center ">
        <CardTitle className="text-2xl">Balboa Fun Zone</CardTitle>
        <CardDescription className="text-left ml-2">
          -Newport Beach, CA
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-row gap-x-20">
        <div className="flex flex-col">
          <p>Feb,30 2024</p>
          <CardDescription>10:00 P.M.</CardDescription>
        </div>
        <Button>View Details</Button>
      </CardContent>
    </Card>
  );
}

export default SessionSummaryCard;
