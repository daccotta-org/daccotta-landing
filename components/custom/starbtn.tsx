import { RainbowButton } from "@/components/ui/rainbow-button";
import github from "../../assets/github-brands-solid.svg";

export function GitStarBtn() {
  return <RainbowButton> <img src={github.src} width={18} className="mr-2" alt="" />Star</RainbowButton>;
}
