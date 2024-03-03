import { Container } from "@/components/share";
import { RWLDummyData } from "@/data/HomeRWLData";
import React from "react";
import RWL_item from "./RWL_item";
import { motion } from "framer-motion";

function HomeRWL() {
  const { rwlData } = RWLDummyData;
  return (
    <section className="bg-bluePrimary py-16 w-full ">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-1 justify-center">
          {rwlData?.map((item: any, key: any) => (
            <RWL_item key={key} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HomeRWL;
