import CardWrapper from "@/components/common/CardWrapper"
import { ScheduleSchema } from "@/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from 'react-hook-form'
function CreateSessionForm() {
    const form = useForm({
        resolver: zodResolver(ScheduleSchema),
        defaultValues:{
            name:"",
            date:"",
            time:"",
            duration:"",
        }
    })
    const onSubmit = () =>{
        console.log("submitted")
    }
  return (
    <CardWrapper title="Create an appointment" label="Select a post and pick a time">
        <div>Hello</div>
    </CardWrapper>
  )
}

export default CreateSessionForm
