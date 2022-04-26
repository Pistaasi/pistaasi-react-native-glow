// @pistaasi/react-native-glow
import { useSpring, easings} from "react-spring";
import { useState} from "react";

module.exports = function glow(from, to, colorStart, colorEnd, changeColor) {
    const [flip, set] = useState(false);

    if (typeof from !== "number" || typeof to !== "number") {
        throw new TypeError("from and to need full numbers!");
    }
    if (typeof colorStart !== "string" || typeof colorEnd !== "string") {
       throw new TypeError("color is a string!");
    }
    if (typeof changeColor !== "boolean") {
      throw new TypeError("changeColor is a boolean!");
   }
    if (changeColor) {

      const { color, textShadowColor, shadowOpacity, textShadowRadius, textShadowOffset } = useSpring({
        from: {
          color: colorStart,
          textShadowColor: colorStart,
          shadowOpacity: 0.8,
          textShadowRadius: from,
          textShadowOffset:{width: 0,height: 1}
        },
        to: {
          color: colorEnd,
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
      return { color, textShadowColor, shadowOpacity, textShadowRadius, textShadowOffset };
      
    } else {

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

    }
   
  };