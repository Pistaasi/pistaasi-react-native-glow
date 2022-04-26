# pistaasi-react-native-glow
Quick npm package for a school project

Simple glow effect for icons and text using react-spring

Make sure to install react-spring first! 

Install: 

npm i @pistaasi/react-native-glow

Usage: 

```javascript
import glow from "@pistaasi/react-native-glow";
//ionicons
import { animated } from "react-spring";

const AnimatedIcon = animated(Ionicons); // check react-spring documentation

export default function GlowingIcon() {

    let glowSettings = glow(1, 20, "grey", "grey", false); 
    //Icon with grey glow
    //You will need to set color on the icon, as this is only glow color
    let glowSettingsChange = glow(1, 20, "grey", "red", true);
    //Icon that changes color with glow

    // starting size, end size, startingColor, endColor, changeIconColorWithGlow

    return (
      <View>
              
            <AnimatedIcon name="heart" size={30} color="grey" style={glowSettings}/>

             <AnimatedIcon name="heart" size={30} style={glowSettingsChange}/>
           
      </View>
    );
}
```
