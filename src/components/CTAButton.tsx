import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from 'react';

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "hero" | "academic";
  size?: "sm" | "default" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export const CTAButton = ({ 
  variant = "primary", 
  size = "default",
  children, 
  className = "",
  onClick,
  href,
  disabled = false,
  icon
}: CTAButtonProps) => {
  const baseStyles = "font-medium transition-all duration-200 focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-cobalt text-white hover:bg-cobalt-dark shadow-md hover:shadow-lg",
    secondary: "border-2 border-cobalt text-cobalt bg-transparent hover:bg-cobalt hover:text-white",
    hero: "bg-gradient-to-r from-cobalt to-cobalt-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    academic: "bg-academic-blue text-white hover:bg-academic-blue/90 shadow-sm"
  };

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const buttonElement = (
    <Button
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </Button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonElement}
      </a>
    );
  }

  return buttonElement;
};