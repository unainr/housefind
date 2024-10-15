'use client';

import React, { useRef } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { schedule } from '@/actions/owner';
import { toast } from "sonner";
import { getSession } from 'next-auth/react';


const OwnerForm = () => {
    const formRef = useRef<HTMLFormElement>(null); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const session = await getSession();
    if (!session) {
        toast.error("Please log in to submit the form");
        return; 
    }
    const formData = new FormData(formRef.current!);
    const toastid = toast.loading("Submitting in");
    try {
        const response = await schedule(formData);
        if (response.success) {
            toast.success(response.message, { id: toastid }); 
            formRef.current?.reset(); 
        } else {
           
            toast.error(response.message, { id: toastid }); 
        }
   
    } catch (error:any) {
        const errorMessage = error.cause || "Failed to submit the form. Please try again.";
        toast.error("Something went wrong. Please try again.", { id: toastid });
    }
   
   
  };

  return (
    <form className="space-y-4" ref={formRef} onSubmit={handleSubmit}>
    <div>
      <Label htmlFor="name" className="block text-sm font-medium">Full Name</Label>
      <Input
        type="text"
        id="name"
      name='fullname'
        placeholder="Enter your full name"
      />
    </div>
    <div>
      <Label htmlFor="email" className="block text-sm font-medium">Email</Label>
      <Input
        type="email"
        id="email"
      name='email'
        placeholder="Enter your email"
      />
    </div>
    <div>
      <Label htmlFor="phone" className="block text-sm font-medium">Phone</Label>
      <Input
        type="tel"
        id="phone"
      name='phone'
        placeholder="Enter your phone number"
      />
    </div>
    <div>
      <Label htmlFor="date" className="block text-sm font-medium">Preferred Date</Label>
      <Input
        type="date"
        id="date"
      name='date'
      />
    </div>
    <Button
      type="submit"
     
    >
      Schedule Tour
    </Button>
  </form>
  )
}

export default OwnerForm