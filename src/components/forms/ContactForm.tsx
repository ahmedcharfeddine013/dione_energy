"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <Card>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4"></div>
        <div className="space-y-3 w-full">
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 justify-center w-full">
            <div className="grid gap-2">
              <Label htmlFor="subject">Name</Label>
              <Input id="subject" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Surname</Label>
              <Input id="subject" placeholder="" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Email</Label>
            <Input id="subject" placeholder="" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="I need help with..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Please include all information relevant to your issue."
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
