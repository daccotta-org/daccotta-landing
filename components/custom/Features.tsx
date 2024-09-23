import BlurIn from "../magicui/blur-in";
import { FeaturesBento } from "./FeaturesBento";

export function Features() {
  return (
    <div className="text-gray-100 px-4 py-8 mx-8 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]" id="features">
      <h2 className="text-center text-5xl font-bold text-purple-300 mb-8">
        <BlurIn word="Features" />
      </h2>

      <FeaturesBento />
    </div>
  );
}
