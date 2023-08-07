import { Dispatch, SetStateAction } from "react";

interface props {
  pos1?: string;
  pos2?: string;
  value?: string;
  handler?: Dispatch<SetStateAction<string>>;
  onSubmit?: () => void;
  warning?: string;
  test?: () => boolean;
  highlighter?: () => boolean;
}

export default function Prompt({
  pos1,
  pos2,
  value,
  handler,
  onSubmit,
  warning,
  test,
  highlighter
}: props) {
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.();
        }}
      >
        <label htmlFor="txt-prompt">
          <span className="text-mustard-with-mayo">{pos1}</span>{" "}
          <span className="text-rosy-bloom">{pos2}</span>{" "}
        </label>
        <input
          type="text"
          id="txt-prompt"
          className={`bg-transparent border-0 focus:ring-0 outline-none ${
            highlighter?.() && "text-avocado-guaca"
          }`}
          value={value}
          onChange={(e) => handler?.(e.target.value)}
          autoFocus
        />
        <span>{warning}</span>
      </form>
    </section>
  );
}
