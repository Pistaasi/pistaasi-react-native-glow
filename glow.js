// @pistaasi/react-native-glow
import { useSpring, easings, animated, config} from "react-spring";
import { useContext, useEffect, useState} from "react";

module.exports = function glow(from, to, colorStart, colorEnd) {
    if (typeof from !== "number" || typeof to !== "number") {
        throw new TypeError("from and to need full numbers!");
    }
    if (typeof colorStart !== "string" || typeof colorEnd !== "string") {
       throw new TypeError("color is a string!");
    }
   
    // glow animation
    const [flip, set] = useState(false);

    const { textShadowColor, shadowOpacity, textShadowRadius, textShadowOffset } = useSpring({
      from: {
        textShadowColor: colorStart,
        shadowOpacity: 0.8,
        textShadowRadius: from,
        textShadowOffset:{width: 0,height: 1}
      },
      to: {
        textShadowColor: colorEnd,
        shadowOpacity: 0.8,
        textShadowRadius: to,
        textShadowOffset:{width: 0,height: 1}
      },
      config: {
        duration: 2000,
        easing: easings.easeInOutQuart,
      },
      delay: 50,
      reset: true,
      reverse: flip,
      onRest: () => set(!flip),
    })
    return { textShadowColor, shadowOpacity, textShadowRadius, textShadowOffset };
  };