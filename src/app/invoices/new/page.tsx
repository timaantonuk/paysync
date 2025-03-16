import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

function Page({}) {
    return (
        <main className='flex flex-col justify-center h-full max-w-5xl mx-auto gap-6 my-12'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>
                    Create New Invoice
                </h1>
            </div>

            <form className='grid gap-4 max-w-xs'>
                <div>
                    <Label htmlFor='name' className='block font-semibold text-sm mb-2'>Billing Name</Label>
                    <Input name='name' id='name' type="text"/>
                </div>

                <div>
                    <Label htmlFor='email' className='block font-semibold text-sm mb-2'>Billing Email</Label>
                    <Input name='email' id='email' type="text"/>
                </div>

                <div>
                    <Label htmlFor='value' className='block font-semibold text-sm mb-2'>Value</Label>
                    <Input name='value' id='value' type="text"/>
                </div>

                <div>
                    <Label htmlFor='description' className='block font-semibold text-sm mb-2'>Description</Label>
                    <Textarea name='description' id='description' className='resize-none'/>
                </div>

                <div>
                    <Button className='w-full font-semibold'>Submit</Button>
                </div>

            </form>
        </main>
    )
}

export default Page;