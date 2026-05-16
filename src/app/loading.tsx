import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="flex items-center justify-between px-7 py-3 w-full h-[5.8rem] bg-white rounded-[0]">
                <div className="flex items-center gap-2">
                    <Skeleton className="size-14 bg-neutral-300 rounded-full"/>
                    <div className="flex flex-col gap-2">
                    <Skeleton className="w-62 h-3 bg-neutral-300"/>
                    <Skeleton className="w-90 h-6 bg-neutral-300"/>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Skeleton className="w-20 h-7 bg-neutral-300"/>
                    <Skeleton className="w-20 h-7 bg-neutral-300"/>
                    <Skeleton className="w-20 h-7 bg-neutral-300"/>
                </div>
                <div className="flex items-center gap-2">
                    <Skeleton className="size-10 bg-neutral-300 rounded-full"/>
                    <Skeleton className="w-25 h-10 rounded-full bg-neutral-300"/>
                </div>
            </div>
            <div className="px-20 py-25 flex justify-between items-center">
                <div className="w-[40%]">
                    <div className="mb-5">
                        <Skeleton className="bg-neutral-300 w-130 h-12 mb-2"/>
                        <Skeleton className="bg-neutral-300 w-100 h-12"/>
                    </div>
                    <div className="mb-6">
                        <Skeleton className="bg-neutral-300 w-120 h-6 mb-2"/>
                        <Skeleton className="bg-neutral-300 w-100 h-6"/>
                    </div>
                    <Skeleton className="bg-neutral-300 w-100 h-8"/>
                </div>
                <div className="flex items-end">
                    <Skeleton className="bg-neutral-300 w-30 h-50 mb-4 rounded-r-none"/>
                    <Skeleton className="bg-neutral-300 w-50 h-70 rounded-xl"/>
                    <Skeleton className="bg-neutral-300 w-30 h-50 rounded-xl mb-4 rounded-l-none"/>
                </div>
            </div>
        </div>
    )
}