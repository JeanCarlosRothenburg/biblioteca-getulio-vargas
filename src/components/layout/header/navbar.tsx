import { BookIcon, HomeIcon, LandmarkIcon } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../../ui/navigation-menu";
import Link from "next/link";

export default function Nav() {
    const menuItems = [
        {
            name: "Home",
            href: "/",
            icon: HomeIcon
        },
        {
            name: "Acervo",
            href: "/acervo",
            icon: BookIcon
        },
        {
            name: "Institucional",
            href: "/institucional",
            icon: LandmarkIcon
        }
    ]

    return (
        <nav>
            <NavigationMenu>
                <NavigationMenuList>
                    {menuItems.map((menuItem, index) => {
                        const Icon = menuItem.icon
                        
                        return (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink
                                    asChild
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Link href={menuItem.href} className="text-[1rem]">
                                        <Icon className="size-4"/>
                                        <span>{menuItem.name}</span>
                                    </Link>    
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}