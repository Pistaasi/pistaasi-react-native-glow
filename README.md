# pistaasi-react-native-glow
Quick npm package for a school project

Make sure to install react-spring first! 

Usage: 

```javascript
import glow from "@pistaasi/react-native-glow";
//ionicons
import { animated } from "react-spring";

const AnimatedIcon = animated(Ionicons); // check react-spring documentation

export default function GlowingIcon() {

    let glowSettings = glow(1, 20, "grey", "red"); 
    // starting size, end size, startingColor, endColor

    return (
      <View style={styles.container}>
              
            <AnimatedIcon name="heart" size={30} color="grey" style={glowSettings}/>
           
      </View>
    );
}
```
