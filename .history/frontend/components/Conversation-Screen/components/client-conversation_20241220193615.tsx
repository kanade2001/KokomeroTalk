export const ClientConversation: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="w-full flex justify-end">
      <div
        className="max-w-4xl border-4 border-green-400 rounded-2xl p-4 bg-blue-100 text-lg lg:text-xl break-words rounded-br-none"
        style={{ wordBreak: "break-word" }}
      >
        {text}
      </div>
    </div>
  );
};
