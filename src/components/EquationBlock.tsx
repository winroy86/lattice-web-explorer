import { useEffect, useRef } from 'react';

interface EquationBlockProps {
  latex: string;
  display?: boolean;
  className?: string;
  caption?: string;
}

declare global {
  interface Window {
    MathJax: {
      typesetPromise: (elements?: HTMLElement[]) => Promise<void>;
      startup: {
        promise: Promise<void>;
      };
    };
  }
}

export const EquationBlock = ({ 
  latex, 
  display = true, 
  className = "", 
  caption 
}: EquationBlockProps) => {
  const mathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typesetMath = async () => {
      if (window.MathJax && mathRef.current) {
        try {
          await window.MathJax.startup.promise;
          await window.MathJax.typesetPromise([mathRef.current]);
        } catch (error) {
          console.warn('MathJax typesetting failed:', error);
        }
      }
    };

    // Small delay to ensure MathJax is ready
    const timer = setTimeout(typesetMath, 100);
    return () => clearTimeout(timer);
  }, [latex]);

  const mathContent = display ? `\\[${latex}\\]` : `\\(${latex}\\)`;

  return (
    <div className={`equation-block ${className}`}>
      <div 
        ref={mathRef}
        className={`text-center ${display ? 'text-lg' : 'inline'}`}
        dangerouslySetInnerHTML={{ __html: mathContent }}
      />
      {caption && (
        <p className="text-sm text-muted-foreground mt-2 text-center font-inter">
          {caption}
        </p>
      )}
    </div>
  );
};