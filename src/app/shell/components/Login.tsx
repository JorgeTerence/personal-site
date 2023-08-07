import { useState } from "react";
import Prompt from "./Prompt";
import Output from "./Output";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, toggleShowPassword] = useState(false);
  const [showSuccess, toggleShowSuccess] = useState(false);

  return (
    <section>
      <Output
        messages={[
          "This seems like your first login. Please, register your account:",
        ]}
      />
      <Prompt
        pos2="username:"
        value={username}
        handler={setUsername}
        onSubmit={() => toggleShowPassword(true)}
      />
      {showPassword && (
        <Prompt
          pos2="password:"
          value={password}
          handler={setPassword}
          onSubmit={() => {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            toggleShowSuccess(true);
          }}
        />
      )}
      {showSuccess && (
        <Output
          messages={[
            { content: "Congratulations!", level: "success" },
            "Restart the shell so changes take effect.",
          ]}
        />
      )}
    </section>
  );
}
