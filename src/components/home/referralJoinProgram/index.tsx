import React from "react";
import referralJoinProgram from "@/assets/referralJoinProgram.png";
import Image from "next/image";
import Link from "next/link";

function ReferralJoinProgram() {
  return (
    <div className="w-full">
      <Link href='#'>
        <Image
          src={referralJoinProgram}
          alt={"logo"}
          quality={100}
          // priority={true}
              loading="lazy"
              blurDataURL="true"
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
}

export default ReferralJoinProgram;
