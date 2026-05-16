import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import NotificationButton from "@/components/ui/notification-button";
import { ChevronDownIcon } from "lucide-react";

export default function HeaderActions() {
    return (
        <div className="flex items-center gap-3">
            <NotificationButton notifications={10}/>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="h-11 border-primary text-primary">
                    <Button variant="outline">
                        <Avatar className="border-primary border-2">
                            <AvatarImage src="https://images.pexels.com/photos/14661/pexels-photo-14661.jpeg" alt="@shadcn" className="grayscale"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">
                            João
                        </span>
                        <ChevronDownIcon className="size-4"/>
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </div>
    )
}