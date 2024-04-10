import CardWrapper from "@/components/common/CardWrapper";
import { ScheduleSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { format } from "date-fns"
import { cn } from "@/lib/utils"


function CreateSessionForm() {
  const form = useForm({
    resolver: zodResolver(ScheduleSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      duration: "",
    },
  });
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <CardWrapper
      title="Create an appointment"
      label="Select a post and pick a time"
    >
      <Form {...form}>
        <form
          onSubmit={() => form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a PRFM Post Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        Balboa - Newport Beach
                      </SelectItem>
                      <SelectItem value="m@google.com">
                        Main Beach - Laguna Beach
                      </SelectItem>
                      <SelectItem value="m@support.com">
                        Pier - Huntington Beach
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This will be the exact adress of the actual post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
                        <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        15 minutes 
                      </SelectItem>
                      <SelectItem value="m@google.com">
                        30 minutes
                      </SelectItem>
                      <SelectItem value="m@support.com">
                        45 minutes
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    This will be the exact adress of the actual post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus

                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                        Select the date that you would like to perform
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default CreateSessionForm;
