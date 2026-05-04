import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import api from "../config";
import { Message } from "../components/Message";

function Signin() {
  const navigate = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<{
    text: string;
    type: "success" | "error" | null;
  }>({
    text: "",
    type: null,
  });

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await api.post("/api/v1/auth/signin", {
        username,
        password,
      });

      setStatus({
        text: "Signin successful! Redirecting to dashboard...",
        type: "success",
      });
      localStorage.setItem("token", response.data.token);
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (error: any) {
      const responseData = error.response?.data;
      let errorMessage = "An unexpected error occurred.";

      if (responseData?.errors) {
        errorMessage = responseData.errors[0].message;
      } else if (responseData?.message) {
        errorMessage = responseData.message;
      }

      setStatus({
        text: `Signin failed: ${errorMessage}`,
        type: "error",
      });
      setTimeout(() => setStatus({ text: "", type: null }), 3000);
    }
  }

  return (
    // h-screen locks the height to the viewport; overflow-hidden prevents stray scrolls
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header - Stays at the top */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex items-center text-2xl font-semibold text-gray-800">
          <div className="w-10 pr-2">
            <Logo />
          </div>
          Second Brain
        </div>
        <Button
          variant="primary"
          text="Sign Up"
          onClick={() => navigate("/signup")}
        />
      </header>

      {/* Main Content Container - Fills remaining space */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <Message text={status.text} type={status.type} />
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Sign In
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form className="space-y-5">
              <div>
                <Input
                  label="Username"
                  reference={usernameRef}
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <Input
                  label="Password"
                  reference={passwordRef}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="pt-2">
                <Button
                  variant="primary"
                  text="Sign In"
                  onClick={handleSubmit}
                  fullWidth={true}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Signin;
