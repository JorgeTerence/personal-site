interface Message {
  content: string;
  level: "common" | "warning" | "error" | "success";
}

interface Props {
  messages: Array<String|Message>;
}

export default function Output({ messages }: Props) {
  const levelClasses = {
    common: "text-white",
    warning: "text-mustard-with-mayo",
    error: "text-rosy-bloom",
    success: "text-avocado-guaca"
  }
  return (
    <section>
      <p>
        {messages.map((msg) => 
          'level' in msg ? (
            <span className={levelClasses[msg.level]}>{msg.content} </span>
          ) : (
            <span>{msg.toString()}</span>
          )
        )}
      </p>
    </section>
  );
}
