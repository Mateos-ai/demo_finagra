"use client";

import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ApplyForm({ roleTitle }: { roleTitle: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a real ATS / endpoint. The resume is not uploaded anywhere yet.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-green-900">
          Thank you for applying!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-green-800/80">
          We received your application for {roleTitle}. Our team reads every
          application and will get back to you within two weeks.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-background p-7 shadow-sm md:p-9"
    >
      <h3 className="text-xl font-bold text-foreground">
        Apply for this role
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Takes less than two minutes. We reply to everyone.
      </p>

      <div className="mt-7 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            required
            placeholder="Full name"
            autoComplete="name"
            aria-label="Full name"
            className="h-11"
          />
          <Input
            type="email"
            required
            placeholder="your@email.com"
            autoComplete="email"
            aria-label="Email address"
            className="h-11"
          />
        </div>

        {/* Resume upload */}
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          aria-label="Upload resume"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        {fileName ? (
          <div className="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-4 py-3">
            <span className="flex min-w-0 items-center gap-2.5 text-sm font-medium text-green-800">
              <FileText className="size-4 shrink-0" />
              <span className="truncate">{fileName}</span>
            </span>
            <button
              type="button"
              aria-label="Remove file"
              className="text-green-700 transition-colors hover:text-green-900"
              onClick={() => {
                setFileName(null);
                if (fileRef.current) fileRef.current.value = "";
              }}
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex w-full flex-col items-center gap-1.5 rounded-xl border border-dashed border-border px-4 py-7 text-muted-foreground transition-colors hover:border-green-300 hover:bg-green-50/50 hover:text-green-800"
          >
            <Upload className="size-5" />
            <span className="text-sm font-medium">Upload your resume</span>
            <span className="text-xs">PDF or Word, up to 10 MB</span>
          </button>
        )}

        <Button type="submit" className="btn-glow h-11 w-full rounded-xl text-[0.95rem]">
          Submit application
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </form>
  );
}
