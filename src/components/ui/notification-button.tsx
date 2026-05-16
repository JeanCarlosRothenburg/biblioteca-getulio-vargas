import { BellIcon } from "lucide-react";
import { Button } from "./button";
type NotificationButtonProps = {
    notifications?: number
}
export default function NotificationButton({notifications}: NotificationButtonProps) {
    return (
        <div className={`flex flex-col items-end ${notifications ? "mb-[0.2rem]" : ""}`}>
        {notifications && (
                <span className="flex items-center justify-center bg-red-500 size-[1.05rem] rounded-full text-[0.7rem] text-white font-bold mb-[-0.7rem] z-10">{notifications}</span>
            )}
            <Button variant="outline" className="border-primary py-[1.3rem] group">
                <BellIcon className="size-5 text-primary group-hover:text-black"/>
            </Button>
        </div>
    )
}