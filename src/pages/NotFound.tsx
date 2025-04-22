import { useNavigate } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <PageHeader />
      
      <div className="flex flex-col items-center justify-center mt-8 container mx-auto py-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-black">404</h1>
        <h2 className="text-2xl font-bold mb-2 text-black">PAGE NOT FOUND</h2>
        <p className="text-gray-600 mb-8 text-center">
          Oops! The page you're looking for doesn't exist.
        </p>

        <div className="mt-12 w-full">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-kahn-orange-dark hover:bg-kahn-orange-light text-white font-bold py-4 rounded-full transition-colors"
          >
            <h1 className="text-2xl font-bold">GO BACK HOME</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
