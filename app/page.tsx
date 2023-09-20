import Slider from "@/components/Slider/Slider";

export default function Home() {
    return (
        <div className="h-screen w-screen flex items-center justify-center border border-red-500">
            <div className="bg-slate-200 max-w-full p-10">
                <Slider />
            </div>
        </div>
    );
}
