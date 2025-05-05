import { useAppContext } from "../context/AppContext";
import { useMemo } from "react";

const paragraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Suspendisse vitae massa ut sapien bibendum feugiat.",
  "Fusce non libero et justo viverra congue.",
  "Pellentesque habitant morbi tristique senectus et netus.",
  "Donec varius lacus in sapien dapibus, vel lacinia risus viverra.",
];

const ContentArea = () => {
  const { page, search } = useAppContext();
  const highlightedText = (text) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
  };

  const filtered = useMemo(() => {
    if (!search) return paragraphs;
    return paragraphs.filter((p) =>
      p.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="content">
      <h2>{page}</h2>
      {filtered.length > 0 ? (
        filtered.map((para, idx) => <p key={idx}>{highlightedText(para)}</p>)
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
};

export default ContentArea;
