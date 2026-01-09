import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function BrandButton({
  children,
  className,
  ...props
}: any) {
  return (
    <Button
      className={cn(
        `
        bg-primary 
        text-primary-foreground
        hover:opacity-90
        font-semibold
        transition
        `,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
