import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BuskingCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle ><span className=" pb-1 border-b-2 border-primary w-full">What is Busking?</span></CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          The activity of playing music in the street or another public
          place for voluntary donations.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
