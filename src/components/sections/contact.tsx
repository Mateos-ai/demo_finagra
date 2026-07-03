"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/section";
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

export function Contact({ showInterest = true }: { showInterest?: boolean }) {
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
          className="section-dark relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-20"
          data-reveal
        >
          {/* lime bloom in the corner */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--lime-400)" }}
            aria-hidden="true"
          />

          <p className="eyebrow mb-5 justify-center !text-lime-300">
            {contact.eyebrow}
          </p>
          <h2 className="text-4xl font-bold text-white md:text-[3.4rem]">
            {contact.title}{" "}
            <span className="accent-serif text-lime-300">
              {contact.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {contact.body}
          </p>

          {submitted ? (
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-6 py-4 text-lime-300">
              <CheckCircle2 className="size-5" />
              <span className="font-semibold">
                Thank you! We&apos;ll be in touch.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3"
            >
              {showInterest ? (
                <Select value={interest} onValueChange={setInterest} required>
                  <SelectTrigger
                    className="h-12 w-full rounded-full border-white/15 bg-white/10 px-5 text-white data-[placeholder]:text-white/50 [&_svg]:text-white/60"
                    aria-label="I'm interested in"
                  >
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
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  aria-label="Email address"
                  className="h-12 flex-1 rounded-full border-white/15 bg-white/10 px-5 text-white placeholder:text-white/50"
                />
                <Button type="submit" variant="glow" className="h-12 px-7">
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
