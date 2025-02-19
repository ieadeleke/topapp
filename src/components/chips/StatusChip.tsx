import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

type StatusChipContainerProps = HTMLAttributes<HTMLDivElement>
type StatusChipLabelProps = HTMLAttributes<HTMLParagraphElement>

const Container = ({ className, ...props }: StatusChipContainerProps) => {
    return <div className={cn("bg-yellow-100 px-4 py-1 rounded-md", className)} {...props} />
}

const Label = ({ className, ...props }: StatusChipLabelProps) => {
    return <p className={cn("text-white text-sm font-medium", className)} {...props} />
}

export const StatusChip = {
    Container,
    Label
}