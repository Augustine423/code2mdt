
import { useState, useCallback } from "react";

const ReportPopup = () => {
  const [activeId, setActiveId] = useState(null);

  const open = useCallback((id) => {
    setActiveId(prev => (prev === id ? null : id)); // toggle logic
  }, []);

  const close = useCallback(() => {
    setActiveId(null);
  }, []);

  const isOpen = useCallback((id) => activeId === id, [activeId]);

  return { open, close, isOpen };
};

export default ReportPopup;
