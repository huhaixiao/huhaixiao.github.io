import React from "react";
import { IndexBar, List } from "antd-mobile";
// import { lorem } from "demos";

const getRandomList = (min: number, max: number): string[] => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill("");
};
