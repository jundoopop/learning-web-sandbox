import Image from "next/image";
import HorizontalMusicList from "./Insight/show-music";
import { Windmill } from "@windmill/react-ui";

export default function Home() {
  return (
    <div>
      <Windmill>
        <div className="mt-6 ml-3 grid grid-cols-4">
          <header className="bg-gray-100">
            <h1 className="text-4xl font-bold">인사이트 헤더</h1>
          </header>
          <main className="col-span-3">
            <h1 className="text-2xl font-semibold">컨텐츠</h1>
            <HorizontalMusicList />
          </main>
        </div>
      </Windmill>
    </div>
  );
}
