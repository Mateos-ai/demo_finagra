"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contact } from "@/content/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a real endpoint (Formspree / Mailchimp / API route).
    setSubmitted(true);
  }

  return (
    <Section id="contact">
      <Container>
        <div
          className="bg-field-soft mx-auto max-w-4xl rounded-3xl border border-border px-6 py-14 text-center md:px-16 md:py-16"
          data-reveal
        >
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-[2.6rem]">
            {contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {contact.body}
          </p>

          {submitted ? (
            <div className="mt-9 inline-flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-800">
              <CheckCircle2 className="size-5" />
              <span className="font-semibold">
                Thank you! We&apos;ll be in touch.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3"
            >
              <Select value={interest} onValueChange={setInterest} required>
                <SelectTrigger className="h-11 w-full" aria-label="I'm interested in">
                  <SelectValue placeholder="I'm interested in..." />
                </SelectTrigger>
                <SelectContent>
                  {contact.interests.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-label="Email address"
                  className="h-11 flex-1"
                />
                <Button type="submit" className="h-11 rounded-xl px-6">
                  Send
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
