import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGitbook, SiGithub } from "react-icons/si";
import Image from "next/image";
import SolIcon from "../../../assets/solIcon.png";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a
        href="https://twitter.com/ViralMindAI"
        target="_blank"
        className="pointer"
      >
        <FaXTwitter size={30} className="pointer" />
      </a>
      <a
        href="https://t.me/viralmind"
        target="_blank"
        className="pointer"
      >
        <FaTelegramPlane size={30} className="pointer" />
      </a>
      <a
        href="https://solscan.io/token/HW7D5MyYG4Dz2C98axfjVBeLWpsEnofrqy6ZUwqwpump"
        target="_blank"
        className="pointer imgIcon"
      >
        <Image
          src={SolIcon}
          alt="Solana"
          width={30}
          height={30}
          className="pointer"
        />
      </a>
      <a
        href="https://viralmind.gitbook.io/viralmind.ai"
        target="_blank"
        className="pointer"
      >
        <SiGitbook size={30} className="pointer" />
      </a>
      <a
        href="https://github.com/viralmind-ai/viralmind-agents"
        target="_blank"
        className="pointer"
      >
        <SiGithub size={30} className="pointer" />
      </a>
    </div>
  );
}
