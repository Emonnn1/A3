import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useState } from 'react';

const Main = () => {
  const [main, setmain] = useState(false);
  const [flight, setflight] = useState(false);
  const [counter, setcounter] = useState(false);
  const [back, setBack] = useState(false);

  const btm = () => {
    main ? setmain(false) : setmain(true);
    flight ? setflight(false) : setflight(false);
    counter ? setcounter(false) : setcounter(false);
    back ? setBack(false) : setBack(false);
  };
  const flashflight = () => {
    flight ? setflight(false) : setflight(true);
    counter ? setcounter(false) : setcounter(false);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };
  const numbercount = () => {
    flight ? setflight(false) : setflight(false);
    counter ? setcounter(false) : setcounter(true);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button title="FLASHLIGHT" disabled={main} onPress={flashflight} />
        <Button title="COUNTER" disabled={main} onPress={numbercount} />
      </View>
      <View style={styles.body}>
        {flight && <Flashlight />}

        {counter && <Counter />}
      </View>
      <View style={styles.backtn}>
        {back && <Button title="BACK" onPress={btm} />}
      </View>
    </View>
  );
};

const Flashlight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("ON");

  const timg = () => {
    image ? setimage(false) : setimage(true);
    if (text === 'ON') {
      setText('OFF');
    } else {
      setText('ON');
    }
  };

  return (
    <View>
      {image &&  <Image
            source={require("./Images/flashlight off_icon - Copy.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" , marginVertical: 20}}
          />
          }
        {!image &&  <Image
            source={require("./Images/flashlight on_icon - Copy.png")}
            style={{ width: 250, height: 250, resizeMode: "stretch" ,  marginVertical: 20}}
          />
          }
     <Button title= {text} color='green' onPress={timg} />
    </View>
  );
};

    const Counter = () => {
    const [count, setCount] = useState(0);
  
  
    return (
      <View style={styles.main}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.btn}>
          <Button
            title="-1"
            color='green'
            onPress={() => {
              setCount(count - 1);
            }}
          />
          <Button
            title="+1"
            color='green'
            onPress={() => {
              setCount(count + 1);
            }}
          />
        </View>
      </View>
    );
  };
  export default function App() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    head: {
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      paddingVertical: 20,
    },
    heads: {
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    },
    count: {
      fontSize: 200,
    },
    main: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: 400,
    },
    btn: {
      flexDirection: "row",
      gap: 20,
    },
    backtn: {
      width: 100,
      paddingVertical: 20
    },
  });