import { useEmails } from "@/lib/hooks/use-email";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Button } from "./ui/button";
import { CopilotTextarea } from "@copilotkit/react-textarea";

export function Reply() {
  const { sendEmail, emails } = useEmails();
  const [input, setInput] = useState("");

  const handleReply = () => {
    console.log(input);
    sendEmail({
      body: input,
    });
    setInput("");
  };

  return (
    <div className="mt-4 pt-4 space-y-2 bg-background p-4 rounded-md border">
      <CopilotTextarea
        className="min-h-40 border h-40 p-2 overflow-hidden"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your reply..."
        autosuggestionsConfig={{
          textareaPurpose: `Asisst me in replying to this email thread. Here is the full history: ${JSON.stringify(emails, null, 2)}`,
          chatApiConfigs: {}
        }}
      />
      <Button disabled={!input} onClick={handleReply}>
        Reply
      </Button>
    </div>
  );
}