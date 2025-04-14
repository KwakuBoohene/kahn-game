import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/shared/PageHeader";
import { Button } from "@chakra-ui/react";

export default function Play() {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <PageHeader />
        
        <div className="flex flex-col items-center mt-8 container mx-auto py-8 max-w-lg">
          <h1 className="text-2xl font-bold mb-2">LOCAL PLAY</h1>
          <p className="text-gray-600 mb-8">Select which mode you would like to play</p>

          <div className="w-full  space-y-4">
            <Button
              onClick={() => navigate("/team-mode")}
              className="w-full"
              height="80px"
              backgroundColor="#F4B63F"
              _hover={{ backgroundColor: "#E5A730" }}
              borderRadius="xl"
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">TEAM MODE</span>
                <span className="text-sm">Play in groups of 2 or more</span>
              </div>
            </Button>

            <Button
              onClick={() => navigate("/one-vs-all")}
              className="w-full"
              height="80px"
              backgroundColor="#F4B63F"
              _hover={{ backgroundColor: "#E5A730" }}
              borderRadius="xl"
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">ONE VS ALL MODE</span>
                <span className="text-sm">Play against each other</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      </>
  );
}
