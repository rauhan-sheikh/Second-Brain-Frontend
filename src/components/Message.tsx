interface messageProps {
  text: string;
  type: "success" | "error" | null;
}

export function Message({ text, type }: messageProps) {
  if (!text || !type) return null;

  const styles = {
    success: "bg-green-100 text-green-800 border-green-200",
    error: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <div className={`border ${styles[type]} px-4 py-3 rounded mb-4`}>
      {text}
    </div>
  );
}
