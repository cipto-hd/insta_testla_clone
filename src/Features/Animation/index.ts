import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
  rollIn,
  zoomInUp,
  zoomInDown,
  bounceInLeft,
  bounceInRight,
  bounceInDown,
} from "react-animations";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "3s",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "3s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "3s",
  },
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: "3s",
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "3s",
  },
  rollIn: {
    animationName: rollIn,
    animationDuration: "3s",
  },
  zoomInUp: {
    animationName: zoomInUp,
    animationDuration: "3s",
  },
  zoomInDown: {
    animationName: zoomInDown,
    animationDuration: "3s",
  },
  bounceInLeft: {
    animationName: bounceInLeft,
    animationDuration: "3s",
  },
  bounceInRight: {
    animationName: bounceInRight,
    animationDuration: "3s",
  },
  bounceInDown: {
    animationName: bounceInDown,
    animationDuration: "3s",
  },
});

export { css, styles };
