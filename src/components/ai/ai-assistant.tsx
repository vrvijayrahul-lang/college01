"use client";

import * as React from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Msg {
  role: "user" | "bot";
  text: string;
}

const REPLIES = [
  "You can apply from the Admissions page. The form takes about 5 minutes.",
  "Fees can be paid online from the student portal under Fee Payments.",
  "Our top recruiters include Google, Microsoft, Amazon, and 320+ more.",
  "The library catalog is available in the student portal under Library.",
  "For scholarships, check the Fee Structure page and the admissions office.",
];

export function AIAssistant() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [msgs, setMsgs] = React.useState<Msg[]>([
    { role: "bot", text: "Hi! I'm the campus AI assistant. Ask me about admissions, fees, placements, or courses." },
  ]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", text: input.trim() };
    const reply: Msg = {
      role: "bot",
      text: REPLIES[Math.floor(Math.random() * REPLIES.length)],
    };
    setMsgs((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => setMsgs((m) => [...m, reply]), 600);
  };

  return (
    <>
      <Button
        onClick={() => setOpen((v) => !v)}
        size="icon"
        variant="gradient"
        className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full shadow-glow"
        aria-label="Open AI assistant"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {open && (
        <div className="fixed bottom-24 right-5 z-40 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl glass shadow-soft">
          <div className="flex items-center justify-between border-b bg-gradient-to-r from-primary to-indigo p-4 text-white">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-white/20 text-white">AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Campus Assistant</p>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground"
                      : "max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-sm"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t p-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything…"
            />
            <Button type="submit" size="icon" variant="gradient" aria-label="Send">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
