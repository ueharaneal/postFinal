import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface CardWrapperProps{
    title: string,
    label: string,
    children: React.ReactNode
}
function CardWrapper({title, label, children}: CardWrapperProps) {
  return (
    <Card className="md:w-1/2 shadow-md">
        <CardHeader>
            <div className="w-full flex flex-col gap-y-4 items-center text-center justify-center">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-muted-foreground text-sm">{label}</p>
            </div>
        </CardHeader>
      <CardContent>
            {children}
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export default CardWrapper
