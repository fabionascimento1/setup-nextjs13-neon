import { H1HTML } from "@/html-components/H1";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <H1HTML text="bem vindo2 bem vindo2bem vindo2bem vindo2 bem vindo2 bem vindo2" />
        </div>
      </div>
    </div>
  );
}
