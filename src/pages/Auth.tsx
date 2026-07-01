import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { AetherLogo } from "@/components/aether/Logo";

export default function AuthPage() {
  const navigate = useNavigate();
  const { session } = useAuth();
  const [mode, setMode] = useState<"sign_in" | "sign_up">("sign_in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (session) navigate("/", { replace: true });
  }, [session, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "sign_up") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        toast.success("Account created. Check your email if confirmation is required.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back.");
        navigate("/", { replace: true });
      }
    } catch (err: any) {
      toast.error(err?.message ?? "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground grid place-items-center px-6 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="flex justify-center mb-10">
          <AetherLogo />
        </Link>
        <div className="glass-strong rounded-3xl p-8 shadow-elevated">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-aether mb-3 text-center">
            {mode === "sign_in" ? "Welcome back" : "Join Aether"}
          </p>
          <h1 className="font-display text-4xl text-center leading-none mb-8">
            {mode === "sign_in" ? "Sign in" : "Create account"}
          </h1>
          <form onSubmit={submit} className="grid gap-4">
            {mode === "sign_up" && (
              <Field
                label="Full name"
                type="text"
                value={fullName}
                onChange={setFullName}
                required
              />
            )}
            <Field label="Email" type="email" value={email} onChange={setEmail} required />
            <Field
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              required
              minLength={6}
            />
            <button
              type="submit"
              disabled={busy}
              className="mt-2 rounded-full bg-platinum text-background py-3 text-[0.72rem] uppercase tracking-[0.28em] font-medium disabled:opacity-50"
            >
              {busy ? "Please wait…" : mode === "sign_in" ? "Sign in" : "Create account"}
            </button>
          </form>
          <button
            onClick={() => setMode(mode === "sign_in" ? "sign_up" : "sign_in")}
            className="mt-6 w-full text-center text-[0.7rem] uppercase tracking-[0.22em] text-platinum/60 hover:text-platinum"
          >
            {mode === "sign_in"
              ? "New to Aether? Create an account →"
              : "Already have an account? Sign in →"}
          </button>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  required,
  minLength,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] uppercase tracking-[0.24em] text-platinum/60 mb-2">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        minLength={minLength}
        className="w-full rounded-2xl glass px-4 py-3 text-sm text-platinum outline-none focus:ring-1 focus:ring-aether/60"
      />
    </label>
  );
}
