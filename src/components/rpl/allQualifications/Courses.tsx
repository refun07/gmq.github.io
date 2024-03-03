import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import QualificationItemResult from "./sub/QualificationItemResult";
import { motion } from "framer-motion";
import { contactFormOfHome } from "@/data/ShareData";

function Courses({ data = [], class_name }: any) {
  return (
    <section className={`py-16 w-full ${class_name}`}>
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:px-5">
              <QualificationItemResult
                allRPL_QualificationItems={data}
                class_nameOfBtn="sm:col-span-2 col-span-1 "
              />
            </div>
          </div>
          <div className="form p-3 h-full flex justify-start min-h-[500px mt-2]">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={contactFormOfHome}
              class_name="min-h-[594px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Courses;
